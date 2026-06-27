import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://wrompt.com"),
  title: "Wrompt — Doğru AI'yı seç, prompt'unu optimize et",
  description: "Görevini seç, sana en uygun yapay zeka aracını önerelim, prompt'unu senin için optimize edelim.",
  openGraph: {
    title: "Wrompt — Doğru AI'yı seç, prompt'unu optimize et",
    description: "Görevini seç, sana en uygun yapay zeka aracını önerelim, prompt'unu senin için optimize edelim.",
    url: "https://wrompt.com",
    siteName: "Wrompt",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wrompt — Doğru AI'yı seç, prompt'unu optimize et",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrompt — Doğru AI'yı seç, prompt'unu optimize et",
    description: "Görevini seç, sana en uygun yapay zeka aracını önerelim, prompt'unu senin için optimize edelim.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2017076941681302"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HQTCP8CSXK"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HQTCP8CSXK');
            `,
          }}
        ></script>
      </head>
      <body className="min-h-full flex flex-col bg-[#14171C]">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}