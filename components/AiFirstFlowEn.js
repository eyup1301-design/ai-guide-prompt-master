"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  Loader2,
} from "lucide-react";
import { AI_TOOLS, getQuestions } from "@/lib/task-ai-matrix.en";

const PRICING_LABELS = {
  free: { label: "free", className: "text-[#4ADEDE] border-[#4ADEDE]/30" },
  freemium: { label: "freemium", className: "text-[#FACC15] border-[#FACC15]/30" },
  paid: { label: "paid", className: "text-[#F87171] border-[#F87171]/30" },
};

export default function AiFirstFlowEn() {
  const [step, setStep] = useState(1);
  const [selectedAIKey, setSelectedAIKey] = useState(null);
  const [rawInput, setRawInput] = useState("");
  const [isClassifying, setIsClassifying] = useState(false);
  const [taskId, setTaskId] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const aiList = Object.entries(AI_TOOLS);
  const selectedAI = selectedAIKey ? AI_TOOLS[selectedAIKey] : null;
  const questions = taskId ? getQuestions(taskId) : [];

  function handleSelectAI(key) {
    setSelectedAIKey(key);
    setRawInput("");
    setTaskId(null);
    setAnswers({});
    setResult("");
    setError("");
    setStep(2);
  }

  async function handleDetect() {
    if (!rawInput.trim()) return;
    setIsClassifying(true);
    setError("");
    try {
      const res = await fetch("/api/classify-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rawInput }),
      });
      const data = await res.json();
      setTaskId(data.taskId || "other");
    } catch (e) {
      setTaskId("other");
    } finally {
      setIsClassifying(false);
    }
  }

  function handleAnswerChange(qid, value) {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  }

  async function handleGenerate() {
    if (!rawInput.trim()) return;
    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/optimize-prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rawInput,
          taskLabel: "General task",
          targetAI: selectedAI?.name,
          answers,
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
    <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
      <div className="flex items-center gap-2 mb-5 text-xs font-mono text-[#8B92A0]">
        <StepDot active={step >= 1} label="AI" />
        <span className="text-[#2A2F38]">→</span>
        <StepDot active={step >= 2} label="Prompt" />
      </div>

      {step === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {aiList.map(([key, tool]) => {
            const pricing = PRICING_LABELS[tool.pricing] || PRICING_LABELS.freemium;
            return (
              <button
                key={key}
                onClick={() => handleSelectAI(key)}
                className="flex items-center justify-between text-left bg-[#14171C] border border-[#2A2F38] rounded-lg p-3 hover:bg-[#1a1e24] transition-colors"
              >
                <div>
                  <p className="text-sm font-semibold" style={{ color: tool.color }}>
                    {tool.name}
                  </p>
                  <p className="text-xs text-[#8B92A0] mt-0.5">{tool.vendor}</p>
                </div>
                <span className={`text-[10px] font-mono uppercase border rounded-full px-2 py-0.5 ${pricing.className}`}>
                  {pricing.label}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {step === 2 && (
        <div>
          <button
            onClick={() => setStep(1)}
            className="flex items-center gap-1 text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-3"
          >
            <ArrowLeft size={13} />{" "}
            <span style={{ color: selectedAI?.color }}>{selectedAI?.name}</span> selected, change
          </button>

          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs text-[#8B92A0] mb-1.5 block">
                What do you want to do?
              </label>
              <textarea
                value={rawInput}
                onChange={(e) => {
                  setRawInput(e.target.value);
                  if (taskId) setTaskId(null);
                }}
                placeholder="e.g. I want a crocodile illustration"
                rows={2}
                maxLength={600}
                disabled={!!taskId}
                className="w-full bg-[#14171C] border border-[#2A2F38] rounded-lg px-3 py-2 text-sm text-[#ECEEF1] placeholder:text-[#8B92A0]/60 focus:outline-none focus:border-[#FF9F4A]/50 resize-none disabled:opacity-70"
              />
              <div className="flex justify-end mt-1">
                <span className={`text-[10px] font-mono ${rawInput.length >= 580 ? "text-red-400" : rawInput.length >= 480 ? "text-[#FACC15]" : "text-[#8B92A0]/40"}`}>
                  {rawInput.length}/600
                </span>
              </div>
            </div>

            {!taskId && (
              <button
                onClick={handleDetect}
                disabled={isClassifying || !rawInput.trim()}
                className="flex items-center justify-center gap-2 text-sm font-medium bg-transparent border border-[#4ADEDE]/40 text-[#4ADEDE] rounded-lg py-2.5 hover:bg-[#4ADEDE]/10 transition-colors disabled:opacity-50"
              >
                {isClassifying ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> analyzing...
                  </>
                ) : (
                  <>
                    Continue <ArrowRight size={16} />
                  </>
                )}
              </button>
            )}

            {taskId && (
              <>
                {questions.map((q) => (
                  <div key={q.id}>
                    <label className="text-xs text-[#8B92A0] mb-1.5 block">{q.label}</label>
                    <input
                      type="text"
                      value={answers[q.id] || ""}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      placeholder={q.placeholder}
                      maxLength={200}
                      className="w-full bg-[#14171C] border border-[#2A2F38] rounded-lg px-3 py-2 text-sm text-[#ECEEF1] placeholder:text-[#8B92A0]/60 focus:outline-none focus:border-[#FF9F4A]/50"
                    />
                    <div className="flex justify-end mt-0.5">
                      <span className={`text-[10px] font-mono ${(answers[q.id] || "").length >= 190 ? "text-red-400" : (answers[q.id] || "").length >= 160 ? "text-[#FACC15]" : "text-[#8B92A0]/40"}`}>
                        {(answers[q.id] || "").length}/200
                      </span>
                    </div>
                  </div>
                ))}

                {error && <p className="text-xs text-red-400">{error}</p>}

                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="flex items-center justify-center gap-2 text-sm font-medium bg-[#FF9F4A] text-[#14171C] rounded-lg py-2.5 hover:bg-[#FFB374] transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> generating...
                    </>
                  ) : (
                    <>
                      Generate prompt <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </>
            )}
          </div>

          {result && (
            <div className="mt-4 bg-[#14171C] border border-[#4ADEDE]/30 rounded-lg p-4">
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
                      <Check size={13} className="text-[#4ADEDE]" /> copied
                    </>
                  ) : (
                    <>
                      <Copy size={13} /> copy
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
      )}
    </div>
  );
}

function StepDot({ active, label }) {
  return (
    <span className={active ? "text-[#FF9F4A]" : "text-[#8B92A0]"}>{label}</span>
  );
}