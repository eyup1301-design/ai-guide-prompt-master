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
  title: "Gemini Guide — Wrompt",
  description: "What Gemini does, its strengths/weaknesses, efficient use tips, and what to watch out for.",
};

export default function GeminiGuideEn() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/en/guides" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← All guides
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#1C69FF] flex items-center justify-center">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlegemini.svg" alt="" className="w-4 h-4 invert" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">Gemini Guide</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-5 max-w-xl">
          Everything you need to know to use Google's AI model effectively.
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
            <GuideSection id="what-is-it" title="What is Gemini?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Gemini is Google's AI model and the chat assistant built on it.
                Unlike many other models, it's <b className="text-[#ECEEF1] font-medium">natively multimodal</b> —
                it processes text, images, audio and video together from the ground up, not as separate bolted-on pieces.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                You can access it at <b className="text-[#ECEEF1] font-medium">gemini.google.com</b> (web),
                the Gemini mobile app, as the built-in assistant on Android phones, and inside Google Workspace
                (Gmail, Docs, Sheets).
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">model family</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Flash-Lite</span>
                    <span className="text-[#8B92A0] text-right">Fast, simple tasks</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Flash</span>
                    <span className="text-[#8B92A0] text-right">Default model, speed/power balance</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Pro</span>
                    <span className="text-[#8B92A0] text-right">Complex reasoning, code, math</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Ultra</span>
                    <span className="text-[#8B92A0] text-right">Most powerful, locked behind the expensive plan</span>
                  </div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="strengths-weaknesses" title="Strengths and Weaknesses">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">strengths</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Massive 1-2 million token context window</li>
                    <li>True multimodal — image, audio, video, code at once</li>
                    <li>Deep integration with the Google ecosystem</li>
                    <li>Generous free access</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">weaknesses</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Can lag behind rivals on some real-world coding benchmarks</li>
                    <li>Tends to give longer, bullet-heavy answers than necessary</li>
                    <li>Strongest features are locked behind the expensive Ultra plan</li>
                    <li>Generated images/videos carry a mandatory watermark</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="efficient-use" title="How to Use It More Efficiently">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                The more context you give Gemini, the more accurate the answer. See how the same
                request, written weakly vs. well, produces <b className="text-[#ECEEF1] font-medium">different results</b> below.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Scenario 1 — Writing a report"
                  weak={`"Write a report."`}
                  strong={`"Write a board-ready report analyzing my B2B SaaS company's Q1 2026 sales performance. Keep the tone professional and data-driven."`}
                  weakResult="Generic, too shallow to actually use."
                  strongResult="A concrete draft referencing Q1 data, in board-appropriate language."
                />
                <PromptExample
                  scenario="Scenario 2 — Writing code"
                  weak={`"Write a Python function."`}
                  strong={`"Write a Python function that fills empty values in the 'price' column of a CSV with 0. Use pandas, add try/except."`}
                  weakResult="A random, 'hello world' level example."
                  strongResult="A working function using pandas, with error handling, ready to drop into your project."
                />
                <PromptExample
                  scenario="Scenario 3 — Research"
                  weak={`"Tell me about climate change."`}
                  strong={`"Summarize climate policy from the last 5 years, specifically its impact on agriculture, in bullet points."`}
                  weakResult="An encyclopedic, overly general summary."
                  strongResult="A focused, usable summary scoped to agriculture over 5 years."
                />
              </div>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mt-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">bonus tip — gems</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed">
                  If you repeat the same type of task often, create your own custom assistant with{" "}
                  <b className="text-[#ECEEF1] font-medium">"Gems"</b> in Gemini Advanced.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="watch-out" title="What to Watch Out For">
              <div className="flex flex-col gap-3">
                <WarningRow title="Always verify information" text="Especially for numbers, legal, or financial topics, double-check the output against external sources." />
                <WarningRow title="You have usage limits" text="There's a quota that resets every 5 hours. If you hit it, you can continue with Flash-Lite." />
                <WarningRow title="Check your privacy settings" text="Gemini can use your past chats to personalize responses. You can turn this off if you don't want to share sensitive info." />
              </div>
            </GuideSection>

            <GuideSection id="behavior" title="Customizing Its Behavior">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Does Gemini always say <i>"great idea!"</i> when you pitch something? You can change
                this permanently.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">how to set it up</p>
                <ol className="text-sm text-[#ECEEF1]/85 leading-relaxed list-decimal list-inside flex flex-col gap-1.5">
                  <li>Go to gemini.google.com</li>
                  <li>"Settings & help" → "Personal Intelligence" (or "Saved info" if that's what you see)</li>
                  <li>"Instructions for Gemini" → "Add (+)"</li>
                  <li>Write your instruction, save</li>
                </ol>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">example instruction</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  "When evaluating my ideas, lead with risks and weak points, not praise. Don't try
                  to reassure me, be direct and constructive."
                </p>
              </div>
            </GuideSection>

            <GuideSection id="mistakes" title="Common Mistakes">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Trying to make Gemini do every task — some jobs are better suited to a different AI." />
                <MistakeRow text="Writing a vague, one-line prompt and being surprised by a weak result." />
                <MistakeRow text="Using generated information without verifying it." />
                <MistakeRow text="Sharing sensitive/personal info in chat without checking privacy settings." />
                <MistakeRow text="Not noticing you're close to your usage limit." />
              </div>
            </GuideSection>

            <GuideSection id="summary" title="Quick Summary">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="Best for" value="Long documents, multimodal analysis" />
                <SummaryRow label="Weak for" value="Concise answers, some coding tasks" />
                <SummaryRow label="Free?" value="Yes, most features are free" />
                <SummaryRow label="Paid plan" value="Google AI Pro / Ultra" />
                <SummaryRow label="Default model" value="Gemini Flash" />
              </div>
            </GuideSection>

            <div id="try-it" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — try it now</p>
              <InlinePromptBoxEn targetAI="Gemini 2.5 Pro" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}