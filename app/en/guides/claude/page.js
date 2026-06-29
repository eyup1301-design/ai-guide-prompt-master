import Link from "next/link";
import InlinePromptBoxEn from "@/components/InlinePromptBoxEn";
import {
  GuideSection,
  PromptExample,
  WarningRow,
  MistakeRow,
  SummaryRow,
} from "@/components/GuideComponents";

const SECTIONS = [
  { id: "what-is-it", label: "01 — What is it" },
  { id: "strengths-weaknesses", label: "02 — Strengths/weaknesses" },
  { id: "efficient-use", label: "03 — Efficient use" },
  { id: "watch-out", label: "04 — Watch out for" },
  { id: "behavior", label: "05 — Behavior" },
  { id: "mistakes", label: "06 — Common mistakes" },
  { id: "summary", label: "07 — Summary" },
  { id: "try-it", label: "08 — Try it now" },
];

export const metadata = {
  title: "Claude Guide — Wrompt",
  description: "What Claude does, its strengths/weaknesses, efficient use tips, and what to watch out for.",
};

export default function ClaudeGuideEn() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/en/guides" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← All guides
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#D97757] flex items-center justify-center">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg" alt="" className="w-4 h-4 invert" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">Claude Guide</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-5 max-w-xl">
          Everything you need to know to use Anthropic's assistant effectively.
        </p>
        <a
          href="#try-it"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FF9F4A] border border-[#FF9F4A]/40 bg-[#FF9F4A]/10 rounded-full px-4 py-2 mb-10 hover:bg-[#FF9F4A]/20 transition-colors"
        >
          I just want to generate a prompt, skip ↓
        </a>

        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8">
          <nav className="hidden md:flex flex-col gap-1 sticky top-8 self-start">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-xs text-[#8B92A0] hover:text-[#FF9F4A] py-1.5 transition-colors">
                {s.label}
              </a>
            ))}
          </nav>
          <nav className="md:hidden flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-xs text-[#8B92A0] whitespace-nowrap border border-[#2A2F38] rounded-full px-3 py-1.5">
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-14 min-w-0">
            <GuideSection id="what-is-it" title="What is Claude?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Claude is the chat assistant from Anthropic, a company focused on AI safety. It's
                named after Claude Shannon, a pioneer of information theory. It's trained using an
                approach called <b className="text-[#ECEEF1] font-medium">"Constitutional AI"</b>,
                where the model checks its own output against a set of predefined principles.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                Available at <b className="text-[#ECEEF1] font-medium">claude.ai</b> (web), and desktop and mobile apps.
                Particularly favored for long-document analysis, coding, and structured writing.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">model family</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Haiku</span>
                    <span className="text-[#8B92A0] text-right">Fastest, simple/high-volume tasks</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Sonnet</span>
                    <span className="text-[#8B92A0] text-right">The sweet spot for everyday use</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Opus</span>
                    <span className="text-[#8B92A0] text-right">Most powerful, complex analysis/coding</span>
                  </div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="strengths-weaknesses" title="Strengths and Weaknesses">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">strengths</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Large context window — handles long documents/codebases without losing track</li>
                    <li>Consistent at coding and structured tasks</li>
                    <li>Artifacts let you edit content like code/drafts/tables in a separate pane</li>
                    <li>Safety-focused approach builds trust in enterprise settings</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">weaknesses</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Free plan becomes completely unusable once you hit the daily limit</li>
                    <li>Can't generate images/video — analysis only</li>
                    <li>Can be cautious and decline some borderline requests</li>
                    <li>Smaller third-party plugin ecosystem than ChatGPT</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="efficient-use" title="How to Use It More Efficiently">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                Claude is good at following an example you give it. See how the same request
                produces different results below, weak vs. strong.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Scenario 1 — Contract review"
                  weak={`"Review this contract."`}
                  strong={`"Review this lease agreement, list clauses that could be risky for the tenant by clause number, with a short explanation for each."`}
                  weakResult="A generic summary, unclear which clauses are risky."
                  strongResult="A clause-numbered, actionable risk list."
                />
                <PromptExample
                  scenario="Scenario 2 — Code review"
                  weak={`"Check this code."`}
                  strong={`"List the security vulnerabilities and performance issues in this Python file separately, suggest a fix for each."`}
                  weakResult="A shallow 'looks fine' comment."
                  strongResult="A concrete list, split by category, with suggested fixes."
                />
                <PromptExample
                  scenario="Scenario 3 — Long report summary"
                  weak={`"Summarize this report."`}
                  strong={`"Condense this 40-page report into a 5-point action list for the board, one sentence per point."`}
                  weakResult="A generic-length, not very useful summary."
                  strongResult="A tight, presentation-ready 5-point list."
                />
              </div>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mt-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">bonus tip — artifacts</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed">
                  When you ask for code, a long draft, or a table, Claude automatically opens it in{" "}
                  <b className="text-[#ECEEF1] font-medium">Artifacts</b> — you can edit and copy
                  it without cluttering the chat.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="watch-out" title="What to Watch Out For">
              <div className="flex flex-col gap-3">
                <WarningRow title="Plan around the free limit" text="On the free plan, hitting the daily message limit locks the chat entirely. Factor this in if you're mid-task." />
                <WarningRow title="It can't generate images/video" text="Claude is text/code/analysis-focused. For image or video generation, you'll need a different AI." />
                <WarningRow title="Be ready for declined requests" text="Due to its safety approach, borderline requests may be handled cautiously — clarifying your request usually resolves it." />
              </div>
            </GuideSection>

            <GuideSection id="behavior" title="Customizing Its Behavior">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                You can permanently adjust Claude's tone and style using{" "}
                <b className="text-[#ECEEF1] font-medium">Styles</b> and account preferences.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">how to set it up</p>
                <ol className="text-sm text-[#ECEEF1]/85 leading-relaxed list-decimal list-inside flex flex-col gap-1.5">
                  <li>On claude.ai, click your profile (top right) → "Settings"</li>
                  <li>Go to "Profile" or "Preferences"</li>
                  <li>Write your preferences (tone, format, things to watch for)</li>
                  <li>You can also switch tone on the fly with "Styles" in the chat screen</li>
                </ol>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">example instruction</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  "Don't open with unnecessary praise. When evaluating an idea of mine, state the
                  risks and gaps first, then suggest a fix."
                </p>
              </div>
            </GuideSection>

            <GuideSection id="mistakes" title="Common Mistakes">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Turning to Claude for image/video generation — that needs a different AI." />
                <MistakeRow text="Starting a critical task right as you near the free plan's daily limit." />
                <MistakeRow text="Writing a vague prompt and being surprised it didn't give an example — you need to ask for one." />
                <MistakeRow text="Asking for a huge piece of content in one go instead of going draft-first, then detail." />
                <MistakeRow text="Retrying a declined request as-is — clarifying or adding context usually works." />
              </div>
            </GuideSection>

            <GuideSection id="summary" title="Quick Summary">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="Best for" value="Code, long-document analysis, structured writing" />
                <SummaryRow label="Weak for" value="Image/video generation" />
                <SummaryRow label="Free?" value="Yes, with a daily limit" />
                <SummaryRow label="Paid plan" value="Pro / Max / Team" />
                <SummaryRow label="Default model" value="Sonnet" />
              </div>
            </GuideSection>

            <div id="try-it" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — try it now</p>
              <InlinePromptBoxEn targetAI="Claude Sonnet" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}