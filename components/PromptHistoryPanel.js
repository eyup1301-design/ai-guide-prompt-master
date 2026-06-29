"use client";

import { useState } from "react";
import { History, Copy, Check, Trash2, ChevronDown, ChevronUp, X } from "lucide-react";

function timeAgo(ts, lang) {
  const diff = Date.now() - ts;
  const min = Math.floor(diff / 60000);
  const hr = Math.floor(diff / 3600000);
  const day = Math.floor(diff / 86400000);
  if (lang === "tr") {
    if (min < 1) return "az önce";
    if (min < 60) return `${min}dk önce`;
    if (hr < 24) return `${hr}sa önce`;
    return `${day}g önce`;
  }
  if (min < 1) return "just now";
  if (min < 60) return `${min}m ago`;
  if (hr < 24) return `${hr}h ago`;
  return `${day}d ago`;
}

export default function PromptHistoryPanel({ history, onRemove, onClear, lang = "en" }) {
  const [open, setOpen] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  if (history.length === 0) return null;

  const isTr = lang === "tr";
  const labels = {
    header: isTr ? "Prompt Geçmişin" : "Prompt History",
    clearAll: isTr ? "Tümünü temizle" : "Clear all",
    optimized: isTr ? "optimize edilmiş prompt" : "optimized prompt",
    copy: isTr ? "kopyala" : "copy",
    copied: isTr ? "kopyalandı" : "copied",
  };

  async function handleCopy(entry) {
    try {
      await navigator.clipboard.writeText(entry.result);
    } catch {}
    setCopiedId(entry.id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  return (
    <div className="mt-4 border border-[#2A2F38] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 bg-[#1C2128] hover:bg-[#252B33] transition-colors"
      >
        <div className="flex items-center gap-2">
          <History size={14} className="text-[#8B92A0]" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#8B92A0]">
            {labels.header}
          </span>
          <span className="text-[10px] font-mono bg-[#2A2F38] text-[#8B92A0] rounded-full px-2 py-0.5 leading-none">
            {history.length}
          </span>
        </div>
        {open ? (
          <ChevronUp size={14} className="text-[#8B92A0]" />
        ) : (
          <ChevronDown size={14} className="text-[#8B92A0]" />
        )}
      </button>

      {open && (
        <div className="bg-[#14171C] divide-y divide-[#2A2F38]">
          {history.map((entry) => (
            <div key={entry.id} className="px-4 py-3">
              <div className="flex items-start justify-between gap-2">
                <button
                  onClick={() =>
                    setExpandedId(expandedId === entry.id ? null : entry.id)
                  }
                  className="flex-1 text-left"
                >
                  <p className="text-xs text-[#ECEEF1]/80 leading-relaxed line-clamp-2">
                    {entry.input}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    {entry.targetAI && (
                      <span className="text-[10px] font-mono text-[#FF9F4A]/80 border border-[#FF9F4A]/20 rounded-full px-1.5 py-0.5 leading-none">
                        {entry.targetAI}
                      </span>
                    )}
                    <span className="text-[10px] text-[#8B92A0]/60">
                      {timeAgo(entry.timestamp, lang)}
                    </span>
                  </div>
                </button>
                <button
                  onClick={() => onRemove(entry.id)}
                  className="shrink-0 text-[#8B92A0]/30 hover:text-[#F87171] transition-colors mt-0.5 p-0.5"
                  aria-label="Remove"
                >
                  <X size={13} />
                </button>
              </div>

              {expandedId === entry.id && (
                <div className="mt-3 bg-[#1C2128] border border-[#2A2F38] rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#4ADEDE]">
                      {labels.optimized}
                    </p>
                    <button
                      onClick={() => handleCopy(entry)}
                      className="flex items-center gap-1 text-[10px] text-[#8B92A0] hover:text-[#ECEEF1] transition-colors"
                    >
                      {copiedId === entry.id ? (
                        <>
                          <Check size={11} className="text-[#4ADEDE]" />
                          {labels.copied}
                        </>
                      ) : (
                        <>
                          <Copy size={11} />
                          {labels.copy}
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-[#ECEEF1]/85 whitespace-pre-wrap leading-relaxed">
                    {entry.result}
                  </p>
                </div>
              )}
            </div>
          ))}

          <div className="px-4 py-2.5 flex justify-end">
            <button
              onClick={onClear}
              className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#8B92A0]/50 hover:text-[#F87171] transition-colors"
            >
              <Trash2 size={11} />
              {labels.clearAll}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
