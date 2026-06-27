export function GuideSection({ id, title, children }) {
  return (
    <div id={id} className="scroll-mt-8">
      <h2 className="font-display text-lg font-semibold mb-3 text-[#ECEEF1]">
        {title}
      </h2>
      {children}
    </div>
  );
}

export function PromptExample({ scenario, weak, strong, weakResult, strongResult }) {
  return (
    <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
      <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">
        {scenario}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <p className="text-[10px] font-mono uppercase text-[#F87171] mb-1.5">
            zayıf
          </p>
          <p className="text-sm text-[#ECEEF1]/85 mb-2">{weak}</p>
          <p className="text-xs text-[#8B92A0] leading-relaxed">
            → {weakResult}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase text-[#4ADEDE] mb-1.5">
            güçlü
          </p>
          <p className="text-sm text-[#ECEEF1]/85 mb-2">{strong}</p>
          <p className="text-xs text-[#8B92A0] leading-relaxed">
            → {strongResult}
          </p>
        </div>
      </div>
    </div>
  );
}

export function WarningRow({ title, text }) {
  return (
    <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
      <p className="text-sm font-medium text-[#ECEEF1] mb-1">{title}</p>
      <p className="text-sm text-[#8B92A0] leading-relaxed">{text}</p>
    </div>
  );
}

export function MistakeRow({ text }) {
  return (
    <div className="flex items-start gap-2.5 bg-[#1C2128] border border-[#2A2F38] rounded-xl p-3.5">
      <span className="text-[#F87171] text-sm mt-0.5">✕</span>
      <p className="text-sm text-[#ECEEF1]/85 leading-relaxed">{text}</p>
    </div>
  );
}

export function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between gap-3 border-b border-[#2A2F38] pb-2.5 last:border-0 last:pb-0">
      <span className="text-[#8B92A0]">{label}</span>
      <span className="text-[#ECEEF1] font-medium text-right">{value}</span>
    </div>
  );
}