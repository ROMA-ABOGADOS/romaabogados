"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, CheckCircle2, Award, ChevronRight, MessageCircle, ArrowRight,
  Send, Phone, Mail, MapPin, Scale, Star, Play, RotateCw
} from "lucide-react";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

/* ════════════════════════════════════════════════════════════════
   EQUIPO LEGAL Y CONSULTORES — ORDEN OFICIAL SEGÚN GOOGLE DOC
   1. Roberto Marca (Socio Principal)
   2. Estefanía Pineda (Abogada Asociada)
   3. David Corthorn (Abogado Asociado)
   4. Alonso Silva (Egresado de Derecho)
   5. Delila Ronceros (Egresada de Derecho)
   6. Richard Agapito (Consultor)
   7. Rafael Huaranga (Consultor)
   8. Willian Balbin Guevara (Consultor)
   9. Judith Palomino (Administración)
   ════════════════════════════════════════════════════════════════ */

interface TeamMember {
  id: string;
  name: string;
  role: string;
  area: string;
  image: string;
  education?: string;
  experience?: string;
  bullets?: string[];
  highlights?: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: "roberto",
    name: "Dr. Roberto Marca",
    role: "Socio Principal",
    area: "Derecho Tributario · Procesal Tributario · Administrativo · Empresarial",
    image: "/images/team/roberto-marca-portrait.webp",
    education:
      "Abogado titulado con grado en la Pontificia Universidad Católica del Perú (PUCP). Posee maestría en Derecho Tributario y Fiscalidad Internacional (USMP).",
    experience:
      "Más de 15 años de experiencia en patrocinio y defensas en controversias tributarias y empresariales logrando disminuir y/o dejar sin efecto importantes contingencias y/o reparos tributarios en instancia administrativa y en el Poder Judicial.",
    highlights: [
      "Pontificia Universidad Católica del Perú (PUCP)",
      "Asesor de las Salas Especializadas del Tribunal Fiscal (MEF)",
      "Exfuncionario de SUNAT y egresado del I-CAAT del INDESTA",
      "+15 Años en patrocinio y controversias tributarias de alta complejidad",
    ],
  },
  {
    id: "estefania",
    name: "Estefanía Pineda",
    role: "Abogada Asociada",
    area: "Derecho Procesal · Derecho Constitucional · Derecho Civil",
    image: "/images/team/estefania-pineda.webp",
    education:
      "Abogada del Colegio de Abogados de Lima, egresada de la Universidad San Martín de Porres (USMP) con Especialidad en Derecho Civil y Patrimonial.",
    experience:
      "Amplia experiencia de más de 6 años en el patrocinio de controversias tributarias, civiles, constitucionales y comerciales (judiciales y extrajudiciales).",
    highlights: [
      "Especialidad en Derecho Civil y Patrimonial (USMP)",
      "Área Procesal Tributario, Civil y Solución de Conflictos",
      "Redacción de demandas y todo tipo de escritos judiciales y conciliatorios",
      "Manejo integral de plataformas del Poder Judicial",
    ],
  },
  {
    id: "david",
    name: "David Corthorn",
    role: "Abogado Asociado",
    area: "Derecho Laboral y Seguridad Social · Derecho Migratorio",
    image: "/images/team/david-corthorn.webp",
    education:
      "Abogado titulado con grado en la Pontificia Universidad Católica del Perú (PUCP). Maestría en Derecho del Trabajo y de la Seguridad Social en la UNMSM.",
    experience:
      "Experiencia en derecho laboral en sectores público y privado, habiendo desempeñado funciones en diversos estudios jurídicos y empresas consultoras.",
    highlights: [
      "Pontificia Universidad Católica del Perú (PUCP)",
      "Maestría en Derecho del Trabajo y Seguridad Social (UNMSM)",
      "Encargado de la elaboración de Manuales Legales de Regímenes Laborales",
      "Autor de diversos artículos e informes en materia laboral y aduanera",
    ],
  },
  {
    id: "alonso",
    name: "Alonso Silva",
    role: "Egresado de Derecho",
    area: "Derecho Tributario · Derecho Empresarial",
    image: "/images/team/alonso-silva.webp",
    education:
      "Egresado de Derecho Empresarial de la Facultad de Derecho de la Universidad de San Martín de Porres (USMP), con especialidad en Derecho Tributario y Derecho Aduanero.",
    experience:
      "Experiencia en resolución de controversias y litigios tributarios en sede administrativa y judicial. Pertenece al Décimo Superior de su promoción.",
    highlights: [
      "Décimo Superior y Ayudante de Cátedra en Jurisprudencia Tributaria (USMP)",
      "Miembro de centros de investigación CEDA y CECEDA (USMP)",
      "Reconocimiento por trabajo de investigación jurídica 2024 (USMP)",
      "Participante del Foro Iberoamericano de Derecho Administrativo (FIDA)",
    ],
  },
  {
    id: "delila",
    name: "Delila Ronceros",
    role: "Egresada de Derecho",
    area: "Derecho Tributario · Derecho Administrativo",
    image: "/images/team/delila-ronceros.webp",
    education:
      "Egresada de la Facultad de Derecho de la Universidad Tecnológica del Perú (UTP), perteneciente al tercio superior de su promoción.",
    experience:
      "Experiencia en Derecho Tributario y Derecho Administrativo, con desarrollo de investigaciones y trabajos académicos en distintas áreas del Derecho.",
    highlights: [
      "Tercio Superior de su promoción académica (UTP)",
      "Especialidad en Derecho Tributario y Derecho Administrativo",
      "Desarrollo de investigaciones jurídicas y académicas",
      "Análisis normativo y resolución de controversias",
    ],
  },
  {
    id: "richard",
    name: "Richard Agapito",
    role: "Consultor",
    area: "Auditoría Tributaria Preventiva · Docente y Conferencista",
    image: "/images/team/richard-agapito.webp",
    education:
      "Contador Público Colegiado con maestría en Derecho Tributario y Fiscalidad Internacional (USMP) y posgrado en Tributación Internacional (UPC).",
    experience:
      "Estudios de Derecho Tributario Internacional en la Universidad Austral en Buenos Aires, Argentina. Trabajó como asociado Tax & Legal en KPMG-Perú.",
    highlights: [
      "Derecho Tributario Internacional (U. Austral, Buenos Aires)",
      "Maestría en Tributación y Fiscalidad Internacional (USMP)",
      "Exasociado Tax & Legal en KPMG-Perú",
      "Capacitador y conferencista tributario a nivel nacional",
    ],
  },
  {
    id: "rafael",
    name: "Rafael Huaranga",
    role: "Consultor",
    area: "Derecho Notarial y Registral · Inmobiliario · Civil",
    image: "", // Sin foto oficial, monograma institucional
    education:
      "Abogado egresado de la UNMSM, con estudios de Maestría en Derecho Empresarial en la Pontificia Universidad Católica del Perú (PUCP).",
    experience:
      "Especialista en saneamiento y regularización de propiedades, con amplio conocimiento en contratación empresarial, litigios civiles y estrategias legales para la protección del patrimonio.",
    highlights: [
      "Abogado egresado de la UNMSM",
      "Estudios de Maestría en Derecho Empresarial (PUCP)",
      "Saneamiento físico-legal y regularización de propiedades",
      "Contratación empresarial y protección del patrimonio",
    ],
  },
  {
    id: "willian",
    name: "Willian Balbin Guevara",
    role: "Consultor",
    area: "Derecho Penal y Procesal Penal",
    image: "", // Sin foto oficial, monograma institucional
    education:
      "Abogado egresado de la UIGV, miembro del Colegio de Abogados de Lima, con Maestría en Derecho Penal por la USMP.",
    experience:
      "Abogado litigante con más de 15 años de experiencia y trayectoria de trabajo en materia penal dentro del Poder Judicial.",
    highlights: [
      "Miembro del Colegio de Abogados de Lima (CAL)",
      "Maestría en Derecho Penal por la USMP",
      "+15 Años de experiencia en litigación penal",
      "Docente de la Escuela de Oficiales de la PNP",
    ],
  },
  {
    id: "judith",
    name: "Judith Palomino",
    role: "Administración",
    area: "Gestión Administrativa",
    image: "/images/team/judith-palomino-portrait.webp",
    education:
      "Administración de Empresas, responsable de la gestión y coordinación administrativa institucional de ROMA ABOGADOS.",
    experience:
      "Se encarga de la organización, seguimiento y coordinación de las actividades internas del estudio, contribuyendo a su adecuado funcionamiento.",
    highlights: [
      "Gestión y Coordinación Administrativa de ROMA ABOGADOS",
      "Organización y seguimiento de las actividades internas del estudio",
      "Atención institucional y enlace con clientes",
      "Soporte operativo a la gestión de expedientes y servicios",
    ],
  },
];

