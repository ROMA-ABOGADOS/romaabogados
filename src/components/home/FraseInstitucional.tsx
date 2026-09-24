"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export function FraseInstitucional() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#122217] overflow-hidden">
      {/* Background Image with subtle overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: "url('/images/ugaz/bg-sentence.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#122217] via-[#122217]/90 to-[#122217]/80" />

      {/* Thin Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fa9b0c]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fa9b0c]/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.25em] mb-6">
              Compromiso y Rigor
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-relaxed mb-6">
              &ldquo;En <span className="text-[#fa9b0c]">ROMA & ABOGADOS</span> nos involucramos a fondo con cada caso. Nuestro compromiso ético y rigor técnico están garantizados.&rdquo;
            </blockquote>
            <p className="text-white/70 text-sm sm:text-base font-light tracking-wide uppercase">
              Dirección Legal & Tributaria — ROMA & ABOGADOS
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
