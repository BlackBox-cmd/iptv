"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";
import BackgroundScene from "./components/BackgroundScene";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Log the error to console or telemetry
    console.error("Application Error Boundary caught an exception:", error);
  }, [error]);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 text-white overflow-hidden bg-[#070414]">
      {/* Dynamic Grid Background */}
      <BackgroundScene />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-lg mx-auto text-center">
        <div className="glass-card p-8 md:p-12 border border-white/10 shadow-2xl backdrop-blur-xl bg-white/[0.02] rounded-3xl space-y-8 animate-slide-in">
          {/* Animated Warning Icon */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 w-24 h-24 bg-rose-500/10 rounded-full blur-xl mx-auto animate-pulse" />
            <div className="relative w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center glow">
              <AlertTriangle className="text-rose-500 w-10 h-10 animate-bounce" style={{ animationDuration: "2s" }} />
            </div>
          </div>

          {/* Error Headers */}
          <div className="space-y-3">
            <h1 className="text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-rose-500 via-[#8b5cf6] to-[#06b6d4] drop-shadow-sm select-none">
              500
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              Something went wrong!
            </h2>
            <p className="text-sm text-zinc-400 font-medium leading-relaxed max-w-sm mx-auto">
              An unexpected error has occurred while rendering this page. The system administrator has been notified.
            </p>
          </div>

          {/* Expandable Error Details for Troubleshooting */}
          {error && (error.message || error.digest) && (
            <div className="border border-white/5 bg-white/[0.01] rounded-2xl overflow-hidden transition-all text-left">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full flex items-center justify-between px-4 py-3 text-xs font-bold text-zinc-400 hover:text-white transition-colors border-b border-white/5 bg-white/[0.01]"
              >
                <span>DIAGNOSTIC DETAILS</span>
                {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {showDetails && (
                <div className="p-4 space-y-2.5 font-mono text-[11px] text-rose-300/90 break-all select-text max-h-40 overflow-y-auto custom-scrollbar">
                  {error.message && (
                    <div>
                      <span className="text-zinc-500 font-bold mr-1">Error:</span>
                      {error.message}
                    </div>
                  )}
                  {error.digest && (
                    <div>
                      <span className="text-zinc-500 font-bold mr-1">Digest:</span>
                      {error.digest}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <button
              onClick={() => reset()}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl font-bold btn-primary text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <RefreshCw size={16} />
              <span>Try Reheating</span>
            </button>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl font-bold bg-white/5 hover:bg-white/10 text-white text-sm border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Home size={16} />
              <span>Go Back Home</span>
            </Link>
          </div>
        </div>

        {/* Brand Credit */}
        <div className="mt-8 text-xs text-zinc-500 font-semibold tracking-wider uppercase select-none">
          DEVELOPED BY S. SHAJON
        </div>
      </div>
    </div>
  );
}
