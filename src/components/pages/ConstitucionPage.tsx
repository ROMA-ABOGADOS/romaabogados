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
    badge: "Sociedades & Gobierno",
    description:
      "Acompañamos el ciclo de vida societario integral de tu empresa, desde la constitución hasta reorganizaciones de alta envergadura.",
    items: [
      "Constitución de sociedades (S.A., S.A.C., S.R.L., S.A.A., E.I.R.L.) y sucursales de empresas extranjeras",
      "Elaboración y modificación integral de estatutos sociales, aumentos y reducciones de capital",
      "Reorganizaciones societarias complejas: fusiones, escisiones, transformaciones y reorganizaciones simples",
      "Asesoría a directorios y juntas generales de accionistas (actas, convocatorias y acuerdos societarios)",
      "Due diligence legal y societario en procesos de compra, venta o absorción de empresas",
      "Acuerdos de accionistas (convenios parasociales), protocolos familiares y gobierno corporativo",
      "Disolución, liquidación y extinción formal de sociedades",
    ],
  },
  {
    icon: Scale,
    title: "2. Derecho Civil y Contratos Mercantiles",
    badge: "Contratos & Inmuebles",
    description:
      "Blindaje patrimonial en negociaciones comerciales, transferencias patrimoniales y litigios de naturaleza civil.",
    items: [
      "Elaboración y revisión de contratos civiles y mercantiles (arrendamiento, compraventa, mutuo, fianza, garantías mobiliarias e hipotecas)",
      "Saneamiento físico-legal de inmuebles, transferencias inmobiliarias, habilitaciones urbanas y estudios de títulos",
      "Patrocinio en litigios civiles: desalojos, cobro de deudas comerciales, resolución y rescisión de contratos",
      "Indemnización por daños y perjuicios (responsabilidad civil contractual y extracontractual)",
      "Procesos no contenciosos: prescripción adquisitiva de dominio, rectificación de áreas y sucesión intestada",
      "Ejecución de garantías hipotecarias y mobiliarias ante el Poder Judicial",
    ],
  },
  {
    icon: Landmark,
    title: "3. Derecho Administrativo y Contrataciones con el Estado",
    badge: "OSCE & Reguladores",
    description:
      "Asesoría regulatoria frente a entidades estatales y patrocinio experto en procesos de licitación pública ante el OSCE.",
    items: [
      "Procedimientos administrativos sancionadores ante organismos reguladores (INDECOPI, OSIPTEL, OSINERGMIN, OEFA, SUNASS)",
      "Obtención de licencias de funcionamiento, autorizaciones sectoriales y permisos municipales",
      "Inscripción y actualización en el Registro Nacional de Proveedores (RNP - OSCE)",
      "Elaboración de propuestas técnicas, consultas y observaciones a bases de licitaciones públicas y concursos",
      "Recursos de apelación ante el Tribunal de Contrataciones del Estado (OSCE)",
      "Solución de controversias derivadas de contratos estatales: conciliaciones y arbitrajes con el Estado",
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
    q: "¿En qué consiste la inscripción en el RNP del OSCE?",
    a: "El Registro Nacional de Proveedores (RNP) es administrado por el OSCE y es un requisito indispensable para que cualquier empresa pueda contratar con el Estado peruano en bienes, servicios, consultorías u obras.",
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
      {/* ═══ SUBPAGE HERO ═══ */}
      <section id="derecho-empresarial" className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-[#2b4b38] pt-[120px] pb-16">
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

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl flex flex-col justify-center text-left">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
              {/* Breadcrumb */}
              <Link href="/" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-[13px] transition-colors">
                Inicio <ChevronRight className="w-4 h-4" /> Derecho Empresarial
              </Link>

              {/* Badge */}
              <div className="mt-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#fa9b0c] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  <Building2 className="w-3.5 h-3.5" />
                  Derecho Corporativo, Civil & Contrataciones OSCE
                </span>
              </div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hero-h1 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mt-4"
              >
                Derecho Empresarial y{" "}
                <span className="text-[#fa9b0c]">Corporativo</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-subtitle mt-5 text-[16px] sm:text-[18px] text-[#FAFBF9]/85 max-w-2xl leading-relaxed font-light"
              >
                Constitución de sociedades, reorganizaciones societarias, contratos mercantiles, derecho administrativo y licitaciones públicas con el Estado bajo la Ley de Contrataciones.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hero-ctas mt-8 flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => openModal(14)}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-7 py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Asesoría Empresarial Inmediata
                </button>
                <a
                  href="#ejes-empresariales"
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
                  "SUNARP & Notaría",
                  "Licitaciones OSCE / RNP",
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
        </div>

        <ScrollDownIndicator />
      </section>

      {/* ═══ 3 PILARES DEL DERECHO EMPRESARIAL ═══ */}
      <SectionDivider from="#2b4b38" to="#FAFBF9" />
      <section id="ejes-empresariales" className="py-20 lg:py-28 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
                Especialización Corporativa
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b4b38]">
                Nuestras Áreas de Práctica Empresarial
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#42604e] leading-relaxed">
                Asesoría legal continua para empresas nacionales y extranjeras que operan o contratan en el Perú.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-10">
            {corporatePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal
                  key={pillar.title}
                  delay={0.08 * idx}
                  duration={0.6}
                  className="bg-white rounded-2xl border border-[#E8E2D5] shadow-sm hover:shadow-md transition-all overflow-hidden p-8 sm:p-10"
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-4 border-t border-[#E8E2D5]/70">
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
                        onClick={() => openModal(1)}
                        className="inline-flex items-center justify-center gap-2 bg-[#2b4b38] hover:bg-[#1e3527] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-md"
                      >
                        Consultar este servicio
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
      <SectionDivider from="#FAFBF9" to="#ffffff" />
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
              Vehículos Societarios
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b4b38]">
              Tipos de Empresas que Estructuramos
            </h2>
            <p className="mt-3 text-base text-[#42604e]">
              Te orientamos en la elección del tipo societario más conveniente para tu modelo de negocio y régimen tributario.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {entityTypes.map((ent, i) => (
              <ScrollReveal
                key={ent.type}
                delay={0.08 * i}
                className="p-7 rounded-2xl bg-[#FAFBF9] border border-[#E8E2D5] hover:border-[#fa9b0c]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-bold text-[#2b4b38] block mb-1">{ent.type}</span>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#fa9b0c] mb-3">{ent.recommended}</p>
                  <h4 className="font-bold text-[#2b4b38] text-base mb-2">{ent.name}</h4>
                  <p className="text-[#42604e] text-sm leading-relaxed mb-6">{ent.desc}</p>
                </div>
                <button
                  onClick={() => openModal(1)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2b4b38] hover:text-[#fa9b0c] transition-colors"
                >
                  Constituir esta modalidad →
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQS ═══ */}
      <SectionDivider from="#ffffff" to="#FAFBF9" />
      <section className="py-20 lg:py-28 bg-[#FAFBF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
              Dudas Habituales
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b4b38]">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E8E2D5] shadow-sm"
              >
                <h3 className="font-bold text-[#2b4b38] text-lg mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#fa9b0c] shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-[#42604e] text-sm sm:text-base leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <SectionDivider from="#FAFBF9" to="#2b4b38" />
      <section id="asesoria-corporativa" className="py-20 lg:py-28 bg-[#2b4b38] text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Estructura y Protege tu Empresa con Especialistas
          </h2>
          <p className="text-white/80 mb-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Desde la formalización inicial hasta la negociación de grandes contratos mercantiles y licitaciones del Estado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal(14)}
              className="inline-flex items-center justify-center gap-2 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" /> Consultar por WhatsApp
            </button>
            <Link
              href="/nosotros-contacto"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all backdrop-blur-sm"
            >
              Conocer al Equipo Legal
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
