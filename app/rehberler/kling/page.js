import Link from "next/link";
import InlinePromptBox from "@/components/InlinePromptBox";
import {
  GuideSection,
  PromptExample,
  WarningRow,
  MistakeRow,
  SummaryRow,
} from "@/components/GuideComponents";

const SECTIONS = [
  { id: "nedir", label: "01 — Nedir" },
  { id: "guclu-zayif", label: "02 — Güçlü/Zayıf" },
  { id: "verimli-kullanim", label: "03 — Verimli kullanım" },
  { id: "dikkat", label: "04 — Dikkat et" },
  { id: "davranis", label: "05 — Kamera kontrolü" },
  { id: "hatalar", label: "06 — Sık yapılan hatalar" },
  { id: "ozet", label: "07 — Özet" },
  { id: "dene", label: "08 — Şimdi dene" },
];

export const metadata = {
  title: "Kling AI Rehberi — Wrompt",
  description: "Kling AI ne yapar, güçlü/zayıf yönleri, video üretme ipuçları ve dikkat edilmesi gerekenler.",
};

export default function KlingRehberi() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/rehberler" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← Tüm rehberler
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#F59E0B] flex items-center justify-center">
            <span className="text-white text-xs font-bold">K</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">Kling AI Rehberi</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-5 max-w-xl">
          Cömert ücretsiz kotası ve güçlü hareket fiziğiyle öne çıkan video üretme aracı.
        </p>
        <a
          href="#dene"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FF9F4A] border border-[#FF9F4A]/40 bg-[#FF9F4A]/10 rounded-full px-4 py-2 mb-10 hover:bg-[#FF9F4A]/20 transition-colors"
        >
          Direkt prompt oluşturmak istiyorum ↓
        </a>

        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8">
          <nav className="hidden md:flex flex-col gap-1 sticky top-8 self-start">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-xs text-[#8B92A0] hover:text-[#FF9F4A] py-1.5 transition-colors">
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-14 min-w-0">
            <GuideSection id="nedir" title="Kling AI Nedir?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Kling AI, Çinli Kuaishou şirketinin geliştirdiği bir <b className="text-[#ECEEF1] font-medium">metin/görüntüden video</b> üretme aracıdır. 5-10 saniyelik yüksek kaliteli kısa videolar üretir. Özellikle hareket fiziği ve gerçekçi insan hareketleri konusunda güçlüdür.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                Günlük ücretsiz kredi ile kullanılabiliyor — bu özelliğiyle Runway ve Veo gibi rakiplerine göre çok daha erişilebilir.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">temel özellikler</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Text-to-video</span>
                    <span className="text-[#8B92A0] text-right">Metin açıklamasından video</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Image-to-video</span>
                    <span className="text-[#8B92A0] text-right">Görüntüyü canlandırma</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Kamera kontrolü</span>
                    <span className="text-[#8B92A0] text-right">Pan, zoom, dolly hareketleri</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Süre</span>
                    <span className="text-[#8B92A0] text-right">5 veya 10 saniyelik çıktı</span>
                  </div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="guclu-zayif" title="Güçlü ve Zayıf Yönler">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">güçlü yönler</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Günlük ücretsiz kredi — ücret ödemeden denenebilir</li>
                    <li>Gerçekçi insan hareketleri ve fizik motoru</li>
                    <li>Görüntüden video (image-to-video) özelliği güçlü</li>
                    <li>Kamera açısı ve hareket kontrolü mevcut</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">zayıf yönler</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Maksimum 10 saniyelik video — uzun içerik üretemez</li>
                    <li>Ses/müzik desteği yok (sadece görsel)</li>
                    <li>Metin okuma/yazma sahneleri hâlâ sorunlu</li>
                    <li>Üretim süresi 2-5 dakika sürebilir</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="verimli-kullanim" title="Nasıl Daha Verimli Kullanılır?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                Kling&apos;de en iyi sonuç için hareketi açıkça tanımla. &ldquo;Yürüyor&rdquo; yerine &ldquo;yavaşça sola doğru yürüyor&rdquo; gibi yön ve hız bilgisi ver.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Senaryo 1 — Ürün tanıtımı"
                  weak={`"Kahve fincanı videosu"`}
                  strong={`"Beyaz mermer yüzeyde siyah kahve fincanı, buharda yavaşça yükseliyor, hafif dolly-in kamera hareketi, sabah ışığı, sinematik"`}
                  weakResult="Statik veya rastgele hareketli jenerik video."
                  strongResult="Ürün çekimine hazır, kontrollü sinematik video."
                />
                <PromptExample
                  scenario="Senaryo 2 — Doğa sahnesi"
                  weak={`"Güzel orman videosu"`}
                  strong={`"Sabah sisi içinde kayın ormanı, kameradan yavaşça yükseliyor (drone rising shot), altın saat ışığı, yapraklarda hafif rüzgar"`}
                  weakResult="Sıradan, hareket belirsiz video."
                  strongResult="Belirtilen kamera hareketi ve ışıkla sahne."
                />
              </div>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mt-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">ipucu — image-to-video</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed">
                  Önce Midjourney veya Gemini ile bir görüntü üret, sonra Kling&apos;e yükleyerek canlandır. Bu iki aşamalı yaklaşım çok daha kontrollü sonuç verir.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="dikkat" title="Dikkat Edilmesi Gerekenler">
              <div className="flex flex-col gap-3">
                <WarningRow title="Ücretsiz kota dolunca beklemek gerekir" text="Günlük ücretsiz kredi bitince bir sonraki güne kadar beklemelisin veya ücretli plana geçmelisin." />
                <WarningRow title="İnsan yüzleri bazen bozulabilir" text="Yakın plan insan yüzü içeren videolarda deforme olma görülebilir. Uzak plan daha güvenli." />
                <WarningRow title="Ses yok" text="Kling sadece görsel video üretir. Sese ihtiyaç varsa ayrıca müzik veya voiceover eklemelisin." />
              </div>
            </GuideSection>

            <GuideSection id="davranis" title="Kamera Hareketi Kontrolü">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Kling&apos;in en güçlü özelliklerinden biri kamera hareketi kontrolüdür. Promptta doğru terimleri kullanarak profesyonel çekim hissi yaratabilirsin.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">kamera hareketleri</p>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex gap-3"><span className="text-[#ECEEF1] font-medium w-32 shrink-0">Pan left/right</span><span className="text-[#8B92A0]">Kamera yatayda kayıyor</span></div>
                  <div className="flex gap-3"><span className="text-[#ECEEF1] font-medium w-32 shrink-0">Tilt up/down</span><span className="text-[#8B92A0]">Kamera dikeyde eğiliyor</span></div>
                  <div className="flex gap-3"><span className="text-[#ECEEF1] font-medium w-32 shrink-0">Dolly in/out</span><span className="text-[#8B92A0]">Kamera öne/arkaya ilerliyor</span></div>
                  <div className="flex gap-3"><span className="text-[#ECEEF1] font-medium w-32 shrink-0">Drone rising</span><span className="text-[#8B92A0]">Yukarı doğru yükselen çekim</span></div>
                  <div className="flex gap-3"><span className="text-[#ECEEF1] font-medium w-32 shrink-0">Static shot</span><span className="text-[#8B92A0]">Sabit kamera, sadece konu hareket eder</span></div>
                </div>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">örnek</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  "Gece şehir manzarası, yüksek binalar, yavaş pan left, bokeh ışıklar, sinematik wide shot"
                </p>
              </div>
            </GuideSection>

            <GuideSection id="hatalar" title="Sık Yapılan Hatalar">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Hareketi belirtmemek — 'güzel sahne' yerine spesifik kamera ve konu hareketi tanımla." />
                <MistakeRow text="Metinli sahneler istemek — Kling metin/yazı içeren sahneleri doğru üretemez." />
                <MistakeRow text="10 saniyeden uzun video beklemek — Şu an maksimum 10 saniye, daha uzunu için klipleri birleştirmek gerekir." />
                <MistakeRow text="Yakın plan insan yüzü — Deformasyon riski var, uzak ve orta plan daha güvenli." />
              </div>
            </GuideSection>

            <GuideSection id="ozet" title="Hızlı Özet">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="En iyi olduğu yer" value="Kısa video klipler, ürün çekimi, doğa sahneleri" />
                <SummaryRow label="Zayıf olduğu yer" value="Uzun video, ses, metin içerikli sahneler" />
                <SummaryRow label="Ücretsiz mi?" value="Günlük sınırlı kredi ücretsiz" />
                <SummaryRow label="Başlangıç fiyatı" value="$7/ay'dan başlıyor" />
                <SummaryRow label="En güçlü özellik" value="Hareket fiziği + kamera kontrolü" />
              </div>
            </GuideSection>

            <div id="dene" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — şimdi dene</p>
              <InlinePromptBox targetAI="Kling 3.0" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
