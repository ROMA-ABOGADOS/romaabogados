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
      "Diseño e implementación de estrategias tributarias seguras para optimizar la carga impositiva dentro del estricto marco de la ley.",
    items: [
      "Diagnóstico tributario preventivo y auditorías fiscales",
      "Planeamiento tributario nacional e internacional",
      "Asesoría en tributación sectorial (minería, construcción, retail, tecnología, etc.)",
      "Asesoría en precios de transferencia y operaciones vinculadas",
      "Opiniones legales e informes tributarios especializados",
      "Regímenes especiales y beneficios tributarios",
    ],
  },
  {
    icon: Shield,
    title: "2. Procedimientos ante la SUNAT",
    badge: "Administrativo",
    description:
      "Acompañamiento técnico y legal de principio a fin en todo tipo de requerimientos e inspecciones tributarias.",
    items: [
      "Asistencia y defensa en procedimientos de fiscalización definitiva y parcial",
      "Atención y respuesta a cartas inductivas, esquelas de citación y requerimientos",
      "Elaboración y sustento de recursos de reclamación contra resoluciones de determinación y de multa",
      "Solicitudes de devolución de pagos indebidos o en exceso, y saldo a favor del exportador",
      "Procedimientos de queja ante el Tribunal Fiscal por actuaciones irregulares de SUNAT",
    ],
  },
  {
    icon: Gavel,
    title: "3. Procedimientos Contencioso-Tributarios",
    badge: "Tribunal Fiscal",
    description:
      "Defensa técnica en segunda instancia administrativa, respaldada por especialistas que integraron el Tribunal Fiscal.",
    items: [
      "Elaboración e interposición de recursos de apelación ante el Tribunal Fiscal",
      "Asistencia y sustentación de informes orales ante el Tribunal Fiscal",
      "Seguimiento exhaustivo de expedientes en apelación y quejas",
    ],
  },
  {
    icon: Building2,
    title: "4. Procesos Judiciales Contencioso-Administrativos",
    badge: "Poder Judicial",
    description:
      "Patrocinio judicial de alta especialización frente a resoluciones adversas de la administración pública.",
    items: [
      "Demandas contencioso-administrativas contra resoluciones del Tribunal Fiscal",
      "Medidas cautelares tributarias para suspender la cobranza y proteger el patrimonio",
      "Recursos de casación ante la Corte Suprema de Justicia de la República",
      "Procesos de amparo en materia tributaria ante el Tribunal Constitucional",
    ],
  },
  {
    icon: AlertOctagon,
    title: "5. Cobranza Coactiva y Embargos",
    badge: "Urgencias",
    description:
      "Acción legal inmediata para detener embargos de cuentas bancarias y salvaguardar la liquidez de tu empresa.",
    items: [
      "Suspensión y levantamiento de medidas cautelares previas y embargos coactivos",
      "Asesoría y gestión en fraccionamientos y aplazamientos tributarios (Art. 36 C.T.)",
      "Quejas ante el Tribunal Fiscal por infracciones en el procedimiento de cobranza coactiva",
      "Prescripción tributaria de deudas y multas",
    ],
  },
];

