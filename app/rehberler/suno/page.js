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
  { id: "davranis", label: "05 — Stil belirleme" },
  { id: "hatalar", label: "06 — Sık yapılan hatalar" },
  { id: "ozet", label: "07 — Özet" },
  { id: "dene", label: "08 — Şimdi dene" },
];

export const metadata = {
  title: "Suno AI Rehberi — Wrompt",
  description: "Suno AI ne yapar, güçlü/zayıf yönleri, müzik üretme ipuçları ve dikkat edilmesi gerekenler.",
};

export default function SunoRehberi() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/rehberler" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← Tüm rehberler
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#A855F7] flex items-center justify-center">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/suno.svg" alt="" className="w-4 h-4 invert" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">Suno AI Rehberi</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-5 max-w-xl">
          Sözlü şarkı üretiminde pazar lideri yapay zeka müzik aracı.
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
            <GuideSection id="nedir" title="Suno AI Nedir?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Suno AI, metin açıklamasından <b className="text-[#ECEEF1] font-medium">vokal + enstrüman içeren tam şarkılar</b> üreten bir yapay zeka aracıdır. Sözleri sen yazabilir veya AI'a yazdırabilirsin; müzik tarzını, tempoyu ve ruh halini belirlersin.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                Pop, rock, türkü, rap, lo-fi dahil onlarca türde şarkı üretiyor. Günde sınırlı ücretsiz kredi ile denenebilir.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">prompt parametreleri</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Tür / stil</span>
                    <span className="text-[#8B92A0] text-right">pop, rock, jazz, türkü, trap...</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Ruh hali</span>
                    <span className="text-[#8B92A0] text-right">melankolik, enerjik, romantik...</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Tempo</span>
                    <span className="text-[#8B92A0] text-right">yavaş, orta, hızlı</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Vokal cinsiyet</span>
                    <span className="text-[#8B92A0] text-right">kadın, erkek, karma</span>
                  </div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="guclu-zayif" title="Güçlü ve Zayıf Yönler">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">güçlü yönler</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Vokalli şarkı üretiminde rakipsiz kalite</li>
                    <li>Geniş tür ve dil desteği, Türkçe de çalışır</li>
                    <li>Kendi şarkı sözlerini girerek özel içerik üretilebilir</li>
                    <li>Hızlı üretim — dakikalar içinde tamamlanmış şarkı</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">zayıf yönler</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Ücretsiz kota kısıtlı, sınırsız için ücretli plan gerekli</li>
                    <li>Türkçe şarkı sözü telaffuzu bazen bozulabilir</li>
                    <li>Üretilen müzik üzerinde ince ayar yapmak zor</li>
                    <li>Ticari kullanım hakları plan türüne göre değişiyor</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="verimli-kullanim" title="Nasıl Daha Verimli Kullanılır?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                Suno'da en iyi sonucu almak için stil, ruh hali ve şarkı sözü temasını ayrı ayrı belirt. Belirsiz promptlar jenerik müzik üretir.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Senaryo 1 — Sosyal medya için enerjik şarkı"
                  weak={`"Enerjik bir şarkı yap"`}
                  strong={`"Upbeat pop, kadın vokal, 120 BPM, motivasyon temalı İngilizce şarkı sözleri, elektro gitarla destekli"`}
                  weakResult="Jenerik, tahmin edilebilir çıktı."
                  strongResult="Spesifik, kullanılabilir sosyal medya içeriği."
                />
                <PromptExample
                  scenario="Senaryo 2 — Türkçe duygusal şarkı"
                  weak={`"Türkçe hüzünlü şarkı"`}
                  strong={`"Türkçe, akustik gitar, yavaş tempo, melankolik kadın vokal, ayrılık temalı şarkı sözleri: 'Gitti giden, kaldı kalan...'"`}
                  weakResult="Ağır aksanlı, tür belirsiz çıktı."
                  strongResult="Belirtilen sözlerle, doğru ruh halinde şarkı."
                />
              </div>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mt-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">ipucu — özel mod</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed">
                  Suno&apos;da &ldquo;Custom Mode&rdquo;u açarak şarkı sözlerini, başlığı ve stil açıklamasını ayrı ayrı girebilirsin. Bu mod çok daha kontrollü sonuç verir.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="dikkat" title="Dikkat Edilmesi Gerekenler">
              <div className="flex flex-col gap-3">
                <WarningRow title="Ticari kullanım hakları" text="Ücretsiz planda oluşturulan müzikler ticari kullanım için uygun olmayabilir. Plan sayfasını kontrol et." />
                <WarningRow title="Telif hakkı içeren stil referansları" text="'Tarkan tarzı' veya bilinen sanatçı isimleri yazmak hem telif riski taşır hem kaliteyi düşürür." />
                <WarningRow title="Türkçe şarkı sözü telaffuzu" text="Uzun ve karmaşık Türkçe metinlerde vokal bozulabilir. Kısa ve sade cümleler tercih et." />
              </div>
            </GuideSection>

            <GuideSection id="davranis" title="Stil ve Ses Belirleme">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Suno&apos;da tutarlı bir ses kimliği oluşturmak için aynı stil parametrelerini tekrar kullanabilirsin. Bir şablon oluşturup tüm üretimlerinde baz alabilirsin.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">şablon yapısı</p>
                <ol className="text-sm text-[#ECEEF1]/85 leading-relaxed list-decimal list-inside flex flex-col gap-1.5">
                  <li><b className="text-[#ECEEF1]">Tür:</b> ana müzik tarzı (pop, rock, jazz...)</li>
                  <li><b className="text-[#ECEEF1]">Alt tür:</b> daha spesifik stil (indie pop, lo-fi hip hop...)</li>
                  <li><b className="text-[#ECEEF1]">Ruh hali:</b> duygusal ton (melankoli, neşe, gerilim...)</li>
                  <li><b className="text-[#ECEEF1]">Enstrüman:</b> öne çıkan çalgı(lar)</li>
                  <li><b className="text-[#ECEEF1]">Vokal:</b> cinsiyet, ton, dil</li>
                </ol>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">örnek şablon</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  "Indie pop, akustik gitar + hafif synth, nostaljik-mutlu ruh hali, yumuşak kadın vokal, İngilizce"
                </p>
              </div>
            </GuideSection>

            <GuideSection id="hatalar" title="Sık Yapılan Hatalar">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Sadece ruh hali yazmak — 'hüzünlü şarkı' yerine tür, vokal ve enstrüman da belirt." />
                <MistakeRow text="Çok uzun şarkı sözleri girmek — Suno kısa ve ritmik metinleri daha iyi işler." />
                <MistakeRow text="Sanatçı ismi yazmak — 'Billie Eilish tarzı' gibi ifadeler telif sorunu yaratabilir." />
                <MistakeRow text="İlk çıktıda tatmin olmayıp vazgeçmek — 2-3 farklı prompt dene, her seferinde farklı sonuç gelir." />
              </div>
            </GuideSection>

            <GuideSection id="ozet" title="Hızlı Özet">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="En iyi olduğu yer" value="Vokalli şarkı üretimi, içerik müziği" />
                <SummaryRow label="Zayıf olduğu yer" value="Türkçe telaffuz, ince stil ayarı" />
                <SummaryRow label="Ücretsiz mi?" value="Günlük sınırlı kredi ücretsiz" />
                <SummaryRow label="Başlangıç fiyatı" value="$10/ay" />
                <SummaryRow label="En güçlü özellik" value="Gerçekçi vokalli şarkı" />
              </div>
            </GuideSection>

            <div id="dene" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — şimdi dene</p>
              <InlinePromptBox targetAI="Suno AI" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
