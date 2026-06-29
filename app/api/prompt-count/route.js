import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function GET() {
  try {
    const count = await redis.get("wrompt-total-prompts");
    return Response.json({ count: count ?? 500 });
  } catch {
    return Response.json({ count: 500 });
  }
}
