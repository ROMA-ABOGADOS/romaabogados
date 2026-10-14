"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const articles = [
  {
    image: "/images/publications/codigo-tributario.webp",
    title: "CÓDIGO TRIBUTARIO",
    desc: "Criterios vinculantes sobre plazos de fiscalización, notificación electrónica y prescripción tributaria.",
    href: "/defensa-tributaria-sunat",
  },
  {
    image: "/images/publications/impuesto-renta.webp",
    title: "IMPUESTO A LA RENTA",
    desc: "Principio de causalidad, deducción de gastos empresariales, fehaciencia y bancarización ante SUNAT.",
    href: "/defensa-tributaria-sunat",
  },
  {
    image: "/images/publications/igv.webp",
    title: "IMPUESTO GENERAL A LAS VENTAS (IGV)",
    desc: "Operaciones no reales, crédito fiscal y tratamiento de exportación de servicios y detracciones.",
    href: "/defensa-tributaria-sunat",
  },
];

export function PublicacionesRecientes() {
  return (
    <section id="publicaciones" className="py-20 lg:py-24 bg-[#FAFBF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs sm:text-sm tracking-[0.22em] uppercase mb-3">
              Análisis y opinión
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
              Publicaciones Recientes
            </h2>
            <div className="w-16 h-0.5 bg-[#fa9b0c] mx-auto mt-4 mb-4" />
            <p className="mt-2 text-[#42604e] text-base sm:text-lg leading-relaxed font-light">
              Criterios técnicos, resoluciones vinculantes y análisis tributario estratégico para la toma de decisiones empresariales.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {articles.map((art, i) => (
            <ScrollReveal key={art.title} delay={0.08 * i} duration={0.6}>
              <Link
                href={art.href}
                className="group relative h-[440px] sm:h-[460px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end border border-[#2b4b38]/10 block"
              >
                {/* Background Image with Zoom */}
                <img
                  src={art.image}
                  alt={art.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c13] via-[#15271a]/85 to-black/35 group-hover:via-[#15271a]/90 transition-colors duration-500" />

                {/* Top Subtle Gold Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                {/* Information Layer */}
                <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end h-full">
                  {/* Clean White Title */}
                  <h3 className="font-serif text-2xl sm:text-[26px] text-white font-normal leading-tight mb-3 group-hover:text-white/90 transition-colors">
                    {art.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed font-light mb-4 line-clamp-3">
                    {art.desc}
                  </p>

                  {/* Link action */}
                  <div className="pt-3 border-t border-white/15 flex items-center gap-2 text-xs font-semibold text-white/90 group-hover:text-white transition-colors">
                    <span>Ver detalle</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/90 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
