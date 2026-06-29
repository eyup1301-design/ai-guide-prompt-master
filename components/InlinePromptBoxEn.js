"use client";

import { useState } from "react";
import { Loader2, Copy, Check, ArrowRight } from "lucide-react";

export default function InlinePromptBoxEn({ targetAI }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

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
        Briefly describe what you want to do, we'll optimize it for you.
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
        </div>
      )}
    </div>
  );
}