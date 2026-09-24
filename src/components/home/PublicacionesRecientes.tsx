"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const articles = [
  {
    image: "/images/areas/tributario.jpg",
    tag: "Derecho Tributario",
    date: "15 de Septiembre",
    title: "Fiscalizaciones Definitivas vs. Parciales de SUNAT: Estrategias de Defensa",
    desc: "Análisis de plazos perentorios, requerimientos de fehaciencia y presentación de quejas ante el Tribunal Fiscal.",
    href: "/defensa-tributaria-sunat",
  },
  {
    image: "/images/areas/laboral.jpg",
    tag: "Derecho Laboral",
    date: "26 de Agosto",
    title: "Inspecciones SUNAFIL: Protocolos de Cumplimiento, Comités y SST",
    desc: "Obligaciones esenciales en materia de seguridad y salud en el trabajo para prevenir sanciones económicas severas.",
    href: "/derecho-laboral",
  },
  {
    image: "/images/areas/empresarial.jpg",
    tag: "Derecho Corporativo",
    date: "12 de Agosto",
    title: "Reorganizaciones Societarias y Blindaje Patrimonial para Accionistas",
    desc: "Claves jurídicas en fusiones, escisiones y convenios societarios para resguardar la gobernanza corporativa.",
    href: "/constitucion-de-empresas",
  },
  {
    image: "/images/areas/contabilidad.jpg",
    tag: "Contabilidad & NIIF",
    date: "31 de Julio",
    title: "Cierre Contable Preventivo y Conciliación Fiscal de Causalidad",
    desc: "Estrategias de teneduría y soporte documental bajo NIIF para evitar reparos de SUNAT en la DJ Anual.",
    href: "/contabilidad-tributacion",
  },
];

export function PublicacionesRecientes() {
  return (
    <section id="publicaciones" className="py-24 lg:py-32 bg-[#FAFBF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs sm:text-sm tracking-[0.22em] uppercase mb-3">
              Análisis y opinión
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
              Publicaciones Recientes
            </h2>
            <p className="mt-4 text-[#42604e] text-base sm:text-lg leading-relaxed font-light">
              Criterios técnicos, resoluciones vinculantes y análisis estratégico para la toma de decisiones empresariales.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid - Estudio Ugaz publication style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c13] via-[#15271a]/80 to-black/35 group-hover:via-[#15271a]/90 transition-colors duration-500" />

                {/* Top Subtle Gold Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                {/* Information Layer */}
                <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end h-full">
                  {/* Tag badge */}
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#fa9b0c] text-[11px] font-bold uppercase tracking-wider">
                      {art.tag}
                    </span>
                  </div>

                  {/* Date */}
                  <span className="text-white/70 text-xs flex items-center gap-1.5 mb-2 font-light">
                    <Calendar className="w-3.5 h-3.5 text-[#fa9b0c]" />
                    {art.date}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-[21px] text-white font-normal leading-snug mb-3 group-hover:text-[#fa9b0c] transition-colors">
                    {art.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-xs leading-relaxed font-light mb-4 line-clamp-2">
                    {art.desc}
                  </p>

                  {/* Link action */}
                  <div className="pt-3 border-t border-white/15 flex items-center gap-2 text-xs font-semibold text-[#fa9b0c] group-hover:text-white transition-colors">
                    <span>Ver detalle</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
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
