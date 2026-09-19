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

const urgentSituations = [
  {
    icon: AlertTriangle,
    title: "Inspección o Comparecencia SUNAFIL",
    description: "Citación inspectiva con plazo perentorio. Asistencia inmediata para evitar multas muy graves acumulativas.",
    urgency: "Atención urgente < 24 horas",
    serviceId: 8,
  },
  {
    icon: Gavel,
    title: "Demanda Laboral Notificada (NLPT)",
    description: "Notificación judicial laboral. Contestación técnica dentro de los plazos estrictos de la ley procesal.",
    urgency: "Plazo de contestación breve",
    serviceId: 8,
  },
  {
    icon: HeartHandshake,
    title: "Desvinculación Compleja de Personal",
    description: "Desvinculaciones estratégicas y mutuo disenso sin riesgo de posteriores demandas o contingencias.",
    urgency: "Blindaje contractual inmediato",
    serviceId: 8,
  },
  {
    icon: FileCheck,
    title: "Comité SST y Prevención Hostigamiento",
    description: "Implementación normativa obligatoria para empresas. Evita fiscalizaciones y sanciones severas.",
    urgency: "Adecuación integral a la norma",
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
      {/* ═══ SUBPAGE HERO — Full-Bleed Corporate Green #1e3527 ═══ */}
      <section id="derecho-laboral" className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#1e3527] pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-20 sm:pb-24">
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

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
                {/* Breadcrumb */}
                <div className="mb-4 sm:mb-5">
                  <Link href="/" className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#fa9b0c] text-[13px] sm:text-[14px] font-medium transition-colors">
                    Inicio <ChevronRight className="w-3.5 h-3.5 text-[#fa9b0c]" /> Derecho Laboral
                  </Link>
                </div>

                {/* Badge */}
                <div className="mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
                    <Briefcase className="w-3.5 h-3.5 text-[#fa9b0c]" />
                    Consultoría Laboral & Defensa Inspectiva SUNAFIL
                  </span>
                </div>

                {/* H1 - Estudio Ugaz Editorial Serif */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="hero-h1 font-serif font-normal text-4xl sm:text-5xl lg:text-[58px] text-white leading-[1.12] tracking-tight mb-5 sm:mb-6"
                >
                  Derecho Laboral & <span className="text-[#fa9b0c]">Defensa SUNAFIL</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hero-subtitle mb-8 sm:mb-10 text-[16px] sm:text-[18px] lg:text-[19px] text-[#FAFBF9]/85 max-w-2xl leading-relaxed font-light"
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
                    href="#ejes-laborales"
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
                    "Especialistas PUCP",
                    "Comparecencias SUNAFIL",
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
                    src="/images/team/alonso-silva.webp"
                    alt="Defensa Laboral y SUNAFIL - Alonso Silva ROMA & ABOGADOS"
                    className="w-full h-full object-cover object-[center_12%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3527]/90 via-[#1e3527]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-left">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#fa9b0c] text-[#1e3527] text-xs font-bold uppercase tracking-wider mb-2">
                      Área de Derecho Laboral
                    </span>
                    <h3 className="text-white font-bold text-xl leading-snug">
                      Alonso Silva
                    </h3>
                    <p className="text-white/80 text-xs mt-0.5">
                      Asociado • Inspecciones SUNAFIL & Litigios NLPT
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <ScrollDownIndicator />
      </section>

      {/* ═══ SECTION: 5 EJES DE ESPECIALIZACIÓN LABORAL ═══ */}
      <section id="ejes-laborales" className="py-24 lg:py-32 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
                Cobertura Legal Completa
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
                Nuestros 5 Ejes de Práctica Laboral
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#42604e] leading-relaxed">
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

      {/* ═══ SECTION: CASOS CRÍTICOS Y SUNAFIL ═══ */}
      <section className="py-24 lg:py-32 bg-white border-t border-[#2b4b38]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
                Urgencias Laborales
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
                Atención Inmediata de Contingencias y SUNAFIL
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#42604e] leading-relaxed">
                Intervenimos de manera oportuna para evitar multas de cientos de miles de soles o juicios laborales desfavorables.
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
              Garantía Profesional
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
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
      <section id="consulta-laboral" className="py-24 lg:py-32 bg-[#1e3527] text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-sm">
            Prevención y Protección
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-white leading-[1.18] max-w-3xl mx-auto">
            Protege a tu Empresa Frente a Conflictos Laborales
          </h2>
          <p className="text-white/80 mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Una auditoría laboral preventiva y contratos bien estructurados eliminan hasta un 95% de las contingencias con trabajadores y SUNAFIL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal(8)}
              className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" /> Consultar por WhatsApp
            </button>
            <Link
              href="/contabilidad-tributacion"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all backdrop-blur-sm"
            >
              Ver Outsourcing Contable y Planillas
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
