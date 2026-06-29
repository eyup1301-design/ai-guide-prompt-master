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
  title: "ChatGPT Guide — Wrompt",
  description: "What ChatGPT does, its strengths/weaknesses, efficient use tips, and what to watch out for.",
};

export default function ChatGPTGuideEn() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/en/guides" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← All guides
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#10A37F] flex items-center justify-center">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" alt="" className="w-4 h-4 invert" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">ChatGPT Guide</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-5 max-w-xl">
          Everything you need to know to use OpenAI's assistant effectively.
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
            <GuideSection id="what-is-it" title="What is ChatGPT?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                ChatGPT is OpenAI's chat assistant — the pioneer and best-known name in the AI
                chatbot category. As of 2026 it runs on the <b className="text-[#ECEEF1] font-medium">GPT-5 family</b>{" "}
                of models; the older GPT-4o and o1 Pro models have been retired.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                Available via <b className="text-[#ECEEF1] font-medium">chatgpt.com</b> (web), and desktop and mobile apps.
                It supports voice mode, image upload, and snapping a photo for analysis.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">plan family</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Free</span>
                    <span className="text-[#8B92A0] text-right">Basic use, limited</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Go ($6/mo)</span>
                    <span className="text-[#8B92A0] text-right">Bridge between Free and Plus</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Plus ($20/mo)</span>
                    <span className="text-[#8B92A0] text-right">Projects, Tasks, custom GPTs</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium">Pro ($120/mo)</span>
                    <span className="text-[#8B92A0] text-right">Highest quota, most powerful model</span>
                  </div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="strengths-weaknesses" title="Strengths and Weaknesses">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">strengths</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Wide customization ecosystem (custom GPTs, Projects, Canvas)</li>
                    <li>Strong at creative writing and general conversation</li>
                    <li>Largest community support and learning resources</li>
                    <li>Voice mode and on-the-go photo analysis are genuinely handy</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">weaknesses</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Smaller context window than Gemini/Claude</li>
                    <li>Best features (Projects, Tasks, custom GPTs) are not on the free plan</li>
                    <li>Without Search mode on, can give outdated or wrong info</li>
                    <li>Voice mode has a higher error rate on critical details</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="efficient-use" title="How to Use It More Efficiently">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                ChatGPT's first answer is usually a draft — refining with follow-ups (e.g. "make it
                shorter", "more technical") is normal. But starting with a good prompt shortens that loop.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Scenario 1 — Marketing copy"
                  weak={`"Write an ad."`}
                  strong={`"Write an 800-word, SEO-focused blog post in plain language for a tech-aware but non-expert audience aged 30-45."`}
                  weakResult="Unclear product/audience, generic ad copy."
                  strongResult="A publish-ready draft in the right tone and length for the target audience."
                />
                <PromptExample
                  scenario="Scenario 2 — Customer message"
                  weak={`"Write a message to a customer."`}
                  strong={`"Write a WhatsApp message to a customer explaining their package is 2 days late, apologetic but professional."`}
                  weakResult="Unclear situation/tone, unusable."
                  strongResult="A situation-specific, right-toned message ready to send."
                />
                <PromptExample
                  scenario="Scenario 3 — Academic outline"
                  weak={`"Write me a research paper."`}
                  strong={`"I'm preparing a research project on sustainable agriculture. Create an outline with intro, literature review, methods, findings, and conclusion sections."`}
                  weakResult="Unclear topic, doesn't follow academic structure."
                  strongResult="A clearly structured outline ready to work from."
                />
              </div>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mt-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">bonus tip — projects</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed">
                  If you're running multiple chats on the same topic (Plus and above), use{" "}
                  <b className="text-[#ECEEF1] font-medium">Projects</b> to group related chats, files
                  and instructions in one place — no need to re-explain context every time.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="watch-out" title="What to Watch Out For">
              <div className="flex flex-col gap-3">
                <WarningRow title="Don't forget Search mode" text="Asking without Search on for anything time-sensitive often returns outdated or wrong info." />
                <WarningRow title="Know your memory and privacy settings" text="ChatGPT can recall info from past chats. Turn memory off if you don't want to share sensitive info." />
                <WarningRow title="Review automation output" text="If you're using Tasks/automation, assuming it 'just works' without checking can compound errors." />
              </div>
            </GuideSection>

            <GuideSection id="behavior" title="Customizing Its Behavior">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                If you don't want to repeat instructions like "keep it short" or "answer in English"
                every time, set a permanent preference with <b className="text-[#ECEEF1] font-medium">Custom Instructions</b>.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">how to set it up</p>
                <ol className="text-sm text-[#ECEEF1]/85 leading-relaxed list-decimal list-inside flex flex-col gap-1.5">
                  <li>Click your profile icon (bottom left) → "Customize ChatGPT"</li>
                  <li>Turn on customization</li>
                  <li>Fill in the two fields: "who you are" and "how you want it to respond"</li>
                  <li>Save — applies to all chats immediately</li>
                </ol>
                <p className="text-xs text-[#8B92A0] mt-3 leading-relaxed">
                  ⚠️ Each field has a 1500-character limit. Don't put passwords, card numbers, or
                  confidential business info here — it's not a secure vault.
                </p>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">example instruction</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  "Don't try to validate me in your responses. State the weak points of my idea
                  directly, question my assumptions. Be concise, skip unnecessary bullet points."
                </p>
              </div>
            </GuideSection>

            <GuideSection id="mistakes" title="Common Mistakes">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Giving an overly general prompt — not specifying who it's for, what for, or how long." />
                <MistakeRow text="Settling for the first answer instead of refining with follow-ups." />
                <MistakeRow text="Forgetting to turn on Search mode for time-sensitive questions." />
                <MistakeRow text="Putting sensitive/confidential info into Custom Instructions." />
                <MistakeRow text="Trusting Tasks/automation output without checking it." />
              </div>
            </GuideSection>

            <GuideSection id="summary" title="Quick Summary">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="Best for" value="Creative writing, general chat, voice use" />
                <SummaryRow label="Weak for" value="Very long document analysis" />
                <SummaryRow label="Free?" value="Yes, limited use" />
                <SummaryRow label="Paid plan" value="Go / Plus / Pro" />
                <SummaryRow label="Default model" value="GPT-5 family" />
              </div>
            </GuideSection>

            <div id="try-it" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — try it now</p>
              <InlinePromptBoxEn targetAI="GPT-5" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}