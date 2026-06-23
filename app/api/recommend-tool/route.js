// app/api/recommend-tool/route.js
// "Diğer" kategorisine düşen görevler için, Gemini'nin Google Search ile
// gerçek zamanlı arama yapmasını sağlayıp GÜNCEL bir AI önerisi üretiyoruz.
// Bu sayede modelin donmuş/eski bilgisine değil, o günkü arama sonuçlarına dayanıyoruz.

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { rawInput } = body;

    if (!rawInput || !rawInput.trim()) {
      return Response.json(
        { error: "rawInput alanı gerekli." },
        { status: 400 }
      );
    }

    const today = new Date().toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const systemPrompt = `Bugünün tarihi: ${today}. Sen bir AI araç danışmanısın. Kullanıcının görevi için, GÜNCEL WEB ARAMASI yaparak şu an piyasada gerçekten var olan, çalışan 1-2 yapay zeka aracını öner (biri varsa ücretsiz/freemium, biri ücretli olabilir).

Kapanmış, artık erişilemeyen veya güncelliğini kaybetmiş araçları ÖNERME. Önce arama yap, sonra cevapla.

SADECE şu JSON formatında cevap ver, başka hiçbir metin, açıklama veya markdown ekleme:
{
  "candidates": [
    {
      "key": "kisa-slug",
      "name": "Araç Adı",
      "vendor": "Şirket Adı",
      "pricing": "free" | "freemium" | "paid",
      "priceNote": "kısa fiyat açıklaması, Türkçe",
      "strengths": "kısa güçlü yön açıklaması, Türkçe",
      "goldenTip": "bu araç için kısa bir kullanım ipucu, Türkçe"
    }
  ]
}`;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      tools: [{ googleSearch: {} }],
    });

    const result = await model.generateContent([
      systemPrompt,
      `Kullanıcının görevi: "${rawInput}"`,
    ]);

    let text = result.response.text().trim();
    // Modelin bazen kod bloğu (```json ... ```) ile sarması ihtimaline karşı temizle.
    text = text.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim();

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new Error("Model geçerli JSON döndürmedi.");
    }

    const candidates = Array.isArray(parsed.candidates)
      ? parsed.candidates.slice(0, 2)
      : [];

    if (candidates.length === 0) {
      throw new Error("Aday bulunamadı.");
    }

    return Response.json({ candidates });
  } catch (error) {
    console.error("recommend-tool hatası:", error);
    return Response.json(
      { error: "Güncel öneri alınamadı." },
      { status: 500 }
    );
  }
}