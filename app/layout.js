import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wrompt — Doğru AI'yı seç, prompt'unu optimize et",
  description: "Görevini seç, sana en uygun yapay zeka aracını önerelim, prompt'unu senin için optimize edelim.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}