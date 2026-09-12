"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import {
  Shield, CheckCircle2, Award, ChevronRight, MessageCircle, ArrowRight,
  Send, Phone, Mail, MapPin, Scale, Briefcase, Calculator, Building2,
  Users, Star, BookOpen, Zap
} from "lucide-react";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

/* ════════════════════════════════════════════════════════════════
   EQUIPO LEGAL Y CONSULTORES — ROMA & ABOGADOS
   ════════════════════════════════════════════════════════════════ */

interface TeamMember {
  name: string;
  role: string;
  area: string;
  education: string;
  experience: string;
  highlights: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Roberto Marca",
    role: "Socio Principal",
    area: "Derecho Tributario & Dirección General",
    education: "Abogado por la Pontificia Universidad Católica del Perú (PUCP). Especialista en Derecho Tributario por la Universidad de Lima.",
    experience: "Exintegrante del Tribunal Fiscal y de la SUNAT. Más de 12 años liderando asesorías fiscales de alta complejidad.",
    highlights: [
      "Pontificia Universidad Católica del Perú (PUCP)",
      "Exfuncionario del Tribunal Fiscal y SUNAT",
      "+12 Años de trayectoria tributaria y fiscal",
    ],
  },
  {
    name: "Estefanía Pineda",
    role: "Asociada Senior",
    area: "Derecho Tributario & Litigio Fiscal",
    education: "Abogada especialista en litigio tributario. Maestría en Tributación y Política Fiscal.",
    experience: "Extensa trayectoria en defensa ante fiscalizaciones SUNAT, recursos contenciosos ante el Tribunal Fiscal y demandas judiciales.",
    highlights: [
      "Maestría en Tributación y Política Fiscal",
      "Especialista en Reclamaciones y Apelaciones TF",
      "Defensa en Fiscalizaciones Complejas",
    ],
  },
  {
    name: "David Corthorn",
    role: "Asociado",
    area: "Derecho Laboral & Relaciones Laborales",
    education: "Abogado especialista en relaciones laborales individuales y colectivas.",
    experience: "Experto en inspecciones ante SUNAFIL, auditorías de compliance laboral, comités SST y litigios laborales orales bajo la NLPT.",
    highlights: [
      "Especialista en Inspecciones SUNAFIL",
      "Auditorías de Compliance Laboral y SST",
      "Patrocinio en la Nueva Ley Procesal del Trabajo",
    ],
  },
  {
    name: "Alonso Silva",
    role: "Asociado",
    area: "Derecho Corporativo & Societario",
    education: "Abogado corporativo con especialización en derecho mercantil.",
    experience: "Amplia experiencia en constitución de empresas, fusiones, adquisiciones, reorganizaciones societarias y gobierno corporativo.",
    highlights: [
      "Constitución y Reorganización de Sociedades",
      "Due Diligence Legal y Compra-Venta de Empresas",
      "Contratos Mercantiles y Convenios Parasociales",
    ],
  },
  {
    name: "Richard Agapito",
    role: "Consultor Senior",
    area: "Contrataciones con el Estado & Derecho Administrativo",
    education: "Especialista en Contrataciones Públicas y Gestión Estatal.",
    experience: "Asesor en licitaciones del Estado (OSCE/RNP), absolución de consultas, apelaciones ante el Tribunal del OSCE y arbitrajes estatales.",
    highlights: [
      "Especialista RNP y Tribunal del OSCE",
      "Licitaciones Públicas y Adjudicaciones",
      "Procedimientos ante INDECOPI y Reguladores",
    ],
  },
  {
    name: "Rafael Huaranga",
    role: "Consultor Senior",
    area: "Contabilidad & Auditoría Tributaria",
    education: "Contador Público Colegiado con postgrado en Auditoría Tributaria y NIIF.",
    experience: "Lidera la supervisión técnica de los servicios de outsourcing contable, implementación del SIRE y planeamiento fiscal.",
    highlights: [
      "Contador Público Colegiado (CPC)",
      "Especialista en Normas NIIF y Sistema SIRE",
      "Auditoría Contable y Liquidación de Planillas",
    ],
  },
  {
    name: "Willian Balvin Guevara",
    role: "Abogado Consultor",
    area: "Derecho Civil & Litigios Comerciales",
    education: "Abogado litigante con especialidad en derecho civil patrimonial.",
    experience: "Especialista en contratos comerciales, saneamiento inmobiliario, desalojos y litigios ante las Cortes Superiores de Justicia.",
    highlights: [
      "Litigios Civiles y Comerciales",
      "Saneamiento Inmobiliario y Estudio de Títulos",
      "Garantías Hipotecarias y Mobiliarias",
    ],
  },
];

