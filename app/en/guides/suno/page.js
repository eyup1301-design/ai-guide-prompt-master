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
  { id: "behavior", label: "05 — Style & customization" },
  { id: "mistakes", label: "06 — Common mistakes" },
  { id: "summary", label: "07 — Summary" },
  { id: "try-it", label: "08 — Try it now" },
];

export const metadata = {
  title: "Suno AI Guide — Wrompt",
  description: "What Suno AI does, its strengths/weaknesses, music generation tips, and what to watch out for.",
};

export default function SunoGuideEn() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link href="/en/guides" className="text-xs text-[#8B92A0] hover:text-[#ECEEF1] mb-4 inline-block">
          ← All guides
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-[#A855F7] flex items-center justify-center">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/suno.svg" alt="" className="w-4 h-4 invert" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold">Suno AI Guide</h1>
        </div>
        <p className="text-sm text-[#8B92A0] mb-5 max-w-xl">
          The market leader for generating complete vocal songs from text descriptions.
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
            <GuideSection id="what-is-it" title="What is Suno AI?">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Suno AI generates <b className="text-[#ECEEF1] font-medium">complete songs with vocals and instruments</b> from a text description. You can provide your own lyrics or let AI write them; you specify the genre, tempo, and mood.
              </p>
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-5">
                Supports dozens of genres including pop, rock, jazz, hip-hop, and more. Songs are generated in minutes with a limited free daily credit.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">prompt parameters</p>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex justify-between gap-3"><span className="text-[#ECEEF1] font-medium">Genre / style</span><span className="text-[#8B92A0] text-right">pop, rock, jazz, trap, lo-fi...</span></div>
                  <div className="flex justify-between gap-3"><span className="text-[#ECEEF1] font-medium">Mood</span><span className="text-[#8B92A0] text-right">melancholic, energetic, romantic...</span></div>
                  <div className="flex justify-between gap-3"><span className="text-[#ECEEF1] font-medium">Tempo</span><span className="text-[#8B92A0] text-right">slow, mid-tempo, fast, BPM value</span></div>
                  <div className="flex justify-between gap-3"><span className="text-[#ECEEF1] font-medium">Vocal</span><span className="text-[#8B92A0] text-right">male, female, mixed, language</span></div>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="strengths-weaknesses" title="Strengths and Weaknesses">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-3">strengths</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Unmatched vocal song quality among AI music tools</li>
                    <li>Wide genre and language support</li>
                    <li>Custom Mode lets you control lyrics precisely</li>
                    <li>Fast generation — complete song in minutes</li>
                  </ul>
                </div>
                <div className="bg-[#1C2128] border border-[#F87171]/30 rounded-xl p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F87171] mb-3">weaknesses</p>
                  <ul className="flex flex-col gap-2.5 text-sm text-[#ECEEF1]/85">
                    <li>Free quota is limited; unlimited use requires paid plan</li>
                    <li>Fine-grained style control is difficult</li>
                    <li>Commercial rights vary by plan</li>
                    <li>Non-English lyrics can have pronunciation issues</li>
                  </ul>
                </div>
              </div>
            </GuideSection>

            <GuideSection id="efficient-use" title="How to Use It More Efficiently">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-3">
                For the best results in Suno, specify style, mood, and lyric theme separately. Vague prompts produce generic music.
              </p>
              <div className="flex flex-col gap-4 mt-5">
                <PromptExample
                  scenario="Scenario 1 — Energetic social media track"
                  weak={`"Energetic song"`}
                  strong={`"Upbeat pop, female vocal, 120 BPM, motivational English lyrics, electric guitar driven, chorus-heavy structure"`}
                  weakResult="Generic, predictable output."
                  strongResult="Specific, usable social media content track."
                />
                <PromptExample
                  scenario="Scenario 2 — Emotional ballad"
                  weak={`"Sad song"`}
                  strong={`"Acoustic ballad, slow tempo, melancholic female vocal, piano and strings, lyrics about letting go: 'The last light fades away...'"`}
                  weakResult="Vague genre, unpredictable results."
                  strongResult="Right mood, correct instruments, custom lyrics used."
                />
              </div>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mt-5">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">tip — custom mode</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed">
                  Enable Custom Mode in Suno to enter lyrics, title, and style description separately. This mode gives you much more control over the final output.
                </p>
              </div>
            </GuideSection>

            <GuideSection id="watch-out" title="What to Watch Out For">
              <div className="flex flex-col gap-3">
                <WarningRow title="Commercial usage rights" text="Songs generated on the free plan may not be cleared for commercial use. Check the plan page before monetizing." />
                <WarningRow title="Artist name references" text="Writing 'Taylor Swift style' carries copyright risk and can actually lower quality. Describe the sound instead." />
                <WarningRow title="Non-English pronunciation" text="Complex lyrics in non-English languages can result in distorted vocals. Keep lyrics short and rhythmic." />
              </div>
            </GuideSection>

            <GuideSection id="behavior" title="Style & Customization">
              <p className="text-sm text-[#ECEEF1]/85 leading-relaxed mb-4">
                Build a reusable style template to maintain a consistent sonic identity across all your Suno generations.
              </p>
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">template structure</p>
                <ol className="text-sm text-[#ECEEF1]/85 leading-relaxed list-decimal list-inside flex flex-col gap-1.5">
                  <li><b className="text-[#ECEEF1]">Genre:</b> primary style (pop, rock, jazz...)</li>
                  <li><b className="text-[#ECEEF1]">Sub-genre:</b> more specific style (indie pop, lo-fi hip hop...)</li>
                  <li><b className="text-[#ECEEF1]">Mood:</b> emotional tone (nostalgic, euphoric, tense...)</li>
                  <li><b className="text-[#ECEEF1]">Instrument:</b> featured instrument(s)</li>
                  <li><b className="text-[#ECEEF1]">Vocal:</b> gender, tone, language</li>
                </ol>
              </div>
              <div className="bg-[#1C2128] border border-[#4ADEDE]/30 rounded-xl p-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[#4ADEDE] mb-2">example template</p>
                <p className="text-sm text-[#ECEEF1]/85 leading-relaxed italic">
                  &ldquo;Indie pop, acoustic guitar + light synth, nostalgic-happy mood, soft female vocal, English lyrics&rdquo;
                </p>
              </div>
            </GuideSection>

            <GuideSection id="mistakes" title="Common Mistakes">
              <div className="flex flex-col gap-2.5">
                <MistakeRow text="Only specifying mood — add genre, vocal type, and instruments too, not just 'sad song'." />
                <MistakeRow text="Writing very long lyrics — Suno handles short, rhythmic text better." />
                <MistakeRow text="Referencing artist names — this carries copyright risk and can degrade quality." />
                <MistakeRow text="Giving up after one try — generate 2-3 variations with different prompts; results vary significantly." />
              </div>
            </GuideSection>

            <GuideSection id="summary" title="Quick Summary">
              <div className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-4 flex flex-col gap-3 text-sm">
                <SummaryRow label="Best for" value="Vocal song generation, content music" />
                <SummaryRow label="Weak for" value="Fine style control, non-English pronunciation" />
                <SummaryRow label="Free?" value="Limited daily credits free" />
                <SummaryRow label="Starting price" value="$10/mo" />
                <SummaryRow label="Strongest feature" value="Realistic vocal songs" />
              </div>
            </GuideSection>

            <div id="try-it" className="scroll-mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-3">08 — try it now</p>
              <InlinePromptBoxEn targetAI="Suno AI" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
