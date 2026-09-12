"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import {
  Briefcase, Shield, Gavel, MessageCircle, Clock, ArrowRight,
  ChevronRight, CheckCircle2, FileText, Scale, Zap, Globe,
  AlertTriangle, Users, HeartHandshake, FileCheck
} from "lucide-react";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

/* ════════════════════════════════════════════════════════════════
   DERECHO LABORAL — 5 EJES DE ESPECIALIZACIÓN
   ════════════════════════════════════════════════════════════════ */

const laborPillars = [
  {
    icon: FileText,
    title: "1. Consultoría Laboral Preventiva",
    badge: "Preventivo",
    description:
      "Estructuración sólida de la relación laboral para prevenir contingencias, demandas y sanciones administrativas.",
    items: [
      "Redacción y revisión de contratos de trabajo (indeterminado, sujetos a modalidad, tiempo parcial, teletrabajo)",
      "Elaboración de convenios de prácticas preprofesionales y profesionales",
      "Diseño e implementación de políticas internas, reglamentos internos de trabajo (RIT) y códigos de conducta",
      "Asesoría en regímenes laborales especiales (construcción civil, agrario, minero, exportación no tradicional)",
      "Consultoría en compensaciones, beneficios sociales, utilidades y remuneraciones integrales",
      "Asesoría en tercerización e intermediación laboral (auditoría de contratistas y proveedores)",
    ],
  },
  {
    icon: Shield,
    title: "2. Gestión de Riesgos y Compliance Laboral",
    badge: "Auditoría & SST",
    description:
      "Verificación exhaustiva del cumplimiento de la normativa laboral, de seguridad y de convivencia en el centro laboral.",
    items: [
      "Auditorías laborales integrales (compliance laboral preventivo)",
      "Asesoría en desvinculaciones laborales individuales y ceses colectivos (despidos justificados, mutuo disenso)",
      "Asesoría en Seguridad y Salud en el Trabajo (SST): comités paritarios, reglamentos, protocolos y fiscalizaciones",
      "Implementación de políticas y comités para la prevención y sanción del hostigamiento sexual laboral (Ley N° 27942)",
    ],
  },
  {
    icon: AlertTriangle,
    title: "3. Procedimientos ante SUNAFIL y MTPE",
    badge: "Defensa Inspectiva",
    description:
      "Defensa técnica inmediata ante fiscalizaciones de la Superintendencia Nacional de Fiscalización Laboral.",
    items: [
      "Asistencia y defensa técnica en comparecencias y actuaciones inspectivas de SUNAFIL",
      "Elaboración de descargos fundamentados frente a actas de infracción y resoluciones de multa",
      "Recursos de reconsideración, apelación y revisión ante el Tribunal de Fiscalización Laboral (TFL)",
      "Patrocinio en audiencias de conciliación laboral ante el Ministerio de Trabajo (MTPE)",
    ],
  },
  {
    icon: Gavel,
    title: "4. Litigios y Procesos Judiciales Laborales",
    badge: "Poder Judicial",
    description:
      "Patrocinio judicial estratégico bajo las reglas orales de la Nueva Ley Procesal del Trabajo (NLPT).",
    items: [
      "Patrocinio y defensa en procesos laborales ordinarios y abreviados (Ley N° 29497)",
      "Defensa frente a demandas por despido incausado, fraudulento o nulo, e indemnización por despido arbitrario",
      "Procesos por reclamo de beneficios sociales, horas extras e indemnización por daños y perjuicios laborales",
      "Negociación y resolución de conflictos colectivos de trabajo (arbitrajes y convenios colectivos)",
    ],
  },
  {
    icon: Globe,
    title: "5. Gestión Migratoria para Empresas",
    badge: "Extranjería",
    description:
      "Tramitación legal integral para la incorporación de talento y directivos extranjeros a tu planilla en el Perú.",
    items: [
      "Tramitación de visas de trabajo, calidades migratorias (trabajador residente, designado) y prórrogas ante MIGRACIONES",
      "Contratación de trabajadores extranjeros: aprobación de contratos ante el MTPE",
      "Cumplimiento y cálculo de porcentajes limitativos de personal y remuneraciones extranjeras",
    ],
  },
];

const urgentSituations = [
  {
    icon: AlertTriangle,
    title: "Inspección o Comparecencia de SUNAFIL",
    description: "Recibiste una orden de inspección o una citación a comparecencia. No asistir o no presentar la información requerida constituye una infracción muy grave con multas acumulativas.",
    urgency: "Atención urgente en < 24 horas.",
    serviceId: 8,
  },
  {
    icon: Gavel,
    title: "Demanda Laboral Notificada (NLPT)",
    description: "Tu empresa ha sido demandada por despido, indemnización o cobro de beneficios. Los plazos de contestación en la Nueva Ley Procesal son muy breves.",
    urgency: "Plazo de contestación perentorio.",
    serviceId: 8,
  },
  {
    icon: HeartHandshake,
    title: "Desvinculación Compleja o Cese de Personal",
    description: "Necesitas desvincular trabajadores o ejecutar un mutuo disenso sin riesgo de posteriores demandas por despido incausado o indemnizaciones accesorias.",
    urgency: "Blindaje contractual inmediato.",
    serviceId: 8,
  },
  {
    icon: FileCheck,
    title: "Implementación Obligatoria de Comité SST / Hostigamiento",
    description: "Cumplimiento obligatorio para empresas con más de 20 trabajadores. Evita sanciones severas de SUNAFIL implementando la documentación reglamentaria.",
    urgency: "Adecuación integral a la norma.",
    serviceId: 8,
  },
];