const firmValues = [
  {
    icon: Award,
    title: "Excelencia",
    desc: "Máximo estándar de calidad y rigurosidad técnica en cada informe, recurso contencioso o asesoría corporativa.",
  },
  {
    icon: Scale,
    title: "Integridad",
    desc: "Actuamos con transparencia, ética inquebrantable y confidencialidad absoluta en todos los asuntos encomendados.",
  },
  {
    icon: Shield,
    title: "Compromiso",
    desc: "Asumimos los objetivos de nuestros clientes como propios, blindando sus intereses con tenacidad jurídica.",
  },
  {
    icon: Zap,
    title: "Innovación",
    desc: "Soluciones jurídicas modernas, eficientes y adaptadas a un entorno empresarial y tributario dinámico.",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    desc: "Enfoque multidisciplinario que integra abogados y contadores para abordar contingencias complejas con éxito.",
  },
];

const testimonials = [
  {
    name: "Isaac Picon",
    role: "Gerente General, Constructora & Inmobiliaria IP S.A.C.",
    text: "Roma Abogados logró anular una resolución de determinación de SUNAT por más de S/ 450,000 en el Tribunal Fiscal. Su rigor técnico y claridad estratégica marcaron la diferencia. Son el respaldo legal de confianza para nuestra empresa.",
  },
  {
    name: "Dalton Vilchez",
    role: "Director Ejecutivo, Corporación Logística del Centro",
    text: "Teníamos una fiscalización laboral de SUNAFIL con riesgo de multas millonarias. El equipo de Roma Abogados asumió la defensa de forma inmediata y logró archivar el proceso. Su rapidez y conocimiento del procedimiento fueron impecables.",
  },
  {
    name: "Juan Reyna",
    role: "Gerente de Operaciones, Retail & Distribución Reyna S.A.C.",
    text: "Contratamos el servicio integrado de Outsourcing Contable y asesoría tributaria permanente. Desde entonces, nuestras declaraciones están impecables, implementamos el SIRE sin contratiempos y tenemos la tranquilidad de contar con blindaje jurídico ante cualquier duda.",
  },
];