/* 3 VALORES OFICIALES (EXCELENCIA, INTEGRIDAD, COMPROMISO) */
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
];

/* TIKTOK HIGHLIGHTS OFICIALES — DR. ROBERTO MARCA */
const tiktokVideos = [
  {
    id: 1,
    title: "¿Tienes problemas con SUNAT y no sabes cómo defenderte?",
    views: "26.6K vistas",
    tag: "SUNAT & Defensa",
    url: "https://www.tiktok.com/@roberto.i.defensa/video/7605276648237255943",
    cover: "/images/tiktok/tiktok-video-1.webp",
  },
  {
    id: 2,
    title: "Le ganamos a SUNAT: S/ 30 Millones y 3 inmuebles embargados",
    views: "4.1K vistas",
    tag: "Tribunal Fiscal & Éxito",
    url: "https://www.tiktok.com/@roberto.i.defensa/video/7686636332273388821",
    cover: "/images/tiktok/tiktok-video-2.webp",
  },
  {
    id: 3,
    title: "Operaciones No Reales: cómo evitar una deuda impagable ante SUNAT",
    views: "197K vistas",
    tag: "Fiscalización & Renta",
    url: "https://www.tiktok.com/@roberto.i.defensa/video/7644670983701318933",
    cover: "/images/tiktok/tiktok-video-3.webp",
  },
];

