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
  { id: "behavior", label: "05 — Customizing your style" },
  { id: "mistakes", label: "06 — Common mistakes" },
  { id: "summary", label: "07 — Summary" },
  { id: "try-it", label: "08 — Try it now" },
];

export const metadata = {
  title: "Midjourney Guide — Wrompt",
  description: "What Midjourney does, its strengths/weaknesses, efficient use tips, and what to watch out for.",
};

export default function MidjourneyGuideEn() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/en/guides" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← All guides
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#3B82F6] flex items-center justify-center">
            <span className="text-white text-xs font-bold">MJ</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">Midjourney Guide</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-5 max-w-xl">
          Everything you need to know to use the most artistic image generator effectively.
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
            <GuideSection id="what-is-it" title="What is Midjourney?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Midjourney is a text-to-image AI tool — unlike chat assistants, it's{" "}
                <b className="text-[#ECEEF1] font-medium">single-purpose</b>: it only generates
                images, it doesn't chat. Known for its artistic, atmospheric quality.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                Used via the web app at <b className="text-[#ECEEF1] font-medium">midjourney.com</b>{" "}
                or through Discord. Current version: <b className="text-[#ECEEF1] font-medium">v7</b>.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">core parameters</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium font-mono">--ar</span>
                    <span className="text-[#8B92A0] text-right">Aspect ratio (e.g. --ar 16:9)</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium font-mono">--stylize</span>
                    <span className="text-[#8B92A0] text-right">Degree of artistic interpretation</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium font-mono">--chaos</span>
                    <span className="text-[#8B92A0] text-right">Variation between results</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#ECEEF1] font-medium font-mono">--no</span>
                    <span className="text-[#8B92A0] text-right">Exclude unwanted elements</span>
                  </div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="strengths-weaknesses" title="Strengths and Weaknesses">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">strengths</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Most artistic/cinematic results, strong visual quality</li>
                    <li>Style reference (--sref) keeps a consistent visual identity</li>
                    <li>Extensive parameter control — ratio, style, variation</li>
                    <li>Large, active community to learn from</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">weaknesses</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Completely paid — no free trial</li>
                    <li>Still inconsistent at rendering readable text inside images</li>
                    <li>There's a learning curve for the parameter syntax</li>
                    <li>No chat/iteration logic — every prompt starts from scratch</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="efficient-use" title="How to Use It More Efficiently">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                In Midjourney, detail is everything — specifying style, lighting and composition
                separately changes the result completely. See the difference below.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Scenario 1 — Product shot"
                  weak={`"Draw a coffee cup."`}
                  strong={`"Ceramic coffee cup on white marble surface, soft morning light, minimalist studio shot, --ar 1:1 --stylize 250"`}
                  weakResult="A random cup image, not product-photo quality."
                  strongResult="A studio-quality image, ready for social media."
                />
                <PromptExample
                  scenario="Scenario 2 — Character design"
                  weak={`"Draw a warrior."`}
                  strong={`"Medieval armored female warrior, dramatic side lighting, fantasy concept art style, detailed armor texture, --ar 2:3 --stylize 500"`}
                  weakResult="A generic, clichéd warrior image."
                  strongResult="A distinct character with a specific style and lighting, at concept-art quality."
                />
                <PromptExample
                  scenario="Scenario 3 — Logo/brand image"
                  weak={`"Make a logo."`}
                  strong={`"Minimalist fox head logo, geometric lines, single orange color, flat white background, vector style, --ar 1:1 --no shadow, texture"`}
                  weakResult="A complex image, unusable as an actual logo."
                  strongResult="A clean, near-vector result you can actually use as a logo."
                />
              </div>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mt-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">bonus tip — style reference</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed">
                  Add a link to an image you like at the start of your prompt, then append{" "}
                  <b className="text-[#ECEEF1] font-medium">--sref [link]</b> at the end to make new
                  images carry that image's style.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="watch-out" title="What to Watch Out For">
              <div className="flex flex-col gap-3">
                <WarningRow title="Your images may be public" text="On standard plans, your generated images may show up in the public gallery. For privacy, you'll need the Pro/Mega plan's stealth mode." />
                <WarningRow title="Check your commercial usage rights" text="Verify what commercial rights your plan includes from Midjourney's current terms, especially if you plan to sell the output." />
                <WarningRow title="Avoid copyrighted characters/brands" text="Directly requesting known characters or brands both lowers result quality and carries copyright risk." />
              </div>
            </GuideSection>

            <GuideSection id="behavior" title="Customizing Your Style">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                There's no "behavior" to customize in Midjourney, but you can permanently set your{" "}
                <b className="text-[#ECEEF1] font-medium">visual identity</b> — no need to redefine
                the same style by hand every time.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">two methods</p>
                <ol className="text-sm text-[#ECEEF1]/85 leading-relaxed list-decimal list-inside flex flex-col gap-1.5">
                  <li><b className="text-[#ECEEF1]">--sref</b>: references the style of a specific image</li>
                  <li><b className="text-[#ECEEF1]">--p</b> (Personalization): builds a personal profile from your like history, append the code to the end of any prompt</li>
                </ol>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">example usage</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  "minimalist logo design, geometric shapes --p [your personal code] --ar 1:1"
                </p>
              </div>
            </GuideSection>

            <GuideSection id="mistakes" title="Common Mistakes">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Cramming too many conflicting details into one prompt — the model gets confused." />
                <MistakeRow text="Putting parameters in the wrong place/format (e.g. --ar in the middle of the prompt)." />
                <MistakeRow text="Looking for a free trial — Midjourney doesn't have one, you need to pick a plan upfront." />
                <MistakeRow text="Trying to render long, readable text inside an image." />
                <MistakeRow text="Expecting a 'better' result without specifying style, lighting, or composition." />
              </div>
            </GuideSection>

            <GuideSection id="summary" title="Quick Summary">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="Best for" value="Artistic/atmospheric images, concept art" />
                <SummaryRow label="Weak for" value="Text inside images, chat/iteration" />
                <SummaryRow label="Free?" value="No, fully paid" />
                <SummaryRow label="Starting price" value="$10/mo" />
                <SummaryRow label="Current version" value="v7" />
              </div>
            </GuideSection>

            <div id="try-it" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — try it now</p>
              <InlinePromptBoxEn targetAI="Midjourney v7" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}