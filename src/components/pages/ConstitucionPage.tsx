"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import {
  Building2, Shield, ArrowRight, ChevronRight, CheckCircle2,
  FileText, Scale, MessageCircle, HelpCircle, Landmark, Briefcase,
  FileSpreadsheet, Handshake
} from "lucide-react";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

/* ════════════════════════════════════════════════════════════════
   DERECHO EMPRESARIAL — 3 GRANDES PILARES DE PRÁCTICA
   ════════════════════════════════════════════════════════════════ */

const corporatePillars = [
  {
    icon: Building2,
    title: "1. Derecho Corporativo y Societario",
    badge: "Sociedades & Fusiones",
    description:
      "Acompañamiento en el ciclo de vida societario integral, desde la constitución hasta fusiones de alta complejidad.",
    items: [
      "Constitución de sociedades (SAC, SRL, EIRL) y sucursales extranjeras",
      "Modificación de estatutos, aumentos de capital y reorganizaciones societarias",
      "Due diligence legal y societario para compra y venta de empresas",
    ],
  },
  {
    icon: Scale,
    title: "2. Derecho Civil y Contratos Mercantiles",
    badge: "Contratos & Inmuebles",
    description:
      "Blindaje patrimonial en negociaciones comerciales, contratos de alto valor y protección contractual.",
    items: [
      "Elaboración y revisión de contratos comerciales, mercantiles y de fianza",
      "Saneamiento físico-legal de inmuebles y estudio de títulos",
      "Patrocinio en controversias civiles, comerciales y garantías hipotecarias",
    ],
  },
  {
    icon: Shield,
    title: "3. Gobierno Corporativo y Protocolos",
    badge: "Gobierno Corporativo",
    description:
      "Estructuración de órganos de administración, convenios parasociales y lineamientos de gobierno empresarial.",
    items: [
      "Acuerdos de socios, convenios parasociales y protocolos familiares",
      "Asesoría jurídica a directorios y juntas generales de accionistas",
      "Cumplimiento corporativo preventivo y prevención de conflictos internos",
    ],
  },
];

const entityTypes = [
  {
    type: "S.A.C.",
    name: "Sociedad Anónima Cerrada",
    recommended: "La más utilizada en el Perú (2 a 20 socios)",
    desc: "Ideal para emprendimientos, empresas familiares y pymes que buscan proteger su patrimonio con estructura ágil.",
  },
  {
    type: "E.I.R.L.",
    name: "Empresa Individual de Resp. Ltda.",
    recommended: "Para un solo titular",
    desc: "Permite separar el patrimonio personal del negocio sin necesidad de tener socios. Responsabilidad limitada.",
  },
  {
    type: "S.R.L.",
    name: "Sociedad Comercial de Resp. Ltda.",
    recommended: "Socios con vínculo estrecho (2 a 20)",
    desc: "El capital se divide en participaciones iguales, acumulables e indivisibles. No cotiza en bolsa.",
  },
  {
    type: "Sucursal Extranjera",
    name: "Filial o Sucursal en el Perú",
    recommended: "Para corporaciones internacionales",
    desc: "Establecimiento secundario mediante el cual una empresa no domiciliada desarrolla actividades en territorio nacional.",
  },
];

const faqs = [
  {
    q: "¿Qué documentos se requieren para constituir una empresa en el Perú?",
    a: "Para personas naturales se requiere DNI o carné de extranjería de los socios y sus cónyuges (si aplica), nombre elegido para la reserva preferencial ante SUNARP y definición del objeto social y capital aportado.",
  },
  {
    q: "¿Por qué es importante un convenio parasocial o acuerdo de socios?",
    a: "Permite regular derechos de adquisición preferente, mecanismos para resolver empates en votaciones y reglas claras de salida o sucesión antes de que se presenten discrepancias.",
  },
  {
    q: "¿Qué es un due diligence legal?",
    a: "Es una auditoría legal exhaustiva previa a la adquisición o fusión de una empresa, donde se evalúan pasivos ocultos, contingencias tributarias, laborales, societarias y contractuales para evitar riesgos financieros al comprador.",
  },
  {
    q: "¿Qué diferencia existe entre una SAC y una EIRL?",
    a: "La EIRL requiere un único dueño persona natural. La SAC requiere de 2 a 20 accionistas y permite emitir acciones, incorporar inversionistas a futuro y tener un directorio facultativo.",
  },
];

