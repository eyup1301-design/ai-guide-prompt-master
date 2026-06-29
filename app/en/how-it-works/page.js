import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Zap } from "lucide-react";

export const metadata = {
  title: "How It Works — Wrompt",
  description: "Generate professional prompts in 3 steps with Wrompt. By task, by AI, or with a guide — pick your preferred method.",
};

const STEPS = [
  {
    number: "1",
    icon: Zap,
    color: "#FF9F4A",
    title: "Describe what you want",
    desc: 'A short sentence is enough. E.g. "draw a cat", "write a report", "debug my code". Just tell the system what you need.',
  },
  {
    number: "2",
    icon: Sparkles,
    color: "#4ADEDE",
    title: "AI is matched automatically",
    desc: "The system analyzes your task, picks the best AI tool for it, and suggests it. You can always switch.",
  },
  {
    number: "3",
    icon: ArrowRight,
    color: "#FF9F4A",
    title: "Prompt ready — use it",
    desc: "Copy the optimized prompt, paste it into your target AI, and go. Nothing else needed.",
  },
];

const METHODS = [
  {
    icon: Zap,
    color: "#FF9F4A",
    title: "By task",
    href: "/en",
    badge: "Recommended",
    steps: [
      "Pick your task from the left, or describe it in your own words",
      "The system automatically suggests the best AI",
      "Answer a few short questions (optional)",
      'Click "Generate my prompt"',
      "Copy the result and use it",
    ],
  },
  {
    icon: Sparkles,
    color: "#4ADEDE",
    title: "By AI",
    href: "/en",
    badge: null,
    steps: [
      "Choose which AI you want to use (ChatGPT, Midjourney, etc.)",
      "Briefly describe what you want to do",
      'Click "Continue" — the system understands your task',
      "Answer follow-up questions if any",
      "Generate your prompt",
    ],
  },
  {
    icon: BookOpen,
    color: "#A78BFA",
    title: "With a guide",
    href: "/en/guides",
    badge: null,
    steps: [
      'Go to "AI Guides" in the menu',
      "Pick the guide for the AI you want to use",
      "Read the guide — learn strengths, weaknesses, tips",
      'Use the "Try it now" box at the bottom of the page',
      "Generate a prompt optimized specifically for that AI",
    ],
  },
];

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-20">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B92A0] mb-4">
            Guide
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
            How It Works
          </h1>
          <p className="text-base text-[#8B92A0] max-w-xl">
            Wrompt turns a rough idea into a professional prompt.
            Three different methods, all free.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-5">
            General flow
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: step.color + "20", border: `1px solid ${step.color}40` }}
                    >
                      <Icon size={15} style={{ color: step.color }} />
                    </div>
                    <span className="text-xs font-mono text-[#8B92A0]">Step {step.number}</span>
                  </div>
                  <p className="text-sm font-semibold text-[#ECEEF1] mb-2">{step.title}</p>
                  <p className="text-xs text-[#8B92A0] leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Methods */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-5">
            Usage methods
          </p>
          <div className="flex flex-col gap-4">
            {METHODS.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.title} className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: method.color + "20", border: `1px solid ${method.color}40` }}
                    >
                      <Icon size={16} style={{ color: method.color }} />
                    </div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-semibold text-[#ECEEF1]">{method.title}</h2>
                      {method.badge && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#4ADEDE] border border-[#4ADEDE]/30 rounded-full px-2 py-0.5">
                          {method.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <ol className="flex flex-col gap-2 mb-4">
                    {method.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#8B92A0]">
                        <span
                          className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono mt-0.5"
                          style={{ backgroundColor: method.color + "20", color: method.color }}
                        >
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <Link
                    href={method.href}
                    className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-4 py-2 border transition-colors"
                    style={{
                      color: method.color,
                      borderColor: method.color + "40",
                      backgroundColor: method.color + "10",
                    }}
                  >
                    Try it
                    <ArrowRight size={13} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-5">
            FAQ
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                q: "Is it free?",
                a: "Yes, completely free. You can generate up to 50 prompts per day.",
              },
              {
                q: "Which AI tools does it support?",
                a: "ChatGPT (GPT-4o, GPT-5), Claude, Gemini, Midjourney, Suno, Kling, Perplexity, and more.",
              },
              {
                q: "Where is my prompt history stored?",
                a: "In your browser's local storage. It never leaves your device — nothing is sent to our servers.",
              },
              {
                q: "What language will the prompt be in?",
                a: "By default it detects the language you write in. For image/video tools it always uses English. You can manually choose Turkish or English.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-sm font-medium text-[#ECEEF1] mb-1.5">{item.q}</p>
                <p className="text-sm text-[#8B92A0] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}
