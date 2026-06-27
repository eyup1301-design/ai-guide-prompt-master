import Link from "next/link";

export const metadata = {
  title: "Gizlilik Politikası — Wrompt",
  description: "Wrompt'un kişisel verileri nasıl topladığı, kullandığı ve koruduğu hakkında bilgi.",
};

export default function GizlilikPolitikasi() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-6 inline-block">
          ← Ana sayfa
        </Link>

        <h1 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
          Gizlilik Politikası
        </h1>
        <p className="text-xs text-[#8B92A0] mb-10">Son güncelleme: Haziran 2026</p>

        <div className="flex flex-col gap-8 text-sm text-[#ECEEF1]/85 leading-relaxed">
          <Section title="1. Bu site kimin">
            <p>
              Wrompt (wrompt.com), bireysel olarak işletilen, yapay zeka araçlarını
              kullanmayı kolaylaştıran ücretsiz bir web sitesidir. Sorularınız için{" "}
              <b className="text-[#ECEEF1] font-medium">wrompt.info@gmail.com</b> adresinden
              bize ulaşabilirsiniz.
            </p>
          </Section>

          <Section title="2. Hangi bilgileri topluyoruz">
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li>
                <b className="text-[#ECEEF1] font-medium">Kullanım verileri:</b> Google Analytics
                aracılığıyla, hangi sayfaları ziyaret ettiğiniz, ne kadar süre kaldığınız,
                hangi ülkeden/cihazdan bağlandığınız gibi anonim, istatistiksel bilgiler.
              </li>
              <li>
                <b className="text-[#ECEEF1] font-medium">Yazdığınız istekler:</b> "Prompt
                oluştur" özelliğini kullandığınızda yazdığınız metin, optimize edilmiş bir
                prompt üretmek amacıyla Google Gemini API'ye iletilir. Bu metinler tarafımızca
                kalıcı olarak saklanmaz.
              </li>
              <li>
                <b className="text-[#ECEEF1] font-medium">Geri bildirim:</b> Geri bildirim
                formuna yazdığınız metin, görüş ve önerilerinizi okuyabilmemiz için güvenli
                bir veritabanında saklanır.
              </li>
              <li>
                <b className="text-[#ECEEF1] font-medium">IP adresi:</b> Kötüye kullanımı
                önlemek için (günlük kullanım sınırı), IP adresiniz geçici olarak, kimliğinizle
                ilişkilendirilmeden işlenir.
              </li>
            </ul>
          </Section>

          <Section title="3. Üçüncü taraf hizmetler">
            <p className="mb-2">Sitemiz şu üçüncü taraf hizmetleri kullanır:</p>
            <ul className="list-disc list-inside flex flex-col gap-1.5">
              <li><b className="text-[#ECEEF1] font-medium">Google Analytics</b> — ziyaretçi istatistikleri</li>
              <li><b className="text-[#ECEEF1] font-medium">Google Gemini API</b> — prompt optimizasyonu</li>
              <li><b className="text-[#ECEEF1] font-medium">Vercel</b> — site barındırma (hosting)</li>
              <li><b className="text-[#ECEEF1] font-medium">Upstash</b> — geri bildirim ve kullanım sınırı verisi</li>
            </ul>
            <p className="mt-2">
              Bu hizmetlerin her biri kendi gizlilik politikalarına sahiptir ve verileri
              kendi politikalarına uygun şekilde işler.
            </p>
          </Section>

          <Section title="4. Çerezler (cookies)">
            <p>
              Google Analytics, ziyaretçi davranışını analiz etmek için çerezler kullanır.
              İleride sitemizde reklam gösterilmeye başlanırsa (Google AdSense), bu da ek
              çerezler kullanabilir. Tarayıcı ayarlarınızdan çerezleri istediğiniz zaman
              engelleyebilir veya silebilirsiniz.
            </p>
          </Section>

          <Section title="5. Haklarınız (KVKK kapsamında)">
            <p className="mb-2">
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında şu haklara sahipsiniz:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-1.5">
              <li>Hakkınızda hangi verilerin işlendiğini öğrenme</li>
              <li>Verilerinizin düzeltilmesini veya silinmesini talep etme</li>
              <li>İşlemeye itiraz etme</li>
            </ul>
            <p className="mt-2">
              Bu haklarınızı kullanmak için{" "}
              <b className="text-[#ECEEF1] font-medium">wrompt.info@gmail.com</b> adresinden
              bizimle iletişime geçebilirsiniz.
            </p>
          </Section>

          <Section title="6. Çocukların gizliliği">
            <p>
              Sitemiz 18 yaş altı kullanıcıları hedeflememektedir. 18 yaşından küçükseniz,
              lütfen kişisel bilgilerinizi paylaşmadan önce bir yetişkinden yardım alın.
            </p>
          </Section>

          <Section title="7. Değişiklikler">
            <p>
              Bu politika zaman zaman güncellenebilir. Önemli değişiklikler bu sayfada
              yayınlanacaktır.
            </p>
          </Section>
        </div>
      </section>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-display text-base font-semibold mb-2 text-[#ECEEF1]">
        {title}
      </h2>
      {children}
    </div>
  );
}