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
  title: "Claude Rehberi — Wrompt",
  description: "Claude ne yapar, güçlü/zayıf yönleri, verimli kullanım ipuçları ve dikkat edilmesi gerekenler.",
};

export default function ClaudeRehberi() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/rehberler" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← Tüm rehberler
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#D97757] flex items-center justify-center">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg" alt="" className="w-4 h-4 invert" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">Claude Rehberi</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-10 max-w-xl">
          Anthropic'in asistanını en verimli şekilde kullanman için bilmen gereken her şey.
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
            <GuideSection id="nedir" title="Claude Nedir?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Claude, yapay zeka güvenliğine odaklanan Anthropic şirketinin geliştirdiği sohbet
                asistanı. Adını bilgi teorisinin öncülerinden Claude Shannon'dan alıyor.{" "}
                <b className="text-[#ECEEF1] font-medium">"Constitutional AI"</b> adında, modelin
                kendi çıktısını önceden tanımlanmış ilkelere göre denetlediği bir yaklaşımla eğitiliyor.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                <b className="text-[#ECEEF1] font-medium">claude.ai</b> (web), masaüstü ve mobil
                uygulamalar üzerinden erişilebiliyor. Özellikle uzun döküman analizi, kod yazma ve
                yapılandırılmış yazı işlerinde tercih ediliyor.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">model ailesi</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Haiku</span>
                    <span className="text-[#8B92A0] text-right">En hızlı, basit/yüksek hacimli işler</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Sonnet</span>
                    <span className="text-[#8B92A0] text-right">Günlük kullanım için denge noktası</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Opus</span>
                    <span className="text-[#8B92A0] text-right">En güçlü, karmaşık analiz/kod</span>
                  </div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="guclu-zayif" title="Güçlü ve Zayıf Yönleri">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">güçlü</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Geniş bağlam penceresi — uzun döküman/kod tabanını unutmadan işliyor</li>
                    <li>Kodlama ve yapılandırılmış görevlerde tutarlılık</li>
                    <li>Artifacts ile kod/taslak/özet gibi içerikleri ayrı bir pencerede düzenleme</li>
                    <li>Güvenlik odaklı yaklaşım, kurumsal ortamlarda güven veriyor</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">zayıf</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Ücretsiz planda günlük sınıra ulaşınca tamamen kullanılamaz hale geliyor</li>
                    <li>Görsel/video üretemiyor — sadece analiz edebiliyor</li>
                    <li>Bazı sınır durumlarda istekleri temkinli şekilde reddedebiliyor</li>
                    <li>Eklenti/üçüncü taraf ekosistemi ChatGPT'ye göre daha sınırlı</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="verimli-kullanim" title="Daha Verimli Nasıl Kullanılır">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                Claude, örnek verdiğinde onu taklit etme konusunda güçlü. Aşağıdaki üç senaryoda,
                aynı isteğin zayıf ve güçlü versiyonlarının nasıl farklı sonuçlar ürettiğine bak.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Senaryo 1 — Sözleşme analizi"
                  weak={`"Bu sözleşmeyi incele."`}
                  strong={`"Bu kira sözleşmesini incele, kiracı için riskli olabilecek maddeleri madde numarasıyla listele, her biri için kısa bir açıklama ekle."`}
                  weakResult="Genel bir özet, hangi maddelerin riskli olduğu net değil."
                  strongResult="Madde numaralarıyla işaretlenmiş, doğrudan aksiyon alınabilir bir risk listesi."
                />
                <PromptExample
                  scenario="Senaryo 2 — Kod inceleme"
                  weak={`"Bu kodu kontrol et."`}
                  strong={`"Bu Python dosyasındaki güvenlik açıklarını ve performans sorunlarını ayrı ayrı listele, her biri için bir çözüm öner."`}
                  weakResult="Yüzeysel bir 'kod temiz görünüyor' yorumu."
                  strongResult="Güvenlik ve performans ayrı başlıklarda, çözüm önerili somut bir liste."
                />
                <PromptExample
                  scenario="Senaryo 3 — Uzun rapor özeti"
                  weak={`"Bu raporu özetle."`}
                  strong={`"Bu 40 sayfalık raporu, yönetim kurulu için 5 maddelik bir aksiyon listesine indir, her madde tek cümle olsun."`}
                  weakResult="Genel uzunlukta, kullanışsız bir özet."
                  strongResult="Doğrudan sunulabilir, 5 maddelik net bir aksiyon listesi."
                />
              </div>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mt-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">bonus ipucu — artifacts</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed">
                  Kod, uzun bir taslak veya tablo istediğinde, Claude bunu otomatik olarak{" "}
                  <b className="text-[#ECEEF1] font-medium">Artifacts</b> penceresinde açar — sohbeti
                  kalabalıklaştırmadan içeriği düzenleyip kopyalayabilirsin.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="dikkat" title="Kullanırken Dikkat Edilmesi Gerekenler">
              <div className="flex flex-col gap-3">
                <WarningRow title="Ücretsiz sınırını planla" text="Ücretsiz planda günlük mesaj sınırına ulaşınca sohbet tamamen kilitleniyor. Kritik bir işin ortasındaysan bunu hesaba kat." />
                <WarningRow title="Görsel/video üretemiyor" text="Claude metin/kod/analiz odaklı. Görsel veya video üretimi için başka bir AI'a yönlenmen gerekir." />
                <WarningRow title="Reddedilen isteklere hazırlıklı ol" text="Güvenlik yaklaşımı nedeniyle bazı sınır durumlarda istekler temkinli karşılanabilir — isteğini netleştirmek genelde çözer." />
              </div>
            </GuideSection>

            <GuideSection id="davranis" title="Davranışını Özelleştirme">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Claude'un yanıt tonunu ve tarzını kalıcı olarak ayarlamak için{" "}
                <b className="text-[#ECEEF1] font-medium">Styles</b> özelliğini ve hesap
                tercihlerini kullanabilirsin.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">nasıl ayarlanır</p>
                <ol className="text-sm text-[#ECEEF1]/85 leading-relaxed list-decimal list-inside flex flex-col gap-1.5">
                  <li>claude.ai'da sağ üstten profiline tıkla → "Settings"</li>
                  <li>"Profile" veya "Preferences" sekmesine gir</li>
                  <li>Tercihlerini (ton, format, dikkat etmesi gerekenler) yaz</li>
                  <li>Sohbet ekranında "Styles" seçeneğinden de anlık ton değiştirebilirsin</li>
                </ol>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">örnek talimat metni</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  "Yanıtlarında gereksiz övgüyle başlama. Bir fikrimi değerlendirirken önce riskleri
                  ve eksik noktaları söyle, sonra çözüm öner."
                </p>
              </div>
            </GuideSection>

            <GuideSection id="sik-hatalar" title="Sık Yapılan Hatalar">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Görsel/video üretimi için Claude'a yönelmek — bu işler için başka bir AI gerekiyor." />
                <MistakeRow text="Ücretsiz plan sınırına yaklaştığını fark etmeden kritik bir işe başlamak." />
                <MistakeRow text="Belirsiz prompt yazıp 'neden örnek vermedi' diye şaşırmak — örnek istemen gerekiyor." />
                <MistakeRow text="Uzun içerikleri tek seferde isteyip, adım adım (önce taslak, sonra detay) ilerlemenin avantajını kullanmamak." />
                <MistakeRow text="Reddedilen bir isteği aynen tekrar denemek — isteği netleştirmek/bağlam eklemek çoğu zaman çözer." />
              </div>
            </GuideSection>

            <GuideSection id="ozet" title="Hızlı Özet">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="En iyi olduğu işler" value="Kod, uzun döküman analizi, yapılandırılmış yazı" />
                <SummaryRow label="Zayıf olduğu işler" value="Görsel/video üretimi" />
                <SummaryRow label="Ücretsiz mi?" value="Evet, günlük sınırla" />
                <SummaryRow label="Ücretli plan" value="Pro / Max / Team" />
                <SummaryRow label="Varsayılan model" value="Sonnet" />
              </div>
            </GuideSection>

            <div id="dene" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — şimdi dene</p>
              <InlinePromptBox targetAI="Claude Sonnet" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}