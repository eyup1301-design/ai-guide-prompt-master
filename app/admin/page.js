"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight, Loader2 } from "lucide-react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    if (!password.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        setError("Şifre yanlış.");
      }
    } catch {
      setError("Bir hata oluştu, tekrar dene.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#14171C] text-[#ECEEF1] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 mb-6">
          <Lock size={16} className="text-[#FF9F4A]" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#8B92A0]">
            Admin Girişi
          </span>
        </div>

        <form onSubmit={handleLogin} className="bg-[#1C2128] border border-[#2A2F38] rounded-xl p-6 flex flex-col gap-4">
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-[#8B92A0] mb-2 block">
              Şifre
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoFocus
              className="w-full bg-[#14171C] border border-[#2A2F38] rounded-lg px-3 py-2.5 text-sm text-[#ECEEF1] placeholder:text-[#8B92A0]/40 focus:outline-none focus:border-[#FF9F4A]/50"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password.trim()}
            className="flex items-center justify-center gap-2 text-sm font-medium bg-[#FF9F4A] text-[#14171C] rounded-lg py-2.5 hover:bg-[#FFB374] transition-colors disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 size={15} className="animate-spin" />
                Giriş yapılıyor...
              </>
            ) : (
              <>
                Giriş Yap
                <ArrowRight size={15} />
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
