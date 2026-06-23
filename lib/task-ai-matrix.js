// lib/task-ai-matrix.js
// Çekirdek veri modeli: Görev -> En İyi AI eşleştirmesi + göreve özel sorular
// Yeni bir AI modeli eklemek için sadece AI_TOOLS objesine yeni bir entry eklemen yeterli.
// Yeni bir görev için TASKS dizisine ekleme yap, questions kısmını doldur.

export const TASKS = [
  {
    id: "code-generation",
    label: "Kod Yazma & Debug",
    icon: "Code2",
    description: "Yazılım geliştirme, hata ayıklama, refactoring",
    questions: [
      {
        id: "tech",
        label: "Hangi teknoloji veya dil?",
        placeholder: "örn: React, Python, Next.js...",
      },
      {
        id: "purpose",
        label: "Bu kod ne işe yarayacak?",
        placeholder: "örn: kullanıcı girişi sayfası, veri çekme fonksiyonu...",
      },
    ],
  },
  {
    id: "image-generation",
    label: "Görsel Üretme",
    icon: "Image",
    description: "Sanat, illüstrasyon, ürün görseli, logo",
    questions: [
      {
        id: "subject",
        label: "Konu/obje ne?",
        placeholder: "örn: timsah, kahve fincanı, dağ manzarası...",
      },
      {
        id: "style",
        label: "Hangi stil?",
        placeholder: "örn: gerçekçi, çizgi film, minimalist, suluboya...",
      },
      {
        id: "usage",
        label: "Nerede kullanılacak?",
        placeholder: "örn: logo, sosyal medya gönderisi, baskı...",
      },
    ],
  },
  {
    id: "data-analysis",
    label: "Veri Analizi",
    icon: "BarChart3",
    description: "Tablo analizi, içgörü çıkarma, görselleştirme",
    questions: [
      {
        id: "dataType",
        label: "Veri ne hakkında?",
        placeholder: "örn: aylık satış tablosu, anket sonuçları...",
      },
      {
        id: "goal",
        label: "Bu analizden ne öğrenmek istiyorsun?",
        placeholder: "örn: hangi ürün en çok satıyor, trend var mı...",
      },
    ],
  },
  {
    id: "copywriting",
    label: "Metin Yazarlığı",
    icon: "PenTool",
    description: "Blog, reklam metni, SEO içerik, hikaye",
    questions: [
      {
        id: "audience",
        label: "Hedef kitle kim?",
        placeholder: "örn: yeni anneler, yazılımcılar, küçük işletmeler...",
      },
      {
        id: "tone",
        label: "Ton ne olsun?",
        placeholder: "örn: samimi, resmi, esprili, ikna edici...",
      },
    ],
  },
  {
    id: "research",
    label: "Araştırma & Özet",
    icon: "Search",
    description: "Derin araştırma, makale özetleme, literatür taraması",
    questions: [
      {
        id: "topic",
        label: "Konu ne?",
        placeholder: "örn: yapay zeka regülasyonları, iklim değişikliği...",
      },
      {
        id: "depth",
        label: "Ne kadar derinlemesine olsun?",
        placeholder: "örn: kısa özet, detaylı rapor, akademik düzey...",
      },
    ],
  },
  {
    id: "video-generation",
    label: "Video Üretme",
    icon: "Video",
    description: "Kısa video, animasyon, sahne üretimi",
    questions: [
      {
        id: "scene",
        label: "Sahnede ne oluyor?",
        placeholder: "örn: bir kuş gökyüzünde uçuyor, ürün dönüyor...",
      },
      {
        id: "duration",
        label: "Kaç saniye / hangi platform için?",
        placeholder: "örn: 5 saniye, Instagram Reels...",
      },
    ],
  },
  {
    id: "other",
    label: "Diğer",
    icon: "Sparkles",
    description: "Listede olmayan görevler için genel kategori",
    hidden: true,
    questions: [
      {
        id: "context",
        label: "Bu görevi biraz daha açar mısın?",
        placeholder: "örn: kim için, hangi ortamda kullanılacak...",
      },
    ],
  },
];

