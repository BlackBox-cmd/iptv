"use client";

import Link from "next/link";
import React from "react";
import { AlertCircle, Home, RefreshCw } from "lucide-react";
import BackgroundScene from "./components/BackgroundScene";

export default function NotFound() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 text-white overflow-hidden bg-[#070414]">
      {/* Dynamic Grid Background */}
      <BackgroundScene />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-lg mx-auto text-center">
        <div className="glass-card p-8 md:p-12 border border-white/10 shadow-2xl backdrop-blur-xl bg-white/[0.02] rounded-3xl space-y-8 animate-slide-in">
          {/* Animated Error Icon */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 w-24 h-24 bg-[#8b5cf6]/20 rounded-full blur-xl mx-auto" />
            <div className="relative w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center glow">
              <AlertCircle className="text-[#8b5cf6] w-10 h-10 animate-pulse" />
            </div>
          </div>

          {/* Error Code and Text */}
          <div className="space-y-3">
            <h1 className="text-7xl font-extrabold tracking-tight gradient-text drop-shadow-sm select-none">
              404
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              Page Not Found
            </h2>
            <p className="text-sm text-zinc-400 font-medium leading-relaxed max-w-sm mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl font-bold btn-primary text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Home size={16} />
              <span>Go Back Home</span>
            </Link>
            <button
              onClick={handleReload}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl font-bold bg-white/5 hover:bg-white/10 text-white text-sm border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <RefreshCw size={16} />
              <span>Reload Page</span>
            </button>
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
