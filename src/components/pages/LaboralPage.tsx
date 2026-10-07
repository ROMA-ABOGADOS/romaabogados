"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import {
  Briefcase, Shield, Gavel, MessageCircle, ArrowRight,
  ChevronRight, CheckCircle2, FileText, Globe, AlertTriangle
} from "lucide-react";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

/* ════════════════════════════════════════════════════════════════
   DERECHO LABORAL — LÍNEAS DE SERVICIO
   ════════════════════════════════════════════════════════════════ */

const laborPillars = [
  {
    icon: FileText,
    title: "1. Consultoría Laboral Preventiva",
    badge: "Preventivo",
    description:
      "Estructuración sólida de la relación laboral para prevenir contingencias y sanciones administrativas.",
    items: [
      "Redacción y revisión de contratos de trabajo y teletrabajo",
      "Reglamento Interno de Trabajo (RIT) y políticas corporativas",
      "Consultoría en remuneraciones, beneficios sociales y utilidades",
    ],
  },
  {
    icon: Shield,
    title: "2. Gestión de Riesgos y Compliance Laboral",
    badge: "Auditoría & SST",
    description:
      "Verificación exhaustiva del cumplimiento de la normativa laboral y de seguridad y salud en el trabajo.",
    items: [
      "Auditorías laborales integrales de compliance preventivo",
      "Asesoría en Seguridad y Salud en el Trabajo (SST) y comités paritarios",
      "Protocolos obligatorios contra el hostigamiento sexual (Ley 27942)",
    ],
  },
  {
    icon: AlertTriangle,
    title: "3. Procedimientos ante SUNAFIL y MTPE",
    badge: "Defensa Inspectiva",
    description:
      "Defensa técnica inmediata ante actuaciones inspectivas de la Superintendencia Nacional de Fiscalización Laboral.",
    items: [
      "Defensa en comparecencias e inspecciones presenciales de SUNAFIL",
      "Descargos fundamentados contra actas de infracción y multas",
      "Recursos de apelación y revisión ante el Tribunal de Fiscalización Laboral",
    ],
  },
  {
    icon: Gavel,
    title: "4. Litigios y Procesos Judiciales Laborales",
    badge: "Poder Judicial",
    description:
      "Patrocinio judicial estratégico bajo las reglas orales de la Nueva Ley Procesal del Trabajo (NLPT).",
    items: [
      "Defensa en demandas por despido incausado, arbitrario o nulo",
      "Patrocinio en reclamos de beneficios sociales e indemnizaciones",
      "Negociación y resolución de controversias colectivas e individuales",
    ],
  },
  {
    icon: Globe,
    title: "5. Gestión Migratoria para Empresas",
    badge: "Extranjería",
    description:
      "Tramitación legal integral para incorporación de talento y directivos extranjeros en el Perú.",
    items: [
      "Visas de trabajo y calidades migratorias ante MIGRACIONES",
      "Aprobación y registro de contratos extranjeros ante el MTPE",
      "Control de porcentajes limitativos de personal extranjero",
    ],
  },
];