const whyUs = [
  { icon: Shield, text: "Enfoque 100% preventivo que blinda a tu empresa antes de que surja la contingencia." },
  { icon: Zap, text: "Respuesta inmediata para comparecencias ante inspectores de SUNAFIL en Lima y a nivel nacional." },
  { icon: Scale, text: "Dominio procesal de la Nueva Ley Procesal del Trabajo con alto porcentaje de resoluciones favorables." },
  { icon: CheckCircle2, text: "Equipo especializado liderado por abogados laboralistas de la PUCP con amplia experiencia corporativa." },
];

export function LaboralPage() {
  useScrollSlug();
  const { openModal } = useWhatsAppStore();

  return (
    <SiteLayout>
      {/* ═══ SUBPAGE HERO ═══ */}
      <section id="derecho-laboral" className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-[#2b4b38] pt-[120px] pb-16">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2b4b38] via-[#fa9b0c] to-[#2b4b38] z-30" />

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
          <div className="max-w-3xl flex flex-col justify-center text-left">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
              {/* Breadcrumb */}
              <Link href="/" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-[13px] transition-colors">
                Inicio <ChevronRight className="w-4 h-4" /> Derecho Laboral
              </Link>

              {/* Badge */}
              <div className="mt-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#fa9b0c] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  <Briefcase className="w-3.5 h-3.5" />
                  Asesoría Preventiva & Defensa ante SUNAFIL
                </span>
              </div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hero-h1 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mt-4"
              >
                Derecho Laboral y{" "}
                <span className="text-[#fa9b0c]">Compliance Empresarial</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-subtitle mt-5 text-[16px] sm:text-[18px] text-[#FAFBF9]/85 max-w-2xl leading-relaxed font-light"
              >
                Asesoría preventiva, compliance laboral, defensa técnica en inspecciones de SUNAFIL, patrocinio judicial en litigios laborales y gestión migratoria empresarial.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hero-ctas mt-8 flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => openModal(7)}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-7 py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consultar Abogado Laboralista
                </button>
                <a
                  href="#ejes-laborales"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm"
                >
                  Ver Áreas de Práctica
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
                  "Defensa Inmediata SUNAFIL",
                  "Compliance Laboral",
                  "Nueva Ley Procesal del Trabajo",
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

      {/* ═══ SECTION: 5 EJES DE ESPECIALIZACIÓN LABORAL ═══ */}
      <SectionDivider from="#2b4b38" to="#FAFBF9" />
      <section id="ejes-laborales" className="py-20 lg:py-28 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
                Cobertura Especializada
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b4b38]">
                Nuestros 5 Ejes de Práctica Laboral
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#42604e] leading-relaxed">
                Desde la prevención y contratación estratégica hasta la defensa litigiosa ante el Poder Judicial y autoridades administrativas.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {laborPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal
                  key={pillar.title}
                  delay={0.08 * idx}
                  duration={0.6}
                  className="bg-white rounded-2xl border border-[#E8E2D5] shadow-sm hover:shadow-md transition-all overflow-hidden p-7 sm:p-9"
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
                      <p className="text-[#42604e] text-[15px] leading-relaxed mb-5">
                        {pillar.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-[#E8E2D5]/70">
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
                        onClick={() => openModal(8)}
                        className="inline-flex items-center justify-center gap-2 bg-[#2b4b38] hover:bg-[#1e3527] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-md"
                      >
                        Consultar sobre este servicio
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

      {/* ═══ SECTION: CASOS CRÍTICOS Y SUNAFIL ═══ */}
      <SectionDivider from="#FAFBF9" to="#ffffff" />
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
                Urgencias Laborales
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2b4b38]">
                Atención Inmediata de Contingencias y SUNAFIL
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#42604e]">
                Intervenimos de manera oportuna para evitar multas de cientos de miles de soles o juicios laborales desfavorables.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {urgentSituations.map((sit, i) => {
              const Icon = sit.icon;
              return (
                <ScrollReveal
                  key={sit.title}
                  delay={0.1 * i}
                  className="bg-[#FAFBF9] rounded-2xl p-7 border border-[#E8E2D5] hover:border-[#fa9b0c]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#fa9b0c]/15 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#2b4b38]" />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#b45309] bg-[#fef3c7] px-3 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        {sit.urgency}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#2b4b38] mb-2">{sit.title}</h3>
                    <p className="text-[#42604e] text-sm leading-relaxed mb-6">{sit.description}</p>
                  </div>
                  <button
                    onClick={() => openModal(sit.serviceId)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2b4b38] hover:bg-[#1e3527] text-white px-5 py-3 rounded-xl text-sm font-bold transition-all shadow-sm"
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
      <SectionDivider from="#ffffff" to="#FAFBF9" />
      <section className="py-20 lg:py-28 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
              Garantía Profesional
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b4b38]">
              ¿Por Qué Confiar tu Gestión Laboral en ROMA & ABOGADOS?
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
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#E8E2D5] shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#fa9b0c]/15 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#2b4b38]" />
                  </div>
                  <span className="text-[#2b4b38] font-semibold text-base leading-relaxed mt-2.5">
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
      <section id="consulta-laboral" className="py-20 lg:py-28 bg-[#2b4b38] text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Protege a tu Empresa Frente a Conflictos Laborales
          </h2>
          <p className="text-white/80 mb-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Una auditoría laboral preventiva y contratos bien estructurados eliminan hasta un 95% de las contingencias con trabajadores y SUNAFIL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal(8)}
              className="inline-flex items-center justify-center gap-2 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" /> Consultar por WhatsApp
            </button>
            <Link
              href="/contabilidad-tributacion"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all backdrop-blur-sm"
            >
              Ver Outsourcing Contable y Planillas
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
