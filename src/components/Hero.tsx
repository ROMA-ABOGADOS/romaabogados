"use client";

import { useWhatsAppStore } from "@/lib/whatsapp";
import { MessageCircle, ArrowDown } from "lucide-react";

function BalanceScaleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
      {/* Central pillar & top finial */}
      <path d="M50 15 V85" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="13" r="3.5" fill="currentColor" />
      <path d="M38 85 H62" strokeWidth="4" strokeLinecap="round" />
      {/* Crossbeam */}
      <path d="M22 28 Q50 24 78 28" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="50" cy="26" r="3" fill="currentColor" />
      {/* Left scale pan */}
      <path d="M22 28 L14 55 M22 28 L30 55" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 55 Q22 64 32 55 Z" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
      {/* Right scale pan */}
      <path d="M78 28 L70 55 M78 28 L86 55" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M68 55 Q78 64 88 55 Z" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

function SunRaysIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" className={className}>
      <circle cx="30" cy="30" r="12" strokeWidth="2" />
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
        <line
          key={i}
          x1="30"
          y1="10"
          x2="30"
          y2="5"
          strokeWidth="1.75"
          strokeLinecap="round"
          transform={`rotate(${angle} 30 30)`}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  const { openModal } = useWhatsAppStore();

  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between items-center overflow-hidden bg-[#101e14] text-white">
      {/* ═══ Background Video (WebM + MP4 Clean 1080p Master) ═══ */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-clean-poster.webp"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-clean-bg.webm" type="video/webm" />
        <source src="/videos/hero-clean-bg.mp4" type="video/mp4" />
      </video>

      {/* ═══ Ambient Vignette & Contrast Gradients ═══ */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 46%, rgba(12, 24, 17, 0.45) 0%, rgba(12, 24, 17, 0.15) 60%, rgba(12, 24, 17, 0.55) 100%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 via-black/20 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/45 to-transparent z-10 pointer-events-none" />

      {/* ═══ Spacer for fixed Header ═══ */}
      <div className="h-16 sm:h-20 w-full" />

      {/* ═══ High-Performance Vector & Editorial Centerpiece (Option B) ═══ */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto my-auto">
        <div className="relative px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 rounded-3xl bg-black/25 backdrop-blur-[3px] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
          {/* Brand Lockup: Scales + ROMA & Abogados + Sun */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-7 select-none">
            {/* Balance Scale SVG (left) */}
            <div className="text-[#fa9b0c] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] shrink-0">
              <BalanceScaleIcon className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            </div>

            {/* Thin Vertical Gold Accent */}
            <div className="w-[1.5px] sm:w-[2px] h-16 sm:h-24 md:h-32 bg-gradient-to-b from-transparent via-[#fa9b0c] to-transparent shrink-0" />

            {/* Typography Lockup */}
            <div className="relative flex flex-col items-start text-left">
              {/* ROMA */}
              <h1
                className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]"
                style={{
                  background: "linear-gradient(135deg, #faeed6 0%, #f7d286 25%, #fa9b0c 60%, #e08404 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 2px 14px rgba(0, 0, 0, 0.9))",
                }}
              >
                ROMA
              </h1>

              {/* & Abogados */}
              <span
                className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide mt-1 sm:mt-1.5 leading-none"
                style={{
                  background: "linear-gradient(135deg, #f7d286 0%, #fa9b0c 50%, #c97402 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.9))",
                }}
              >
                & Abogados
              </span>

              {/* Sun Rays Emblem (top right of ROMA) */}
              <div className="absolute -top-2 -right-10 sm:-top-3 sm:-right-14 md:-top-4 md:-right-16 text-[#fa9b0c] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pointer-events-none">
                <SunRaysIcon className="w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13" />
              </div>
            </div>
          </div>

          {/* Subtitle / Slogan */}
          <p className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-base font-semibold tracking-[0.22em] sm:tracking-[0.3em] uppercase text-[#fef9ee] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            Soluciones Jurídicas Para Un Mejor Futuro
          </p>

          {/* Subtle Horizontal Gold Accent */}
          <div className="w-20 sm:w-28 md:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent mx-auto mt-3 sm:mt-4 mb-6 sm:mb-8" />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-xl shadow-black/60 hover:scale-105 active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>

            <a
              href="#areas"
              className="inline-flex items-center gap-2 bg-black/45 hover:bg-black/65 text-white backdrop-blur-md border border-white/20 hover:border-[#fa9b0c] px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase transition-all shadow-lg hover:scale-105 active:scale-[0.98]"
            >
              <span>Conocer Áreas</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#fa9b0c] animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      {/* ═══ Bottom Edge Spacing ═══ */}
      <div className="h-6 sm:h-8 w-full" />
    </section>
  );
}
