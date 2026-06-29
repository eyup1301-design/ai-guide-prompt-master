"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, Copy, Check, ArrowRight, BookOpen } from "lucide-react";
import { usePromptHistory } from "@/lib/usePromptHistory";
import PromptHistoryPanel from "@/components/PromptHistoryPanel";

function guideSlugFromAI(targetAI) {
  if (!targetAI) return null;
  const t = targetAI.toLowerCase();
  if (t.includes("gpt") || t.includes("chatgpt")) return "chatgpt";
  if (t.includes("claude")) return "claude";
  if (t.includes("gemini")) return "gemini";
  if (t.includes("midjourney")) return "midjourney";
  return null;
}

export default function InlinePromptBoxEn({ targetAI }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const { history, addToHistory, removeFromHistory, clearHistory } =
    usePromptHistory();

  const slug = guideSlugFromAI(targetAI);

  async function handleGenerate() {
    if (!input.trim()) return;
    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/optimize-prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rawInput: input,
          taskLabel: "General task",
          targetAI,
          answers: {},
          language: "en",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setResult(data.optimizedPrompt);
      addToHistory({
        input: input.trim(),
        result: data.optimizedPrompt,
        targetAI,
        taskLabel: "General task",
      });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-5">
      <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-1">
        Generate a prompt for {targetAI}
      </p>
      <p className="text-xs text-[#8B92A0] mb-3">
        Briefly describe what you want to do — we&apos;ll optimize it for you.
      </p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleGenerate();
        }}
        placeholder="e.g. I want to write a Q1 sales report"
        rows={2}
        className="w-full bg-[#14171C] border border-[#2A2F38] rounded-lg px-3 py-2 text-sm text-[#ECEEF1] placeholder:text-[#8B92A0]/60 focus:outline-none focus:border-[#FF9F4A]/50 resize-none mb-3"
      />

      {error && <p className="text-xs text-red-400 mb-2">{error}</p>}

      <button
        onClick={handleGenerate}
        disabled={loading || !input.trim()}
        className="w-full flex items-center justify-center gap-2 text-sm font-medium bg-[#FF9F4A] text-[#14171C] rounded-lg py-2.5 hover:bg-[#FFB374] transition-colors disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            generating...
          </>
        ) : (
          <>
            Generate prompt
            <ArrowRight size={16} />
          </>
        )}
      </button>

      {result && (
        <div className="mt-4 bg-[#14171C] border border-[#2A2F38] rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE]">
              optimized prompt
            </p>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs text-[#8B92A0] hover:text-[#ECEEF1] transition-colors"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-[#4ADEDE]" />
                  copied
                </>
              ) : (
                <>
                  <Copy size={13} />
                  copy
                </>
              )}
            </button>
          </div>
          <p className="text-sm text-[#ECEEF1]/90 whitespace-pre-wrap leading-relaxed">
            {result}
          </p>

          {slug && (
            <div className="mt-4 pt-3 border-t border-[#2A2F38]">
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#8B92A0] mb-2">
                Learn more
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/en/guides/${slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4ADEDE] border border-[#4ADEDE]/30 bg-[#4ADEDE]/5 rounded-full px-3.5 py-1.5 hover:bg-[#4ADEDE]/15 transition-colors"
                >
                  <BookOpen size={12} />
                  English {targetAI} Guide
                </Link>
                <Link
                  href={`/rehberler/${slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8B92A0] border border-[#2A2F38] bg-transparent rounded-full px-3.5 py-1.5 hover:bg-[#1C2128] hover:text-[#ECEEF1] transition-colors"
                >
                  <BookOpen size={12} />
                  Türkçe Rehber
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      <PromptHistoryPanel
        history={history}
        onRemove={removeFromHistory}
        onClear={clearHistory}
        lang="en"
      />
    </div>
  );
}
