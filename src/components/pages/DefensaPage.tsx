"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import {
  AlertTriangle, Shield, Gavel, MessageCircle, Clock, ArrowRight,
  ChevronRight, CheckCircle2, FileWarning, FileText, Scale, Zap,
  TrendingUp, Building2, BookOpen, AlertOctagon, HelpCircle
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

/* ════════════════════════════════════════════════════════════════
   DERECHO TRIBUTARIO — 5 EJES DE ESPECIALIZACIÓN
   ════════════════════════════════════════════════════════════════ */

const taxPillars = [
  {
    icon: Scale,
    title: "1. Consultoría y Planeamiento Tributario",
    badge: "Preventivo",
    description:
      "Diseño e implementación de estrategias fiscales seguras para optimizar la carga impositiva en estricto cumplimiento legal.",
    items: [
      "Diagnóstico tributario preventivo y auditorías fiscales",
      "Planeamiento tributario corporativo y sectorial",
      "Precios de transferencia y opiniones legales especializadas",
    ],
  },
  {
    icon: Shield,
    title: "2. Procedimientos ante la SUNAT",
    badge: "Administrativo",
    description:
      "Acompañamiento y defensa técnica especializada en requerimientos e inspecciones de fiscalización.",
    items: [
      "Defensa en fiscalizaciones parciales y definitivas",
      "Respuesta estratégica a cartas inductivas y citaciones",
      "Recursos de reclamación y solicitudes de devolución",
    ],
  },
  {
    icon: Gavel,
    title: "3. Procedimientos Contencioso-Tributarios",
    badge: "Tribunal Fiscal",
    description:
      "Defensa en segunda instancia administrativa respaldada por exintegrantes del Tribunal Fiscal.",
    items: [
      "Recursos de apelación y quejas ante el Tribunal Fiscal",
      "Sustentación de informes orales ante salas especializadas",
      "Estrategia contenciosa para revocación de valores y multas",
    ],
  },
  {
    icon: Building2,
    title: "4. Procesos Judiciales Contencioso-Administrativos",
    badge: "Poder Judicial",
    description:
      "Patrocinio judicial de alta especialización frente a resoluciones adversas del Tribunal Fiscal.",
    items: [
      "Demandas contencioso-administrativas ante el Poder Judicial",
      "Medidas cautelares tributarias para suspensión de cobranzas",
      "Recursos de casación ante la Corte Suprema de Justicia",
    ],
  },
  {
    icon: AlertOctagon,
    title: "5. Cobranza Coactiva y Embargos",
    badge: "Urgencias",
    description:
      "Acción legal urgente para detener embargos bancarios y salvaguardar la liquidez de tu negocio.",
    items: [
      "Suspensión y levantamiento urgente de embargos coactivos",
      "Fraccionamientos y aplazamientos tributarios estratégicos",
      "Quejas por transgresión del procedimiento de cobranza",
    ],
  },
];

const urgentSituations = [
  {
    icon: FileWarning,
    title: "Cartas Inductivas y Esquelas",
    description: "Inconsistencias notificadas por SUNAT. Respuesta legal oportuna para evitar fiscalizaciones y multas.",
    urgency: "Plazo de 10 días hábiles",
    serviceId: 5,
  },
  {
    icon: Shield,
    title: "Fiscalización Parcial o Definitiva",
    description: "Auditoría en curso. Acompañamiento técnico desde el día uno para desvirtuar reparos tributarios.",
    urgency: "Defensa técnica inmediata",
    serviceId: 6,
  },
  {
    icon: AlertOctagon,
    title: "Cobranza Coactiva y Embargos",
    description: "Resoluciones coactivas y retención de cuentas. Recursos de suspensión y queja ante el Tribunal Fiscal.",
    urgency: "Acción en 24-48 horas",
    serviceId: 7,
  },
  {
    icon: TrendingUp,
    title: "Incremento Patrimonial No Justificado",
    description: "Discrepancias entre ingresos bancarios y declaraciones juradas. Sustentación técnica documentaria.",
    urgency: "Sustento técnico legal",
    serviceId: 11,
  },
];

const whyUs = [
  { icon: Zap, text: "Atención inmediata: respuesta inicial y análisis de plazos en menos de 1 hora." },
  { icon: Shield, text: "Liderado por exintegrantes del Tribunal Fiscal y de la SUNAT." },
  { icon: Scale, text: "Rigor técnico respaldado por la Pontificia Universidad Católica del Perú (PUCP)." },
  { icon: CheckCircle2, text: "Más de S/ 15 Millones de contingencias desvirtuadas con éxito comprobado." },
];

