"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Radio,
  Sparkles,
  BookOpen,
  Zap,
  Image as ImageIcon,
  Code2,
  PenTool,
  ExternalLink,
} from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    color: "#FF9F4A",
    title: "Göreve Göre AI Seç",
    desc: "8 görev kategorisi — kod, görsel, metin, analiz ve daha fazlası. Her görev için en uygun AI otomatik önerilir.",
    href: "/prompt",
  },
  {
    icon: Sparkles,
    color: "#4ADEDE",
    title: "Prompt Optimize Et",
    desc: "Kaba fikrin profesyonel prompta dönüşür. Kopyala, hedef AI'a yapıştır, kullan.",
    href: "/prompt",
  },
  {
    icon: BookOpen,
    color: "#A78BFA",
    title: "Rehberlerle Öğren",
    desc: "ChatGPT, Claude, Gemini, Midjourney için detaylı Türkçe rehberler. Güçlü/zayıf yönler, ipuçları, örnekler.",
    href: "/rehberler",
    badge: "Yeni rehberler",
  },
];

const STEPS = [
  {
    number: "1",
    color: "#FF9F4A",
    title: "Yaz",
    desc: "Ne yapmak istediğini kısaca anlat",
  },
  {
    number: "2",
    color: "#4ADEDE",
    title: "Eşleş",
    desc: "Sistem en uygun AI'ı seçer",
  },
  {
    number: "3",
    color: "#FF9F4A",
    title: "Üret",
    desc: "Optimize edilmiş prompt hazır",
  },
];

const EXAMPLES = [
  {
    ai: "ChatGPT",
    color: "#10A37F",
    icon: PenTool,
    input: "LinkedIn gönderisi yaz",
    output: "Teknoloji sektöründeki 30-40 yaş arası profesyonellere yönelik, samimi ve ilham verici bir ton ile...",
  },
  {
    ai: "Midjourney",
    color: "#3B82F6",
    icon: ImageIcon,
    input: "Ürün fotoğrafı çek",
    output: "Ceramic coffee cup on white marble surface, soft morning light, minimalist studio shot, --ar 1:1 --stylize 250",
  },
  {
    ai: "Claude",
    color: "#D97757",
    icon: Code2,
    input: "Kod hatası düzelt",
    output: "Aşağıdaki Python kodunu adım adım incele, her hatayı açıkla ve düzeltilmiş versiyonu yorum satırlarıyla birlikte...",
  },
  {
    ai: "Gemini",
    color: "#8B5CF6",
    icon: Sparkles,
    input: "Rapor analiz et",
    output: "Eklediğim PDF'i oku. Önce genel özet, sonra 3 kritik bulgu, ardından öneriler bölümü olacak şekilde yapılandır...",
  },
];

