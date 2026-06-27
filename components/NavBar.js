"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isGuides = pathname?.startsWith("/rehberler");

  return (
    <nav className="bg-[#14171C] border-b border-[#2A2F38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center gap-3 flex-wrap">
      <Link href="/" className="flex items-center gap-2">
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

      <Link
        href="/"
        className={`text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors ${
          !isGuides
            ? "text-[#4ADEDE] bg-[#4ADEDE]/10 border-[#4ADEDE]/40"
            : "text-[#8B92A0] bg-transparent border-[#2A2F38] hover:bg-[#1C2128]"
        }`}
      >
        Prompt Oluşturucu
      </Link>

      <Link
        href="/rehberler"
        className={`text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors ${
          isGuides
            ? "text-[#FF9F4A] bg-[#FF9F4A]/10 border-[#FF9F4A]/40"
            : "text-[#8B92A0] bg-transparent border-[#2A2F38] hover:bg-[#1C2128]"
        }`}
      >
        Yapay Zeka Rehberleri
      </Link>
      </div>
    </nav>
  );
}