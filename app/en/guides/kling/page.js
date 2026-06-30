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
  { id: "behavior", label: "05 — Camera control" },
  { id: "mistakes", label: "06 — Common mistakes" },
  { id: "summary", label: "07 — Summary" },
  { id: "try-it", label: "08 — Try it now" },
];

export const metadata = {
  title: "Kling AI Guide — Wrompt",
  description: "What Kling AI does, its strengths/weaknesses, video generation tips, and what to watch out for.",
};

export default function KlingGuideEn() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/en/guides" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← All guides
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#F59E0B] flex items-center justify-center">
            <span className="text-white text-xs font-bold">K</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">Kling AI Guide</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-5 max-w-xl">
          Video generation with generous free daily credits and strong motion physics.
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
            <GuideSection id="what-is-it" title="What is Kling AI?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Kling AI is a <b className="text-[#ECEEF1] font-medium">text-to-video and image-to-video</b> generation tool developed by Kuaishou. It produces high-quality 5-10 second clips and is particularly strong at realistic human motion and physics simulation.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                Daily free credits make it far more accessible than Runway or Veo — you can try it without paying anything.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">core features</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3"><span className="text-[#ECEEF1] font-medium">Text-to-video</span><span className="text-[#8B92A0] text-right">Generate video from text description</span></div>
                  <div className="flex justify-between gap-3"><span className="text-[#ECEEF1] font-medium">Image-to-video</span><span className="text-[#8B92A0] text-right">Animate a still image</span></div>
                  <div className="flex justify-between gap-3"><span className="text-[#ECEEF1] font-medium">Camera control</span><span className="text-[#8B92A0] text-right">Pan, zoom, dolly movements</span></div>
                  <div className="flex justify-between gap-3"><span className="text-[#ECEEF1] font-medium">Duration</span><span className="text-[#8B92A0] text-right">5 or 10-second output</span></div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="strengths-weaknesses" title="Strengths and Weaknesses">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">strengths</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Daily free credits — try without paying</li>
                    <li>Realistic human motion and physics</li>
                    <li>Strong image-to-video animation</li>
                    <li>Camera angle and movement control</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">weaknesses</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Maximum 10 seconds — can&apos;t generate long videos</li>
                    <li>No audio/music support (visuals only)</li>
                    <li>Text rendering in scenes is unreliable</li>
                    <li>Generation takes 2-5 minutes</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="efficient-use" title="How to Use It More Efficiently">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                For the best Kling results, describe motion explicitly. Instead of &ldquo;walking&rdquo;, write &ldquo;slowly walking to the left&rdquo; — direction and speed matter a lot.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Scenario 1 — Product showcase"
                  weak={`"Coffee cup video"`}
                  strong={`"Black ceramic coffee cup on white marble, steam slowly rising, gentle dolly-in camera movement, morning light, cinematic"`}
                  weakResult="Static or randomly moving generic clip."
                  strongResult="Controlled, cinematic product-ready video."
                />
                <PromptExample
                  scenario="Scenario 2 — Nature scene"
                  weak={`"Beautiful forest video"`}
                  strong={`"Beech forest in morning mist, slow drone rising shot, golden hour light, leaves gently swaying in breeze, wide angle"`}
                  weakResult="Generic, uncontrolled movement."
                  strongResult="Specified camera movement and lighting delivered."
                />
              </div>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mt-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">tip — image-to-video workflow</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed">
                  Generate an image first with Midjourney or Gemini, then upload it to Kling for animation. This two-step approach gives you far more control over the final result.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="watch-out" title="What to Watch Out For">
              <div className="flex flex-col gap-3">
                <WarningRow title="Free credits run out daily" text="Once your daily free quota is used, you must wait until the next day or upgrade to a paid plan." />
                <WarningRow title="Close-up faces can distort" text="Facial deformation is common in close-up shots. Mid-range and wide shots are much safer." />
                <WarningRow title="No audio" text="Kling generates visuals only. You'll need to add music or voiceover separately in a video editor." />
              </div>
            </GuideSection>

            <GuideSection id="behavior" title="Camera Movement Control">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Kling&apos;s camera control is one of its strongest features. Using the right terms in your prompt creates a professional cinematic feel.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">camera movements</p>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex gap-3"><span className="text-[#ECEEF1] font-medium w-36 shrink-0">Pan left/right</span><span className="text-[#8B92A0]">Camera slides horizontally</span></div>
                  <div className="flex gap-3"><span className="text-[#ECEEF1] font-medium w-36 shrink-0">Tilt up/down</span><span className="text-[#8B92A0]">Camera tilts vertically</span></div>
                  <div className="flex gap-3"><span className="text-[#ECEEF1] font-medium w-36 shrink-0">Dolly in/out</span><span className="text-[#8B92A0]">Camera moves toward/away from subject</span></div>
                  <div className="flex gap-3"><span className="text-[#ECEEF1] font-medium w-36 shrink-0">Drone rising</span><span className="text-[#8B92A0]">Camera ascends upward</span></div>
                  <div className="flex gap-3"><span className="text-[#ECEEF1] font-medium w-36 shrink-0">Static shot</span><span className="text-[#8B92A0]">Fixed camera, subject moves</span></div>
                </div>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">example</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  &ldquo;Night city skyline, tall skyscrapers, slow pan left, bokeh lights, cinematic wide shot&rdquo;
                </p>
              </div>
            </GuideSection>

            <GuideSection id="mistakes" title="Common Mistakes">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Not specifying motion — write specific camera and subject movement, not just 'beautiful scene'." />
                <MistakeRow text="Requesting text in scenes — Kling cannot reliably render readable text inside videos." />
                <MistakeRow text="Expecting longer than 10 seconds — chain multiple clips together in a video editor for longer content." />
                <MistakeRow text="Close-up human faces — high risk of deformation, use mid-range or wide shots instead." />
              </div>
            </GuideSection>

            <GuideSection id="summary" title="Quick Summary">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="Best for" value="Short video clips, product shots, nature scenes" />
                <SummaryRow label="Weak for" value="Long video, audio, text in scenes" />
                <SummaryRow label="Free?" value="Limited daily credits free" />
                <SummaryRow label="Starting price" value="From $7/mo" />
                <SummaryRow label="Strongest feature" value="Motion physics + camera control" />
              </div>
            </GuideSection>

            <div id="try-it" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — try it now</p>
              <InlinePromptBoxEn targetAI="Kling 3.0" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
