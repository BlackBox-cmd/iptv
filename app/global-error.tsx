"use client";

import React, { useEffect } from "react";
import { AlertOctagon, RefreshCw } from "lucide-react";
import BackgroundScene from "./components/BackgroundScene";
import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Critical Layout Level Error:", error);
  }, [error]);

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#070414] text-white flex items-center justify-center px-4 py-12 font-sans overflow-hidden">
        {/* Dynamic Grid Background */}
        <BackgroundScene />

        {/* Content Box */}
        <div className="relative z-10 w-full max-w-lg mx-auto text-center">
          <div className="bg-[rgba(255,255,255,0.06)] backdrop-blur-xl border border-[rgba(255,255,255,0.12)] rounded-3xl p-8 md:p-12 shadow-2xl space-y-8 animate-slide-in">
            {/* Animated Warning Icon */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 w-24 h-24 bg-rose-500/10 rounded-full blur-xl mx-auto" />
              <div className="relative w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-lg">
                <AlertOctagon className="text-rose-500 w-10 h-10 animate-pulse" />
              </div>
            </div>

            {/* Error Headers */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-[#8b5cf6] to-[#06b6d4] drop-shadow-sm select-none">
                System Error
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                A critical system crash occurred!
              </h2>
              <p className="text-sm text-zinc-400 font-medium leading-relaxed max-w-sm mx-auto">
                The core layout of the application encountered a fatal exception. Please try restarting the system session.
              </p>
            </div>

            {/* Reset Button */}
            <div className="flex justify-center pt-2">
              <button
                onClick={() => reset()}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#2563eb] hover:from-[#a855f7] hover:to-[#4f46e5] text-white text-sm transition-all shadow-lg shadow-[#8b5cf6]/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <RefreshCw size={16} />
                <span>Recover Application</span>
              </button>
            </div>
          </div>

          {/* Brand Credit */}
          <div className="mt-8 text-xs text-zinc-500 font-semibold tracking-wider uppercase select-none">
            DEVELOPED BY S. SHAJON
          </div>
        </div>
      </body>
    </html>
  );
}