export function DefensaPage() {
  useScrollSlug();
  const { openModal } = useWhatsAppStore();

  return (
    <SiteLayout>
      {/* ═══ SUBPAGE HERO — Full-Bleed Corporate Green #1e3527 ═══ */}
      <section id="defensa-tributaria" className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#1e3527] pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-20 sm:pb-24">
        {/* Top urgency accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent z-30" />
        
        {/* Subtle decorative mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#42604e]/25 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#fa9b0c]/15 rounded-full blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
                {/* Breadcrumb */}
                <div className="mb-4 sm:mb-5">
                  <Link href="/" className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#fa9b0c] text-[13px] sm:text-[14px] font-medium transition-colors">
                    Inicio <ChevronRight className="w-3.5 h-3.5 text-[#fa9b0c]" /> Derecho Tributario
                  </Link>
                </div>

                {/* Badge */}
                <div className="mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
                    <Shield className="w-3.5 h-3.5 text-[#fa9b0c]" />
                    Defensa Fiscal & Consultoría Estratégica
                  </span>
                </div>

                {/* H1 - Estudio Ugaz Editorial Serif */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="hero-h1 font-serif font-normal text-4xl sm:text-5xl lg:text-[58px] text-white leading-[1.12] tracking-tight mb-5 sm:mb-6"
                >
                  Derecho Tributario & <span className="text-[#fa9b0c]">Defensa Fiscal</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hero-subtitle mb-8 sm:mb-10 text-[16px] sm:text-[18px] lg:text-[19px] text-[#FAFBF9]/85 max-w-2xl leading-relaxed font-light"
                >
                  Defensa estratégica ante SUNAT y el Tribunal Fiscal, consultoría tributaria preventiva y suspensión inmediata de cobranzas coactivas.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="hero-ctas mt-8 flex flex-col sm:flex-row gap-4"
                >
                  <button
                    onClick={() => openModal(2)}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Agendar una Consulta
                  </button>
                  <a
                    href="#ejes-tributarios"
                    className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all backdrop-blur-sm"
                  >
                    Conocer Ejes de Práctica
                  </a>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="hero-trust mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-white/70 text-xs sm:text-sm"
                >
                  {[
                    "Ex Tribunal Fiscal & SUNAT",
                    "Respuesta en < 1 hora",
                    "Blindaje Patrimonial",
                  ].map((badge) => (
                    <span key={badge} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#fa9b0c]" />
                      {badge}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT: Referential Executive Card */}
            <div className="hidden lg:block lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 shadow-2xl shadow-black/30 group"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/images/hero/hero-subpages-roberto.webp"
                    alt="Defensa Tributaria Especializada - ROMA & ABOGADOS"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3527]/90 via-[#1e3527]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-left">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#fa9b0c] text-[#1e3527] text-xs font-bold uppercase tracking-wider mb-2">
                      Dirección Legal & Tributaria
                    </span>
                    <h3 className="text-white font-bold text-xl leading-snug">
                      Dr. Roberto Marca
                    </h3>
                    <p className="text-white/80 text-xs mt-0.5">
                      Exfuncionario Tribunal Fiscal & SUNAT • PUCP
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <ScrollDownIndicator />
      </section>

      {/* ═══ SECTION: 5 EJES DE ESPECIALIZACIÓN TRIBUTARIA ═══ */}
      <section id="ejes-tributarios" className="py-24 lg:py-32 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
                Alcance Profesional
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
                Nuestros 5 Ejes de Práctica Tributaria
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#42604e] leading-relaxed">
                Acompañamiento especializado para empresas en todas las etapas del procedimiento tributario y fiscal.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {taxPillars.map((pillar, idx) => {
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
                        onClick={() => openModal(5)}
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

      {/* ═══ SECTION: CASOS DE ATENCIÓN URGENTE ═══ */}
      <section className="py-24 lg:py-32 bg-white border-t border-[#2b4b38]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
                Urgencias Fiscales
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
                Atención Inmediata de Requerimientos SUNAT
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#42604e] leading-relaxed">
                No dejes vencer los plazos. Cada día es determinante para el éxito de tu defensa jurídica.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {urgentSituations.map((sit, i) => {
              const Icon = sit.icon;
              return (
                <ScrollReveal
                  key={sit.title}
                  delay={0.1 * i}
                  className="bg-[#FAFBF9] rounded-2xl p-8 sm:p-9 border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group text-center"
                >
                  <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div>
                    <div className="flex justify-center mb-6">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b45309] bg-[#fef3c7] px-3.5 py-1 rounded-full shadow-xs">
                        <Clock className="w-3.5 h-3.5" />
                        {sit.urgency}
                      </span>
                    </div>
                    <div className="flex justify-center mb-5">
                      <Icon className="w-12 h-12 text-[#fa9b0c] group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2b4b38] mb-3 group-hover:text-[#1e3527] transition-colors">{sit.title}</h3>
                    <p className="text-[#42604e] text-sm leading-relaxed mb-6 font-light">{sit.description}</p>
                  </div>
                  <button
                    onClick={() => openModal(sit.serviceId)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2b4b38] hover:bg-[#1e3527] text-white px-5 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
                  >
                    Atender este caso
                    <ArrowRight className="w-4 h-4 text-[#fa9b0c]" />
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SECTION: POR QUÉ CONFIAR EN NOSOTROS ═══ */}
      <section className="py-24 lg:py-32 bg-[#FAFBF9] border-t border-[#2b4b38]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
              Ventaja Técnica
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
              ¿Por Qué Confiar tu Defensa en ROMA & ABOGADOS?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal
                  key={i}
                  delay={0.1 * i}
                  duration={0.4}
                  className="flex items-center gap-5 p-7 rounded-2xl bg-white border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-lg transition-all duration-300 group relative"
                >
                  <div className="shrink-0 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#fa9b0c] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-[#2b4b38] font-medium text-[15px] sm:text-base leading-relaxed">
                    {item.text}
                  </span>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section id="atencion-inmediata" className="py-24 lg:py-32 bg-[#1e3527] text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-sm">
            Respuesta Inmediata
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-white leading-[1.18] max-w-3xl mx-auto">
            El Tiempo es Determinante Frente a SUNAT
          </h2>
          <p className="text-white/80 mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Una pronta respuesta estructurada con rigor técnico marca la diferencia entre anular una resolución o enfrentar multas y cobranzas coactivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal(5)}
              className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" /> Atender mi Caso Ahora
            </button>
            <Link
              href="/derecho-laboral"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all backdrop-blur-sm"
            >
              Conocer Asesoría Laboral
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
