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
  { id: "behavior", label: "05 — Search filters" },
  { id: "mistakes", label: "06 — Common mistakes" },
  { id: "summary", label: "07 — Summary" },
  { id: "try-it", label: "08 — Try it now" },
];

export const metadata = {
  title: "Perplexity Guide — Wrompt",
  description: "What Perplexity does, its strengths/weaknesses, efficient use tips, and what to watch out for.",
};

export default function PerplexityGuideEn() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/en/guides" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← All guides
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#14B8A6] flex items-center justify-center">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/perplexity.svg" alt="" className="w-4 h-4 invert" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">Perplexity Guide</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-5 max-w-xl">
          The AI-powered search engine that combines real-time web search with sourced summaries.
        </p>
        <a href="#try-it" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FF9F4A] border border-[#FF9F4A]/40 bg-[#FF9F4A]/10 rounded-full px-4 py-2 mb-10 hover:bg-[#FF9F4A]/20 transition-colors">
          I just want to generate a prompt, skip ↓
        </a>

        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8">
          <nav className="hidden md:flex flex-col gap-1 sticky top-8 self-start">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-xs text-[#8B92A0] hover:text-[#FF9F4A] py-1.5 transition-colors">{s.label}</a>
            ))}
          </nav>

          <div className="flex flex-col gap-14 min-w-0">
            <GuideSection id="what-is-it" title="What is Perplexity?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Perplexity is an AI-powered search tool that <b className="text-[#ECEEF1] font-medium">searches the web in real time</b> and delivers sourced summaries instead of a list of links. Unlike ChatGPT, it always has access to current information.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                Every answer includes citations — you can always verify where the information came from. Essential for research that requires up-to-date data.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">core features</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3"><span className="text-[#ECEEF1] font-medium">Real-time search</span><span className="text-[#8B92A0] text-right">Scans current web sources</span></div>
                  <div className="flex justify-between gap-3"><span className="text-[#ECEEF1] font-medium">Source citations</span><span className="text-[#8B92A0] text-right">Every claim has a source</span></div>
                  <div className="flex justify-between gap-3"><span className="text-[#ECEEF1] font-medium">Focused search</span><span className="text-[#8B92A0] text-right">Academic, news, Reddit filters</span></div>
                  <div className="flex justify-between gap-3"><span className="text-[#ECEEF1] font-medium">Follow-up questions</span><span className="text-[#8B92A0] text-right">Suggested questions to go deeper</span></div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="strengths-weaknesses" title="Strengths and Weaknesses">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">strengths</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Real-time access — no knowledge cutoff like ChatGPT</li>
                    <li>Every answer is sourced and verifiable</li>
                    <li>Academic, news, Reddit focused search modes</li>
                    <li>Basic use is completely free</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">weaknesses</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Not as strong as ChatGPT/Claude for creative writing or coding</li>
                    <li>Non-English source quality varies</li>
                    <li>Cannot analyze long uploaded documents</li>
                    <li>Limited image generation or file upload support</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="efficient-use" title="How to Use It More Efficiently">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                For the best results in Perplexity, ask specific, focused questions. Broad questions return noisy results; narrow questions get high-quality sourced answers.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Scenario 1 — Current events research"
                  weak={`"AI news"`}
                  strong={`"What are the latest EU AI Act regulations passed in 2025 and how do they affect foundation model developers?"`}
                  weakResult="General, possibly outdated results."
                  strongResult="Date-filtered, sourced, summarized answer."
                />
                <PromptExample
                  scenario="Scenario 2 — Academic research"
                  weak={`"Sleep research"`}
                  strong={`"Peer-reviewed studies from the last 3 years on the effects of sleep deprivation on cognitive performance"`}
                  weakResult="Mix of academic and non-academic content."
                  strongResult="Academic-filtered, credible sourced summary."
                />
              </div>
            </GuideSection>

            <GuideSection id="watch-out" title="What to Watch Out For">
              <div className="flex flex-col gap-3">
                <WarningRow title="Check sources, don't trust blindly" text="Even though Perplexity cites sources, it can sometimes misinterpret them. Verify critical facts by clicking through to the source." />
                <WarningRow title="Non-English content quality varies" text="English searches return significantly richer and more reliable results. Use English queries when possible." />
                <WarningRow title="Pro features are paid" text="Advanced models (Claude, GPT-4), file uploads, and deep research mode require the Pro plan ($20/mo)." />
              </div>
            </GuideSection>

            <GuideSection id="behavior" title="Focused Search Filters">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Narrowing your search source dramatically improves result quality. Use the filter selector before submitting your query.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">search filters</p>
                <ol className="text-sm text-[#ECEEF1]/85 leading-relaxed list-decimal list-inside flex flex-col gap-1.5">
                  <li><b className="text-[#ECEEF1]">Academic</b>: Peer-reviewed papers and scholarly sources</li>
                  <li><b className="text-[#ECEEF1]">News</b>: Latest news and recent developments</li>
                  <li><b className="text-[#ECEEF1]">Reddit</b>: Real user experiences and community opinions</li>
                  <li><b className="text-[#ECEEF1]">YouTube</b>: Video content summaries</li>
                </ol>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">example</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  Switch to Reddit filter and ask &ldquo;Notion vs Obsidian for personal knowledge management&rdquo; — you&apos;ll get real user experiences instead of marketing copy.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="mistakes" title="Common Mistakes">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Using it for creative tasks — ChatGPT or Claude are much better for writing, coding, and brainstorming." />
                <MistakeRow text="Not checking sources — AI summaries can occasionally misinterpret the cited content." />
                <MistakeRow text="Asking overly broad questions — 'what is economics?' gets worse results than a specific, time-anchored question." />
                <MistakeRow text="Only searching in non-English — English queries return far richer and more reliable results." />
              </div>
            </GuideSection>

            <GuideSection id="summary" title="Quick Summary">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="Best for" value="Current research, news tracking, sourced answers" />
                <SummaryRow label="Weak for" value="Creative writing, coding, non-English content" />
                <SummaryRow label="Free?" value="Yes, basic use is free" />
                <SummaryRow label="Pro price" value="$20/mo" />
                <SummaryRow label="Strongest feature" value="Real-time sourced search" />
              </div>
            </GuideSection>

            <div id="try-it" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — try it now</p>
              <InlinePromptBoxEn targetAI="Perplexity" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
