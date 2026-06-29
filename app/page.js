"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Image as ImageIcon,
  BarChart3,
  PenTool,
  Search,
  Video,
  Music,
  Sparkles,
  ArrowRight,
  Radio,
  Copy,
  Check,
  Loader2,
  Send,
  BookOpen,
} from "lucide-react";
import { TASKS, getCandidates, getQuestions } from "@/lib/task-ai-matrix";
import AiFirstFlow from "@/components/AiFirstFlow";
import { usePromptHistory } from "@/lib/usePromptHistory";
import PromptHistoryPanel from "@/components/PromptHistoryPanel";

const TOOL_GUIDE_SLUG = {
  "claude-sonnet": "claude",
  "gpt-4o": "chatgpt",
  midjourney: "midjourney",
  "gemini-pro": "gemini",
  "nano-banana": "gemini",
};

const PRICING_LABELS = {
  free: { label: "ücretsiz", className: "text-[#4ADEDE] border-[#4ADEDE]/30" },
  freemium: { label: "freemium", className: "text-[#FACC15] border-[#FACC15]/30" },
  paid: { label: "ücretli", className: "text-[#F87171] border-[#F87171]/30" },
};

const ICONS = {
  Code2,
  Image: ImageIcon,
  BarChart3,
  PenTool,
  Search,
  Video,
  Music,
  Sparkles,
};

