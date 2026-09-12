"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, Briefcase, Calculator, Building2, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";

import { useSanityDocument } from "@/sanity/useSanity";
import { homePageQuery } from "@/sanity/queries";

const serviceCards = [
  {
    icon: Scale,
    title: "Derecho Tributario",
    description: "Consultoría preventiva, fiscalizaciones SUNAT, reclamaciones, apelaciones ante el Tribunal Fiscal y levantamiento de cobranzas coactivas.",
    href: "/defensa-tributaria-sunat",
    serviceId: 5,
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    description: "Auditorías de compliance laboral, comités SST, defensa en comparecencias e inspecciones SUNAFIL y patrocinio en litigios laborales.",
    href: "/derecho-laboral",
    serviceId: 8,
  },
  {
    icon: Calculator,
    title: "Outsourcing Contable",
    description: "Gestión contable integral, libros electrónicos, implementación SIRE, procesamiento de planillas PLAME y determinación de impuestos.",
    href: "/contabilidad-tributacion",
    serviceId: 4,
  },
  {
    icon: Building2,
    title: "Derecho Empresarial",
    description: "Constitución de empresas, derecho corporativo, reorganizaciones societarias, contratos mercantiles y contrataciones con el Estado (OSCE/RNP).",
    href: "/constitucion-de-empresas",
    serviceId: 1,
  },
  {
    icon: Users,
    title: "Quiénes Somos & Equipo Legal",
    description: "Firma legal y empresarial liderada por Roberto Marca (PUCP, ex Tribunal Fiscal y SUNAT) con un equipo de especialistas de primer nivel.",
    href: "/nosotros-contacto",
    serviceId: 9,
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const sanityHome = useSanityDocument<any>(homePageQuery, null);

  const servicesSection = sanityHome?.servicesSection;
  const badge = servicesSection?.badge || "Áreas de Práctica";
  const title = servicesSection?.title || "¿Por qué elegir ROMA & ABOGADOS?";
  const subtitle =
    servicesSection?.subtitle ||
    "Soluciones jurídicas eficientes, estratégicas y personalizadas para proteger tu patrimonio y potenciar tu negocio con seguridad total.";

  const activeServices = (servicesSection?.servicesList && servicesSection.servicesList.length > 0)
    ? servicesSection.servicesList.map((s: any, idx: number) => ({
        ...s,
        icon: serviceCards[idx % serviceCards.length].icon,
      }))
    : serviceCards;

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#FAFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-4"
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
            className="mt-4 text-lg text-[#42604e]"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activeServices.map((card: any, i: number) => {
            const Icon = card.icon;
            return (
              <ScrollReveal
                key={card.title}
                delay={0.08 * i}
                duration={0.7}
                threshold={0.05}
              >
                <Link href={card.href} className="service-card bg-white rounded-3xl p-7 lg:p-9 block cursor-pointer group shadow-[0_10px_30px_-5px_rgba(43,75,56,0.06)] hover:shadow-[0_24px_50px_-5px_rgba(43,75,56,0.14)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="service-card-icon mb-5 w-12 h-12 flex items-center justify-center text-[#fa9b0c] group-hover:scale-115 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2b4b38] mb-3 group-hover:text-[#fa9b0c] transition-colors">{card.title}</h3>
                  <p className="text-[#42604e] leading-relaxed mb-5 text-[15px]">{card.description}</p>
                  <span className="service-card-link inline-flex items-center gap-1.5 text-sm font-bold text-[#fa9b0c] group-hover:translate-x-1.5 transition-transform">
                    Ver detalles
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
