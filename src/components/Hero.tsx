"use client";

import { useEffect, useRef } from "react";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { MessageCircle, ArrowDown } from "lucide-react";

export function Hero() {
  const { openModal } = useWhatsAppStore();
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startVideo = (video: HTMLVideoElement | null) => {
      if (!video) return;
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const resume = () => {
            video.play().catch(() => {});
            window.removeEventListener("touchstart", resume);
            window.removeEventListener("click", resume);
            window.removeEventListener("scroll", resume);
          };
          window.addEventListener("touchstart", resume, { once: true, passive: true });
          window.addEventListener("click", resume, { once: true, passive: true });
          window.addEventListener("scroll", resume, { once: true, passive: true });
        });
      }
    };

    // Only start the active video depending on viewport to optimize bandwidth and decoder
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) {
      startVideo(mobileVideoRef.current);
    } else {
      startVideo(desktopVideoRef.current);
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-end items-center overflow-hidden bg-[#101e14] text-white">
      {/* ═══ Background Video Mobile (Vertical 9:16 / 9:20 Remastered) ═══ */}
      <video
        ref={mobileVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-poster-mobile.webp"
        className="absolute inset-0 w-full h-full object-cover z-0 block md:hidden"
      >
        <source src="/videos/hero-roma-mobile.mp4?v=4" type="video/mp4" />
      </video>

      {/* ═══ Background Video Desktop (Horizontal 16:9 Remastered) ═══ */}
      <video
        ref={desktopVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-poster.webp"
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
      >
        <source src="/videos/hero-roma.mp4?v=4" type="video/mp4" />
        <source src="/videos/hero-roma.webm?v=4" type="video/webm" />
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
