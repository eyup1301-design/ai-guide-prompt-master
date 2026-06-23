// app/api/classify-task/route.js
// Kullanıcının kendi cümlesiyle yazdığı görevi alır, hangi hazır kategoriye
// en yakın olduğunu Gemini'ye sorar. Hiçbiri uymuyorsa "other" döner.

import { GoogleGenerativeAI } from "@google/generative-ai";
import { TASKS } from "@/lib/task-ai-matrix";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const VALID_IDS = TASKS.map((t) => t.id);

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

    const categoryList = TASKS.filter((t) => !t.hidden)
      .map((t) => `- ${t.id}: ${t.label} (${t.description})`)
      .join("\n");

    const systemPrompt = `Sen bir görev sınıflandırıcısın. Kullanıcının yazdığı kaba isteği oku, aşağıdaki kategorilerden EN UYGUN olanın id'sini döndür. Hiçbiri uymuyorsa "other" döndür.

Kategoriler:
${categoryList}
- other: Yukarıdakilerin hiçbirine uymayan genel görevler

Kurallar:
- SADECE kategori id'sini döndür (örn. "code-generation"), başka hiçbir şey yazma, açıklama yapma, tırnak işareti kullanma.`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent([
      systemPrompt,
      `Kullanıcının isteği: "${rawInput}"`,
    ]);

    const rawAnswer = result.response.text().trim().toLowerCase();

    // Modelin döndürdüğü cevabı temizle, geçerli bir id mi kontrol et.
    const matchedId = VALID_IDS.find((id) => rawAnswer.includes(id));

    return Response.json({ taskId: matchedId ?? "other" });
  } catch (error) {
    console.error("classify-task hatası:", error);
    // Hata durumunda kullanıcıyı engellememek için güvenli varsayılana dön.
    return Response.json({ taskId: "other" });
  }
}