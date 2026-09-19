"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import {
  CheckCircle2, MessageCircle, FileText,
  Users, ChevronRight, Calculator, ArrowRight,
  Handshake
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

/* ════════════════════════════════════════════════════════════════
   OUTSOURCING CONTABLE — 2 PILARES CENTRALES
   ════════════════════════════════════════════════════════════════ */

const contablePillars = [
  {
    icon: Calculator,
    title: "1. Gestión Contable y Tributaria Integral",
    badge: "Contabilidad & Impuestos",
    description:
      "Teneduría ordenada y determinación oportuna de tributos para garantizar cero multas y cumplimiento tributario impecable.",
    items: [
      "Teneduría de libros contables físicos y electrónicos (SLE-PLE) con conciliaciones periódicas",
      "Determinación y liquidación mensual de impuestos (IGV, Renta, ITAN) y Declaración Jurada Anual SUNAT",
      "Elaboración de estados financieros de balance y gestión bajo normas NIIF para la gerencia",
    ],
  },
  {
    icon: Users,
    title: "2. Gestión de Planillas y Obligaciones Laborales",
    badge: "Planillas & PLAME",
    description:
      "Liquidación exacta de nóminas y cumplimiento riguroso de aportes y contribuciones de seguridad social.",
    items: [
      "Elaboración y procesamiento de planillas de sueldos, salarios y emisión de boletas electrónicas",
      "Cálculo riguroso de beneficios sociales: gratificaciones, CTS, vacaciones y liquidaciones de cese",
      "Declaración y pago mensual de obligaciones laborales: PLAME, T-Registro, ESSALUD y AFPnet",
    ],
  },
];

const stats = [
  { value: "500+", label: "Declaraciones Presentadas a Tiempo" },
  { value: "100%", label: "Cumplimiento Tributario y Laboral" },
  { value: "0", label: "Contingencias por Retraso" },
];

const benefits = [
  "Supervisión técnica de contadores colegiados con respaldo legal permanente de ROMA & ABOGADOS",
  "Eliminación total del riesgo de multas por declaraciones extemporáneas o errores en el SIRE",
  "Ahorro de hasta 60% frente al costo de mantener un departamento contable interno",
  "Reportes y estados financieros periódicos con análisis para toma de decisiones gerenciales",
  "Tratamiento confidencial y seguro de la información contable y laboral de tu empresa",
  "Blindaje jurídico frente a fiscalizaciones o cruces de información de SUNAT",
];