export const AI_TOOLS = {
  "claude-sonnet": {
    name: "Claude Sonnet 4.6",
    vendor: "Anthropic",
    color: "#D97757",
    bestFor: ["code-generation", "research", "copywriting", "other"],
    strengths: "Uzun bağlam, temiz kod mimarisi, düşük halüsinasyon",
    goldenTip:
      "Görevi adım adım böl ve beklenen çıktı formatını (örn. sadece kod bloğu) açıkça belirt.",
    pricing: "freemium",
    priceNote: "Web sürümü ücretsiz (sınırlı), API kullanımı ücretli",
  },
  "gpt-4o": {
    name: "GPT-4o",
    vendor: "OpenAI",
    color: "#10A37F",
    bestFor: ["copywriting", "data-analysis", "code-generation", "other"],
    strengths: "Hızlı yanıt, geniş genel bilgi, multimodal girdi",
    goldenTip:
      "Hedef kitleyi ve tonu (samimi, kurumsal, esprili vb.) net tanımla, örnek bir cümle ver.",
    pricing: "freemium",
    priceNote: "ChatGPT'de ücretsiz kullanılabilir (sınırlı), Plus $20/ay",
  },
  midjourney: {
    name: "Midjourney v7",
    vendor: "Midjourney",
    color: "#3B82F6",
    bestFor: ["image-generation"],
    strengths: "En sanatsal/atmosferik sonuçlar, stilize ve sinematik görseller",
    goldenTip:
      "Stil, ışık ve kamera açısını ayrı ayrı belirt; --ar ve --style parametrelerini kullan.",
    pricing: "paid",
    priceNote: "Ücretsiz deneme yok, en düşük plan $10/ay",
  },
  "nano-banana": {
    name: "Nano Banana (Gemini)",
    vendor: "Google",
    color: "#22C55E",
    bestFor: ["image-generation"],
    strengths: "Fotogerçekçilik ve düzenlemede çok güçlü, tamamen ücretsiz erişim",
    goldenTip:
      "Sahneyi net ve betimleyici anlat; ürün/metin/logo gibi hassas detaylar için ideal.",
    pricing: "free",
    priceNote: "Gemini uygulamasında ücretsiz kullanılabilir",
  },
  "gemini-pro": {
    name: "Gemini 2.5 Pro",
    vendor: "Google",
    color: "#8B5CF6",
    bestFor: ["data-analysis", "research", "code-generation", "other"],
    strengths: "Çok büyük bağlam penceresi, tablo/PDF analizi",
    goldenTip:
      "Büyük dokümanı tek seferde ver, sonra spesifik soruları ayrı promptlarla sor.",
    pricing: "free",
    priceNote: "Google AI Studio üzerinden ücretsiz kullanılabilir",
  },
  perplexity: {
    name: "Perplexity",
    vendor: "Perplexity AI",
    color: "#14B8A6",
    bestFor: ["research"],
    strengths: "Gerçek zamanlı web araması, kaynak gösterme",
    goldenTip:
      "Sorunu net bir soru olarak sor, hangi tarih aralığını istediğini belirt.",
    pricing: "free",
    priceNote: "Temel kullanım ücretsiz, Pro $20/ay",
  },
  "veo-3": {
    name: "Google Veo 3.1",
    vendor: "Google",
    color: "#EF4444",
    bestFor: ["video-generation"],
    strengths: "2026'nın en gelişmiş video modeli, senkronize ses üretimi",
    goldenTip:
      "Diyalog/ses istiyorsan sahnede ne duyulması gerektiğini de yaz, sadece görseli değil.",
    pricing: "freemium",
    priceNote: "Google AI Studio'da sınırlı ücretsiz kota, tam erişim $20/ay",
  },
  "kling-ai": {
    name: "Kling 3.0",
    vendor: "Kuaishou",
    color: "#F59E0B",
    bestFor: ["video-generation"],
    strengths: "En cömert ücretsiz günlük kota, hareketli sahnelerde güçlü",
    goldenTip:
      "Hareketi (hız, yön) açıkça tanımla; fizik motoru bu detaylara iyi tepki veriyor.",
    pricing: "free",
    priceNote: "Günlük ücretsiz kredi mevcut, daha fazlası için $7/ay'dan başlıyor",
  },
};

// Görev id'sine göre tüm uygun AI adaylarını döndürür.
// İlk eleman "en iyi eşleşme" (recommended) olarak işaretlenir.
export function getCandidates(taskId) {
  const candidates = Object.entries(AI_TOOLS)
    .filter(([, tool]) => tool.bestFor.includes(taskId))
    .map(([key, tool]) => ({ key, ...tool }));

  return candidates.map((tool, index) => ({
    ...tool,
    recommended: index === 0,
  }));
}

// Görev id'sine göre o göreve özel soruları döndürür.
export function getQuestions(taskId) {
  return TASKS.find((t) => t.id === taskId)?.questions ?? [];
}