export default function Home() {
  const [promptCount, setPromptCount] = useState(null);

  useEffect(() => {
    fetch("/api/prompt-count")
      .then((r) => r.json())
      .then((d) => setPromptCount(d.count))
      .catch(() => {});
  }, []);

  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8B92A0] mb-6 bg-[#1C2128] border border-[#2A2F38] rounded-full px-4 py-2">
          <Radio size={12} className="text-[#FF9F4A]" />
          <span>AI Guide & Prompt Master</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] mb-6 max-w-4xl mx-auto">
          Yapay zekayı doğru kullan,{" "}
          <span className="text-[#FF9F4A]">sonuçları hisset.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#8B92A0] max-w-2xl mx-auto mb-10 leading-relaxed">
          Hangi AI sana uygun? Nasıl prompt yazılır?
          Wrompt ile saniyeler içinde öğren ve üret.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <Link
            href="/prompt"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-[#FF9F4A] text-[#14171C] rounded-xl px-7 py-3.5 hover:bg-[#FFB374] transition-colors"
          >
            Prompt Oluştur
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/rehberler"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8B92A0] border border-[#2A2F38] rounded-xl px-7 py-3.5 hover:bg-[#1C2128] hover:text-[#ECEEF1] transition-colors"
          >
            <BookOpen size={15} />
            Rehberlere Bak
          </Link>
        </div>

        {promptCount !== null && (
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#8B92A0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADEDE] animate-pulse inline-block" />
            <span>
              <span className="text-[#ECEEF1] font-semibold">{promptCount.toLocaleString("tr-TR")}+</span>
              {" "}prompt optimize edildi
            </span>
          </div>
        )}
      </section>

      {/* ── ÖZELLİKLER ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-6 text-center">
          Neden Wrompt?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.title}
                href={f.href}
                className="group bg-[#1C2128] border border-[#2A2F38] rounded-xl p-6 hover:border-[#3A3F48] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: f.color + "18", border: `1px solid ${f.color}35` }}
                  >
                    <Icon size={18} style={{ color: f.color }} />
                  </div>
                  {f.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A78BFA] border border-[#A78BFA]/30 rounded-full px-2 py-0.5">
                      {f.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm font-semibold text-[#ECEEF1] mb-2">{f.title}</p>
                <p className="text-xs text-[#8B92A0] leading-relaxed">{f.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── NASIL ÇALIŞIR ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-6 text-center">
          Nasıl çalışır?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative bg-[#1C2128] border border-[#2A2F38] rounded-xl p-6">
              <div
                className="text-5xl font-black mb-4 leading-none"
                style={{ color: step.color + "30" }}
              >
                {step.number}
              </div>
              <p className="text-lg font-bold text-[#ECEEF1] mb-1" style={{ color: step.color }}>
                {step.title}
              </p>
              <p className="text-sm text-[#8B92A0]">{step.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#2A2F38]">
                  <ArrowRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/nasil-calisir"
            className="inline-flex items-center gap-1.5 text-xs text-[#8B92A0] hover:text-[#ECEEF1] transition-colors"
          >
            Detaylı açıklama için
            <ExternalLink size={12} />
          </Link>
        </div>
      </section>

      {/* ── ÖRNEK PROMPTLAR ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-6 text-center">
          Ne üretebilirsin?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {EXAMPLES.map((ex) => {
            const Icon = ex.icon;
            return (
              <div key={ex.ai} className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center"
                    style={{ backgroundColor: ex.color + "20" }}
                  >
                    <Icon size={13} style={{ color: ex.color }} />
                  </div>
                  <span className="text-xs font-semibold" style={{ color: ex.color }}>
                    {ex.ai}
                  </span>
                  <span className="text-[10px] text-[#8B92A0] ml-auto">girdi →</span>
                  <span className="text-[10px] text-[#ECEEF1]/60 italic">"{ex.input}"</span>
                </div>
                <div className="bg-[#14171C] border border-[#2A2F38] rounded-lg p-3">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#4ADEDE] mb-1.5">optimize edilmiş prompt</p>
                  <p className="text-xs text-[#ECEEF1]/75 leading-relaxed line-clamp-2">{ex.output}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/prompt"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-[#FF9F4A] text-[#14171C] rounded-xl px-7 py-3.5 hover:bg-[#FFB374] transition-colors"
          >
            Kendi promptunu oluştur
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── FOOTER ÜSTÜ CTA ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-[#1C2128] border border-[#2A2F38] rounded-2xl p-8 sm:p-12 text-center">
          <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-4">Ücretsiz · Türkçe</p>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold mb-4">
            AI'dan daha iyi sonuç almaya
            <span className="text-[#FF9F4A]"> hemen başla.</span>
          </h2>
          <p className="text-[#8B92A0] mb-8 max-w-md mx-auto">
            Kayıt gerekmez. Kredi kartı yok. Sadece yaz ve üret.
          </p>
          <Link
            href="/prompt"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-[#FF9F4A] text-[#14171C] rounded-xl px-8 py-4 hover:bg-[#FFB374] transition-colors"
          >
            Başla — ücretsiz
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