export function ConstitucionPage() {
  useScrollSlug();
  const { openModal } = useWhatsAppStore();

  return (
    <SiteLayout>
      {/* ═══ SUBPAGE HERO — Full-Bleed Corporate Green #1e3527 ═══ */}
      <section id="derecho-empresarial" className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#1e3527] pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-20 sm:pb-24">
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
                    Inicio <ChevronRight className="w-3.5 h-3.5 text-[#fa9b0c]" /> Derecho Empresarial
                  </Link>
                </div>

                {/* Badge */}
                <div className="mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
                    <Building2 className="w-3.5 h-3.5 text-[#fa9b0c]" />
                    Derecho Corporativo & Estructuración Societaria
                  </span>
                </div>

                {/* H1 - Estudio Ugaz Editorial Serif */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="hero-h1 font-serif font-normal text-4xl sm:text-5xl lg:text-[58px] text-white leading-[1.12] tracking-tight mb-5 sm:mb-6"
                >
                  Derecho Corporativo & <span className="text-[#fa9b0c]">Empresarial</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hero-subtitle mb-8 sm:mb-10 text-[16px] sm:text-[18px] lg:text-[19px] text-[#FAFBF9]/85 max-w-2xl leading-relaxed font-light"
                >
                  Constitución de sociedades (SAC, SRL, EIRL), estructuración societaria, contratos comerciales y gobierno corporativo integral.
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
                    href="#ejes-empresariales"
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
                    "SUNARP & Notaría",
                    "Gobierno Corporativo",
                    "Contratos Comerciales",
                  ].map((badge) => (
                    <span key={badge} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#fa9b0c]" />
                      {badge}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT: Referential Corporate Card */}
            <div className="hidden lg:block lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 shadow-2xl shadow-black/30 group"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/images/hero/dr-roberto-marca-hero.webp"
                    alt="Derecho Empresarial y Corporativo - ROMA & ABOGADOS"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3527]/90 via-[#1e3527]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-left">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#fa9b0c] text-[#1e3527] text-xs font-bold uppercase tracking-wider mb-2">
                      Área Corporativa & Mercantil
                    </span>
                    <h3 className="text-white font-bold text-xl leading-snug">
                      Seguridad y Visión Societaria
                    </h3>
                    <p className="text-white/80 text-xs mt-0.5">
                      Formalización, Reorganización & Blindaje Patrimonial
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <ScrollDownIndicator />
      </section>

      {/* ═══ 3 PILARES DEL DERECHO EMPRESARIAL ═══ */}
      <section id="ejes-empresariales" className="py-24 lg:py-32 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
                Especialización Corporativa
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
                Nuestras Áreas de Práctica Empresarial
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#42604e] leading-relaxed">
                Asesoría legal continua para empresas nacionales y extranjeras que operan o contratan en el Perú.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {corporatePillars.map((pillar, idx) => {
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
                        onClick={() => openModal(1)}
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

      {/* ═══ MODALIDADES SOCIETARIAS EN EL PERÚ ═══ */}
      <section className="py-24 lg:py-32 bg-white border-t border-[#2b4b38]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
              Vehículos Societarios
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
              Tipos de Empresas que Estructuramos
            </h2>
            <p className="mt-4 text-base text-[#42604e] leading-relaxed">
              Te orientamos en la elección del tipo societario más conveniente para tu modelo de negocio y régimen tributario.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {entityTypes.map((ent, i) => (
              <ScrollReveal
                key={ent.type}
                delay={0.08 * i}
                className="p-8 rounded-2xl bg-[#FAFBF9] border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <span className="font-serif text-3xl font-normal text-[#2b4b38] group-hover:text-[#fa9b0c] transition-colors block mb-1.5">{ent.type}</span>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#fa9b0c] bg-[#fa9b0c]/10 px-2.5 py-0.5 rounded-full inline-block mb-3">{ent.recommended}</p>
                  <h4 className="font-serif text-lg font-normal text-[#2b4b38] mb-2">{ent.name}</h4>
                  <p className="text-[#42604e] text-sm leading-relaxed mb-6 font-light">{ent.desc}</p>
                </div>
                <button
                  onClick={() => openModal(1)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2b4b38] hover:text-[#fa9b0c] transition-colors pt-4 border-t border-[#2b4b38]/10 w-full justify-between"
                >
                  <span>Constituir modalidad</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#fa9b0c] group-hover:translate-x-1 transition-transform" />
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQS ═══ */}
      <section className="py-24 lg:py-32 bg-[#FAFBF9] border-t border-[#2b4b38]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
              Dudas Habituales
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-lg transition-all duration-300 relative group"
              >
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="font-serif text-xl font-normal text-[#2b4b38] mb-2.5 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#fa9b0c] shrink-0 mt-1" />
                  {faq.q}
                </h3>
                <p className="text-[#42604e] text-sm sm:text-base leading-relaxed pl-8 font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section id="asesoria-corporativa" className="py-24 lg:py-32 bg-[#1e3527] text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-sm">
            Estructuración Corporativa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-white leading-[1.18] max-w-3xl mx-auto">
            Estructura y Protege tu Empresa con Especialistas
          </h2>
          <p className="text-white/80 mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Desde la formalización inicial hasta la negociación de grandes contratos mercantiles y licitaciones del Estado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal(14)}
              className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" /> Consultar por WhatsApp
            </button>
            <Link
              href="/nosotros-contacto"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all backdrop-blur-sm"
            >
              Conocer al Equipo Legal
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
