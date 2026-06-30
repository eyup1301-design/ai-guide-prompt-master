import Link from "next/link";

const GUIDES = [
  {
    slug: "gemini",
    name: "Gemini",
    vendor: "Google",
    color: "#1C69FF",
    icon: "googlegemini",
    description: "Ne yapar, güçlü/zayıf yönleri, verimli kullanım",
    ready: true,
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    vendor: "OpenAI",
    color: "#10A37F",
    icon: "openai",
    description: "Ne yapar, güçlü/zayıf yönleri, verimli kullanım",
    ready: true,
  },
  {
    slug: "claude",
    name: "Claude",
    vendor: "Anthropic",
    color: "#D97757",
    icon: "anthropic",
    description: "Ne yapar, güçlü/zayıf yönleri, verimli kullanım",
    ready: true,
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    vendor: "Midjourney",
    color: "#3B82F6",
    icon: "midjourney",
    description: "Ne yapar, güçlü/zayıf yönleri, verimli kullanım",
    ready: true,
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    vendor: "Perplexity AI",
    color: "#14B8A6",
    icon: "perplexity",
    description: "Gerçek zamanlı arama, kaynaklı özet, araştırma",
    ready: true,
  },
  {
    slug: "suno",
    name: "Suno AI",
    vendor: "Suno",
    color: "#A855F7",
    icon: "suno",
    description: "Vokalli şarkı üretimi, müzik oluşturma",
    ready: true,
  },
  {
    slug: "kling",
    name: "Kling AI",
    vendor: "Kuaishou",
    color: "#F59E0B",
    icon: "kling",
    description: "Video üretme, kamera kontrolü, hareket fiziği",
    ready: true,
  },
];

export const metadata = {
  title: "Yapay Zeka Rehberleri — Wrompt",
  description: "Hangi AI'yı nasıl kullanmalısın: güçlü/zayıf yönleri, verimli kullanım ipuçları ve dikkat edilmesi gerekenler.",
};

export default function RehberlerHub() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16">
        <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">
          yapay zeka rehberleri
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
          Hangi AI'yı nasıl kullanmalısın
        </h1>
        <p className="text-sm text-[#8B92A0] mb-5 max-w-xl">
          Her aracın güçlü/zayıf yönleri, verimli kullanım ipuçları ve dikkat
          edilmesi gerekenler — tek tek deneyip öğrenmene gerek yok.
        </p>

        <Link
          href="/"
          className="flex items-center justify-between bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4 mb-8 hover:bg-[#22272F] transition-colors"
        >
          <div>
            <p className="text-sm font-medium text-[#ECEEF1]">
              Zaten hangi AI'yı kullanacağını biliyor musun?
            </p>
            <p className="text-xs text-[#8B92A0] mt-1">
              Ana sayfada "AI'ya göre" geçişini kullan, görev eşleştirmeyi atla
            </p>
          </div>
          <span className="text-[#4ADEDE] text-sm flex-shrink-0">→</span>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {GUIDES.map((guide) =>
            guide.ready ? (
              <Link
                key={guide.slug}
                href={`/rehberler/${guide.slug}`}
                className="flex gap-3 items-start bg-[#1C2128] border rounded-xl p-4 transition-colors hover:bg-[#22272F]"
                style={{ borderColor: `${guide.color}59` }}
              >
                <GuideIcon guide={guide} />
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: guide.color === "#1A1A2E" ? "#ECEEF1" : guide.color }}
                    >
                      {guide.name}
                    </span>
                    <span className="text-[9px] text-[#4ADEDE] border border-[#4ADEDE]/40 rounded-full px-1.5 py-0.5">
                      hazır
                    </span>
                  </div>
                  <p className="text-xs text-[#8B92A0] mt-1 leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </Link>
            ) : (
              <div
                key={guide.slug}
                className="flex gap-3 items-start bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 opacity-50"
              >
                <GuideIcon guide={guide} />
                <div>
                  <span className="text-sm font-semibold text-[#ECEEF1]">
                    {guide.name}
                  </span>
                  <p className="text-xs text-[#8B92A0] mt-1">
                    {guide.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}

function GuideIcon({ guide }) {
  return (
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: guide.color }}
    >
      <img
        src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${guide.icon}.svg`}
        alt=""
        className="w-4 h-4 invert"
      />
    </div>
  );
}