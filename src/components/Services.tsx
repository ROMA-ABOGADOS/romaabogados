"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, Briefcase, Calculator, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useSanityDocument } from "@/sanity/useSanity";
import { homePageQuery } from "@/sanity/queries";

const serviceCards = [
  {
    icon: Scale,
    title: "DERECHO TRIBUTARIO",
    badge: "Defensa & Planeamiento Fiscal",
    description: "Defensa especializada ante fiscalizaciones de SUNAT, cartas inductivas y recursos en el Tribunal Fiscal.",
    points: [
      "Atención a fiscalizaciones y cartas inductivas SUNAT",
      "Apelaciones y quejas ante el Tribunal Fiscal",
      "Suspensión legal de cobranzas coactivas y embargos",
    ],
    href: "/defensa-tributaria-sunat",
    serviceId: 5,
  },
  {
    icon: Briefcase,
    title: "DERECHO LABORAL",
    badge: "Preventivo & SUNAFIL",
    description: "Auditorías de cumplimiento laboral y patrocinio legal preventivo para blindar la relación con tus colaboradores.",
    points: [
      "Compliance laboral, comités SST y reglamentos",
      "Inspecciones y comparecencias ante la SUNAFIL",
      "Defensa en litigios laborales bajo la NLPT",
    ],
    href: "/derecho-laboral",
    serviceId: 8,
  },
  {
    icon: Building2,
    title: "DERECHO EMPRESARIAL",
    badge: "Corporativo & Societario",
    description: "Estructuración jurídica integral, formalización societaria y gobierno corporativo para decisiones seguras.",
    points: [
      "Constitución ágil de empresas (SAC, SRL, EIRL)",
      "Contratos comerciales y reorganizaciones societarias",
      "Blindaje patrimonial y acuerdos de accionistas",
    ],
    href: "/constitucion-de-empresas",
    serviceId: 1,
  },
  {
    icon: Calculator,
    title: "OUTSOURCING CONTABLE",
    badge: "Planillas & Tributación",
    description: "Gestión contable integral y nóminas laborales bajo estricta supervisión técnica y respaldo jurídico permanente.",
    points: [
      "Teneduría de libros contables y conciliaciones bancarias",
      "Liquidación mensual de impuestos y DJ Anual SUNAT",
      "Elaboración de planillas PLAME, T-Registro y boletas",
    ],
    href: "/contabilidad-tributacion",
    serviceId: 4,
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const sanityHome = useSanityDocument<any>(homePageQuery, null);

  const servicesSection = sanityHome?.servicesSection;
  const badge = servicesSection?.badge || "Áreas de Práctica";
  const title =
    servicesSection?.title && servicesSection.title !== "¿Por qué elegir ROMA & ABOGADOS?"
      ? servicesSection.title
      : "Especialización Jurídica y Empresarial";
  const subtitle =
    servicesSection?.subtitle ||
    "Soluciones jurídicas y contables estratégicas para proteger el patrimonio y asegurar la continuidad operativa de tu empresa.";

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#FAFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3"
          >
            {badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b4b38]"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#42604e] leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
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
                  className="service-card bg-white rounded-2xl p-8 sm:p-9 flex flex-col justify-between h-full cursor-pointer group border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 shadow-[0_8px_30px_-5px_rgba(43,75,56,0.05)] hover:shadow-[0_20px_45px_-5px_rgba(43,75,56,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle top gold line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#2b4b38]/5 flex items-center justify-center text-[#2b4b38] group-hover:bg-[#fa9b0c]/15 group-hover:text-[#fa9b0c] transition-all duration-300">
                        <Icon className="w-6 h-6" strokeWidth={1.8} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#fa9b0c] bg-[#fa9b0c]/10 px-3 py-1 rounded-full">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-[#2b4b38] mb-2.5 group-hover:text-[#1e3527] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[#42604e] leading-relaxed text-[14.5px] mb-5">
                      {card.description}
                    </p>

                    <ul className="space-y-2 mb-6 pt-4 border-t border-[#2b4b38]/10">
                      {card.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-[13.5px] text-[#2b4b38] font-medium leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-[#fa9b0c] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#2b4b38]/10 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#2b4b38] group-hover:text-[#fa9b0c] transition-colors inline-flex items-center gap-1.5">
                      Conocer Especialidad
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