export function ContabilidadPage() {
  useScrollSlug();
  const { ref: statsRef } = useScrollAnimation(0.1);
  const { openModal } = useWhatsAppStore();

  return (
    <SiteLayout>
      {/* ═══ SUBPAGE HERO — Full-Bleed Corporate Green #1e3527 ═══ */}
      <section id="contabilidad-tributaria" className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#1e3527] pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-20 sm:pb-24">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent z-30" />

        {/* Decorative ambient mesh */}
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


        {/* Hero Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            {/* LEFT: Text and CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
                {/* Breadcrumb */}
                <div className="mb-4 sm:mb-5">
                  <Link href="/" className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#fa9b0c] text-[13px] sm:text-[14px] font-medium transition-colors">
                    Inicio <ChevronRight className="w-3.5 h-3.5 text-[#fa9b0c]" /> Outsourcing Contable
                  </Link>
                </div>

                {/* Badge */}
                <div className="mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
                    <Calculator className="w-3.5 h-3.5 text-[#fa9b0c]" />
                    Supervisión Técnica & Respaldo Jurídico
                  </span>
                </div>

                {/* H1 - Estudio Ugaz Editorial Serif */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="hero-h1 font-serif font-normal text-4xl sm:text-5xl lg:text-[58px] text-white leading-[1.12] tracking-tight mb-5 sm:mb-6"
                >
                  Outsourcing Contable & <span className="text-[#fa9b0c]">Tributario</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hero-subtitle mb-8 sm:mb-10 text-[16px] sm:text-[18px] lg:text-[19px] text-[#FAFBF9]/85 max-w-2xl leading-relaxed font-light"
                >
                  Gestión contable integral, liquidación mensual de impuestos, procesamiento de planillas PLAME y emisión de estados financieros con supervisión y respaldo legal permanente.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="hero-ctas mt-8 flex flex-col sm:flex-row gap-4"
                >
                  <button
                    onClick={() => openModal(11)}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Agendar una Consulta
                  </button>
                  <a
                    href="#ejes-contables"
                    className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all backdrop-blur-sm"
                  >
                    Ver Alcance del Servicio
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
                    "Libros y Declaraciones SUNAT",
                    "Planillas PLAME / T-Registro",
                    "Supervisión Legal Permanente",
                  ].map((badge) => (
                    <span key={badge} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#fa9b0c]" />
                      {badge}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT: Referential Card */}
            <div className="hidden lg:block lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 shadow-2xl shadow-black/30 group"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/images/hero/dr-roberto-marca-side.webp"
                    alt="Outsourcing Contable y Tributario - ROMA & ABOGADOS"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3527]/90 via-[#1e3527]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-left">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#fa9b0c] text-[#1e3527] text-xs font-bold uppercase tracking-wider mb-2">
                      Control Financiero & Tributario
                    </span>
                    <h3 className="text-white font-bold text-xl leading-snug">
                      Precisión Contable con Blindaje Legal
                    </h3>
                    <p className="text-white/80 text-xs mt-0.5">
                      Cumplimiento SUNAT, libros electrónicos y auditoría preventiva
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <ScrollDownIndicator />
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="py-12 bg-[#1e3527] border-t border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl sm:text-4xl font-normal text-[#fa9b0c] mb-1">{s.value}</p>
                <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STRATEGIC ALLIANCE CALLOUT ═══ */}
      <section className="py-16 bg-[#FAFBF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative group">
            <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-14 h-14 flex items-center justify-center text-[#fa9b0c] group-hover:scale-105 transition-all duration-300 shrink-0">
              <Handshake className="w-10 h-10" />
            </div>
            <div>
              <span className="inline-block text-[#fa9b0c] font-bold text-xs uppercase tracking-[0.2em] mb-2">
                Alianza Estratégica
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#2b4b38] mb-3">
                Convenios con Firmas Contables Especializadas
              </h3>
              <p className="text-[#42604e] text-[15px] leading-relaxed font-light">
                Para los servicios de Outsourcing Contable, <strong>ROMA & ABOGADOS</strong> cuenta con convenios de asociación con reconocidas firmas especializadas en contabilidad y auditoría. De esta manera, garantizamos una supervisión técnica con respaldo legal permanente, brindando a tu empresa un servicio integrado de contabilidad con blindaje jurídico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2 PILARES DEL OUTSOURCING ═══ */}
      <section id="ejes-contables" className="py-24 lg:py-32 bg-white border-t border-[#2b4b38]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
                Cobertura Integral
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
                Nuestros Pilares de Outsourcing
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#42604e] leading-relaxed">
                Dos frentes de acción coordinados para asegurar exactitud en los números y estricto cumplimiento ante SUNAT y el MTPE.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {contablePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal
                  key={pillar.title}
                  delay={0.1 * idx}
                  duration={0.6}
                  className="bg-[#FAFBF9] rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 overflow-hidden p-8 sm:p-10 relative group"
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
                      <p className="text-[#42604e] text-[15px] leading-relaxed mb-6 pl-0 sm:pl-16 font-light">
                        {pillar.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-4 border-t border-[#2b4b38]/10 sm:ml-16">
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
                        onClick={() => openModal(4)}
                        className="inline-flex items-center justify-center gap-2 bg-[#2b4b38] hover:bg-[#1e3527] text-white px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all shadow-sm hover:shadow-md"
                      >
                        Agendar una Consulta
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

      {/* ═══ VENTAJAS / BENEFICIOS ═══ */}
      <section className="py-24 lg:py-32 bg-[#FAFBF9] border-t border-[#2b4b38]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
              Por Qué Elegirnos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
              Beneficios de Nuestro Servicio Integrado
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <ScrollReveal
                key={i}
                delay={0.08 * i}
                duration={0.4}
                className="flex items-center gap-5 p-7 rounded-2xl bg-white border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-lg transition-all duration-300 group relative"
              >
                <div className="shrink-0 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#fa9b0c] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-[#2b4b38] font-medium text-[15px] sm:text-base leading-relaxed">
                  {b}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section id="propuesta-contable" className="py-24 lg:py-32 bg-[#1e3527] text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-sm">
            Gestión Financiera
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-white leading-[1.18] max-w-3xl mx-auto">
            ¿Listo para Ordenar la Contabilidad de tu Empresa?
          </h2>
          <p className="text-white/80 mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Solicita una evaluación personalizada de tu régimen tributario y una propuesta de outsourcing contable adaptada a tu volumen de operaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal(11)}
              className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" /> Agendar una Consulta
            </button>
            <Link
              href="/defensa-tributaria-sunat"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all backdrop-blur-sm"
            >
              ¿Fiscalizaciones SUNAT? Ver Defensa Tributaria
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
