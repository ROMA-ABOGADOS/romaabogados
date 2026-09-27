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
  education?: string;
  experience?: string;
  bullets?: string[];
  highlights?: string[];
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Roberto Marca",
    role: "Socio Principal",
    area: "Derecho Tributario & Dirección General",
    image: "/images/team/roberto-marca.webp",
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
    role: "Abogada Asociada",
    area: "Derecho Procesal · Derecho Constitucional · Derecho Civil",
    image: "/images/team/estefania-pineda.webp",
    bullets: [
      "Abogada del Colegio de Abogados de Lima, egresada de la Universidad San Martín de Porres (USMP) con Especialidad en Derecho Civil y Patrimonial.",
      "Amplia experiencia de más de 6 años en el patrocinio de controversias tributarios, civiles, constitucionales y comerciales (judiciales y extrajudiciales).",
      "Desempeño específico en el área Procesal Tributario, Civil, análisis de controversias y solución de conflictos, redacción de demandas y todo tipo de escritos judiciales (etapa judicial) y extrajudiciales (etapa conciliatoria), así como el manejo de plataformas del Poder Judicial.",
    ],
  },
  {
    name: "Alonso Silva",
    role: "Egresado de Derecho",
    area: "Derecho Tributario · Derecho Empresarial",
    image: "/images/team/alonso-silva.webp",
    bullets: [
      "Egresado de Derecho Empresarial de la Facultad de Derecho de la Universidad de San Martín de Porres, con especialidad en Derecho Tributario y Derecho Aduanero, experiencia en resolución de controversias y litigios tributarios en sede administrativa y judicial.",
      "Pertenece al Décimo Superior de su promoción y actualmente es Ayudante de Cátedra en el curso de Jurisprudencia Tributaria del ciclo 11 de la Especialidad de Derecho Empresarial de la USMP.",
      "Miembro del Centro de Estudios en Derecho Administrativo (CEDA) y del Centro de Estudios de Comercio Exterior y Derecho Aduanero (CECEDA) de la Universidad de San Martín de Porres, habiendo publicado investigaciones como parte del primero en diversas materias vinculados a controversias administrativas y judiciales.",
      "Reconocimientos por parte de la Universidad de San Martín de Porres por la realización de un trabajo de investigación en el 2024 y del Foro Iberoamericano de Derecho Administrativo (FIDA), participante del II Semillero Internacional de Derecho Administrativo realizado en San José de Costa Rica.",
    ],
  },
  {
    name: "Judith Palomino",
    role: "Administradora",
    area: "Área Administrativa & Gestión Operativa",
    image: "/images/team/judith-palomino.webp",
    education: "Especialista en administración corporativa y gestión institucional.",
    experience: "Lidera la administración del estudio, seguimiento de requerimientos, soporte a expedientes y enlace directo con clientes.",
    highlights: [
      "Gestión Administrativa y Operativa",
      "Atención y Enlace Institucional",
      "Soporte y Control de Procesos",
    ],
  },
  {
    name: "Rafael Huaranga",
    role: "Consultor Senior",
    area: "Contabilidad & Auditoría Tributaria",
    education: "Contador Público Colegiado con postgrado en Auditoría Tributaria y NIIF.",
    experience: "Lidera la supervisión técnica de los servicios de outsourcing contable, determinación mensual de tributos y auditoría financiera.",
    highlights: [
      "Contador Público Colegiado (CPC)",
      "Especialista en Normas NIIF y Tributación",
      "Auditoría Contable y Planillas",
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
    const url = `https://api.whatsapp.com/send?phone=51905454792&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <SiteLayout>
      {/* ═══ HERO SECTION — 100% Full Bleed Verde Corporativo #1e3527 ═══ */}
      <section id="quienes-somos" className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#1e3527] pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-20 sm:pb-24">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent z-30" />

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
          <div className="max-w-4xl flex flex-col justify-center text-left">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
              {/* Breadcrumb */}
              <div className="mb-4 sm:mb-5">
                <Link href="/" className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#fa9b0c] text-[13px] sm:text-[14px] font-medium transition-colors">
                  Inicio <ChevronRight className="w-3.5 h-3.5 text-[#fa9b0c]" /> Quiénes Somos
                </Link>
              </div>

              {/* Badge */}
              <div className="mb-4 sm:mb-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
                  <Shield className="w-3.5 h-3.5 text-[#fa9b0c]" />
                  Firma Jurídica y Empresarial en el Perú
                </span>
              </div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hero-h1 font-serif font-normal text-4xl sm:text-5xl lg:text-[62px] text-white leading-[1.12] tracking-tight mb-5 sm:mb-6"
              >
                ROMA & <span className="text-[#fa9b0c]">ABOGADOS</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-subtitle mb-8 sm:mb-10 text-[16px] sm:text-[18px] lg:text-[19px] text-[#FAFBF9]/85 max-w-3xl leading-relaxed font-light"
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
                  className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar con la Firma
                </button>
                <a
                  href="#equipo-legal"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all backdrop-blur-sm"
                >
                  Conocer a Nuestros Especialistas
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
      <section className="py-24 lg:py-32 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Misión */}
            <ScrollReveal className="bg-white p-8 sm:p-10 rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#fa9b0c] bg-[#fa9b0c]/10 px-3 py-1 rounded-full mb-5 inline-block">
                Propósito
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#2b4b38] mb-4">Nuestra Misión</h3>
              <p className="text-[#42604e] text-base leading-relaxed font-light">
                Brindar asesoría jurídica y empresarial de la más alta calidad, con soluciones estratégicas, innovadoras y personalizadas que protejan los intereses de nuestros clientes y promuevan su crecimiento sostenible.
              </p>
            </ScrollReveal>

            {/* Visión */}
            <ScrollReveal delay={0.15} className="bg-white p-8 sm:p-10 rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#fa9b0c] bg-[#fa9b0c]/10 px-3 py-1 rounded-full mb-5 inline-block">
                Aspiración
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#2b4b38] mb-4">Nuestra Visión</h3>
              <p className="text-[#42604e] text-base leading-relaxed font-light">
                Ser reconocidos como el estudio jurídico líder en asesoría tributaria, laboral y empresarial en el Perú, destacando por nuestra excelencia profesional, ética y compromiso con el éxito de nuestros clientes.
              </p>
            </ScrollReveal>
          </div>

          {/* Valores */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
              Principios Rectores
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
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
                  className="bg-white p-8 sm:p-9 rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group relative"
                >
                  <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Clean iconic center symbol */}
                  <div className="mb-5 text-[#fa9b0c] group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                    <Icon className="w-9 h-9" strokeWidth={1.75} />
                  </div>

                  <h4 className="font-serif text-xl font-normal text-[#2b4b38] mb-2.5 group-hover:text-[#fa9b0c] transition-colors">
                    {v.title}
                  </h4>
                  <p className="text-[#42604e] text-sm leading-relaxed font-light">
                    {v.desc}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ EQUIPO LEGAL & CONSULTORES ═══ */}
      <section id="equipo-legal" className="py-24 lg:py-32 bg-white border-t border-[#2b4b38]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
                Profesionales de Alto Nivel
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
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
                className="bg-[#FAFBF9] p-8 sm:p-9 rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#fa9b0c] bg-[#fa9b0c]/10 px-3 py-1 rounded-full">
                        {member.role}
                      </span>
                      <h3 className="font-serif text-2xl font-normal text-[#2b4b38] mt-2.5">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#42604e] mt-1">
                        {member.area}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#2b4b38]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1e3527] transition-colors duration-300">
                      <Scale className="w-6 h-6 text-[#2b4b38] group-hover:text-[#fa9b0c] transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Lawyer Image - Immediately below the name */}
                  {member.image && (
                    <div className="mb-6 rounded-xl overflow-hidden border border-[#2b4b38]/10 bg-gradient-to-b from-white to-[#efe9e2] shadow-sm relative group-hover:border-[#fa9b0c]/40 group-hover:shadow-md transition-all duration-300">
                      <div className="aspect-[4/3] w-full overflow-hidden relative">
                        <img
                          src={member.image}
                          alt={`${member.role} ${member.name} - ROMA & ABOGADOS`}
                          className="w-full h-full object-cover object-[center_10%] transform group-hover:scale-103 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  )}

                  <p className="text-xs font-bold text-[#2b4b38] uppercase tracking-wider mb-2.5">Formación y Trayectoria</p>
                  {member.bullets && member.bullets.length > 0 ? (
                    <div className="space-y-3 mb-4">
                      {member.bullets.map((bullet, bi) => (
                        <div key={bi} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#42604e] leading-relaxed font-light">
                          <CheckCircle2 className="w-4 h-4 text-[#fa9b0c] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {member.education && (
                        <p className="text-sm text-[#42604e] leading-relaxed mb-3 font-light">{member.education}</p>
                      )}
                      {member.experience && (
                        <p className="text-sm text-[#42604e] leading-relaxed mb-6 font-light">{member.experience}</p>
                      )}
                    </>
                  )}

                  {member.highlights && member.highlights.length > 0 && (
                    <div className="pt-4 border-t border-[#2b4b38]/10 space-y-2.5">
                      {member.highlights.map((hl) => (
                        <div key={hl} className="flex items-center gap-2.5 text-xs font-medium text-[#2b4b38]">
                          <CheckCircle2 className="w-4 h-4 text-[#fa9b0c] shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Centralized CTA button */}
          <div className="mt-14 text-center">
            <button
              onClick={() => openModal(null)}
              className="inline-flex items-center justify-center gap-2.5 bg-[#2b4b38] hover:bg-[#1e3527] text-white px-8 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-[#fa9b0c]" />
              Agendar una Consulta con la Firma
              <ArrowRight className="w-4 h-4 text-[#fa9b0c]" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIOS ═══ */}
      <section className="py-24 lg:py-32 bg-[#FAFBF9] border-t border-[#2b4b38]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
              Casos Reales
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
              Testimonios de Clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal
                key={t.name}
                delay={0.1 * i}
                className="bg-white p-8 rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#fa9b0c] text-[#fa9b0c]" />
                    ))}
                  </div>
                  <blockquote className="text-[#2b4b38]/90 font-serif italic leading-relaxed text-base mb-6">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                </div>
                <div className="pt-4 border-t border-[#2b4b38]/10">
                  <h4 className="font-serif text-base font-normal text-[#2b4b38]">{t.name}</h4>
                  <p className="text-xs text-[#42604e] mt-0.5 font-medium">{t.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORMULARIO DE CONTACTO DIRECTO ═══ */}
      <section id="contacto-directo" className="py-24 lg:py-32 bg-white border-t border-[#2b4b38]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
                Canales de Atención
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-tight mb-5">
                Conversemos Sobre las Necesidades de tu Empresa
              </h2>
              <p className="text-[#42604e] text-base sm:text-lg leading-relaxed mb-8 font-light">
                Envíanos tu consulta legal, tributaria o contable. Evaluamos tu situación y te brindamos una propuesta estratégica adaptada a tus objetivos.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fa9b0c]/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#2b4b38]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#42604e] font-medium">WhatsApp / Teléfono</p>
                    <a
                      href="tel:+51905454792"
                      className="text-base font-bold text-[#2b4b38] hover:text-[#fa9b0c] transition-colors inline-block"
                      title="Llamar a ROMA & ABOGADOS"
                    >
                      +51 905 454 792
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fa9b0c]/15 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#2b4b38]" />
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
                    <MapPin className="w-5 h-5 text-[#2b4b38]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#42604e] font-medium">Ubicación</p>
                    <p className="text-base font-bold text-[#2b4b38]">Lima, Perú (Atención a Nivel Nacional)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FAFBF9] border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="font-serif text-2xl font-normal text-[#2b4b38] mb-6">Envíanos un Mensaje Directo</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2b4b38] mb-1.5">
                    Nombre o Empresa *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez - Constructora SAC"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#2b4b38]/15 bg-white text-[#2b4b38] text-sm focus:outline-none focus:border-[#fa9b0c] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2b4b38] mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contacto@tuempresa.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#2b4b38]/15 bg-white text-[#2b4b38] text-sm focus:outline-none focus:border-[#fa9b0c] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2b4b38] mb-1.5">
                    Área de Interés *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#2b4b38]/15 bg-white text-[#2b4b38] text-sm focus:outline-none focus:border-[#fa9b0c] transition-all"
                  >
                    <option value="Derecho Tributario">Derecho Tributario & Fiscalizaciones SUNAT</option>
                    <option value="Derecho Laboral">Derecho Laboral & Inspecciones SUNAFIL</option>
                    <option value="Derecho Empresarial">Derecho Empresarial & Corporativo</option>
                    <option value="Outsourcing Contable">Outsourcing Contable & Planillas</option>
                    <option value="General">Consulta General / Reunión con Socio Principal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2b4b38] mb-1.5">
                    Detalle de tu Consulta *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe brevemente tu caso, requerimiento o consulta..."
                    className="w-full px-4 py-3.5 rounded-xl border border-[#2b4b38]/15 bg-white text-[#2b4b38] text-sm focus:outline-none focus:border-[#fa9b0c] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
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
