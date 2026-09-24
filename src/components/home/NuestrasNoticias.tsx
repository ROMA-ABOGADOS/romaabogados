"use client";

import Link from "next/link";
import { FileText, ArrowRight, Download, Scale } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const notices = [
  {
    tag: "Jurisprudencia Tributaria",
    title: "RTF N.° 04512-2024: Fehaciencia de gastos y medios de pago en fiscalización SUNAT",
    date: "18 de Septiembre",
    desc: "Criterio de observancia que delimita la exigencia probatoria de la administración tributaria sobre servicios reales entre empresas vinculadas.",
    linkText: "Consultar Jurisprudencia",
    href: "/defensa-tributaria-sunat",
  },
  {
    tag: "Criterio SUNAFIL",
    title: "Directiva N.° 003-2024 SUNAFIL: Protocolo de fiscalización en Comités de SST",
    date: "28 de Agosto",
    desc: "Nuevas pautas para inspectores laborales en empresas con más de 20 trabajadores y tipificación de infracciones graves y muy graves.",
    linkText: "Revisar Protocolo",
    href: "/derecho-laboral",
  },
  {
    tag: "Precedente Vinculante",
    title: "Casación Laboral N.° 1782-2024 Lima: Imputación de despido fraudulento y carga de prueba",
    date: "14 de Agosto",
    desc: "La Corte Suprema unifica doctrina sobre los estándares probatorios requeridos en demandas indemnizatorias bajo la NLPT.",
    linkText: "Ver Análisis Legal",
    href: "/derecho-laboral",
  },
];

export function NuestrasNoticias() {
  return (
    <section id="noticias" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs sm:text-sm tracking-[0.22em] uppercase mb-3">
              Te mantenemos informado
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
              Nuestras Noticias y Criterios
            </h2>
            <p className="mt-4 text-[#42604e] text-base sm:text-lg leading-relaxed font-light">
              Actualizaciones normativas, resoluciones del Tribunal Fiscal y jurisprudencia laboral comentada por nuestro equipo.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {notices.map((n, i) => (
            <ScrollReveal key={n.title} delay={0.1 * i} duration={0.6}>
              <div className="bg-[#FAFBF9] rounded-2xl p-7 sm:p-8 border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative group">
                {/* Top subtle line */}
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#fa9b0c] bg-[#fa9b0c]/10 px-3 py-1 rounded-full">
                      {n.tag}
                    </span>
                    <span className="text-xs text-[#2b4b38]/60 font-light">
                      {n.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2b4b38] leading-snug mb-3 group-hover:text-[#1e3527] transition-colors">
                    {n.title}
                  </h3>

                  <p className="text-[#42604e] text-sm leading-relaxed font-light mb-6">
                    {n.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2b4b38]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#2b4b38]/70 text-xs font-medium">
                    <FileText className="w-4 h-4 text-[#fa9b0c]" />
                    <span>Resolución / Casación</span>
                  </div>
                  <Link
                    href={n.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#fa9b0c] hover:underline"
                  >
                    <span>{n.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
