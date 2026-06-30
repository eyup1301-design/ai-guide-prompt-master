"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");
  const isEnglishGuides = isEnglish && pathname?.startsWith("/en/guides");
  const isGuides = !isEnglish && pathname?.startsWith("/rehberler");
  const isHowItWorks = pathname === "/nasil-calisir" || pathname === "/en/how-it-works";
  const isPrompt = pathname === "/prompt" || pathname === "/en/prompt";
  const isHome = pathname === "/" || pathname === "/en";
  const isPromptLibrary = pathname === "/promptlar" || pathname === "/en/prompts";

  return (
    <nav className="bg-[#14171C] border-b border-[#2A2F38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center gap-3 flex-wrap">
        <Link href={isEnglish ? "/en" : "/"} className="flex items-center gap-2">
          <img
            src="https://wrompt.com/icon.png"
            alt="Wrompt logo"
            className="w-6 h-6 rounded-md"
          />
          <span className="font-display font-medium text-sm text-[#ECEEF1]">
            wrompt
          </span>
        </Link>

        <div className="flex-1" />

        {isEnglish ? (
          <>
            <Link
              href="/en"
              className={`text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors ${
                isHome
                  ? "text-[#4ADEDE] bg-[#4ADEDE]/10 border-[#4ADEDE]/40"
                  : "text-[#8B92A0] bg-transparent border-[#2A2F38] hover:bg-[#1C2128]"
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/en/prompt"
              className={`text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors ${
                isPrompt
                  ? "text-[#FF9F4A] bg-[#FF9F4A]/10 border-[#FF9F4A]/40"
                  : "text-[#8B92A0] bg-transparent border-[#2A2F38] hover:bg-[#1C2128]"
              }`}
            >
              Prompt Generator
            </Link>
            <Link
              href="/en/guides"
              className={`text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors ${
                isEnglishGuides
                  ? "text-[#FF9F4A] bg-[#FF9F4A]/10 border-[#FF9F4A]/40"
                  : "text-[#8B92A0] bg-transparent border-[#2A2F38] hover:bg-[#1C2128]"
              }`}
            >
              AI Guides
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/"
              className={`text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors ${
                isHome
                  ? "text-[#4ADEDE] bg-[#4ADEDE]/10 border-[#4ADEDE]/40"
                  : "text-[#8B92A0] bg-transparent border-[#2A2F38] hover:bg-[#1C2128]"
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/prompt"
              className={`text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors ${
                isPrompt
                  ? "text-[#FF9F4A] bg-[#FF9F4A]/10 border-[#FF9F4A]/40"
                  : "text-[#8B92A0] bg-transparent border-[#2A2F38] hover:bg-[#1C2128]"
              }`}
            >
              Prompt Oluştur
            </Link>
            <Link
              href="/promptlar"
              className={`text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors ${
                isPromptLibrary
                  ? "text-[#4ADEDE] bg-[#4ADEDE]/10 border-[#4ADEDE]/40"
                  : "text-[#8B92A0] bg-transparent border-[#2A2F38] hover:bg-[#1C2128]"
              }`}
            >
              Hazır Promptlar
            </Link>
            <Link
              href="/rehberler"
              className={`text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors ${
                isGuides
                  ? "text-[#FF9F4A] bg-[#FF9F4A]/10 border-[#FF9F4A]/40"
                  : "text-[#8B92A0] bg-transparent border-[#2A2F38] hover:bg-[#1C2128]"
              }`}
            >
              Rehberler
            </Link>
          </>
        )}

        {/* Language switch */}
        <Link
          href={isEnglish ? "/?lang=tr" : "/en"}
          className="text-xs font-mono text-[#8B92A0] border border-[#2A2F38] rounded-full px-3 py-1.5 hover:bg-[#1C2128] transition-colors"
        >
          {isEnglish ? "TR" : "EN"}
        </Link>
      </div>
    </nav>
  );
}