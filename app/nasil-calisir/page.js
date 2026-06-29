import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Zap } from "lucide-react";

export const metadata = {
  title: "Nasıl Çalışır? — Wrompt",
  description: "Wrompt ile 3 adımda profesyonel prompt oluştur. Göreve göre, AI'ya göre veya rehber ile — hangi yöntemi tercih edersen et.",
};

const STEPS = [
  {
    number: "1",
    icon: Zap,
    color: "#FF9F4A",
    title: "Ne yapmak istediğini yaz",
    desc: "Kısa bir cümle yeterli. Örn: \"kedi çizdir\", \"rapor yaz\", \"kod hata ayıkla\". Sisteme sadece ne istediğini söyle.",
  },
  {
    number: "2",
    icon: Sparkles,
    color: "#4ADEDE",
    title: "AI otomatik eşleşir",
    desc: "Sistem görevini analiz eder, en uygun yapay zeka aracını seçer ve sana önerir. İstersen değiştirebilirsin.",
  },
  {
    number: "3",
    icon: ArrowRight,
    color: "#FF9F4A",
    title: "Prompt hazır, kullan",
    desc: "Optimize edilmiş promptu kopyala, hedef AI'a yapıştır, kullan. Başka bir şey gerekmez.",
  },
];

const METHODS = [
  {
    icon: Zap,
    color: "#FF9F4A",
    title: "Göreve göre",
    href: "/",
    badge: "Önerilen",
    steps: [
      "Soldan görevini seç veya kendi cümlenle yaz",
      "Sistem en uygun AI'ı otomatik önerir",
      "Birkaç kısa soruyu cevapla (opsiyonel)",
      '"Prompt\'umu optimize et" butonuna bas',
      "Hazır promptu kopyala ve kullan",
    ],
  },
  {
    icon: Sparkles,
    color: "#4ADEDE",
    title: "AI'ya göre",
    href: "/",
    badge: null,
    steps: [
      "Hangi AI'ı kullanacağını seç (ChatGPT, Midjourney vb.)",
      "Ne yapmak istediğini kısaca yaz",
      '"İlerle" butonuna bas, sistem görevi anlar',
      "Ek sorular varsa cevapla",
      "Prompt oluştur butonuna bas",
    ],
  },
  {
    icon: BookOpen,
    color: "#A78BFA",
    title: "Rehber ile",
    href: "/rehberler",
    badge: null,
    steps: [
      '"Yapay Zeka Rehberleri" menüsüne git',
      "Kullanmak istediğin AI'ın rehberini seç",
      "Rehberi oku, güçlü/zayıf yönleri öğren",
      'Sayfanın altındaki "Şimdi Dene" kutusunu kullan',
      "Direkt o AI için optimize edilmiş prompt üret",
    ],
  },
];

export default function NasilCalisir() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-20">

        {/* Başlık */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B92A0] mb-4">
            Rehber
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
            Nasıl Çalışır?
          </h1>
          <p className="text-base text-[#8B92A0] max-w-xl">
            Wrompt, kaba bir isteği profesyonel bir prompt'a dönüştürür.
            3 farklı yöntemle kullanabilirsin.
          </p>
        </div>

        {/* 3 Adım */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-5">
            Genel akış
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: step.color + "20", border: `1px solid ${step.color}40` }}
                    >
                      <Icon size={15} style={{ color: step.color }} />
                    </div>
                    <span className="text-xs font-mono text-[#8B92A0]">Adım {step.number}</span>
                  </div>
                  <p className="text-sm font-semibold text-[#ECEEF1] mb-2">{step.title}</p>
                  <p className="text-xs text-[#8B92A0] leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Yöntem */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-5">
            Kullanım yöntemleri
          </p>
          <div className="flex flex-col gap-4">
            {METHODS.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.title} className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: method.color + "20", border: `1px solid ${method.color}40` }}
                    >
                      <Icon size={16} style={{ color: method.color }} />
                    </div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-semibold text-[#ECEEF1]">{method.title}</h2>
                      {method.badge && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#4ADEDE] border border-[#4ADEDE]/30 rounded-full px-2 py-0.5">
                          {method.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <ol className="flex flex-col gap-2 mb-4">
                    {method.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#8B92A0]">
                        <span
                          className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono mt-0.5"
                          style={{ backgroundColor: method.color + "20", color: method.color }}
                        >
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <Link
                    href={method.href}
                    className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-4 py-2 border transition-colors"
                    style={{
                      color: method.color,
                      borderColor: method.color + "40",
                      backgroundColor: method.color + "10",
                    }}
                  >
                    Deneyelim
                    <ArrowRight size={13} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* SSS */}
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-5">
            Sık sorulan sorular
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                q: "Ücretsiz mi?",
                a: "Evet, tamamen ücretsiz. Günde 50 prompt üretebilirsin.",
              },
              {
                q: "Hangi yapay zeka araçlarını destekliyor?",
                a: "ChatGPT (GPT-4o, GPT-5), Claude, Gemini, Midjourney, Suno, Kling, Perplexity ve daha fazlası.",
              },
              {
                q: "Prompt geçmişim nerede saklanıyor?",
                a: "Tarayıcının yerel hafızasında (localStorage). Sunucuya gönderilmez, sadece senin cihazında durur.",
              },
              {
                q: "Prompt dili ne olacak?",
                a: "Varsayılan olarak yazdığın dili algılar. Görsel/video araçları için otomatik İngilizce üretir. İstersen Türkçe veya İngilizce'yi manuel seçebilirsin.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-sm font-medium text-[#ECEEF1] mb-1.5">{item.q}</p>
                <p className="text-sm text-[#8B92A0] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}
