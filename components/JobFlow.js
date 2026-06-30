"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Check, RotateCcw, Sparkles } from "lucide-react";
import { AI_TOOLS } from "@/lib/task-ai-matrix";
import InlinePromptBox from "@/components/InlinePromptBox";

const PRICING_LABELS = {
  free: { label: "ücretsiz", className: "text-[#4ADEDE] border-[#4ADEDE]/30" },
  freemium: { label: "freemium", className: "text-[#FACC15] border-[#FACC15]/30" },
  paid: { label: "ücretli", className: "text-[#F87171] border-[#F87171]/30" },
};

export default function JobFlow() {
  const [step, setStep] = useState(1);
  const [jobInput, setJobInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [needs, setNeeds] = useState([]);
  const [bonus, setBonus] = useState([]);
  const [selected, setSelected] = useState([]);
  const [openPrompt, setOpenPrompt] = useState(null);

  async function handleAnalyze() {
    if (!jobInput.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/job-needs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job: jobInput, language: "tr" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Analiz başarısız.");
      setNeeds(data.needs || []);
      setBonus(data.bonus || []);
      setSelected([]);
      setStep(2);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function toggleSelect(idx) {
    setSelected((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  }

  function handleReset() {
    setStep(1);
    setJobInput("");
    setNeeds([]);
    setBonus([]);
    setSelected([]);
    setOpenPrompt(null);
    setError("");
  }

  return (
    <div className="flex flex-col gap-6">

      {/* ADIM 1 — Meslek girişi */}
      {step === 1 && (
        <div className="fade-rise">
          <label className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2 block">
            Hangi işle uğraşıyorsun?
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={jobInput}
              onChange={(e) => setJobInput(e.target.value.slice(0, 200))}
              onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
              placeholder="örn: sosyal medya yöneticisiyim, e-ticaret işletiyorum, öğrenciyim..."
              maxLength={200}
              className="flex-1 bg-[#14171C] border border-[#2A2F38] rounded-lg px-3 py-2.5 text-sm text-[#ECEEF1] placeholder:text-[#8B92A0]/60 focus:outline-none focus:border-[#FF9F4A]/50"
            />
            <button
              onClick={handleAnalyze}
              disabled={loading || !jobInput.trim()}
              className="shrink-0 flex items-center gap-2 text-sm font-medium bg-[#FF9F4A] text-[#14171C] rounded-lg px-4 py-2.5 hover:bg-[#FFB374] transition-colors disabled:opacity-50"
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>Analiz Et <ArrowRight size={15} /></>
              )}
            </button>
          </div>
          {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
          <div className="flex items-center justify-between mt-1.5">
            <p className="text-xs text-[#8B92A0]/50">
              Serbest yazabilirsin — mesleğini, sektörünü veya ne yaptığını anlat.
            </p>
            <span className={`text-[10px] font-mono shrink-0 ml-2 ${jobInput.length >= 190 ? "text-red-400" : jobInput.length >= 160 ? "text-[#FACC15]" : "text-[#8B92A0]/40"}`}>
              {jobInput.length}/200
            </span>
          </div>
        </div>
      )}

      {/* ADIM 2 — İhtiyaç seçimi */}
      {step === 2 && (
        <div className="fade-rise">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0]">
                İhtiyaçlarını seç
              </p>
              <p className="text-xs text-[#8B92A0]/60 mt-0.5">
                &ldquo;{jobInput}&rdquo; için önerilen alanlar — birden fazla seçebilirsin
              </p>
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs text-[#8B92A0]/60 hover:text-[#ECEEF1] transition-colors"
            >
              <RotateCcw size={12} />
              Sıfırla
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {needs.map((need, idx) => {
              const isSelected = selected.includes(idx);
              const tool = AI_TOOLS[need.aiKey];
              return (
                <button
                  key={idx}
                  onClick={() => toggleSelect(idx)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? "bg-[#FF9F4A]/8 border-[#FF9F4A]/50"
                      : "bg-[#14171C] border-[#2A2F38] hover:border-[#3A3F48]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5 flex-1">
                      <span className="text-xl leading-none mt-0.5">{need.icon}</span>
                      <div>
                        <p className="text-sm font-medium text-[#ECEEF1]">{need.title}</p>
                        <p className="text-xs text-[#8B92A0] mt-0.5 leading-relaxed">{need.desc}</p>
                        {tool && (
                          <span
                            className="inline-block text-[10px] font-mono mt-1.5 px-2 py-0.5 rounded-full border"
                            style={{ color: tool.color, borderColor: tool.color + "40", backgroundColor: tool.color + "12" }}
                          >
                            {tool.name}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className={`shrink-0 w-5 h-5 rounded-md border flex items-center justify-center mt-0.5 transition-all ${
                      isSelected
                        ? "bg-[#FF9F4A] border-[#FF9F4A]"
                        : "border-[#2A2F38]"
                    }`}>
                      {isSelected && <Check size={12} className="text-[#14171C]" strokeWidth={3} />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setStep(3)}
            disabled={selected.length === 0}
            className="w-full flex items-center justify-center gap-2 text-sm font-medium bg-[#FF9F4A] text-[#14171C] rounded-lg py-2.5 hover:bg-[#FFB374] transition-colors disabled:opacity-50"
          >
            Önerileri Gör
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* ADIM 3 — Sonuçlar */}
      {step === 3 && (
        <div className="fade-rise">
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0]">
              Senin için öneriler
            </p>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs text-[#8B92A0]/60 hover:text-[#ECEEF1] transition-colors"
            >
              <RotateCcw size={12} />
              Başa dön
            </button>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            {selected.map((idx) => {
              const need = needs[idx];
              const tool = AI_TOOLS[need?.aiKey];
              if (!need || !tool) return null;
              const pricing = PRICING_LABELS[tool.pricing] || PRICING_LABELS.freemium;
              const isOpen = openPrompt === idx;

              return (
                <div key={idx} className="bg-[#14171C] border border-[#2A2F38] rounded-xl overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{need.icon}</span>
                        <p className="text-sm font-medium text-[#ECEEF1]">{need.title}</p>
                      </div>
                      <span className={`text-[10px] font-mono uppercase border rounded-full px-2 py-0.5 ${pricing.className}`}>
                        {pricing.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-xs font-semibold" style={{ color: tool.color }}>{tool.name}</p>
                      <span className="text-xs text-[#8B92A0]">· {tool.vendor}</span>
                    </div>
                    <p className="text-xs text-[#8B92A0] leading-relaxed mb-3">{tool.goldenTip}</p>
                    <button
                      onClick={() => setOpenPrompt(isOpen ? null : idx)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors"
                      style={{
                        color: tool.color,
                        borderColor: tool.color + "40",
                        backgroundColor: tool.color + "12",
                      }}
                    >
                      {isOpen ? "Prompt kutusunu kapat" : "Prompt Oluştur →"}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="border-t border-[#2A2F38] p-4">
                      <InlinePromptBox targetAI={tool.name} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bonus öneriler */}
          {bonus.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={13} className="text-[#A78BFA]" />
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0]">
                  Bonus — işine yarayabilir
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {bonus.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#14171C] border border-[#2A2F38] rounded-lg p-3">
                    <div className="w-7 h-7 rounded-md bg-[#A78BFA]/10 border border-[#A78BFA]/20 flex items-center justify-center shrink-0">
                      <Sparkles size={12} className="text-[#A78BFA]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#ECEEF1]">{b.name}</p>
                      <p className="text-xs text-[#8B92A0] mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
