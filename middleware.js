// middleware.js
// İki farklı işi yapıyor:
// 1) /api/* maliyetli route'larına IP başına günlük limit koyuyor
// 2) "/" adresine gelen ziyaretçinin tarayıcı diline göre otomatik
//    olarak Türkçe ("/") veya İngilizce ("/en") sürüme yönlendiriyor,
//    seçimi bir çerezle hatırlıyor.

import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(50, "1 d"),
  prefix: "wrompt-ratelimit",
});

const COOKIE_NAME = "wrompt_lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 yıl

export async function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // ---------- Manuel dil değiştirme linki (?lang=tr / ?lang=en) ----------
  const langParam = searchParams.get("lang");
  if (langParam === "tr" || langParam === "en") {
    const url = request.nextUrl.clone();
    url.searchParams.delete("lang");
    url.pathname = langParam === "en" ? "/en" : "/";
    const res = NextResponse.redirect(url);
    res.cookies.set(COOKIE_NAME, langParam, {
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });
    return res;
  }

  // ---------- Ana sayfa: tarayıcı diline göre otomatik yönlendirme ----------
  if (pathname === "/") {
    const cookieLang = request.cookies.get(COOKIE_NAME)?.value;

    if (cookieLang === "en") {
      return NextResponse.redirect(new URL("/en", request.url));
    }

    if (!cookieLang) {
      const acceptLanguage = request.headers.get("accept-language") || "";
      const prefersTurkish = acceptLanguage.toLowerCase().includes("tr");

      if (!prefersTurkish) {
        const res = NextResponse.redirect(new URL("/en", request.url));
        res.cookies.set(COOKIE_NAME, "en", {
          maxAge: COOKIE_MAX_AGE,
          path: "/",
        });
        return res;
      }

      const res = NextResponse.next();
      res.cookies.set(COOKIE_NAME, "tr", {
        maxAge: COOKIE_MAX_AGE,
        path: "/",
      });
      return res;
    }

    return NextResponse.next();
  }

  // ---------- /en sayfası: tercihi çerezde hatırla ----------
  if (pathname === "/en") {
    const res = NextResponse.next();
    if (!request.cookies.get(COOKIE_NAME)) {
      res.cookies.set(COOKIE_NAME, "en", {
        maxAge: COOKIE_MAX_AGE,
        path: "/",
      });
    }
    return res;
  }

  // ---------- API route'ları: günlük kullanım limiti ----------

  // Admin cookie varsa limit atla
  const isAdmin = request.cookies.get("wrompt_admin")?.value === "1";
  if (isAdmin) return NextResponse.next();

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous";

  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Günlük kullanım hakkın doldu, lütfen yarın tekrar dene." },
      { status: 429 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/en",
    "/api/optimize-prompt",
    "/api/recommend-tool",
    "/api/classify-task",
  ],
};