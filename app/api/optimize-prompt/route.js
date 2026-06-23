import { GoogleGenerativeAI } from "@google/generative-ai";

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

    const answersText = Object.entries(answers || {})
      .filter(([, value]) => value && value.trim() !== "")
      .map(([key, value]) => `- ${key}: ${value}`)
      .join("\n");

    const languageInstruction =
      language === "tr"
        ? "Optimize edilmiş prompt'u TÜRKÇE yaz, kullanıcının tercihi bu."
        : language === "en"
        ? "Optimize edilmiş prompt'u İNGİLİZCE yaz."
        : "Optimize edilmiş prompt için en uygun dili sen seç: görsel/video üretim araçları (Midjourney, Runway vb.) için İngilizce kullan, kod/metin/araştırma gibi görevlerde Türkçe de uygun olabilir.";

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

    const result = await model.generateContent([systemPrompt, userMessage]);

    const optimizedPrompt = result.response.text();

    return Response.json({ optimizedPrompt });
  } catch (error) {
    console.error("optimize-prompt hatası:", error);
    return Response.json(
      { error: "Prompt optimize edilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}