export function LaboralPage() {
  useScrollSlug();
  const { openModal } = useWhatsAppStore();

  return (
    <SiteLayout>
      {/* ═══ SUBPAGE HERO — Full-Bleed Background Image & Editorial Overlay ═══ */}
      <section
        id="derecho-laboral"
        className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24 bg-[#122217]"
        style={{
          backgroundImage: "url(/images/areas/laboral.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Vignette Overlay for perfect readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1810]/95 via-[#122217]/90 to-[#122217]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#122217] via-transparent to-black/40" />

        {/* Top Gold Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent z-30" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
            {/* Breadcrumb */}
            <div className="mb-4 sm:mb-5">
              <Link href="/" className="inline-flex items-center gap-1.5 text-white/75 hover:text-[#fa9b0c] text-[13px] sm:text-[14px] font-medium transition-colors">
                Inicio <ChevronRight className="w-3.5 h-3.5 text-[#fa9b0c]" /> Derecho Laboral
              </Link>
            </div>

            {/* Badge */}
            <div className="mb-4 sm:mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
                <Briefcase className="w-3.5 h-3.5 text-[#fa9b0c]" />
                Área de Práctica
              </span>
            </div>

            {/* H1 - Title as requested in Corrección 10 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-h1 font-serif font-normal text-4xl sm:text-5xl lg:text-[62px] text-white leading-[1.12] tracking-tight mb-5 sm:mb-6"
            >
              DERECHO <span className="text-[#fa9b0c]">LABORAL</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle mb-8 sm:mb-10 text-[16px] sm:text-[18px] lg:text-[20px] text-[#FAFBF9]/90 max-w-2xl leading-relaxed font-light"
            >
              Auditorías de compliance laboral, comités SST, defensa inmediata ante fiscalizaciones SUNAFIL y patrocinio en litigios laborales.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-ctas mt-8 flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => openModal(8)}
                className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar una Consulta
              </button>
              <a
                href="#lineas-de-servicio"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all backdrop-blur-sm"
              >
                Ver Líneas de Servicio
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hero-trust mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-white/75 text-xs sm:text-sm"
            >
              {[
                "Inspecciones SUNAFIL",
                "Especialistas PUCP",
                "Nueva Ley Procesal NLPT",
              ].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#fa9b0c]" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <ScrollDownIndicator />
      </section>

      {/* ═══ SECTION: LÍNEAS DE SERVICIO ═══ */}
      <section id="lineas-de-servicio" className="py-20 lg:py-24 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
                Especialización
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
                LÍNEAS DE SERVICIO
              </h2>
              <div className="w-16 h-0.5 bg-[#fa9b0c] mx-auto mt-4 mb-4" />
              <p className="mt-2 text-base sm:text-lg text-[#42604e] leading-relaxed font-light">
                Desde la prevención y contratación estratégica hasta la defensa litigiosa ante el Poder Judicial y autoridades administrativas.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {laborPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal
                  key={pillar.title}
                  delay={0.08 * idx}
                  duration={0.6}
                  className="bg-white rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 overflow-hidden p-8 sm:p-10 relative group"
                >
                  <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 flex items-center justify-center text-[#2b4b38] group-hover:text-[#fa9b0c] group-hover:scale-105 transition-all duration-300 shrink-0">
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-widest text-[#fa9b0c] bg-[#fa9b0c]/10 px-2.5 py-0.5 rounded-full">
                            {pillar.badge}
                          </span>
                          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2b4b38] mt-1">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-[#42604e] text-[15px] leading-relaxed mb-5 pl-0 sm:pl-16 font-light">
                        {pillar.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-[#2b4b38]/10 sm:ml-16">
                        {pillar.items.map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#fa9b0c] shrink-0 mt-0.5" />
                            <span className="text-sm text-[#2b4b38] font-medium leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 flex flex-col justify-center lg:pt-2">
                      <button
                        onClick={() => openModal(8)}
                        className="inline-flex items-center justify-center gap-2 bg-[#2b4b38] hover:bg-[#1e3527] text-white px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all shadow-sm hover:shadow-md"
                      >
                        Consultar servicio
                        <ArrowRight className="w-4 h-4 text-[#fa9b0c]" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CLEAN CTA SECTION ═══ */}
      <section className="py-20 bg-[#1e3527] text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-sm">
            Atención Inmediata
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-white leading-[1.18] max-w-3xl mx-auto">
            ¿Tienes una Inspección de SUNAFIL o Contingencia Laboral?
          </h2>
          <p className="text-white/80 mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Actuamos dentro de los plazos más exigentes para formular descargos técnicos, comparecencias y blindaje laboral integral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal(8)}
              className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" /> Agendar Consulta Laboral
            </button>
            <Link
              href="/constitucion-de-empresas"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all backdrop-blur-sm"
            >
              Conocer Derecho Empresarial
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
