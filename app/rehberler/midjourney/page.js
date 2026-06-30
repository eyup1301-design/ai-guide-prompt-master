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
  { id: "davranis", label: "05 — Stilini özelleştirme" },
  { id: "sik-hatalar", label: "06 — Sık hatalar" },
  { id: "ozet", label: "07 — Özet" },
  { id: "dene", label: "08 — Şimdi dene" },
];

export const metadata = {
  title: "Midjourney Rehberi — Wrompt",
  description: "Midjourney ne yapar, güçlü/zayıf yönleri, verimli kullanım ipuçları ve dikkat edilmesi gerekenler.",
};

export default function MidjourneyRehberi() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/rehberler" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← Tüm rehberler
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#3B82F6] flex items-center justify-center overflow-hidden">
            <img src="https://www.midjourney.com/favicon.ico" alt="" className="w-6 h-6" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">Midjourney Rehberi</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-10 max-w-xl">
          En sanatsal görsel üretim aracını en verimli şekilde kullanman için bilmen gereken her şey.
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
            <GuideSection id="nedir" title="Midjourney Nedir?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Midjourney, metinden görsel üreten bir yapay zeka aracı — sohbet asistanlarından
                farklı olarak <b className="text-[#ECEEF1] font-medium">tek amaçlı</b>: sadece görsel
                üretiyor, sohbet etmiyor. Sanatsal/atmosferik kalitesiyle tanınıyor.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                <b className="text-[#ECEEF1] font-medium">midjourney.com</b> üzerinden web arayüzüyle
                veya Discord sunucusu üzerinden kullanılabiliyor. Şu an sürüm{" "}
                <b className="text-[#ECEEF1] font-medium">v7</b>.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">temel parametreler</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium font-mono">--ar</span>
                    <span className="text-[#8B92A0] text-right">En-boy oranı (örn. --ar 16:9)</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium font-mono">--stylize</span>
                    <span className="text-[#8B92A0] text-right">Sanatsal yorumlama derecesi</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium font-mono">--chaos</span>
                    <span className="text-[#8B92A0] text-right">Sonuçlardaki çeşitlilik</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium font-mono">--no</span>
                    <span className="text-[#8B92A0] text-right">İstemediğin öğeleri hariç tutma</span>
                  </div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="guclu-zayif" title="Güçlü ve Zayıf Yönleri">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">güçlü</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>En sanatsal/atmosferik sonuçlar, sinematik kalite</li>
                    <li>Stil referansı (--sref) ile tutarlı bir görsel kimlik koruma</li>
                    <li>Geniş parametre kontrolü — oran, stil, çeşitlilik</li>
                    <li>Büyük ve aktif bir kullanıcı/öğrenme topluluğu</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">zayıf</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Tamamen ücretli — ücretsiz deneme yok</li>
                    <li>Görsel içinde metin/yazı oluşturmakta hâlâ tutarsız olabiliyor</li>
                    <li>Parametre sözdizimini öğrenmek gerekiyor, başlangıçta öğrenme eğrisi var</li>
                    <li>Sohbet/iterasyon mantığı yok — her seferinde yeni bir istem yazmak gerekiyor</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="verimli-kullanim" title="Daha Verimli Nasıl Kullanılır">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                Midjourney'de detay her şeydir — stil, ışık ve kompozisyonu ayrı ayrı belirtmek,
                sonucu kökten değiştirir. Üç senaryoda farkı gör.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Senaryo 1 — Ürün görseli"
                  weak={`"Bir kahve fincanı çiz."`}
                  strong={`"Beyaz mermer zemin üzerinde seramik kahve fincanı, yumuşak sabah ışığı, minimalist stüdyo çekimi, --ar 1:1 --stylize 250"`}
                  weakResult="Rastgele bir fincan görseli, ürün fotoğrafı kalitesinde değil."
                  strongResult="Stüdyo kalitesinde, sosyal medyaya hazır bir ürün görseli."
                />
                <PromptExample
                  scenario="Senaryo 2 — Karakter tasarımı"
                  weak={`"Bir savaşçı çiz."`}
                  strong={`"Orta çağ zırhlı kadın savaşçı, dramatik yan ışık, fantastik konsept sanat tarzı, detaylı zırh dokusu, --ar 2:3 --stylize 500"`}
                  weakResult="Genel/klişe bir savaşçı görseli."
                  strongResult="Belirli bir tarz ve ışıkla, konsept sanat kalitesinde özgün bir karakter."
                />
                <PromptExample
                  scenario="Senaryo 3 — Logo/marka görseli"
                  weak={`"Bir logo yap."`}
                  strong={`"Minimalist tilki kafası logosu, geometrik çizgiler, tek renk turuncu, düz beyaz arka plan, vektör stil, --ar 1:1 --no gölge, doku"`}
                  weakResult="Karmaşık, logo olarak kullanılamayacak bir görsel."
                  strongResult="Sade, vektöre yakın, gerçekten logo olarak kullanılabilir bir sonuç."
                />
              </div>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mt-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">bonus ipucu — stil referansı</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed">
                  Beğendiğin bir görselin linkini, isteminin başına ekleyip sonuna{" "}
                  <b className="text-[#ECEEF1] font-medium">--sref [link]</b> yazarsan, yeni
                  görsellerin o görselin stilini taşımasını sağlayabilirsin.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="dikkat" title="Kullanırken Dikkat Edilmesi Gerekenler">
              <div className="flex flex-col gap-3">
                <WarningRow title="Görsellerin herkese açık olabileceğini bil" text="Standart planlarda ürettiğin görseller herkese açık galeride görünebilir. Gizlilik istiyorsan Pro/Mega plana geçip gizlilik modunu açman gerekiyor." />
                <WarningRow title="Ticari kullanım haklarını kontrol et" text="Hangi planda ticari kullanım hakkın olduğunu Midjourney'in güncel şartlarından doğrula, özellikle satışa sunacaksan." />
                <WarningRow title="Telif hakkı olan karakter/marka istemekten kaçın" text="Bilinen karakterleri/markaları doğrudan istemek hem sonuç kalitesini düşürür hem de telif riski taşır." />
              </div>
            </GuideSection>

            <GuideSection id="davranis" title="Stilini Özelleştirme">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Midjourney'de "davranış" değil ama <b className="text-[#ECEEF1] font-medium">görsel
                kimliğini</b> kalıcı olarak ayarlayabilirsin — her seferinde aynı stili elle
                tanımlamak zorunda kalmazsın.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">iki yöntem</p>
                <ol className="text-sm text-[#ECEEF1]/85 leading-relaxed list-decimal list-inside flex flex-col gap-1.5">
                  <li><b className="text-[#ECEEF1]">--sref</b>: belirli bir görselin stilini referans alır</li>
                  <li><b className="text-[#ECEEF1]">--p</b> (Personalization): kendi beğeni geçmişine dayalı kişisel bir profil oluşturur, kodu her isteminin sonuna ekleyebilirsin</li>
                </ol>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">örnek kullanım</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  "minimalist logo tasarımı, geometrik şekiller --p [kişisel kodun] --ar 1:1"
                </p>
              </div>
            </GuideSection>

            <GuideSection id="sik-hatalar" title="Sık Yapılan Hatalar">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Tek bir istemde çok fazla, birbiriyle çelişen detay sıkıştırmak — model karışır." />
                <MistakeRow text="Parametreleri yanlış sırada/formatta yazmak (örn. --ar'ı istemin ortasına yazmak)." />
                <MistakeRow text="Ücretsiz deneme aramak — Midjourney'de bu yok, baştan plan seçmek gerekiyor." />
                <MistakeRow text="Görsel içine okunabilir uzun metin/yazı eklemeye çalışmak." />
                <MistakeRow text="Stil/ışık/kompozisyonu belirtmeden 'daha iyi' bir sonuç beklemek." />
              </div>
            </GuideSection>

            <GuideSection id="ozet" title="Hızlı Özet">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="En iyi olduğu işler" value="Sanatsal/atmosferik görsel, konsept sanat" />
                <SummaryRow label="Zayıf olduğu işler" value="Görsel içinde metin, sohbet/iterasyon" />
                <SummaryRow label="Ücretsiz mi?" value="Hayır, tamamen ücretli" />
                <SummaryRow label="Başlangıç fiyatı" value="$10/ay" />
                <SummaryRow label="Güncel sürüm" value="v7" />
              </div>
            </GuideSection>

            <div id="dene" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — şimdi dene</p>
              <InlinePromptBox targetAI="Midjourney v7" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}