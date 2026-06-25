// middleware.js
// Her ziyaretçinin (IP'sine göre) günde en fazla 20 kez AI maliyeti olan
// route'lara (optimize-prompt, recommend-tool, classify-task) istek
// atabilmesini sağlar. Aşan istekler, dostça bir mesajla geri çevrilir.

import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(20, "1 d"),
  prefix: "wrompt-ratelimit",
});

export async function middleware(request) {
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
    "/api/optimize-prompt",
    "/api/recommend-tool",
    "/api/classify-task",
  ],
};