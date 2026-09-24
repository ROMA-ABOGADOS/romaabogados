"use client";

import { useCountUp } from "@/hooks/use-count-up";
import { ScrollReveal } from "@/components/ScrollReveal";

function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value, 2500);

  return (
    <div className="text-center p-6 sm:p-8 flex flex-col items-center justify-center">
      <div className="flex items-baseline justify-center font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-none mb-3">
        {prefix && <span className="text-[#fa9b0c] text-3xl sm:text-4xl mr-1">{prefix}</span>}
        <span ref={ref}>{count}</span>
        {suffix && <span className="text-[#fa9b0c] text-3xl sm:text-4xl ml-1">{suffix}</span>}
      </div>
      <span className="text-white/80 text-xs sm:text-sm uppercase tracking-[0.15em] font-medium max-w-[200px] leading-relaxed">
        {label}
      </span>
    </div>
  );
}

export function ExperienciaComprobada() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#16291d] overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-25 mix-blend-luminosity"
        style={{ backgroundImage: "url('/images/ugaz/bg-experience.jpg')" }}
      />

      {/* Dark Overlay with subtle brand tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16291d]/95 via-[#1a3123]/90 to-[#16291d]/95" />

      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Estudio Ugaz Style) */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs sm:text-sm tracking-[0.22em] uppercase mb-3.5">
              somos expertos en lo que hacemos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.18]">
              Experiencia comprobada
            </h2>
            <div className="w-16 h-0.5 bg-[#fa9b0c] mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* 4 Large Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <ScrollReveal delay={0.1}>
            <StatCounter value={99} suffix="%" label="Resoluciones favorables y casos de éxito" />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <StatCounter value={12} suffix="+" label="Años de experiencia y trayectoria jurídica" />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <StatCounter value={15} suffix="M+" prefix="S/ " label="En contingencias tributarias desvirtuadas" />
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <StatCounter value={95} suffix="%" label="Índice de confianza y fidelidad empresarial" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
