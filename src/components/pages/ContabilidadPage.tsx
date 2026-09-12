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
    badge: "Contabilidad & SIRE",
    description:
      "Teneduría ordenada y determinación oportuna de tributos para garantizar cero multas y cumplimiento tributario impecable.",
    items: [
      "Teneduría de libros y registros contables (físicos y electrónicos - SLE-PLE)",
      "Determinación y liquidación mensual de impuestos (IGV, Renta mensual, ITAN, etc.)",
      "Elaboración y presentación de declaraciones juradas mensuales y anuales ante SUNAT",
      "Elaboración de estados financieros periódicos y de cierre anual bajo normas NIIF",
      "Análisis de cuentas, conciliaciones bancarias y control patrimonial de activos",
      "Implementación, validación y gestión del Sistema Integrado de Registros Electrónicos (SIRE)",
    ],
  },
  {
    icon: Users,
    title: "2. Gestión de Planillas y Obligaciones Laborales",
    badge: "Planillas & PLAME",
    description:
      "Liquidación exacta de nóminas y cumplimiento riguroso de aportes y contribuciones de seguridad social.",
    items: [
      "Elaboración y procesamiento de planillas de sueldos y salarios (frecuencia quincenal y mensual)",
      "Cálculo de beneficios sociales: gratificaciones, CTS, vacaciones, utilidades y liquidaciones de cese",
      "Declaración y pago del PLAME / T-Registro (Planilla Mensual de Pagos SUNAT)",
      "Declaración y pago de contribuciones y aportes sociales: ESSALUD, ONP, AFP (declaración vía AFPnet), Senati y SCTR",
      "Emisión de boletas de pago electrónicas y certificados de retención de rentas de quinta categoría",
    ],
  },
];

const stats = [
  { value: "500+", label: "Declaraciones Presentadas a Tiempo" },
  { value: "100%", label: "Cumplimiento SIRE de SUNAT" },
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
      {/* ═══ SUBPAGE HERO ═══ */}
      <section id="outsourcing-contable" className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-[#2b4b38] pt-[120px] pb-16">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2b4b38] via-[#fa9b0c] to-[#2b4b38] z-30" />

        {/* Ambient mesh */}
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
          <div className="max-w-3xl flex flex-col justify-center text-left">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
              {/* Breadcrumb */}
              <Link href="/" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-[13px] transition-colors">
                Inicio <ChevronRight className="w-4 h-4" /> Outsourcing Contable
              </Link>

              {/* Badge */}
              <div className="mt-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#fa9b0c] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  <Calculator className="w-3.5 h-3.5" />
                  Contabilidad Integral & Planillas con Respaldo Legal
                </span>
              </div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hero-h1 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mt-4"
              >
                Outsourcing Contable y{" "}
                <span className="text-[#fa9b0c]">Tributación Integral</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-subtitle mt-5 text-[16px] sm:text-[18px] text-[#FAFBF9]/85 max-w-2xl leading-relaxed font-light"
              >
                Teneduría de libros, liquidación mensual de impuestos, implementación SIRE, procesamiento de planillas PLAME y emisión de estados financieros con supervisión legal permanente.
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
                  className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-7 py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Cotizar Outsourcing Contable
                </button>
                <a
                  href="#ejes-contables"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm"
                >
                  Ver Alcance de Servicios
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
                  "Implementación SIRE",
                  "Planillas PLAME / T-Registro",
                  "Blindaje Jurídico Permanente",
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

        <ScrollDownIndicator />
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="py-12 bg-[#2b4b38] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl font-bold text-[#fa9b0c] mb-1">{s.value}</p>
                <p className="text-white/80 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STRATEGIC ALLIANCE CALLOUT ═══ */}
      <section className="py-14 bg-[#FAFBF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-7 sm:p-9 rounded-2xl bg-white border border-[#fa9b0c]/30 shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#fa9b0c]/15 flex items-center justify-center shrink-0">
              <Handshake className="w-8 h-8 text-[#2b4b38]" />
            </div>
            <div>
              <span className="inline-block text-[#fa9b0c] font-bold text-xs uppercase tracking-wider mb-2">
                Alianza Estratégica
              </span>
              <h3 className="text-xl font-bold text-[#2b4b38] mb-2">
                Convenios con Firmas Contables Especializadas
              </h3>
              <p className="text-[#42604e] text-[15px] leading-relaxed">
                Para los servicios de Outsourcing Contable, <strong>ROMA & ABOGADOS</strong> cuenta con convenios de asociación con reconocidas firmas especializadas en contabilidad y auditoría. De esta manera, garantizamos una supervisión técnica con respaldo legal permanente, brindando a tu empresa un servicio integrado de contabilidad con blindaje jurídico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2 PILARES DEL OUTSOURCING ═══ */}
      <SectionDivider from="#FAFBF9" to="#ffffff" />
      <section id="ejes-contables" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
                Cobertura Integral
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b4b38]">
                Nuestros Pilares de Outsourcing
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#42604e] leading-relaxed">
                Dos frentes de acción coordinados para asegurar exactitud en los números y estricto cumplimiento ante SUNAT y el MTPE.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-10">
            {contablePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal
                  key={pillar.title}
                  delay={0.1 * idx}
                  duration={0.6}
                  className="bg-[#FAFBF9] rounded-2xl border border-[#E8E2D5] shadow-sm hover:shadow-md transition-all overflow-hidden p-8 sm:p-10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-[#2b4b38]/10 flex items-center justify-center text-[#2b4b38]">
                          <Icon className="w-6 h-6" />
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
                      <p className="text-[#42604e] text-[15px] leading-relaxed mb-6">
                        {pillar.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-4 border-t border-[#E8E2D5]">
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

                    <div className="shrink-0 flex flex-col justify-center">
                      <button
                        onClick={() => openModal(4)}
                        className="inline-flex items-center justify-center gap-2 bg-[#2b4b38] hover:bg-[#1e3527] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-md"
                      >
                        Solicitar propuesta
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
      <SectionDivider from="#ffffff" to="#FAFBF9" />
      <section className="py-20 lg:py-28 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
              Por Qué Elegirnos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b4b38]">
              Beneficios de Nuestro Servicio Integrado
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <ScrollReveal
                key={i}
                delay={0.08 * i}
                duration={0.4}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#E8E2D5] shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#fa9b0c]/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#2b4b38]" />
                </div>
                <span className="text-[#2b4b38] font-semibold text-[15px] leading-relaxed mt-1">
                  {b}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <SectionDivider from="#FAFBF9" to="#2b4b38" />
      <section id="propuesta-contable" className="py-20 lg:py-28 bg-[#2b4b38] text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para Ordenar la Contabilidad de tu Empresa?
          </h2>
          <p className="text-white/80 mb-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Solicita una evaluación personalizada de tu régimen tributario y una propuesta de outsourcing contable adaptada a tu volumen de operaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal(11)}
              className="inline-flex items-center justify-center gap-2 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" /> Cotización por WhatsApp
            </button>
            <Link
              href="/defensa-tributaria-sunat"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all backdrop-blur-sm"
            >
              ¿Fiscalizaciones SUNAT? Ver Defensa Tributaria
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
