import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateWithRetry } from "@/lib/gemini-retry";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const AI_KEYS = [
  "claude-sonnet",
  "gpt-4o",
  "midjourney",
  "nano-banana",
  "gemini-pro",
  "perplexity",
  "muzica",
  "suno",
  "veo-3",
  "kling-ai",
];

export async function POST(request) {
  try {
    const { job, language = "tr" } = await request.json();

    if (!job?.trim()) {
      return Response.json({ error: "job alanı gerekli." }, { status: 400 });
    }

    const isTr = language !== "en";

    const systemPrompt = isTr
      ? `Sen bir AI araç danışmanısın. Kullanıcının mesleğini veya iş alanını analiz edip, o kişinin günlük işlerinde hangi AI ihtiyaçlarıyla karşılaştığını ve her ihtiyaç için en uygun AI aracını belirliyorsun.

Mevcut AI araçlarının anahtarları (sadece bunlardan seç): ${AI_KEYS.join(", ")}

Şu JSON formatında yanıt ver, başka hiçbir şey yazma:
{
  "needs": [
    {
      "title": "İhtiyaç başlığı (kısa, 2-4 kelime)",
      "desc": "Bu ihtiyaç ne işe yarar (1 cümle, kullanıcıya yönelik)",
      "aiKey": "mevcut_ai_anahtari",
      "icon": "emoji"
    }
  ],
  "bonus": [
    {
      "name": "Araç adı",
      "desc": "Ne işe yarar (1 kısa cümle)"
    }
  ]
}

Kurallar:
- needs dizisinde 4-6 madde olsun
- bonus dizisinde 2-3 harici araç öner (Wrompt'ta olmayan, piyasadaki güncel araçlar)
- aiKey mutlaka mevcut listeden biri olsun
- Yanıt sadece geçerli JSON olsun, markdown veya açıklama ekleme`
      : `You are an AI tool consultant. Analyze the user's job or field, identify the AI needs they face in their daily work, and recommend the best AI tool for each need.

Available AI tool keys (only use these): ${AI_KEYS.join(", ")}

Respond in this JSON format only, nothing else:
{
  "needs": [
    {
      "title": "Need title (short, 2-4 words)",
      "desc": "What this covers (1 sentence, user-facing)",
      "aiKey": "existing_ai_key",
      "icon": "emoji"
    }
  ],
  "bonus": [
    {
      "name": "Tool name",
      "desc": "What it does (1 short sentence)"
    }
  ]
}

Rules:
- 4-6 items in needs array
- 2-3 bonus external tools (not in Wrompt, current market tools)
- aiKey must be one from the list
- Response must be valid JSON only, no markdown or explanation`;

    const userMessage = isTr
      ? `Meslek/iş alanı: "${job}"\n\nBu kişinin günlük iş ihtiyaçlarını ve her biri için en uygun AI aracını belirle.`
      : `Job/field: "${job}"\n\nIdentify this person's daily work needs and the best AI tool for each.`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await generateWithRetry(model, [systemPrompt, userMessage]);
    const text = result.response.text().trim();

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("Geçersiz JSON yanıtı");

    const data = JSON.parse(jsonMatch[0]);

    return Response.json(data);
  } catch (error) {
    console.error("job-needs hatası:", error);
    return Response.json(
      { error: "Analiz yapılırken hata oluştu, tekrar dene." },
      { status: 500 }
    );
  }
}
