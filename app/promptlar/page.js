"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { PROMPT_LIBRARY, CATEGORIES, AI_FILTERS } from "@/lib/prompt-library";

export default function HazirPromptlar() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeAI, setActiveAI] = useState("all");
  const [copiedId, setCopiedId] = useState(null);

  const filtered = PROMPT_LIBRARY.filter((p) => {
    const catMatch = activeCategory === "all" || p.category === activeCategory;
    const aiMatch = activeAI === "all" || p.aiKey === activeAI;
    return catMatch && aiMatch;
  });

  const visibleAIs = activeCategory === "all"
    ? AI_FILTERS
    : AI_FILTERS.filter((f) => f.key === "all" || PROMPT_LIBRARY.some((p) => p.category === activeCategory && p.aiKey === f.key));

  async function handleCopy(prompt, id) {
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {}
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-20">

        <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">
          hazır prompt kütüphanesi
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
          Kullanıma hazır promptlar
        </h1>
        <p className="text-sm text-[#8B92A0] mb-8 max-w-xl">
          Kopyala, istediğin AI aracına yapıştır. Köşeli parantez içindeki kısımları kendi bilginle doldur.
        </p>

        {/* Kategori filtreleri */}
        <div className="flex flex-wrap gap-2 mb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setActiveAI("all"); }}
              className={`text-xs font-medium rounded-full px-4 py-1.5 border transition-colors ${
                activeCategory === cat.id
                  ? "text-[#FF9F4A] bg-[#FF9F4A]/10 border-[#FF9F4A]/40"
                  : "text-[#8B92A0] border-[#2A2F38] hover:bg-[#1C2128]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* AI filtreleri */}
        {activeCategory !== "all" && (
          <div className="flex flex-wrap gap-2 mb-6">
            {visibleAIs.map((ai) => (
              <button
                key={ai.key}
                onClick={() => setActiveAI(ai.key)}
                className={`text-xs rounded-full px-3 py-1 border transition-colors ${
                  activeAI === ai.key
                    ? "text-[#4ADEDE] bg-[#4ADEDE]/10 border-[#4ADEDE]/40"
                    : "text-[#8B92A0] border-[#2A2F38] hover:bg-[#1C2128]"
                }`}
              >
                {ai.name}
              </button>
            ))}
          </div>
        )}

        {activeCategory === "all" && <div className="mb-6" />}

        {/* Sonuç sayısı */}
        <p className="text-xs text-[#8B92A0]/60 mb-4 font-mono">
          {filtered.length} prompt
        </p>

        {/* Prompt kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 hover:border-[#3A3F48] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border"
                  style={{ color: p.aiColor, borderColor: p.aiColor + "40", backgroundColor: p.aiColor + "12" }}
                >
                  {p.aiName}
                </span>
                <span className="text-[10px] text-[#8B92A0] border border-[#2A2F38] rounded-full px-2 py-0.5">
                  {p.categoryLabel}
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold text-[#ECEEF1] mb-1.5">{p.title}</p>
                <p className="text-xs text-[#8B92A0] leading-relaxed line-clamp-4">{p.prompt}</p>
              </div>

              <button
                onClick={() => handleCopy(p.prompt, p.id)}
                className="mt-auto flex items-center justify-center gap-1.5 text-xs font-medium w-full py-2 rounded-lg border transition-colors"
                style={
                  copiedId === p.id
                    ? { color: "#4ADEDE", borderColor: "#4ADEDE40", backgroundColor: "#4ADEDE10" }
                    : { color: "#8B92A0", borderColor: "#2A2F38", backgroundColor: "transparent" }
                }
              >
                {copiedId === p.id ? (
                  <><Check size={13} /> Kopyalandı</>
                ) : (
                  <><Copy size={13} /> Kopyala</>
                )}
              </button>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
