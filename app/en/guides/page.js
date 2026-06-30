import Link from "next/link";

const GUIDES = [
  {
    slug: "gemini",
    name: "Gemini",
    vendor: "Google",
    color: "#1C69FF",
    iconType: "simpleicons",
    icon: "googlegemini",
    description: "What it does, strengths/weaknesses, efficient use",
    ready: true,
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    vendor: "OpenAI",
    color: "#10A37F",
    iconType: "simpleicons",
    icon: "openai",
    description: "What it does, strengths/weaknesses, efficient use",
    ready: true,
  },
  {
    slug: "claude",
    name: "Claude",
    vendor: "Anthropic",
    color: "#D97757",
    iconType: "simpleicons",
    icon: "anthropic",
    description: "What it does, strengths/weaknesses, efficient use",
    ready: true,
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    vendor: "Midjourney",
    color: "#3B82F6",
    iconType: "favicon",
    icon: "https://www.midjourney.com/favicon.ico",
    description: "What it does, strengths/weaknesses, efficient use",
    ready: true,
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    vendor: "Perplexity AI",
    color: "#14B8A6",
    iconType: "simpleicons",
    icon: "perplexity",
    description: "Real-time search, sourced summaries, research",
    ready: true,
  },
  {
    slug: "suno",
    name: "Suno AI",
    vendor: "Suno",
    color: "#A855F7",
    iconType: "text",
    icon: "S",
    description: "Vocal song generation, AI music creation",
    ready: true,
  },
  {
    slug: "kling",
    name: "Kling AI",
    vendor: "Kuaishou",
    color: "#F59E0B",
    iconType: "text",
    icon: "K",
    description: "Video generation, camera control, motion physics",
    ready: true,
  },
];

export const metadata = {
  title: "AI Guides — Wrompt",
  description: "How to use each AI tool: strengths/weaknesses, efficient use tips, and what to watch out for.",
};

export default function GuidesHubEn() {
  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1]">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16">
        <p className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2">
          ai guides
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
          How to use each AI tool
        </h1>
        <p className="text-sm text-[#8B92A0] mb-8 max-w-xl">
          Strengths/weaknesses, efficient use tips, and what to watch out for
          — no need to figure it out by trial and error.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/en/guides/${guide.slug}`}
              className="flex gap-3 items-start bg-[#1C2128] border rounded-xl p-4 transition-colors hover:bg-[#22272F]"
              style={{ borderColor: `${guide.color}59` }}
            >
              <GuideIcon guide={guide} />
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: guide.color === "#1A1A2E" ? "#ECEEF1" : guide.color }}
                  >
                    {guide.name}
                  </span>
                  <span className="text-[9px] text-[#4ADEDE] border border-[#4ADEDE]/40 rounded-full px-1.5 py-0.5">
                    ready
                  </span>
                </div>
                <p className="text-xs text-[#8B92A0] mt-1 leading-relaxed">
                  {guide.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function GuideIcon({ guide }) {
  return (
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: guide.color }}
    >
      {guide.iconType === "text" ? (
        <span className="text-white text-sm font-bold">{guide.icon}</span>
      ) : guide.iconType === "favicon" ? (
        <img src={guide.icon} alt="" className="w-5 h-5" />
      ) : (
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${guide.icon}.svg`}
          alt=""
          className="w-4 h-4 invert"
        />
      )}
    </div>
  );
}