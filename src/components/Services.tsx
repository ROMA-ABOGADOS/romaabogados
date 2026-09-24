"use client";

import Link from "next/link";
import { Scale, Briefcase, Building2, Calculator, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const serviceCards = [
  {
    icon: Scale,
    title: "Derecho Tributario",
    tag: "SUNAT & Tribunal Fiscal",
    image: "/images/areas/tributario.webp",
    description:
      "Defensa especializada ante fiscalizaciones de SUNAT, cartas inductivas, apelaciones y suspensión de cobranzas coactivas.",
    href: "/defensa-tributaria-sunat",
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    tag: "SUNAFIL & Compliance",
    image: "/images/areas/laboral.webp",
    description:
      "Auditorías preventivas de cumplimiento laboral, comités SST, comparecencias ante SUNAFIL y defensa judicial en la NLPT.",
    href: "/derecho-laboral",
  },
  {
    icon: Building2,
    title: "Derecho Corporativo",
    tag: "Sociedades & Contratos",
    image: "/images/areas/empresarial.webp",
    description:
      "Constitución estratégica de sociedades (SAC, SRL, EIRL), redacción de contratos mercantiles y gobierno corporativo.",
    href: "/constitucion-de-empresas",
  },
  {
    icon: Calculator,
    title: "Outsourcing Contable",
    tag: "Planillas & Gestión Fiscal",
    image: "/images/areas/contabilidad.webp",
    description:
      "Gestión contable integral, liquidación mensual de impuestos, libros electrónicos y planillas PLAME con supervisión legal.",
    href: "/contabilidad-tributacion",
  },
];

export function Services() {
  return (
    <section id="areas" className="py-20 lg:py-28 bg-[#FAFBF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — Clean & Minimalist */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.22em] uppercase mb-3">
              Especialistas en cada área legal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
              Nuestras Áreas
            </h2>
            <div className="w-16 h-0.5 bg-[#fa9b0c] mx-auto mt-4 mb-4" />
            <p className="text-[#42604e] text-sm sm:text-base leading-relaxed font-light">
              Soluciones jurídicas y contables estratégicas diseñadas para blindar y potenciar las operaciones de tu empresa.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid — Minimalist, Clean, Background Images via CSS (no broken image icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {serviceCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollReveal
                key={card.title}
                delay={0.08 * i}
                duration={0.6}
                threshold={0.05}
              >
                <Link
                  href={card.href}
                  className="group relative h-[420px] sm:h-[450px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end border border-[#2b4b38]/15 bg-[#192f21] block"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Dark Gradient Overlay for perfect readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a11] via-[#14261a]/80 to-black/30 group-hover:via-[#102015]/88 transition-colors duration-500" />

                  {/* Top Subtle Gold Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                  {/* Top Circle Icon Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="w-12 h-12 rounded-full bg-[#1e3527]/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#fa9b0c] shadow-lg group-hover:bg-[#fa9b0c] group-hover:text-[#1e3527] group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content Container — Minimalist & Clean */}
                  <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end">
                    {/* Tag badge */}
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#fa9b0c] text-[11px] font-bold uppercase tracking-wider">
                        {card.tag}
                      </span>
                    </div>

                    {/* Area Title */}
                    <h3 className="font-serif text-2xl text-white font-normal leading-snug mb-2.5 group-hover:text-[#fa9b0c] transition-colors">
                      {card.title}
                    </h3>

                    {/* Short Strategic 1-sentence Description */}
                    <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed font-light mb-5">
                      {card.description}
                    </p>

                    {/* Action link */}
                    <div className="pt-3 border-t border-white/15 flex items-center gap-2 text-xs font-semibold text-[#fa9b0c] group-hover:text-white transition-colors">
                      <span>Conocer Especialidad</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Button */}
        <div className="mt-12 sm:mt-14 text-center">
          <Link
            href="/nosotros-contacto"
            className="inline-flex items-center justify-center gap-2.5 bg-[#2b4b38] hover:bg-[#1e3527] text-white px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.98] border border-[#2b4b38]/20"
          >
            <span>Conoce Todas Nuestras Áreas</span>
            <ArrowRight className="w-4 h-4 text-[#fa9b0c]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
