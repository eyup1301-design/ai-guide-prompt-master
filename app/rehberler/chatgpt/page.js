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
  title: "ChatGPT Rehberi — Wrompt",
  description: "ChatGPT ne yapar, güçlü/zayıf yönleri, verimli kullanım ipuçları ve dikkat edilmesi gerekenler.",
};

export default function ChatGPTRehberi() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/rehberler" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← Tüm rehberler
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#10A37F] flex items-center justify-center">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" alt="" className="w-4 h-4 invert" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">ChatGPT Rehberi</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-10 max-w-xl">
          OpenAI'ın asistanını en verimli şekilde kullanman için bilmen gereken her şey.
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
            <GuideSection id="nedir" title="ChatGPT Nedir?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                ChatGPT, OpenAI'ın geliştirdiği sohbet asistanı — yapay zeka sohbet botları
                kategorisinin öncüsü ve en bilinen ismi. 2026 itibarıyla{" "}
                <b className="text-[#ECEEF1] font-medium">GPT-5 ailesi</b> modelleriyle çalışıyor;
                eski GPT-4o ve o1 Pro modelleri kullanımdan kaldırıldı.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                <b className="text-[#ECEEF1] font-medium">chatgpt.com</b> (web), masaüstü ve mobil
                uygulamalar üzerinden erişilebiliyor. Sesli mod, görsel yükleme ve fotoğraf çekip
                analiz ettirme gibi multimodal özellikleri var.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">plan ailesi</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Free</span>
                    <span className="text-[#8B92A0] text-right">Temel kullanım, sınırlı</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Go ($6/ay)</span>
                    <span className="text-[#8B92A0] text-right">Free ile Plus arası köprü</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Plus ($20/ay)</span>
                    <span className="text-[#8B92A0] text-right">Projects, Tasks, özel GPT'ler</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Pro ($120/ay)</span>
                    <span className="text-[#8B92A0] text-right">En yüksek kota, en güçlü model</span>
                  </div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="guclu-zayif" title="Güçlü ve Zayıf Yönleri">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">güçlü</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Geniş eklenti/özelleştirme ekosistemi (özel GPT'ler, Projects, Canvas)</li>
                    <li>Yaratıcı yazarlık ve çok yönlü sohbette güçlü</li>
                    <li>En yaygın topluluk desteği, en çok kaynak/eğitim materyali</li>
                    <li>Sesli mod ve mobilde fotoğraf analizi pratik</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">zayıf</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Bağlam penceresi Gemini/Claude'a göre daha küçük</li>
                    <li>En güçlü özellikler (Projects, Tasks, özel GPT) ücretsiz planda yok</li>
                    <li>Search modu açık değilse güncel bilgi yerine eski/hatalı bilgi verebiliyor</li>
                    <li>Sesli modda kritik bilgilerde hata payı daha yüksek</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="verimli-kullanim" title="Daha Verimli Nasıl Kullanılır">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                ChatGPT'nin ilk cevabı bir taslaktır — devam talimatlarıyla (örn. "daha kısa yap",
                "daha teknik anlat") iyileştirmek normal bir kullanım şekli. Ama doğru baştan yazmak
                bu döngüyü kısaltır.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Senaryo 1 — Pazarlama metni"
                  weak={`"Bir reklam metni yaz."`}
                  strong={`"30-45 yaş arası, teknolojiyle tanışık ama uzman olmayan bir kitleye yönelik, 800 kelimelik, sade dilli, SEO odaklı bir blog yazısı yaz."`}
                  weakResult="Hangi ürün/kitle olduğu belirsiz, jenerik bir reklam dili."
                  strongResult="Hedef kitleye uygun ton ve uzunlukta, doğrudan yayınlanabilir bir taslak."
                />
                <PromptExample
                  scenario="Senaryo 2 — Müşteri mesajı"
                  weak={`"Müşteriye mesaj yaz."`}
                  strong={`"Müşteriye kargosunun 2 gün geciktiğini açıklayan, özür içeren ama profesyonel bir WhatsApp mesajı yaz."`}
                  weakResult="Hangi durum, hangi ton olduğu belirsiz, kullanılamaz."
                  strongResult="Duruma özel, doğru tonda, doğrudan gönderilebilir bir mesaj."
                />
                <PromptExample
                  scenario="Senaryo 3 — Akademik taslak"
                  weak={`"Bana bir araştırma yazısı yaz."`}
                  strong={`"Sürdürülebilir tarım üzerine bir araştırma projesi hazırlayacağım. Önce giriş, literatür taraması, yöntem, bulgular, sonuç bölümlerinden oluşan bir plan oluştur."`}
                  weakResult="Konusu belirsiz, akademik standartlara uymayan genel bir metin."
                  strongResult="Net bölüm yapısıyla, doğrudan üzerine çalışılabilir bir taslak plan."
                />
              </div>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mt-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">bonus ipucu — projects</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed">
                  Aynı konuda birden fazla sohbet yürütüyorsan (Plus ve üzeri), <b className="text-[#ECEEF1] font-medium">Projects</b> özelliğiyle
                  ilgili sohbetleri, dosyaları ve talimatları tek bir klasörde topla — her seferinde bağlamı baştan anlatmana gerek kalmaz.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="dikkat" title="Kullanırken Dikkat Edilmesi Gerekenler">
              <div className="flex flex-col gap-3">
                <WarningRow title="Search modunu unutma" text="Güncel bilgi istiyorsan Search açık olmadan sormak, çoğu zaman eski veya hatalı bilgi getirir." />
                <WarningRow title="Bellek ve gizlilik ayarlarını bil" text="ChatGPT geçmiş sohbetlerden bilgi hatırlayabiliyor. Hassas bilgi paylaşmak istemiyorsan bellek ayarlarını kapatabilirsin." />
                <WarningRow title="Görev çıktılarını takip et" text="Tasks/otomasyon özelliği kullanıyorsan, 'doğru çalıştığı varsayımıyla' devam etmek hata birikimine yol açabilir." />
              </div>
            </GuideSection>

            <GuideSection id="davranis" title="Davranışını Özelleştirme">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                ChatGPT'ye her seferinde "kısa cevap ver", "Türkçe yanıtla" gibi komutları tekrar
                yazmak istemiyorsan, <b className="text-[#ECEEF1] font-medium">Özel Talimatlar</b>{" "}
                ile kalıcı bir tercih seti tanımlayabilirsin.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">nasıl ayarlanır</p>
                <ol className="text-sm text-[#ECEEF1]/85 leading-relaxed list-decimal list-inside flex flex-col gap-1.5">
                  <li>Sol altta profil simgesine tıkla → "Kişiselleştirme"</li>
                  <li>"Özelleştirmeyi Etkinleştir"i AÇIK yap</li>
                  <li>İki kutuyu doldur: "kim olduğun" ve "nasıl yanıt vermesini istediğin"</li>
                  <li>Kaydet — tüm sohbetlere hemen uygulanır</li>
                </ol>
                <p className="text-xs text-[#8B92A0] mt-3 leading-relaxed">
                  ⚠️ Her iki kutu için 1500 karakter sınırı var. Şifre, kredi kartı veya gizli ticari
                  bilgi yazma — bu alan tamamen güvenli bir kasa değil.
                </p>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">örnek talimat metni</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  "Yanıtlarında beni onaylamaya çalışma. Fikrimin zayıf noktalarını doğrudan söyle,
                  varsayımları sorgula. Kısa ve öz yaz, gereksiz madde işareti kullanma."
                </p>
              </div>
            </GuideSection>

            <GuideSection id="sik-hatalar" title="Sık Yapılan Hatalar">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Çok genel istem vermek — kimin için, ne amaçla, hangi uzunlukta belirtmemek." />
                <MistakeRow text="İlk cevapla yetinmek — devam talimatlarıyla iyileştirmeyi denememek." />
                <MistakeRow text="Güncel bilgi gerektiren sorularda Search modunu açmayı unutmak." />
                <MistakeRow text="Özel talimatlara hassas/gizli bilgi yazmak." />
                <MistakeRow text="Otomasyon (Tasks) çıktılarını kontrol etmeden güvenmek." />
              </div>
            </GuideSection>

            <GuideSection id="ozet" title="Hızlı Özet">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="En iyi olduğu işler" value="Yaratıcı yazarlık, genel sohbet, sesli kullanım" />
                <SummaryRow label="Zayıf olduğu işler" value="Çok uzun döküman analizi" />
                <SummaryRow label="Ücretsiz mi?" value="Evet, sınırlı kullanım" />
                <SummaryRow label="Ücretli plan" value="Go / Plus / Pro" />
                <SummaryRow label="Varsayılan model" value="GPT-5 ailesi" />
              </div>
            </GuideSection>

            <div id="dene" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — şimdi dene</p>
              <InlinePromptBox targetAI="GPT-5" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}