const urgentSituations = [
  {
    icon: FileWarning,
    title: "Cartas Inductivas y Esquelas",
    description: "SUNAT detectó presuntas inconsistencias en tus declaraciones tributarias o cruces de información. No responder a tiempo puede derivar en multas severas y fiscalización.",
    urgency: "Plazo de 10 días hábiles. Defensa inmediata.",
    serviceId: 5,
  },
  {
    icon: Shield,
    title: "Fiscalización Parcial o Definitiva",
    description: "Auditoría en marcha por parte de SUNAT. Un requerimiento no atendido debidamente genera reparos millonarios y cierre de requerimientos con deuda.",
    urgency: "Acompañamiento desde el primer día.",
    serviceId: 6,
  },
  {
    icon: AlertOctagon,
    title: "Cobranza Coactiva y Retención de Cuentas",
    description: "Resoluciones de Ejecución Coactiva (REC) y embargos en cuentas bancarias. Presentamos recursos de suspensión y queja ante el Tribunal Fiscal.",
    urgency: "Suspensión de embargo en 24-48 horas.",
    serviceId: 7,
  },
  {
    icon: TrendingUp,
    title: "Incremento Patrimonial No Justificado",
    description: "Notificaciones dirigidas a socios, directores o personas naturales con inconsistencias patrimoniales entre ingresos bancarios y DJ anuales.",
    urgency: "Sustentación técnica documentaria.",
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
      {/* ═══ SUBPAGE HERO — Full-Bleed Corporate Green #2b4b38 ═══ */}
      <section id="defensa-tributaria" className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#2b4b38] pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-20 sm:pb-24">
        {/* Top urgency accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2b4b38] via-[#fa9b0c] to-[#2b4b38] z-30" />
        
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
          <div className="max-w-4xl flex flex-col justify-center text-left">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
              {/* Breadcrumb */}
              <div className="mb-4 sm:mb-5">
                <Link href="/" className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#fa9b0c] text-[13px] sm:text-[14px] font-medium transition-colors">
                  Inicio <ChevronRight className="w-3.5 h-3.5 text-[#fa9b0c]" /> Derecho Tributario
                </Link>
              </div>

              {/* Badge */}
              <div className="mb-4 sm:mb-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[#fa9b0c] text-xs sm:text-[13px] font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">
                  <Shield className="w-4 h-4 text-[#fa9b0c]" />
                  Defensa Fiscal & Consultoría Estratégica
                </span>
              </div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hero-h1 text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.18] tracking-tight mb-5 sm:mb-6"
              >
                Derecho Tributario y{" "}
                <span className="text-[#fa9b0c]">Defensa Frente a SUNAT</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-subtitle mb-8 sm:mb-10 text-[16px] sm:text-[18px] lg:text-[19px] text-[#FAFBF9]/85 max-w-3xl leading-relaxed font-light"
              >
                Consultoría preventiva, fiscalizaciones definitivas y parciales, reclamaciones, apelaciones ante el Tribunal Fiscal, medidas cautelares y levantamiento urgente de embargos coactivos.
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
                  className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-7 py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Atención Inmediata de Caso
                </button>
                <a
                  href="#ejes-tributarios"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm"
                >
                  Conocer Áreas de Práctica
                </a>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="hero-trust mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-white/65 text-xs sm:text-sm"
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
        </div>

        {/* Scroll down indicator */}
        <ScrollDownIndicator />
      </section>

      {/* ═══ SECTION: 5 EJES DE ESPECIALIZACIÓN TRIBUTARIA ═══ */}
      <SectionDivider from="#2b4b38" to="#FAFBF9" />
      <section id="ejes-tributarios" className="py-20 lg:py-28 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
                Alcance Profesional
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b4b38]">
                Nuestros 5 Ejes de Práctica Tributaria
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#42604e] leading-relaxed">
                Acompañamiento especializado para empresas en todas las etapas del procedimiento tributario y fiscal.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {taxPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal
                  key={pillar.title}
                  delay={0.08 * idx}
                  duration={0.6}
                  className="bg-white rounded-3xl shadow-[0_10px_35px_-5px_rgba(43,75,56,0.06)] hover:shadow-[0_22px_45px_-5px_rgba(43,75,56,0.13)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden p-8 sm:p-10 relative group"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2b4b38] via-[#fa9b0c] to-[#2b4b38] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 flex items-center justify-center text-[#2b4b38] group-hover:text-[#fa9b0c] group-hover:scale-110 transition-all duration-300 shrink-0">
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#fa9b0c] bg-[#fa9b0c]/10 px-2.5 py-0.5 rounded-full">
                            {pillar.badge}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-[#2b4b38] mt-1">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-[#42604e] text-[15px] leading-relaxed mb-5 pl-0 sm:pl-16">
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
                        className="inline-flex items-center justify-center gap-2 bg-[#2b4b38] hover:bg-[#fa9b0c] text-white hover:text-[#1e3527] px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-md"
                      >
                        Consultar este servicio
                        <ArrowRight className="w-4 h-4 text-[#fa9b0c] group-hover:text-[#1e3527]" />
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
      <SectionDivider from="#FAFBF9" to="#ffffff" />
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
                Urgencias Fiscales
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2b4b38]">
                Atención Inmediata de Requerimientos SUNAT
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#42604e]">
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
                  className="bg-[#FAFBF9] rounded-3xl p-8 sm:p-9 shadow-[0_10px_30px_-5px_rgba(43,75,56,0.06)] hover:shadow-[0_24px_50px_-5px_rgba(43,75,56,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group text-center"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div>
                    <div className="flex justify-center mb-6">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b45309] bg-[#fef3c7] px-3.5 py-1 rounded-full shadow-xs">
                        <Clock className="w-3.5 h-3.5" />
                        {sit.urgency}
                      </span>
                    </div>
                    <div className="flex justify-center mb-5">
                      <Icon className="w-12 h-12 text-[#fa9b0c] group-hover:scale-115 transition-transform duration-300 drop-shadow-sm" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2b4b38] mb-3 group-hover:text-[#1e3527] transition-colors">{sit.title}</h3>
                    <p className="text-[#42604e] text-sm leading-relaxed mb-6">{sit.description}</p>
                  </div>
                  <button
                    onClick={() => openModal(sit.serviceId)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2b4b38] hover:bg-[#fa9b0c] text-white hover:text-[#1e3527] px-5 py-3.5 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg"
                  >
                    Atender este caso
                    <ArrowRight className="w-4 h-4 text-[#fa9b0c] group-hover:text-[#1e3527]" />
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SECTION: POR QUÉ CONFIAR EN NOSOTROS ═══ */}
      <SectionDivider from="#ffffff" to="#FAFBF9" />
      <section className="py-20 lg:py-28 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
              Ventaja Técnica
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b4b38]">
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
                  className="flex items-center gap-5 p-7 rounded-3xl bg-white shadow-[0_8px_30px_-5px_rgba(43,75,56,0.06)] hover:shadow-[0_18px_40px_-5px_rgba(43,75,56,0.12)] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="shrink-0 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#fa9b0c] group-hover:scale-115 transition-transform duration-300" />
                  </div>
                  <span className="text-[#2b4b38] font-semibold text-[15px] sm:text-base leading-relaxed">
                    {item.text}
                  </span>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <SectionDivider from="#FAFBF9" to="#2b4b38" />
      <section id="atencion-inmediata" className="py-20 lg:py-28 bg-[#2b4b38] text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            El Tiempo es Determinante Frente a SUNAT
          </h2>
          <p className="text-white/80 mb-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Una pronta respuesta estructurada con rigor técnico marca la diferencia entre anular una resolución o enfrentar multas y cobranzas coactivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal(5)}
              className="inline-flex items-center justify-center gap-2 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" /> Atender mi Caso Ahora
            </button>
            <Link
              href="/derecho-laboral"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all backdrop-blur-sm"
            >
              Conocer Asesoría Laboral
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
