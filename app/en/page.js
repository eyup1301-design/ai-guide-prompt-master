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
    title: "Pick AI by Task",
    desc: "8 task categories — code, image, writing, analysis and more. The best AI for each task is suggested automatically.",
    href: "/en/prompt",
  },
  {
    icon: Sparkles,
    color: "#4ADEDE",
    title: "Optimize Your Prompt",
    desc: "Your rough idea becomes a professional prompt. Copy, paste into your target AI, and use.",
    href: "/en/prompt",
  },
  {
    icon: Zap,
    color: "#A78BFA",
    title: "Find AI by Job",
    desc: "Type your profession, the system analyzes all your work needs and recommends the best AI for each.",
    href: "/en/prompt",
    badge: "New",
  },
  {
    icon: BookOpen,
    color: "#FF9F4A",
    title: "Learn with Guides",
    desc: "Detailed guides for ChatGPT, Claude, Gemini, Midjourney. Strengths, weaknesses, tips, examples.",
    href: "/en/guides",
  },
];

const STEPS = [
  {
    number: "1",
    color: "#FF9F4A",
    title: "Write",
    desc: "Briefly describe what you want to do",
  },
  {
    number: "2",
    color: "#4ADEDE",
    title: "Match",
    desc: "System picks the best AI for you",
  },
  {
    number: "3",
    color: "#FF9F4A",
    title: "Generate",
    desc: "Optimized prompt ready to use",
  },
];

const EXAMPLES = [
  {
    ai: "ChatGPT",
    color: "#10A37F",
    icon: PenTool,
    input: "Write a LinkedIn post",
    output: "Targeted at tech professionals aged 30-40, in a warm and inspiring tone, write a 250-word LinkedIn post about...",
  },
  {
    ai: "Midjourney",
    color: "#3B82F6",
    icon: ImageIcon,
    input: "Product photography",
    output: "Ceramic coffee cup on white marble surface, soft morning light, minimalist studio shot, --ar 1:1 --stylize 250",
  },
  {
    ai: "Claude",
    color: "#D97757",
    icon: Code2,
    input: "Fix a code bug",
    output: "Review the following Python code step by step, explain each bug clearly, and return the corrected version with inline comments...",
  },
  {
    ai: "Gemini",
    color: "#8B5CF6",
    icon: Sparkles,
    input: "Analyze a report",
    output: "Read the attached PDF. Structure your response with: 1) Executive summary, 2) 3 critical findings, 3) Recommendations...",
  },
];

export default function HomeEn() {
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
          Use AI the right way,{" "}
          <span className="text-[#FF9F4A]">feel the difference.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#8B92A0] max-w-2xl mx-auto mb-10 leading-relaxed">
          Which AI is right for you? How do you write a good prompt?
          Learn and generate in seconds with Wrompt.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <Link
            href="/en/prompt"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-[#FF9F4A] text-[#14171C] rounded-xl px-7 py-3.5 hover:bg-[#FFB374] transition-colors"
          >
            Generate a Prompt
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/en/guides"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8B92A0] border border-[#2A2F38] rounded-xl px-7 py-3.5 hover:bg-[#1C2128] hover:text-[#ECEEF1] transition-colors"
          >
            <BookOpen size={15} />
            Browse Guides
          </Link>
        </div>

        {promptCount !== null && (
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#8B92A0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADEDE] animate-pulse inline-block" />
            <span>
              <span className="text-[#ECEEF1] font-semibold">{promptCount.toLocaleString("en-US")}+</span>
              {" "}prompts optimized
            </span>
          </div>
        )}
      </section>

      {/* ── FEATURES ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-6 text-center">
          Why Wrompt?
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

      {/* ── HOW IT WORKS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-6 text-center">
          How it works
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
              <p className="text-lg font-bold mb-1" style={{ color: step.color }}>
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
            href="/en/how-it-works"
            className="inline-flex items-center gap-1.5 text-xs text-[#8B92A0] hover:text-[#ECEEF1] transition-colors"
          >
            See detailed explanation
            <ExternalLink size={12} />
          </Link>
        </div>
      </section>

      {/* ── EXAMPLES ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-6 text-center">
          What can you generate?
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
                  <span className="text-[10px] text-[#8B92A0] ml-auto">input →</span>
                  <span className="text-[10px] text-[#ECEEF1]/60 italic">"{ex.input}"</span>
                </div>
                <div className="bg-[#14171C] border border-[#2A2F38] rounded-lg p-3">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#4ADEDE] mb-1.5">optimized prompt</p>
                  <p className="text-xs text-[#ECEEF1]/75 leading-relaxed line-clamp-2">{ex.output}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/en/prompt"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-[#FF9F4A] text-[#14171C] rounded-xl px-7 py-3.5 hover:bg-[#FFB374] transition-colors"
          >
            Generate your own prompt
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-[#1C2128] border border-[#2A2F38] rounded-2xl p-8 sm:p-12 text-center">
          <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-4">Free · No sign-up</p>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold mb-4">
            Start getting better results
            <span className="text-[#FF9F4A]"> from AI today.</span>
          </h2>
          <p className="text-[#8B92A0] mb-8 max-w-md mx-auto">
            No registration. No credit card. Just type and generate.
          </p>
          <Link
            href="/en/prompt"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-[#FF9F4A] text-[#14171C] rounded-xl px-8 py-4 hover:bg-[#FFB374] transition-colors"
          >
            Get started — free
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
