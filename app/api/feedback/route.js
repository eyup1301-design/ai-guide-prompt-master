// app/api/feedback/route.js
// POST: kullanıcıdan gelen geri bildirimi Upstash Redis'e kaydeder.
// GET: ?key=... ile, sadece doğru anahtarı bilen (sen) tüm geri bildirimleri görebilir.

import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const feedbackRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, "1 d"),
  prefix: "wrompt-feedback-rl",
});

const LIST_KEY = "wrompt-feedback";

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    const { success } = await feedbackRatelimit.limit(ip);
    if (!success) {
      return Response.json(
        { error: "Günlük geri bildirim limitine ulaştın." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { text } = body;

    if (!text || !text.trim()) {
      return Response.json({ error: "text alanı gerekli." }, { status: 400 });
    }

    if (typeof text !== "string" || text.length > 500) {
      return Response.json({ error: "Metin çok uzun (maks. 500 karakter)." }, { status: 400 });
    }

    const entry = JSON.stringify({
      text: text.trim().slice(0, 2000),
      date: new Date().toISOString(),
    });

    await redis.lpush(LIST_KEY, entry);

    return Response.json({ success: true });
  } catch (error) {
    console.error("feedback POST hatası:", error);
    return Response.json(
      { error: "Geri bildirim kaydedilemedi." },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");

    if (!process.env.FEEDBACK_ADMIN_KEY || key !== process.env.FEEDBACK_ADMIN_KEY) {
      return Response.json({ error: "Yetkisiz erişim." }, { status: 401 });
    }

    const rawEntries = await redis.lrange(LIST_KEY, 0, 199);

    const feedback = rawEntries.map((entry) => {
      try {
        return typeof entry === "string" ? JSON.parse(entry) : entry;
      } catch {
        return { text: String(entry), date: null };
      }
    });

    return Response.json({ feedback });
  } catch (error) {
    console.error("feedback GET hatası:", error);
    return Response.json({ error: "Liste alınamadı." }, { status: 500 });
  }
}