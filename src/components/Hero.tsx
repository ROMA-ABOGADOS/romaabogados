"use client";

import { useWhatsAppStore } from "@/lib/whatsapp";
import { MessageCircle, ArrowDown } from "lucide-react";

export function Hero() {
  const { openModal } = useWhatsAppStore();

  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-end items-center overflow-hidden bg-[#101e14] text-white">
      {/* ═══ Background Video (WebM + MP4) Remastered 1080p — PROTAGONISTA ═══ */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-poster.webp"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-roma.webm" type="video/webm" />
        <source src="/videos/hero-roma.mp4" type="video/mp4" />
      </video>

      {/* ═══ Invisible SEO Anchor (Google & Accessibility) ═══ */}
      <h1 className="sr-only">
        ROMA & Abogados — Soluciones Jurídicas para un Mejor Futuro
      </h1>

      {/* ═══ Minimal Top Shadow (only for header contrast, no green tint) ═══ */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/40 via-black/15 to-transparent z-10 pointer-events-none" />

      {/* ═══ Minimal Soft Bottom Transition into Next Section ═══ */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/35 to-transparent z-10 pointer-events-none" />

      {/* ═══ Discreet Bottom Actions (Leaves the whole video 100% visible) ═══ */}
      <div className="relative z-20 pb-8 sm:pb-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
        <button
          onClick={() => openModal()}
          className="inline-flex items-center gap-2 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-xl shadow-black/50 hover:scale-105 active:scale-[0.98] cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Agendar Consulta</span>
        </button>

        <a
          href="#areas"
          className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 hover:border-[#fa9b0c] px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase transition-all shadow-lg hover:scale-105 active:scale-[0.98]"
        >
          <span>Conocer Áreas</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#fa9b0c] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
