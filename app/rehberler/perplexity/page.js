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
  { id: "davranis", label: "05 — Özelleştirme" },
  { id: "hatalar", label: "06 — Sık yapılan hatalar" },
  { id: "ozet", label: "07 — Özet" },
  { id: "dene", label: "08 — Şimdi dene" },
];

export const metadata = {
  title: "Perplexity Rehberi — Wrompt",
  description: "Perplexity ne yapar, güçlü/zayıf yönleri, verimli kullanım ipuçları ve dikkat edilmesi gerekenler.",
};

export default function PerplexityRehberi() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/rehberler" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← Tüm rehberler
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#14B8A6] flex items-center justify-center">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/perplexity.svg" alt="" className="w-4 h-4 invert" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">Perplexity Rehberi</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-5 max-w-xl">
          Gerçek zamanlı web aramasını yapay zeka ile birleştiren arama motoru.
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
            <GuideSection id="nedir" title="Perplexity Nedir?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Perplexity, <b className="text-[#ECEEF1] font-medium">gerçek zamanlı web araması</b> yapan ve bulduğu bilgileri yapay zeka ile özetleyen bir araştırma aracıdır. Google'dan farklı olarak sana link listesi değil, <b className="text-[#ECEEF1] font-medium">kaynaklı özet</b> verir.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                Her yanıtın altında kaynaklar listelenir — bilginin nereden geldiğini her zaman görebilirsin. Güncel bilgi gerektiren araştırmalar için vazgeçilmez.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">temel özellikler</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Gerçek zamanlı arama</span>
                    <span className="text-[#8B92A0] text-right">Güncel web kaynaklarını tarar</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Kaynak gösterme</span>
                    <span className="text-[#8B92A0] text-right">Her bilginin kaynağını listeler</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Odaklanmış arama</span>
                    <span className="text-[#8B92A0] text-right">Akademik, haber, Reddit gibi filtreler</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Takip soruları</span>
                    <span className="text-[#8B92A0] text-right">Konuyu derinleştirmek için öneriler</span>
                  </div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="guclu-zayif" title="Güçlü ve Zayıf Yönler">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">güçlü yönler</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Güncel bilgiye erişim — ChatGPT'nin bilgi kesim tarihi sorunu yok</li>
                    <li>Her yanıtta kaynak gösterimi, bilgi doğrulanabilir</li>
                    <li>Akademik makaleler, haberler, Reddit gibi odaklanmış arama</li>
                    <li>Temel kullanım tamamen ücretsiz</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">zayıf yönler</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Yaratıcı görevlerde (metin yazma, kod) ChatGPT/Claude kadar güçlü değil</li>
                    <li>Türkçe kaynak kalitesi İngilizce'ye göre düşük</li>
                    <li>Uzun belge analizi yapamaz</li>
                    <li>Görsel üretme veya dosya yükleme desteği sınırlı</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="verimli-kullanim" title="Nasıl Daha Verimli Kullanılır?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                Perplexity'de en iyi sonucu almak için soruyu net ve spesifik sor. Geniş sorular yerine odaklı sorular çok daha kaliteli kaynak getirir.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Senaryo 1 — Güncel haber araştırması"
                  weak={`"Yapay zeka haberleri"`}
                  strong={`"2025 yılında yapay zeka düzenlemeleri konusunda AB'nin aldığı son kararlar nelerdir?"`}
                  weakResult="Genel ve karışık sonuçlar, güncel olmayabilir."
                  strongResult="Tarih filtrelenmiş, kaynaklı, özet bilgi."
                />
                <PromptExample
                  scenario="Senaryo 2 — Akademik araştırma"
                  weak={`"Uyku araştırmaları"`}
                  strong={`"Uyku yoksunluğunun bilişsel performansa etkisi konusunda son 3 yıldaki peer-reviewed çalışmalar"`}
                  weakResult="Akademik olmayan genel içerik karışabilir."
                  strongResult="Akademik filtreli, güvenilir kaynaklı özet."
                />
                <PromptExample
                  scenario="Senaryo 3 — Fiyat/karşılaştırma araştırması"
                  weak={`"En iyi laptop"`}
                  strong={`"2025'te 1500-2000$ arasında programlama için en iyi laptoplar, güncel fiyatlar ve kullanıcı yorumları"`}
                  weakResult="Eski bilgiler, bağlam yok."
                  strongResult="Güncel fiyatlar, kaynaklı karşılaştırma."
                />
              </div>
            </GuideSection>

            <GuideSection id="dikkat" title="Dikkat Edilmesi Gerekenler">
              <div className="flex flex-col gap-3">
                <WarningRow title="Kaynaklara bak, körü körüne güvenme" text="Perplexity kaynak gösterse de bazen yanlış yorumlama yapabilir. Kritik bilgileri kaynağa giderek doğrula." />
                <WarningRow title="Türkçe içerikte kaynak kalitesi düşebilir" text="İngilizce aramalarda çok daha zengin ve güvenilir kaynaklara ulaşırsın. Mümkünse İngilizce sor." />
                <WarningRow title="Pro özellikler ücretli" text="Gelişmiş modeller (Claude, GPT-4), dosya yükleme ve derin araştırma modu Pro planla geliyor ($20/ay)." />
              </div>
            </GuideSection>

            <GuideSection id="davranis" title="Odaklanmış Arama Filtreleri">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Perplexity'de arama yapılacak kaynağı daraltabilirsin. Bu özelliği kullanmak sonuç kalitesini ciddi artırır.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">arama filtreleri</p>
                <ol className="text-sm text-[#ECEEF1]/85 leading-relaxed list-decimal list-inside flex flex-col gap-1.5">
                  <li><b className="text-[#ECEEF1]">Academic</b>: Peer-reviewed makaleler ve akademik kaynaklar</li>
                  <li><b className="text-[#ECEEF1]">News</b>: Son haberler ve güncel gelişmeler</li>
                  <li><b className="text-[#ECEEF1]">Reddit</b>: Gerçek kullanıcı deneyimleri ve görüşler</li>
                  <li><b className="text-[#ECEEF1]">YouTube</b>: Video içerik özeti</li>
                </ol>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">örnek kullanım</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  Reddit filtresini seçip "hangi not alma uygulaması daha iyi Notion mu Obsidian mı" diye sorarsan gerçek kullanıcı deneyimlerini görürsün.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="hatalar" title="Sık Yapılan Hatalar">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Yaratıcı görevler için kullanmak — metin yazımında ChatGPT veya Claude çok daha iyi sonuç verir." />
                <MistakeRow text="Kaynakları kontrol etmemek — AI özetleri bazen kaynak içeriğini yanlış aktarabilir." />
                <MistakeRow text="Çok geniş sorular sormak — 'ekonomi nedir' gibi sorular yerine spesifik, tarih içeren sorular sor." />
                <MistakeRow text="Sadece Türkçe aramak — İngilizce sorgular çok daha zengin ve güvenilir sonuç verir." />
              </div>
            </GuideSection>

            <GuideSection id="ozet" title="Hızlı Özet">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="En iyi olduğu yer" value="Güncel araştırma, haber takibi, kaynaklı bilgi" />
                <SummaryRow label="Zayıf olduğu yer" value="Yaratıcı yazarlık, kod, Türkçe içerik" />
                <SummaryRow label="Ücretsiz mi?" value="Evet, temel kullanım ücretsiz" />
                <SummaryRow label="Pro fiyat" value="$20/ay" />
                <SummaryRow label="En güçlü özellik" value="Kaynaklı gerçek zamanlı arama" />
              </div>
            </GuideSection>

            <div id="dene" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — şimdi dene</p>
              <InlinePromptBox targetAI="Perplexity" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