export function NosotrosPage() {
  useScrollSlug();
  const { openModal } = useWhatsAppStore();
  const [formData, setFormData] = useState({ name: "", email: "", service: "General", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Hola *ROMA & ABOGADOS*.\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nServicio de interés: ${formData.service}\nMensaje: ${formData.message}`;
    const url = `https://api.whatsapp.com/send?phone=51943366950&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <SiteLayout>
      {/* ═══ HERO SECTION — 100% Full Bleed Verde Corporativo ═══ */}
      <section id="quienes-somos" className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#2b4b38] pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-20 sm:pb-24">
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
              <div className="mb-4 sm:mb-5">
                <Link href="/" className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#fa9b0c] text-[13px] sm:text-[14px] font-medium transition-colors">
                  Inicio <ChevronRight className="w-3.5 h-3.5 text-[#fa9b0c]" /> Quiénes Somos
                </Link>
              </div>

              {/* Badge */}
              <div className="mb-4 sm:mb-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[#fa9b0c] text-xs sm:text-[13px] font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">
                  <Shield className="w-4 h-4 text-[#fa9b0c]" />
                  Firma Jurídica y Empresarial en el Perú
                </span>
              </div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hero-h1 text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.2] tracking-tight mb-5 sm:mb-6"
              >
                ROMA & <span className="text-[#fa9b0c]">ABOGADOS</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-subtitle mb-8 sm:mb-10 text-[16px] sm:text-[18px] text-[#FAFBF9]/85 max-w-2xl leading-relaxed font-light"
              >
                Somos una firma de profesionales especializada en asesoría tributaria, laboral y empresarial. Te brindamos soluciones jurídicas eficientes y estratégicas para proteger y potenciar tu negocio.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hero-ctas mt-8 flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => openModal(null)}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-7 py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar con la Firma
                </button>
                <a
                  href="#equipo-legal"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm"
                >
                  Conocer a Nuestros Especialistas
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
                  "Liderazgo PUCP",
                  "Ex Tribunal Fiscal & SUNAT",
                  "Ética y Confidencialidad",
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

      {/* ═══ MISIÓN, VISIÓN Y VALORES ═══ */}
      <SectionDivider from="#2b4b38" to="#FAFBF9" />
      <section className="py-20 lg:py-28 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Misión */}
            <ScrollReveal className="bg-white p-8 sm:p-10 rounded-3xl shadow-[0_10px_35px_-5px_rgba(43,75,56,0.07)] hover:shadow-[0_20px_45px_-5px_rgba(43,75,56,0.13)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2b4b38] via-[#fa9b0c] to-[#2b4b38]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#fa9b0c] bg-[#fa9b0c]/10 px-3.5 py-1 rounded-full mb-5 inline-block">
                Propósito
              </span>
              <h3 className="text-2xl font-bold text-[#2b4b38] mb-4">Nuestra Misión</h3>
              <p className="text-[#42604e] text-base leading-relaxed">
                Brindar asesoría jurídica y empresarial de la más alta calidad, con soluciones estratégicas, innovadoras y personalizadas que protejan los intereses de nuestros clientes y promuevan su crecimiento sostenible.
              </p>
            </ScrollReveal>

            {/* Visión */}
            <ScrollReveal delay={0.15} className="bg-white p-8 sm:p-10 rounded-3xl shadow-[0_10px_35px_-5px_rgba(43,75,56,0.07)] hover:shadow-[0_20px_45px_-5px_rgba(43,75,56,0.13)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#fa9b0c] via-[#2b4b38] to-[#fa9b0c]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#fa9b0c] bg-[#fa9b0c]/10 px-3.5 py-1 rounded-full mb-5 inline-block">
                Aspiración
              </span>
              <h3 className="text-2xl font-bold text-[#2b4b38] mb-4">Nuestra Visión</h3>
              <p className="text-[#42604e] text-base leading-relaxed">
                Ser reconocidos como el estudio jurídico líder en asesoría tributaria, laboral y empresarial en el Perú, destacando por nuestra excelencia profesional, ética y compromiso con el éxito de nuestros clientes.
              </p>
            </ScrollReveal>
          </div>

          {/* Valores */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
              Principios Rectores
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b4b38]">
              Nuestros Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {firmValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal
                  key={v.title}
                  delay={0.08 * i}
                  className="bg-white p-8 sm:p-9 rounded-3xl shadow-[0_4px_25px_-4px_rgba(43,75,56,0.06)] hover:shadow-[0_20px_45px_-6px_rgba(43,75,56,0.13)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
                >
                  {/* Subtle top brand gold accent line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-[#fa9b0c] to-[#eda340] rounded-full mb-6 group-hover:w-20 transition-all duration-300" />

                  {/* Clean iconic center symbol without clumsy box */}
                  <div className="mb-4 text-[#fa9b0c] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Icon className="w-10 h-10" strokeWidth={1.8} />
                  </div>

                  <h4 className="font-bold text-[#2b4b38] text-xl mb-2.5 group-hover:text-[#fa9b0c] transition-colors">
                    {v.title}
                  </h4>
                  <p className="text-[#42604e] text-[15px] leading-relaxed">
                    {v.desc}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ EQUIPO LEGAL & CONSULTORES ═══ */}
      <SectionDivider from="#FAFBF9" to="#ffffff" />
      <section id="equipo-legal" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
                Profesionales de Alto Nivel
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b4b38]">
                Nuestro Equipo Legal y Consultores
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#42604e] leading-relaxed">
                Abogados y consultores con destacada trayectoria académica, experiencia previa en entidades del Estado y visión empresarial práctica.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <ScrollReveal
                key={member.name}
                delay={0.08 * idx}
                className="bg-white p-8 sm:p-9 rounded-3xl shadow-[0_10px_35px_-5px_rgba(43,75,56,0.07)] hover:shadow-[0_22px_48px_-6px_rgba(43,75,56,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2b4b38] to-[#fa9b0c]" />
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#fa9b0c] bg-[#fa9b0c]/10 px-3.5 py-1 rounded-full">
                        {member.role}
                      </span>
                      <h3 className="text-2xl font-bold text-[#2b4b38] mt-2.5">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-[#42604e] mt-0.5">
                        {member.area}
                      </p>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-[#2b4b38]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2b4b38] transition-colors duration-300">
                      <Scale className="w-7 h-7 text-[#2b4b38] group-hover:text-[#fa9b0c] transition-colors duration-300" />
                    </div>
                  </div>

                  <p className="text-xs font-bold text-[#2b4b38] uppercase tracking-wide mb-1.5">Formación y Trayectoria</p>
                  <p className="text-sm text-[#42604e] leading-relaxed mb-3">{member.education}</p>
                  <p className="text-sm text-[#42604e] leading-relaxed mb-6">{member.experience}</p>

                  <div className="pt-4 border-t border-[#2b4b38]/10 space-y-2.5">
                    {member.highlights.map((hl) => (
                      <div key={hl} className="flex items-center gap-2.5 text-xs font-semibold text-[#2b4b38]">
                        <CheckCircle2 className="w-4 h-4 text-[#fa9b0c] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#2b4b38]/10">
                  <button
                    onClick={() => openModal(null)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2b4b38] hover:bg-[#1e3527] text-white py-3.5 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                  >
                    Agendar reunión con {member.name.split(" ")[0]}
                    <ArrowRight className="w-4 h-4 text-[#fa9b0c]" />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIOS ═══ */}
      <SectionDivider from="#ffffff" to="#FAFBF9" />
      <section className="py-20 lg:py-28 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
              Casos Reales
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b4b38]">
              Testimonios de Clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal
                key={t.name}
                delay={0.1 * i}
                className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_-4px_rgba(43,75,56,0.06)] hover:shadow-[0_20px_40px_-5px_rgba(43,75,56,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#fa9b0c] text-[#fa9b0c]" />
                    ))}
                  </div>
                  <p className="text-[#1e3527] text-sm leading-relaxed italic mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-[#2b4b38]/10">
                  <h4 className="font-bold text-[#2b4b38] text-base">{t.name}</h4>
                  <p className="text-xs text-[#42604e] mt-0.5 font-medium">{t.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORMULARIO DE CONTACTO DIRECTO ═══ */}
      <SectionDivider from="#FAFBF9" to="#ffffff" />
      <section id="contacto-directo" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
                Canales de Atención
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2b4b38] leading-tight mb-5">
                Conversemos Sobre las Necesidades de tu Empresa
              </h2>
              <p className="text-[#42604e] text-base sm:text-lg leading-relaxed mb-8">
                Envíanos tu consulta legal, tributaria o contable. Evaluamos tu situación y te brindamos una propuesta estratégica adaptada a tus objetivos.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fa9b0c]/15 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#2b4b38]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#42604e] font-medium">WhatsApp / Teléfono</p>
                    <a
                      href="tel:+51943366950"
                      className="text-base font-bold text-[#2b4b38] hover:text-[#fa9b0c] transition-colors inline-block"
                      title="Llamar a ROMA & ABOGADOS"
                    >
                      +51 943 366 950
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fa9b0c]/15 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#2b4b38]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#42604e] font-medium">Correo Electrónico</p>
                    <a
                      href="mailto:contacto@romaabogados.pe"
                      className="text-base font-bold text-[#2b4b38] hover:text-[#fa9b0c] transition-colors inline-block"
                      title="Enviar correo a ROMA & ABOGADOS"
                    >
                      contacto@romaabogados.pe
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fa9b0c]/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#2b4b38]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#42604e] font-medium">Ubicación</p>
                    <p className="text-base font-bold text-[#2b4b38]">Lima, Perú (Atención a Nivel Nacional)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white shadow-[0_12px_40px_-5px_rgba(43,75,56,0.08)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2b4b38] via-[#fa9b0c] to-[#2b4b38] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#2b4b38] mb-6">Envíanos un Mensaje Directo</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2b4b38] mb-1.5">
                    Nombre o Empresa *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez - Constructora SAC"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#2b4b38]/15 bg-[#FAFBF9] text-[#2b4b38] text-sm focus:outline-none focus:bg-white focus:border-[#fa9b0c] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2b4b38] mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contacto@tuempresa.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#2b4b38]/15 bg-[#FAFBF9] text-[#2b4b38] text-sm focus:outline-none focus:bg-white focus:border-[#fa9b0c] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2b4b38] mb-1.5">
                    Área de Interés *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#2b4b38]/15 bg-[#FAFBF9] text-[#2b4b38] text-sm focus:outline-none focus:bg-white focus:border-[#fa9b0c] transition-all"
                  >
                    <option value="Derecho Tributario">Derecho Tributario & Fiscalizaciones SUNAT</option>
                    <option value="Derecho Laboral">Derecho Laboral & Inspecciones SUNAFIL</option>
                    <option value="Outsourcing Contable">Outsourcing Contable, SIRE & Planillas</option>
                    <option value="Derecho Empresarial">Derecho Empresarial & Contrataciones OSCE</option>
                    <option value="General">Consulta General / Reunión con Socio Principal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2b4b38] mb-1.5">
                    Detalle de tu Consulta *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe brevemente tu caso, requerimiento o consulta..."
                    className="w-full px-4 py-3.5 rounded-xl border border-[#2b4b38]/15 bg-[#FAFBF9] text-[#2b4b38] text-sm focus:outline-none focus:bg-white focus:border-[#fa9b0c] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] py-4 rounded-xl text-base font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  Enviar Consulta por WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
