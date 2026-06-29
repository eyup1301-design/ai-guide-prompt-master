// app/api/optimize-prompt/route.js
// Kullanıcının kaba isteğini + cevapladığı soruları alır,
// Gemini'ye "prompt mühendisi" rolü vererek hedef AI için optimize edilmiş bir prompt üretir.

import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateWithRetry } from "@/lib/gemini-retry";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { rawInput, taskLabel, targetAI, answers, language } = body;

    if (!rawInput || !targetAI) {
      return Response.json(
        { error: "rawInput ve targetAI alanları gerekli." },
        { status: 400 }
      );
    }

    // Kullanıcının cevapladığı ek soruları okunabilir bir metne çeviriyoruz.
    const answersText = Object.entries(answers || {})
      .filter(([, value]) => value && value.trim() !== "")
      .map(([key, value]) => `- ${key}: ${value}`)
      .join("\n");

    const languageInstruction =
      language === "tr"
        ? "Optimize edilmiş prompt'u TÜRKÇE yaz, kullanıcının tercihi bu."
        : language === "en"
        ? "Optimize edilmiş prompt'u İNGİLİZCE yaz."
        : "Kullanıcının yazdığı dilin aynısını kullan: Türkçe yazdıysa Türkçe, İngilizce yazdıysa İngilizce üret. İstisna: hedef araç görsel veya video üretici ise (Midjourney, Runway, Kling, Veo vb.) her zaman İNGİLİZCE yaz çünkü bu araçlar İngilizce prompt'larla çok daha iyi sonuç verir.";

    const systemPrompt = `Sen bir prompt mühendisisin. Görevin, kullanıcının kaba ve kısa isteğini, belirtilen hedef yapay zeka aracı için EN VERİMLİ şekilde çalışacak profesyonel bir prompt'a çevirmek.

Kurallar:
- Sadece optimize edilmiş prompt'u döndür, başka hiçbir açıklama veya giriş cümlesi ekleme.
- Hedef AI aracının güçlü yönlerine uygun terminoloji ve yapı kullan.
- Kullanıcının verdiği ek detayları (varsa) prompt'a doğal şekilde işle.
- Prompt, hedef AI aracına doğrudan yapıştırılabilecek şekilde net ve eksiksiz olmalı.
- ${languageInstruction}`;

    const userMessage = `Görev türü: ${taskLabel}
Hedef AI: ${targetAI}
Kullanıcının kaba isteği: "${rawInput}"
${answersText ? `\nEk detaylar:\n${answersText}` : ""}

Bu bilgilere göre ${targetAI} için optimize edilmiş prompt'u üret.`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await generateWithRetry(model, [systemPrompt, userMessage]);

    const optimizedPrompt = result.response.text();

    // Toplam prompt sayacını artır (başlangıç değeri 500)
    try {
      const current = await redis.get("wrompt-total-prompts");
      if (current === null) {
        await redis.set("wrompt-total-prompts", 501);
      } else {
        await redis.incr("wrompt-total-prompts");
      }
    } catch {}

    return Response.json({ optimizedPrompt });
  } catch (error) {
    console.error("optimize-prompt hatası:", error);
    const isOverloaded =
      error?.status === 503 ||
      (typeof error?.message === "string" && error.message.includes("503"));
    return Response.json(
      {
        error: isOverloaded
          ? "Şu an çok yoğunuz, lütfen birkaç saniye sonra tekrar dene."
          : "Prompt optimize edilirken bir hata oluştu.",
      },
      { status: 500 }
    );
  }
}