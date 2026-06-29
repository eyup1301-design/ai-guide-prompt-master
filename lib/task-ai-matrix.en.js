// lib/task-ai-matrix.en.js
// English mirror of lib/task-ai-matrix.js — same structure, translated content.
// Used only by the /en (English) version of the homepage.

export const TASKS = [
  {
    id: "code-generation",
    label: "Code & Debugging",
    icon: "Code2",
    description: "Software development, debugging, refactoring",
    questions: [
      {
        id: "tech",
        label: "Which language or framework?",
        placeholder: "e.g. React, Python, Next.js...",
      },
      {
        id: "purpose",
        label: "What will this code be used for?",
        placeholder: "e.g. a login page, a data-fetch function...",
      },
    ],
  },
  {
    id: "image-generation",
    label: "Image Generation",
    icon: "Image",
    description: "Art, illustration, product images, logos",
    questions: [
      {
        id: "subject",
        label: "What's the subject?",
        placeholder: "e.g. a crocodile, a coffee cup, a mountain view...",
      },
      {
        id: "style",
        label: "What style?",
        placeholder: "e.g. realistic, cartoon, minimalist, watercolor...",
      },
      {
        id: "usage",
        label: "Where will it be used?",
        placeholder: "e.g. logo, social media post, print...",
      },
    ],
  },
  {
    id: "data-analysis",
    label: "Data Analysis",
    icon: "BarChart3",
    description: "Spreadsheet analysis, insights, visualization",
    questions: [
      {
        id: "dataType",
        label: "What's the data about?",
        placeholder: "e.g. monthly sales table, survey results...",
      },
      {
        id: "goal",
        label: "What do you want to learn from this analysis?",
        placeholder: "e.g. which product sells best, is there a trend...",
      },
    ],
  },
  {
    id: "copywriting",
    label: "Copywriting",
    icon: "PenTool",
    description: "Blog posts, ad copy, SEO content, stories",
    questions: [
      {
        id: "audience",
        label: "Who's the target audience?",
        placeholder: "e.g. new parents, developers, small business owners...",
      },
      {
        id: "tone",
        label: "What tone?",
        placeholder: "e.g. friendly, formal, witty, persuasive...",
      },
    ],
  },
  {
    id: "research",
    label: "Research & Summary",
    icon: "Search",
    description: "Deep research, article summarizing, literature review",
    questions: [
      {
        id: "topic",
        label: "What's the topic?",
        placeholder: "e.g. AI regulation, climate change...",
      },
      {
        id: "depth",
        label: "How in-depth should it be?",
        placeholder: "e.g. short summary, detailed report, academic level...",
      },
    ],
  },
  {
    id: "music-generation",
    label: "Music Generation",
    icon: "Music",
    description: "Songs, compositions, background music",
    questions: [
      {
        id: "genre",
        label: "Which genre/mood?",
        placeholder: "e.g. pop, lo-fi, melancholic, upbeat...",
      },
      {
        id: "lyrics",
        label: "Lyrics topic? (leave blank if instrumental)",
        placeholder: "e.g. breakup, summer vacation, motivation...",
      },
    ],
  },
  {
    id: "video-generation",
    label: "Video Generation",
    icon: "Video",
    description: "Short video, animation, scene generation",
    questions: [
      {
        id: "scene",
        label: "What's happening in the scene?",
        placeholder: "e.g. a bird flying in the sky, a product rotating...",
      },
      {
        id: "duration",
        label: "How many seconds / which platform?",
        placeholder: "e.g. 5 seconds, Instagram Reels...",
      },
    ],
  },
  {
    id: "other",
    label: "Other",
    icon: "Sparkles",
    description: "General category for tasks not listed above",
    hidden: true,
    questions: [
      {
        id: "context",
        label: "Can you give a bit more detail about this task?",
        placeholder: "e.g. who it's for, where it'll be used...",
      },
    ],
  },
];

