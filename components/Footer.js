import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#14171C] border-t border-[#2A2F38] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-center gap-3 text-xs text-[#8B92A0]">
        <span>© {new Date().getFullYear()} Wrompt</span>
        <span className="text-[#2A2F38]">·</span>
        <Link href="/gizlilik-politikasi" className="hover:text-[#ECEEF1] transition-colors">
          Gizlilik Politikası
        </Link>
        <span className="text-[#2A2F38]">·</span>
        <a href="mailto:wrompt.info@gmail.com" className="hover:text-[#ECEEF1] transition-colors">
          wrompt.info@gmail.com
        </a>
      </div>
    </footer>
  );
}