export default function Home() {
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [mode, setMode] = useState("task");
  const [rawInput, setRawInput] = useState("");
  const [answers, setAnswers] = useState({});
  const [optimizedPrompt, setOptimizedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState("auto");
  const [selectedToolKey, setSelectedToolKey] = useState(null);
  const [freeText, setFreeText] = useState("");
  const [isClassifying, setIsClassifying] = useState(false);
  const [classifyError, setClassifyError] = useState("");
  const [dynamicCandidates, setDynamicCandidates] = useState([]);
  const [isFetchingTool, setIsFetchingTool] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackCopied, setFeedbackCopied] = useState(false);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const { history, addToHistory, removeFromHistory, clearHistory } = usePromptHistory();

  const LANGUAGE_OPTIONS = [
    { id: "auto", label: "otomatik" },
    { id: "tr", label: "türkçe" },
    { id: "en", label: "ingilizce" },
  ];

  const selectedTask = TASKS.find((t) => t.id === selectedTaskId) ?? null;
  const staticCandidates = selectedTaskId ? getCandidates(selectedTaskId) : [];
  const candidates =
    selectedTaskId === "other" && dynamicCandidates.length > 0
      ? dynamicCandidates
      : staticCandidates;
  const primaryTool =
    candidates.find((c) => c.key === selectedToolKey) ?? candidates[0] ?? null;
  const questions = selectedTaskId ? getQuestions(selectedTaskId) : [];

  function handleSelectTask(taskId, prefillText = "") {
    setSelectedTaskId(taskId);
    setSelectedToolKey(null);
    setRawInput(prefillText);
    setAnswers({});
    setOptimizedPrompt("");
    setError("");
    setDynamicCandidates([]);
  }

  async function fetchDynamicTool(text) {
    setIsFetchingTool(true);
    try {
      const response = await fetch("/api/recommend-tool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rawInput: text }),
      });
      const data = await response.json();
      if (response.ok && data.candidates?.length > 0) {
        setDynamicCandidates(
          data.candidates.map((c, i) => ({
            ...c,
            color: c.color || "#FF9F4A",
            recommended: i === 0,
          }))
        );
      }
      // Başarısız olursa dynamicCandidates boş kalır, statik "other" havuzuna
      // (Claude/GPT-4o/Gemini) otomatik düşer — kullanıcı boş ekran görmez.
    } catch (err) {
      // sessizce statik havuza düş
    } finally {
      setIsFetchingTool(false);
    }
  }

  async function handleFeedbackSend() {
    if (!feedbackText.trim()) return;
    setIsSendingFeedback(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: feedbackText }),
      });

      if (!response.ok) throw new Error("Kaydedilemedi");

      setFeedbackSent(true);
      setFeedbackText("");
      setTimeout(() => setFeedbackSent(false), 5000);
    } catch (err) {
      // Kayıt başarısız olursa, mail yoluna düş (eski yedek yöntem).
      const subject = encodeURIComponent("Wrompt Geri Bildirim");
      const body = encodeURIComponent(feedbackText);
      window.location.href = `mailto:wrompt.info@gmail.com?subject=${subject}&body=${body}`;
      navigator.clipboard?.writeText(feedbackText);
      setFeedbackCopied(true);
      setTimeout(() => setFeedbackCopied(false), 5000);
    } finally {
      setIsSendingFeedback(false);
    }
  }

  async function handleClassify() {
    if (!freeText.trim()) return;
    setIsClassifying(true);
    setClassifyError("");

    try {
      const response = await fetch("/api/classify-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rawInput: freeText }),
      });

      const data = await response.json();
      const taskId = data.taskId || "other";
      const text = freeText;
      handleSelectTask(taskId, text);
      setFreeText("");

      if (taskId === "other") {
        fetchDynamicTool(text);
      }
    } catch (err) {
      setClassifyError("Sınıflandırılamadı, lütfen hazır kategorilerden seç.");
    } finally {
      setIsClassifying(false);
    }
  }

  function handleAnswerChange(questionId, value) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  async function handleOptimize() {
    if (!rawInput.trim()) {
      setError("Önce ne yapmak istediğini kısaca yaz.");
      return;
    }
    setError("");
    setIsLoading(true);
    setOptimizedPrompt("");

    try {
      const response = await fetch("/api/optimize-prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rawInput,
          taskLabel: selectedTask?.label,
          targetAI: primaryTool?.name,
          answers,
          language,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Bir hata oluştu.");
      }

      setOptimizedPrompt(data.optimizedPrompt);
      addToHistory({
        input: rawInput.trim(),
        result: data.optimizedPrompt,
        targetAI: primaryTool?.name,
        taskLabel: selectedTask?.label,
      });
    } catch (err) {
      setError(err.message || "Prompt optimize edilemedi, tekrar dene.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(optimizedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1] selection:bg-[#FF9F4A]/30">
      <style>{`
        @keyframes signalPulse {
          0% { transform: translateY(-8px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(8px); opacity: 0; }
        }
        .signal-dot { animation: signalPulse 1.4s ease-in-out infinite; }
        @keyframes fadeRise {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-rise { animation: fadeRise 0.35s ease-out forwards; }
      `}</style>

      {/* ---------- HERO ---------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8B92A0] mb-5 sm:mb-6">
          <Radio size={14} className="text-[#FF9F4A]" />
          <span>AI Guide & Prompt Master</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-semibold leading-[1.1] md:leading-[1.05] max-w-3xl">
          Doğru yapay zekayı seç,{" "}
          <span className="text-[#FF9F4A]">prompt'unu optimize et.</span>
        </h1>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#8B92A0] max-w-xl">
          Görevini seç. Sistem sana en uygun AI aracını ve onun için
          özel hazırlanmış altın ipuçlarını canlı olarak eşleştirsin.
        </p>
      </section>

      {/* ---------- SEÇİM KONSOLU ---------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        {/* Mod geçişi */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setMode("task")}
            className={`text-xs font-medium rounded-full px-4 py-2 border transition-colors ${
              mode === "task"
                ? "text-[#FF9F4A] bg-[#FF9F4A]/10 border-[#FF9F4A]/40"
                : "text-[#8B92A0] bg-transparent border-[#2A2F38] hover:bg-[#1C2128]"
            }`}
          >
            Göreve göre
          </button>
          <button
            onClick={() => setMode("ai")}
            className={`text-xs font-medium rounded-full px-4 py-2 border transition-colors ${
              mode === "ai"
                ? "text-[#4ADEDE] bg-[#4ADEDE]/10 border-[#4ADEDE]/40"
                : "text-[#8B92A0] bg-transparent border-[#2A2F38] hover:bg-[#1C2128]"
            }`}
          >
            AI'ya göre
          </button>
        </div>

        {mode === "ai" ? (
          <AiFirstFlow />
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_64px_1fr] gap-3 md:gap-0 items-stretch">
          {/* SOL: Görev Listesi */}
          <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl md:rounded-l-xl md:rounded-r-none p-2">
            <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] px-3 pt-3 pb-2">
              01 — görevini seç
            </p>

            {/* Serbest metin girişi */}
            <div className="px-3 pb-3">
              <label className="text-xs text-[#8B92A0] mb-1.5 block">
                ya da görevini kendi cümlenle yaz
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={freeText}
                  onChange={(e) => setFreeText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleClassify()}
                  placeholder="örn: bana kısa bir oyun senaryosu yaz"
                  className="flex-1 bg-[#14171C] border border-[#2A2F38] rounded-lg px-3 py-2 text-sm text-[#ECEEF1] placeholder:text-[#8B92A0]/60 focus:outline-none focus:border-[#FF9F4A]/50"
                />
                <button
                  onClick={handleClassify}
                  disabled={isClassifying || !freeText.trim()}
                  className="shrink-0 flex items-center justify-center w-10 rounded-lg bg-[#FF9F4A] text-[#14171C] hover:bg-[#FFB374] transition-colors disabled:opacity-50"
                >
                  {isClassifying ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <ArrowRight size={16} />
                  )}
                </button>
              </div>
              {classifyError && (
                <p className="text-xs text-red-400 mt-1.5">{classifyError}</p>
              )}
              <div className="flex items-center gap-2 mt-4">
                <div className="flex-1 h-px bg-[#2A2F38]" />
                <span className="text-[10px] text-[#8B92A0] font-mono uppercase tracking-wider">
                  veya hazırdan seç
                </span>
                <div className="flex-1 h-px bg-[#2A2F38]" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {TASKS.filter((task) => !task.hidden).map((task) => {
                const Icon = ICONS[task.icon];
                const isActive = selectedTaskId === task.id;
                return (
                  <button
                    key={task.id}
                    onClick={() => handleSelectTask(task.id)}
                    className={`flex items-center gap-3 text-left px-3 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#FF9F4A]/10 border border-[#FF9F4A]/40"
                        : "border border-transparent hover:bg-[#252B33]"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={isActive ? "text-[#FF9F4A]" : "text-[#8B92A0]"}
                    />
                    <div>
                      <p className="text-sm font-medium text-[#ECEEF1]/90">
                        {task.label}
                      </p>
                      <p className="text-xs text-[#8B92A0] mt-0.5">
                        {task.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ORTA: Sinyal Hattı */}
          <div className="hidden md:flex flex-col items-center justify-center bg-[#1C2128]/40 border-y border-[#2A2F38] relative">
            <div className="w-px h-full bg-[#2A2F38] absolute" />
            {selectedTaskId && (
              <div className="relative z-10 w-2 h-2 rounded-full bg-[#4ADEDE] signal-dot" />
            )}
          </div>

          {/* SAĞ: AI Önerisi + Soru Formu + Sonuç */}
          <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl md:rounded-r-xl md:rounded-l-none p-2 flex flex-col">
            <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] px-3 pt-3 pb-2">
              02 — ai seç
            </p>

            {!primaryTool && !isFetchingTool && (
              <div className="flex-1 flex items-center justify-center px-6 py-12 text-center">
                <p className="text-sm text-[#8B92A0]">
                  Soldan bir görev seç, eşleşmeler burada belirecek.
                </p>
              </div>
            )}

            {isFetchingTool && (
              <div className="flex-1 flex items-center justify-center gap-2 px-6 py-12 text-center text-[#8B92A0]">
                <Loader2 size={16} className="animate-spin" />
                <p className="text-sm">güncel AI'lar aranıyor...</p>
              </div>
            )}

            {primaryTool && !isFetchingTool && (
              <div className="px-3 pb-3 fade-rise" key={selectedTaskId}>
                {/* Seçilebilir AI kartları */}
                <div className="flex flex-col gap-1.5 mb-3">
                  {candidates.map((tool) => {
                    const isSelected = tool.key === primaryTool.key;
                    const pricing =
                      PRICING_LABELS[tool.pricing] || PRICING_LABELS.freemium;
                    return (
                      <button
                        key={tool.key}
                        onClick={() => setSelectedToolKey(tool.key)}
                        className={`flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-1.5 text-left px-3 py-2 rounded-lg border transition-colors ${
                          isSelected
                            ? "bg-[#14171C] border-[#FF9F4A]/40"
                            : "border-[#2A2F38] hover:bg-[#252B33]"
                        }`}
                      >
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="text-sm font-medium"
                            style={{ color: tool.color }}
                          >
                            {tool.name}
                          </span>
                          {tool.recommended && (
                            <span className="text-[9px] font-mono uppercase tracking-wider text-[#4ADEDE] border border-[#4ADEDE]/30 rounded-full px-1.5 py-0.5 whitespace-nowrap">
                              en iyi eşleşme
                            </span>
                          )}
                        </div>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider border rounded-full px-2 py-0.5 whitespace-nowrap ${pricing.className}`}
                        >
                          {pricing.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Seçili AI'nin detay kartı */}
                <div className="rounded-lg border border-[#2A2F38] bg-[#14171C] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className="text-base font-semibold"
                        style={{ color: primaryTool.color }}
                      >
                        {primaryTool.name}
                      </p>
                      <p className="text-xs text-[#8B92A0] mt-0.5">
                        {primaryTool.vendor} · {primaryTool.priceNote}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#ECEEF1]/80 mt-3 leading-relaxed">
                    {primaryTool.strengths}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#2A2F38]">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#FF9F4A] mb-1">
                      altın ipucu
                    </p>
                    <p className="text-sm text-[#ECEEF1]/80 leading-relaxed">
                      {primaryTool.goldenTip}
                    </p>
                  </div>
                </div>

                {/* Kaba istek + dinamik sorular */}
                <div className="mt-4 space-y-3">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-1.5 block">
                      prompt dili
                    </label>
                    <div className="flex gap-1.5 flex-wrap">
                      {LANGUAGE_OPTIONS.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setLanguage(opt.id)}
                          className={`text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-md border transition-colors ${
                            language === opt.id
                              ? "bg-[#FF9F4A]/10 border-[#FF9F4A]/40 text-[#FF9F4A]"
                              : "border-[#2A2F38] text-[#8B92A0] hover:bg-[#252B33]"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-1.5 block">
                      ne yapmak istiyorsun?
                    </label>
                    <textarea
                      value={rawInput}
                      onChange={(e) => setRawInput(e.target.value)}
                      placeholder="örn: bir timsah görseli istiyorum"
                      rows={2}
                      className="w-full bg-[#14171C] border border-[#2A2F38] rounded-lg px-3 py-2 text-sm text-[#ECEEF1] placeholder:text-[#8B92A0]/60 focus:outline-none focus:border-[#FF9F4A]/50 resize-none"
                    />
                  </div>

                  {questions.map((q) => (
                    <div key={q.id}>
                      <label className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-1.5 block">
                        {q.label}
                      </label>
                      <input
                        type="text"
                        value={answers[q.id] || ""}
                        onChange={(e) =>
                          handleAnswerChange(q.id, e.target.value)
                        }
                        placeholder={q.placeholder}
                        className="w-full bg-[#14171C] border border-[#2A2F38] rounded-lg px-3 py-2 text-sm text-[#ECEEF1] placeholder:text-[#8B92A0]/60 focus:outline-none focus:border-[#FF9F4A]/50"
                      />
                    </div>
                  ))}

                  {error && (
                    <p className="text-xs text-red-400">{error}</p>
                  )}

                  <button
                    onClick={handleOptimize}
                    disabled={isLoading}
                    className="mt-1 w-full flex items-center justify-center gap-2 text-sm font-medium bg-[#FF9F4A] text-[#14171C] rounded-lg py-2.5 hover:bg-[#FFB374] transition-colors disabled:opacity-60"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        optimize ediliyor...
                      </>
                    ) : (
                      <>
                        Prompt'umu optimize et
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>

                {/* Sonuç */}
                {optimizedPrompt && (
                  <>
                    <div className="mt-4 rounded-lg border border-[#4ADEDE]/30 bg-[#14171C] p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE]">
                          optimize edilmiş prompt
                        </p>
                        <button
                          onClick={handleCopy}
                          className="flex items-center gap-1.5 text-xs text-[#8B92A0] hover:text-[#ECEEF1] transition-colors"
                        >
                          {copied ? (
                            <>
                              <Check size={14} className="text-[#4ADEDE]" />
                              kopyalandı
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              kopyala
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-sm text-[#ECEEF1]/90 leading-relaxed whitespace-pre-wrap">
                        {optimizedPrompt}
                      </p>

                      {TOOL_GUIDE_SLUG[primaryTool?.key] && (
                        <div className="mt-4 pt-3 border-t border-[#2A2F38]">
                          <p className="text-[10px] font-mono uppercase tracking-wider text-[#8B92A0] mb-2">
                            Daha fazla öğren
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Link
                              href={`/rehberler/${TOOL_GUIDE_SLUG[primaryTool.key]}`}
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4ADEDE] border border-[#4ADEDE]/30 bg-[#4ADEDE]/5 rounded-full px-3.5 py-1.5 hover:bg-[#4ADEDE]/15 transition-colors"
                            >
                              <BookOpen size={12} />
                              Türkçe {primaryTool.name} Rehberi
                            </Link>
                            <Link
                              href={`/en/guides/${TOOL_GUIDE_SLUG[primaryTool.key]}`}
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8B92A0] border border-[#2A2F38] bg-transparent rounded-full px-3.5 py-1.5 hover:bg-[#1C2128] hover:text-[#ECEEF1] transition-colors"
                            >
                              <BookOpen size={12} />
                              English Guide
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>

                  </>
                )}
              </div>
            )}
          </div>
        </div>
        )}

        <PromptHistoryPanel
          history={history}
          onRemove={removeFromHistory}
          onClear={clearHistory}
          lang="tr"
        />
      </section>

      {/* ---------- GERİ BİLDİRİM ---------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-5 sm:p-6 max-w-xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">
            geri bildirim
          </p>
          <p className="text-sm text-[#ECEEF1]/80 mb-4">
            Bir şey çalışmadı mı, yoksa eklenmesini istediğin bir şey mi var?
            Bize yaz, dinliyoruz.
          </p>
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="görüşünü buraya yaz..."
            rows={3}
            className="w-full bg-[#14171C] border border-[#2A2F38] rounded-lg px-3 py-2 text-sm text-[#ECEEF1] placeholder:text-[#8B92A0]/60 focus:outline-none focus:border-[#FF9F4A]/50 resize-none"
          />
          <button
            onClick={handleFeedbackSend}
            disabled={!feedbackText.trim() || isSendingFeedback}
            className="mt-3 flex items-center justify-center gap-2 mx-auto text-sm font-medium bg-transparent border border-[#4ADEDE]/40 text-[#4ADEDE] rounded-lg px-5 py-2 hover:bg-[#4ADEDE]/10 transition-colors disabled:opacity-40"
          >
            {isSendingFeedback ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                gönderiliyor...
              </>
            ) : (
              <>
                Gönder
                <Send size={14} />
              </>
            )}
          </button>
          {feedbackSent && (
            <p className="text-xs text-[#4ADEDE] mt-3">
              Teşekkürler! Geri bildirimin kaydedildi 🙌
            </p>
          )}
          {feedbackCopied && (
            <p className="text-xs text-[#4ADEDE] mt-3">
              Metin kopyalandı! Mail uygulaman açılmadıysa, doğrudan{" "}
              <span className="font-medium">wrompt.info@gmail.com</span>'a
              yapıştırıp gönderebilirsin.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}