export function NosotrosPage() {
  useScrollSlug();
  const { openModal } = useWhatsAppStore();
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({ name: "", email: "", service: "Derecho Tributario", message: "" });

  function toggleCard(id: string) {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Hola *ROMA & ABOGADOS*.

⚖️ *Servicio de interés:* ${formData.service}
👤 *Nombre / Empresa:* ${formData.name}
✉️ *Email:* ${formData.email}
💬 *Consulta:* ${formData.message}

Solicito una asesoría tributaria.`;
    const url = `https://api.whatsapp.com/send?phone=51905454792&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <SiteLayout>
      {/* ═══ HERO SECTION: 100% Full-Bleed — DR. ROBERTO MARCA (CORRECCIÓN 22) ═══ */}
      <section
        id="quienes-somos"
        className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#0e1d14] pt-28 sm:pt-32 md:pt-36 pb-0"
        style={{
          backgroundImage: "url(/images/hero/nosotros-natural.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
        }}
      >
        {/* Full-bleed background overlays for crisp natural contrast (sin franja negra al piso) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c13]/85 via-[#0d1c13]/55 to-[#0d1c13]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/35" />

        {/* Top vignette for transparent header contrast */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />

        {/* Ambient mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#42604e]/20 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#fa9b0c]/10 rounded-full blur-[120px]" />
        </div>

        {/* Content with integrated portrait */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto pt-2 sm:pt-4 lg:pt-0 pb-0 lg:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT: Text & Authority */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left lg:py-16">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
                {/* Breadcrumb */}
                <div className="mb-3 sm:mb-5">
                  <Link href="/" className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#fa9b0c] text-[13px] sm:text-[14px] font-medium transition-colors">
                    Inicio <ChevronRight className="w-3.5 h-3.5 text-[#fa9b0c]" /> Quiénes Somos
                  </Link>
                </div>

                {/* Badge */}
                <div className="mb-3 sm:mb-5">
                  <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
                    <Shield className="w-3.5 h-3.5 text-[#fa9b0c]" />
                    ¿Quiénes somos?
                  </span>
                </div>

                {/* H1 (Corrección 8: más grande) */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="hero-h1 font-serif font-normal text-4xl sm:text-6xl lg:text-[76px] text-white leading-[1.08] tracking-tight mb-4 sm:mb-6"
                >
                  ROMA & ABOGADOS
                </motion.h1>

                {/* Subtitle con los 2 párrafos oficiales del Word */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hero-subtitle mb-6 sm:mb-8 text-[15px] sm:text-[17px] text-[#FAFBF9]/90 max-w-2xl leading-relaxed font-light space-y-3"
                >
                  <p>
                    ROMA ABOGADOS es una firma especializada en asesoría y defensa tributaria, laboral y empresarial, con más de 15 años de experiencia en el sector empresarial.
                  </p>
                  <p className="text-[#FAFBF9]/80 text-[14px] sm:text-[15.5px]">
                    Contamos con un equipo de profesionales altamente capacitados, con experiencia en SUNAT, Tribunal Fiscal, Poder Judicial y reconocidas sociedades de auditoría tributaria. Bajo el liderazgo de Roberto Marca, abogado egresado de la PUCP y especialista en derecho tributario y empresarial, brindamos soluciones jurídicas estratégicas y eficientes.
                  </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="hero-ctas flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <button
                    onClick={() => openModal(null)}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Agendar una Consulta
                  </button>
                  <a
                    href="#equipo-legal"
                    className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all backdrop-blur-sm"
                  >
                    Conocer al Equipo Legal
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Spacer for desktop 5 columns so grid preserves spacing */}
            <div className="hidden lg:block lg:col-span-5 pointer-events-none" aria-hidden="true" />

            {/* Mobile / Tablet Dr. Roberto: 100% al ras del pie del hero full bleed */}
            <div className="block lg:hidden mt-6 sm:mt-8 w-full flex justify-center items-end -mb-px">
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] flex justify-center items-end">
                <img
                  src="/images/hero/roberto-side-cutout.webp"
                  alt="Dr. Roberto Marca - Socio Principal ROMA & ABOGADOS"
                  className="w-full h-auto max-h-[50vh] sm:max-h-[56vh] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.55)] block select-none"
                />
              </div>
            </div>

          </div>
        </div>

        {/* DESKTOP HERO CUTOUT: Dr. Roberto Marca - Más Grande y 100% Al ras del pie del hero */}
        <div className="hidden lg:flex absolute bottom-0 inset-x-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-end items-end pointer-events-none z-20 overflow-visible">
          <div className="relative w-full max-w-[540px] xl:max-w-[620px] 2xl:max-w-[680px] flex justify-end items-end">
            {/* Ambient soft gold glow behind Roberto */}
            <div className="absolute top-1/4 right-1/4 w-[380px] h-[380px] bg-[#fa9b0c]/12 rounded-full blur-3xl pointer-events-none" />
            
            <img
              src="/images/hero/roberto-side-cutout.webp"
              alt="Dr. Roberto Marca - Socio Principal ROMA & ABOGADOS"
              className="w-full h-auto max-h-[82vh] xl:max-h-[88vh] 2xl:max-h-[92vh] object-contain object-bottom drop-shadow-[-20px_10px_35px_rgba(0,0,0,0.45)] block select-none pointer-events-auto"
            />
          </div>
        </div>

        {/* Scroll down indicator - Only on desktop where it doesn't overlap Dr. Roberto */}
        <div className="hidden lg:block">
          <ScrollDownIndicator />
        </div>
      </section>

      {/* ═══ MISIÓN, VISIÓN Y 3 VALORES (CORRECCIÓN 23) ═══ */}
      <section className="py-16 sm:py-20 bg-[#FAFBF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Misión y Visión más compactas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
            {/* Misión */}
            <ScrollReveal className="bg-white p-7 sm:p-8 rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-lg transition-all duration-300 relative group">
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#fa9b0c] bg-[#fa9b0c]/10 px-3 py-1 rounded-full mb-3 inline-block">
                Propósito
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2b4b38] mb-2.5">Nuestra Misión</h3>
              <p className="text-[#42604e] text-sm sm:text-base leading-relaxed font-light">
                Brindar soluciones jurídicas estratégicas, eficientes y especializadas, protegiendo los intereses de nuestros clientes y acompañándolos en la prevención y solución de sus contingencias legales, con altos estándares de calidad, ética y compromiso profesional.
              </p>
            </ScrollReveal>

            {/* Visión */}
            <ScrollReveal delay={0.15} className="bg-white p-7 sm:p-8 rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-lg transition-all duration-300 relative group">
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#fa9b0c] bg-[#fa9b0c]/10 px-3 py-1 rounded-full mb-3 inline-block">
                Aspiración
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2b4b38] mb-2.5">Nuestra Visión</h3>
              <p className="text-[#42604e] text-sm sm:text-base leading-relaxed font-light">
                Ser un estudio jurídico líder y referente a nivel nacional en derecho tributario, laboral y empresarial, reconocido por nuestra especialización, excelencia profesional y capacidad para brindar soluciones legales eficientes.
              </p>
            </ScrollReveal>
          </div>

          {/* Nuestros Valores — EXACTAMENTE 3 VALORES (EXCELENCIA, INTEGRIDAD, COMPROMISO) */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-2">
              Principios Rectores
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2b4b38] leading-[1.18]">
              Nuestros Valores
            </h2>
            <div className="w-16 h-0.5 bg-[#fa9b0c] mx-auto mt-3 mb-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {firmValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal
                  key={v.title}
                  delay={0.08 * i}
                  className="bg-white p-7 rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group relative"
                >
                  <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="mb-4 text-[#fa9b0c] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Icon className="w-8 h-8" strokeWidth={1.75} />
                  </div>
                  <h4 className="font-serif text-xl font-normal text-[#2b4b38] mb-2 group-hover:text-[#fa9b0c] transition-colors">
                    {v.title}
                  </h4>
                  <p className="text-[#42604e] text-xs sm:text-sm leading-relaxed font-light">
                    {v.desc}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══ EQUIPO LEGAL: 8 TARJETAS INTERACTIVAS (CORRECCIÓN 25) ═══ */}
      <section id="equipo-legal" className="py-16 sm:py-20 bg-white border-t border-[#2b4b38]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-2">
                Profesionales de Alto Nivel
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
                Nuestro Equipo Legal y Consultores
              </h2>
              <div className="w-16 h-0.5 bg-[#fa9b0c] mx-auto mt-3 mb-3" />
              <p className="text-sm sm:text-base text-[#42604e] leading-relaxed font-light">
                Haz clic en cada tarjeta para conocer la trayectoria y especialidad de nuestros profesionales.
              </p>
            </div>
          </ScrollReveal>

          {/* Grid de 3 columnas (3 filas = 9 integrantes) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => {
              const isFlipped = !!flippedCards[member.id];

              return (
                <div
                  key={member.id}
                  className="relative h-[440px] sm:h-[460px] rounded-2xl overflow-hidden border border-[#2b4b38]/15 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer bg-[#1e3527]"
                  onClick={() => toggleCard(member.id)}
                >
                  <AnimatePresence initial={false} mode="wait">
                    {!isFlipped ? (
                      /* ── FRENTE DE LA TARJETA: FOTO ELEGANTE O MONOGRAMA INSTITUCIONAL ── */
                      <motion.div
                        key="front"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 flex flex-col justify-end"
                      >
                        {/* Foto de fondo o Monograma Institucional (Corrección 9) */}
                        {member.image ? (
                          <>
                            <img
                              src={member.image}
                              alt={`${member.name} - ${member.role}`}
                              className="absolute inset-0 w-full h-full object-cover object-[center_12%] transform group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                            {/* Degradado suave para lectura perfecta sin oscurecer los rostros */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#09140d]/95 via-[#09140d]/30 to-transparent to-55% transition-opacity" />
                          </>
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-b from-[#183122] via-[#112318] to-[#0c1811] flex flex-col items-center justify-center p-6 text-center">
                            {/* Watermark sutil de la balanza jurídica */}
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
                              <Scale className="w-56 h-56 text-[#fa9b0c]" />
                            </div>

                            {/* Monograma de alta distinción ejecutiva */}
                            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#244530] to-[#122419] border-2 border-[#fa9b0c]/40 shadow-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-[#fa9b0c] transition-all duration-300">
                              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#fa9b0c] tracking-wider">
                                {member.name.replace(/^Dr\.\s+/, "").split(" ").map(n => n[0]).slice(0, 2).join("")}
                              </span>
                            </div>

                            <div className="relative z-10 mt-4">
                              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#fa9b0c]/80">
                                ROMA & ABOGADOS
                              </span>
                            </div>

                            {/* Degradado inferior para legibilidad */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a11] via-transparent to-transparent pointer-events-none" />
                          </div>
                        )}

                        {/* Línea dorada superior */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Botón flotante para voltear */}
                        <div className="absolute top-4 right-4 z-20">
                          <span className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center text-xs group-hover:scale-110 group-hover:bg-white group-hover:text-[#1e3527] transition-all">
                            <RotateCw className="w-3.5 h-3.5" />
                          </span>
                        </div>

                        {/* Info inferior */}
                        <div className="relative z-10 p-5 sm:p-6 text-left">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[#1e3527] text-[10px] font-bold uppercase tracking-wider mb-2 shadow-sm">
                            {member.role}
                          </span>
                          <h3 className="font-serif text-xl sm:text-2xl text-white font-normal leading-tight group-hover:text-white/90 transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-white/80 text-xs mt-1 line-clamp-1 font-light">
                            {member.area}
                          </p>

                          <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-semibold text-white/90 group-hover:text-white transition-colors">
                            <span>Ver Trayectoria</span>
                            <ArrowRight className="w-3.5 h-3.5 text-white/90 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      /* ── REVERSO DE LA TARJETA: TRAYECTORIA COMPLETA & ESTUDIOS ── */
                      <motion.div
                        key="back"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 bg-[#122217] p-5 sm:p-6 flex flex-col justify-between text-left overflow-y-auto"
                      >
                        <div>
                          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                                {member.role}
                              </span>
                              <h4 className="font-serif text-lg text-white font-normal leading-tight">
                                {member.name}
                              </h4>
                            </div>
                            <span className="text-xs text-white/80 hover:text-white flex items-center gap-1 font-medium cursor-pointer">
                              <RotateCw className="w-3 h-3" /> Volver
                            </span>
                          </div>

                          {/* Formato 1: Texto primario, texto secundario, línea debajo y viñetas descriptivas */}
                          {member.education || member.experience || (member.highlights && member.highlights.length > 0) ? (
                            <div className="text-xs text-white/85 font-light leading-relaxed">
                              {member.education && (
                                <p className="text-white/90 font-normal leading-relaxed">{member.education}</p>
                              )}
                              {member.experience && (
                                <p className="text-white/75 mt-2.5 leading-relaxed">{member.experience}</p>
                              )}
                              {member.highlights && member.highlights.length > 0 && (
                                <div className="pt-3 mt-3 border-t border-white/10 space-y-2">
                                  {member.highlights.map((hl, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-[11.5px] text-white/90 leading-snug">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-white/70 shrink-0 mt-0.5" />
                                      <span>{hl}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : member.bullets && (
                            <div className="space-y-2.5 text-xs text-white/85 font-light leading-relaxed">
                              {member.bullets.map((b, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-white/80 shrink-0 mt-0.5" />
                                  <span>{b}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="pt-3 border-t border-white/10 text-center">
                          <span className="text-[11px] text-white/60">Toca para cerrar</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Centralized CTA button */}
          <div className="mt-12 text-center">
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

      {/* ═══ SECCIÓN TIKTOK (RECOMENDACIÓN DEL CLIENTE - IMAGE33.PNG) ═══ */}
      <section id="tiktok" className="py-16 sm:py-20 bg-[#FAFBF9] border-t border-[#2b4b38]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-2">
                Contenido Digital & Casos Reales
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2b4b38] leading-[1.18]">
                ROMA & ABOGADOS en TikTok
              </h2>
              <div className="w-16 h-0.5 bg-[#fa9b0c] mx-auto mt-3 mb-3" />
              <p className="text-sm sm:text-base text-[#42604e] leading-relaxed font-light">
                Explicamos conceptos jurídicos, resoluciones de SUNAT y tips legales en videos rápidos y estratégicos.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {tiktokVideos.map((video, idx) => (
              <ScrollReveal key={video.id} delay={0.1 * idx}>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative rounded-2xl overflow-hidden bg-[#122217] border border-[#2b4b38]/15 shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  {/* Video Mockup Thumbnail */}
                  <div className="aspect-[9/12] w-full relative overflow-hidden bg-gradient-to-b from-[#1e3527] to-[#0e1a11]">
                    <img
                      src={video.cover}
                      alt={video.title}
                      className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Views badge top */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold">
                        {video.views}
                      </span>
                    </div>

                    {/* Play Button center */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-14 h-14 rounded-full bg-white/95 text-[#1e3527] flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-white transition-all duration-300">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-5 left-5 right-5 z-10 text-left">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                        {video.tag}
                      </span>
                      <h4 className="font-serif text-white text-base leading-snug line-clamp-2 mb-2 group-hover:text-white/90 transition-colors">
                        &ldquo;{video.title}&rdquo;
                      </h4>
                      <span className="text-[11px] font-semibold text-white/90 group-hover:text-white flex items-center gap-1 transition-colors">
                        Ver en TikTok ↗
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.tiktok.com/@roberto.i.defensa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2b4b38] hover:text-[#fa9b0c] transition-colors"
            >
              <span>Síguenos en @roberto.i.defensa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FORMULARIO DE CONTACTO DIRECTO ═══ */}
      <section id="contacto-directo" className="py-16 sm:py-20 bg-white border-t border-[#2b4b38]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-2">
                Canales de Atención
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2b4b38] leading-tight mb-4">
                Conversemos Sobre las Necesidades de tu Empresa
              </h2>
              <p className="text-[#42604e] text-sm sm:text-base leading-relaxed mb-6 font-light">
                Envíanos tu consulta legal, tributaria o contable. Evaluamos tu situación y te brindamos una propuesta estratégica adaptada a tus objetivos.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#fa9b0c]/15 flex items-center justify-center shrink-0">
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
                  <div className="w-11 h-11 rounded-xl bg-[#fa9b0c]/15 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#2b4b38]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#42604e] font-medium">Correo Electrónico</p>
                    <a
                      href="mailto:rm@romaabogados.pe"
                      className="text-base font-bold text-[#2b4b38] hover:text-[#fa9b0c] transition-colors inline-block"
                      title="Enviar correo a ROMA & ABOGADOS"
                    >
                      rm@romaabogados.pe
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#fa9b0c]/15 flex items-center justify-center shrink-0">
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
            <div className="p-7 sm:p-8 rounded-2xl bg-[#FAFBF9] border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="font-serif text-2xl font-normal text-[#2b4b38] mb-5">Envíanos un Mensaje Directo</h3>
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
                    className="w-full px-4 py-3 rounded-xl border border-[#2b4b38]/15 bg-white text-[#2b4b38] text-sm focus:outline-none focus:border-[#fa9b0c] transition-all"
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
                    className="w-full px-4 py-3 rounded-xl border border-[#2b4b38]/15 bg-white text-[#2b4b38] text-sm focus:outline-none focus:border-[#fa9b0c] transition-all"
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
                    className="w-full px-4 py-3 rounded-xl border border-[#2b4b38]/15 bg-white text-[#2b4b38] text-sm focus:outline-none focus:border-[#fa9b0c] transition-all"
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
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe brevemente tu caso, requerimiento o consulta..."
                    className="w-full px-4 py-3 rounded-xl border border-[#2b4b38]/15 bg-white text-[#2b4b38] text-sm focus:outline-none focus:border-[#fa9b0c] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] py-3.5 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
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