export const AI_TOOLS = {
  "claude-sonnet": {
    name: "Claude Sonnet 4.6",
    vendor: "Anthropic",
    color: "#D97757",
    bestFor: ["code-generation", "research", "copywriting", "other"],
    strengths: "Long context, clean code architecture, low hallucination rate",
    goldenTip:
      "Break the task into steps and clearly state the expected output format (e.g. code block only).",
    pricing: "freemium",
    priceNote: "Free on the web (limited), API usage is paid",
  },
  "gpt-4o": {
    name: "GPT-4o",
    vendor: "OpenAI",
    color: "#10A37F",
    bestFor: ["copywriting", "data-analysis", "code-generation", "other"],
    strengths: "Fast responses, broad general knowledge, multimodal input",
    goldenTip:
      "Define the target audience and tone (casual, corporate, witty) clearly, give an example sentence.",
    pricing: "freemium",
    priceNote: "Free in ChatGPT (limited), Plus is $20/mo",
  },
  midjourney: {
    name: "Midjourney v7",
    vendor: "Midjourney",
    color: "#3B82F6",
    bestFor: ["image-generation"],
    strengths: "Most artistic/cinematic results, strong style consistency",
    goldenTip:
      "Specify style, lighting and camera angle separately; use --ar and --style parameters.",
    pricing: "paid",
    priceNote: "No free trial, plans start at $10/mo",
  },
  "nano-banana": {
    name: "Nano Banana (Gemini)",
    vendor: "Google",
    color: "#22C55E",
    bestFor: ["image-generation"],
    strengths: "Very strong at photorealism and editing, completely free access",
    goldenTip:
      "Describe the scene clearly and descriptively; ideal for precise details like products, text, or logos.",
    pricing: "free",
    priceNote: "Free to use in the Gemini app",
  },
  "gemini-pro": {
    name: "Gemini 2.5 Pro",
    vendor: "Google",
    color: "#8B5CF6",
    bestFor: ["data-analysis", "research", "code-generation", "other"],
    strengths: "Huge context window, great at spreadsheet/PDF analysis",
    goldenTip:
      "Paste the large document in one go, then ask specific follow-up questions separately.",
    pricing: "free",
    priceNote: "Free to use via Google AI Studio",
  },
  perplexity: {
    name: "Perplexity",
    vendor: "Perplexity AI",
    color: "#14B8A6",
    bestFor: ["research"],
    strengths: "Real-time web search, cites sources",
    goldenTip:
      "Ask the question clearly and specify the date range you care about.",
    pricing: "free",
    priceNote: "Basic use is free, Pro is $20/mo",
  },
  "veo-3": {
    name: "Google Veo 3.1",
    vendor: "Google",
    color: "#EF4444",
    bestFor: ["video-generation"],
    strengths: "2026's most advanced video model, synchronized audio generation",
    goldenTip:
      "If you want dialogue/sound, describe what should be heard in the scene, not just what's seen.",
    pricing: "freemium",
    priceNote: "Limited free quota on Google AI Studio, full access is $20/mo",
  },
  "kling-ai": {
    name: "Kling 3.0",
    vendor: "Kuaishou",
    color: "#F59E0B",
    bestFor: ["video-generation"],
    strengths: "Most generous free daily quota, strong with motion-heavy scenes",
    goldenTip:
      "Clearly describe the motion (speed, direction); the physics engine responds well to this detail.",
    pricing: "free",
    priceNote: "Free daily credits available, paid plans start at $7/mo",
  },
  muzica: {
    name: "Muzica",
    vendor: "Muzica",
    color: "#F97316",
    bestFor: ["music-generation"],
    strengths: "Strongest option for Turkish lyrics and Turkish instruments",
    goldenTip:
      "Clearly state the genre (pop, folk, rap) and lyrics theme, write in Turkish.",
    pricing: "freemium",
    priceNote: "1 free song credit on signup, paid after that",
  },
  suno: {
    name: "Suno AI",
    vendor: "Suno",
    color: "#A855F7",
    bestFor: ["music-generation"],
    strengths: "Market leader in vocal song generation, wide genre and language support",
    goldenTip:
      "State genre, mood and lyrics theme as separate sentences; English tends to give more consistent results.",
    pricing: "freemium",
    priceNote: "Limited free songs daily, unlimited starts at $10/mo",
  },
};

export function getCandidates(taskId) {
  const candidates = Object.entries(AI_TOOLS)
    .filter(([, tool]) => tool.bestFor.includes(taskId))
    .map(([key, tool]) => ({ key, ...tool }));

  return candidates.map((tool, index) => ({
    ...tool,
    recommended: index === 0,
  }));
}

export function getQuestions(taskId) {
  return TASKS.find((t) => t.id === taskId)?.questions ?? [];
}