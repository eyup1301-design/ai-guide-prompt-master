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
  { id: "guclu-zayif", label: "02 — Güçlü/zayıf" },
  { id: "verimli-kullanim", label: "03 — Verimli kullanım" },
  { id: "dikkat", label: "04 — Dikkat et" },
  { id: "davranis", label: "05 — Davranış" },
  { id: "sik-hatalar", label: "06 — Sık hatalar" },
  { id: "ozet", label: "07 — Özet" },
  { id: "dene", label: "08 — Şimdi dene" },
];

export const metadata = {
  title: "Gemini Rehberi — Wrompt",
  description: "Gemini ne yapar, güçlü/zayıf yönleri, verimli kullanım ipuçları ve dikkat edilmesi gerekenler.",
};

export default function GeminiRehberi() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/rehberler" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← Tüm rehberler
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#1C69FF] flex items-center justify-center">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlegemini.svg" alt="" className="w-4 h-4 invert" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">Gemini Rehberi</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-10 max-w-xl">
          Google'ın yapay zeka modelini en verimli şekilde kullanman için bilmen gereken her şey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8">
          <nav className="hidden md:flex flex-col gap-1 sticky top-8 self-start">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-xs text-[#8B92A0] hover:text-[#FF9F4A] py-1.5 transition-colors">
                {s.label}
              </a>
            ))}
          </nav>

          <nav className="md:hidden flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-xs text-[#8B92A0] whitespace-nowrap border border-[#2A2F38] rounded-full px-3 py-1.5">
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-14 min-w-0">
            <GuideSection id="nedir" title="Gemini Nedir?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Gemini, Google'ın geliştirdiği yapay zeka modeli ve bu modeli kullanan sohbet asistanı.
                Diğer modellerden farklı olarak <b className="text-[#ECEEF1] font-medium">doğuştan multimodal</b> —
                metin, görsel, ses ve videoyu ayrı parçalar birleştirerek değil, baştan beraber işliyor.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                Gemini'ye şu yerlerden erişebilirsin: <b className="text-[#ECEEF1] font-medium">gemini.google.com</b> (web),
                Gemini mobil uygulaması, Android telefonlarda yerleşik asistan olarak, ve Google Workspace içinde
                (Gmail, Docs, Sheets).
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">model ailesi</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Flash-Lite</span>
                    <span className="text-[#8B92A0] text-right">Hızlı, basit görevler</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Flash</span>
                    <span className="text-[#8B92A0] text-right">Varsayılan model, hız/güç dengesi</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Pro</span>
                    <span className="text-[#8B92A0] text-right">Karmaşık akıl yürütme, kod, matematik</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Ultra</span>
                    <span className="text-[#8B92A0] text-right">En güçlü, pahalı pakete kilitli</span>
                  </div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="guclu-zayif" title="Güçlü ve Zayıf Yönleri">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">güçlü</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>1-2 milyon token'lık devasa bağlam penceresi</li>
                    <li>Gerçek multimodal — görsel, ses, video, kod aynı anda</li>
                    <li>Google ekosistemiyle derin entegrasyon</li>
                    <li>Geniş ücretsiz erişim</li>
                    <li>Türkçe desteği güçlü</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">zayıf</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Bazı kodlama testlerinde rakiplerin gerisinde kalabiliyor</li>
                    <li>Gereğinden uzun, madde işaretli yanıt verme eğiliminde</li>
                    <li>En güçlü özellikler pahalı Ultra pakette kilitli</li>
                    <li>Görsel/videolarda zorunlu filigran var</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="verimli-kullanim" title="Daha Verimli Nasıl Kullanılır">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                Gemini'ye ne kadar fazla bağlam verirsen, o kadar isabetli yanıt alırsın. Aşağıdaki üç senaryoda,
                aynı isteğin zayıf ve güçlü versiyonlarının nasıl <b className="text-[#ECEEF1] font-medium">farklı sonuçlar</b> ürettiğine bak.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Senaryo 1 — Rapor yazdırma"
                  weak={`"Bir rapor yaz."`}
                  strong={`"B2B SaaS şirketim için Q1 2026 satış performansını analiz eden, yönetim kuruluna sunulacak bir rapor yaz. Ton profesyonel ve veri odaklı olsun."`}
                  weakResult="Genel geçer, kullanılamayacak kadar yüzeysel bir şablon."
                  strongResult="Q1 verilerine atıfta bulunan, yönetim kurulu diline uygun somut bir taslak."
                />
                <PromptExample
                  scenario="Senaryo 2 — Kod yazdırma"
                  weak={`"Bir Python fonksiyonu yaz."`}
                  strong={`"CSV dosyasındaki 'fiyat' sütununun boş değerlerini 0 ile dolduran Python fonksiyonu yaz. pandas kullan, try/except ekle."`}
                  weakResult="Rastgele bir 'merhaba dünya' seviyesinde örnek."
                  strongResult="pandas ile çalışan, hata yönetimi olan, doğrudan kullanılabilir fonksiyon."
                />
                <PromptExample
                  scenario="Senaryo 3 — Araştırma"
                  weak={`"İklim değişikliği hakkında bilgi ver."`}
                  strong={`"Son 5 yıldaki iklim politikalarını, Türkiye tarımına etkisi açısından özetle, madde madde."`}
                  weakResult="Ansiklopedik, çok genel bir özet."
                  strongResult="Türkiye tarımına odaklanan, doğrudan kullanılabilir bir özet."
                />
              </div>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mt-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">bonus ipucu — gems</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed">
                  Aynı tarz görevi sık tekrarlıyorsan, Gemini Advanced'de <b className="text-[#ECEEF1] font-medium">"Gems"</b> ile
                  kendi özel asistanını oluşturabilirsin.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="dikkat" title="Kullanırken Dikkat Edilmesi Gerekenler">
              <div className="flex flex-col gap-3">
                <WarningRow title="Bilgiyi her zaman doğrula" text="Özellikle sayısal, hukuki, mali konularda çıktıyı dış kaynaklarla kontrol et." />
                <WarningRow title="Kullanım sınırların var" text="Her 5 saatte bir yenilenen bir kota var. Sınıra ulaşırsan Flash-Lite ile devam edebilirsin." />
                <WarningRow title="Gizlilik ayarlarını kontrol et" text="Gemini geçmiş sohbetlerini kullanabiliyor. Hassas bilgi paylaşmak istemiyorsan bu özelliği kapatabilirsin." />
              </div>
            </GuideSection>

            <GuideSection id="davranis" title="Davranışını Özelleştirme">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Gemini'ye bir fikir sorduğunda hep <i>"harika fikir!"</i> mi duyuyorsun? Bunu kalıcı olarak değiştirebilirsin.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">nasıl ayarlanır</p>
                <ol className="text-sm text-[#ECEEF1]/85 leading-relaxed list-decimal list-inside flex flex-col gap-1.5">
                  <li>gemini.google.com'a gir</li>
                  <li>"Ayarlar ve Yardım" → "Kişisel Zeka" (yoksa "Kişisel Bağlam")</li>
                  <li>"Gemini için talimatlar" → "Ekle (+)"</li>
                  <li>Talimatını yaz, gönder</li>
                </ol>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">örnek talimat metni</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  "Fikirlerimi değerlendirirken önce riskleri ve zayıf noktaları söyle. Beni rahatlatmaya çalışma, doğrudan ve yapıcı ol."
                </p>
              </div>
            </GuideSection>

            <GuideSection id="sik-hatalar" title="Sık Yapılan Hatalar">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Her görevi Gemini'ye yaptırmaya çalışmak — bazı işlerde başka bir AI daha iyi sonuç verir." />
                <MistakeRow text="Promptu çok kısa/belirsiz yazıp 'neden iyi sonuç alamıyorum' diye şaşırmak." />
                <MistakeRow text="Üretilen bilgiyi doğrulamadan kullanmak." />
                <MistakeRow text="Hassas/kişisel bilgileri sohbette paylaşıp gizlilik ayarlarını kontrol etmemek." />
                <MistakeRow text="Kullanım sınırına yaklaştığını fark etmemek." />
              </div>
            </GuideSection>

            <GuideSection id="ozet" title="Hızlı Özet">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="En iyi olduğu işler" value="Uzun döküman, multimodal analiz" />
                <SummaryRow label="Zayıf olduğu işler" value="Kısa/öz yanıt, bazı kodlama görevleri" />
                <SummaryRow label="Ücretsiz mi?" value="Evet, çoğu özellik ücretsiz" />
                <SummaryRow label="Ücretli plan" value="Google AI Pro / Ultra" />
                <SummaryRow label="Varsayılan model" value="Gemini Flash" />
              </div>
            </GuideSection>

            <div id="dene" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — şimdi dene</p>
              <InlinePromptBox targetAI="Gemini 2.5 Pro" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}