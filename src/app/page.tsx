"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { useSanityDocument } from "@/sanity/useSanity";
import { homePageQuery } from "@/sanity/queries";
import {
  MessageCircle,
  CheckCircle2,
  Shield,
  Building2,
  Handshake,
  Star,
  Scale,
  Briefcase,
  FileText,
  Calendar,
  ArrowRight,
  Award,
  Phone,
  BookOpen,
} from "lucide-react";

/* ════════════════════════════════════════════════════════════════
   SECTION 0: LEADERSHIP PRESENTATION — Roberto Marca & ROMA ABOGADOS
   ════════════════════════════════════════════════════════════════ */
function LeadershipPresentation() {
  const { openModal } = useWhatsAppStore();
  const sanityHome = useSanityDocument<any>(homePageQuery, null);
  const founder = sanityHome?.founder;

  const title = founder?.title || "Roberto Marca";
  const subtitle = founder?.subtitle || "SOCIO PRINCIPAL | ROMA & ABOGADOS";
  const quote =
    founder?.quote ||
    "Brindamos soluciones jurídicas eficientes y estratégicas con el más alto rigor técnico para proteger y potenciar tu negocio.";
  const sectionTitle =
    founder?.sectionTitle || "Liderazgo y Respaldo Jurídico Especializado";
  const sectionSubtitle =
    founder?.sectionSubtitle ||
    "ROMA ABOGADOS es una firma de profesionales especializada en asesoría tributaria, laboral y empresarial. Combinamos experiencia en organismos del Estado con visión de negocios.";

  const credentials = [
    "Abogado por la Pontificia Universidad Católica del Perú (PUCP)",
    "Especialista en Derecho Tributario por la Universidad de Lima",
    "Exintegrante del Tribunal Fiscal y de la SUNAT",
    "Más de 12 años liderando asesorías fiscales de alta complejidad",
  ];

  return (
    <section id="socio-principal" className="py-20 lg:py-28 bg-[#FAFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: Institutional Card */}
          <ScrollReveal x={-30} duration={0.7} className="flex flex-col items-center text-center w-full">
            <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E2D5] shadow-lg shadow-[#2b4b38]/[0.06] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2b4b38] via-[#fa9b0c] to-[#2b4b38]" />
              
              {/* Shield Icon Badge */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#2b4b38]/10 flex items-center justify-center border border-[#2b4b38]/20 shadow-inner">
                <Scale className="w-10 h-10 text-[#2b4b38]" />
              </div>

              <span className="inline-block px-4 py-1.5 rounded-full bg-[#fa9b0c]/15 text-[#2b4b38] text-xs font-bold uppercase tracking-wider mb-3">
                Dirección Legal & Tributaria
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#2b4b38] tracking-tight leading-tight">
                {title}
              </h3>
              <p className="text-[#fa9b0c] font-bold text-xs sm:text-sm tracking-[0.1em] uppercase mt-2">
                {subtitle}
              </p>

              <div className="my-6 border-t border-[#E8E2D5]" />

              <p className="text-[#42604e] text-base italic leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>

              <div className="mt-6 pt-6 border-t border-[#E8E2D5]/60 flex items-center justify-center gap-2 text-xs text-[#2b4b38]/80 font-medium">
                <Award className="w-4 h-4 text-[#fa9b0c]" />
                <span>Pontificia Universidad Católica del Perú (PUCP)</span>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Credentials + Action Buttons */}
          <ScrollReveal x={30} duration={0.7} className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
              ¿Quiénes Somos?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#2b4b38] leading-tight mb-4">
              {sectionTitle}
            </h2>
            <p className="text-[#42604e] text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
              {sectionSubtitle}
            </p>

            {/* Bullet points of credentials */}
            <ul className="space-y-3.5 mb-8 text-left w-full max-w-lg">
              {credentials.map((cred) => (
                <li key={cred} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#fa9b0c] shrink-0 mt-0.5" />
                  <span className="text-[#2b4b38] font-semibold text-sm sm:text-base">
                    {cred}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full max-w-md">
              <button
                type="button"
                onClick={() => openModal(null)}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#2b4b38] hover:bg-[#1e3527] text-white px-6 py-3.5 rounded-xl text-[15px] font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-[#fa9b0c]" />
                Consulta Inmediata
              </button>
              <Link
                href="/nosotros-contacto"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-[#FAFBF9] text-[#2b4b38] border border-[#E8E2D5] px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all shadow-sm"
              >
                Conocer al Equipo Legal
                <ArrowRight className="w-4 h-4 text-[#fa9b0c]" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 1: 4 PRACTICE PILLARS OVERVIEW
   ════════════════════════════════════════════════════════════════ */
function PillarsOverview() {
  const pillars = [
    {
      title: "Derecho Tributario",
      badge: "Defensa & Planeamiento",
      desc: "Fiscalizaciones SUNAT, cartas inductivas, apelaciones ante el Tribunal Fiscal, cobranzas coactivas y demandas judiciales contencioso-administrativas.",
      link: "/defensa-tributaria-sunat",
      icon: Scale,
    },
    {
      title: "Derecho Laboral",
      badge: "Preventivo & SUNAFIL",
      desc: "Auditorías de cumplimiento (compliance laboral), SST, prevención y sanción de hostigamiento, defensa inspectiva SUNAFIL y litigios laborales.",
      link: "/derecho-laboral",
      icon: Briefcase,
    },
    {
      title: "Outsourcing Contable",
      badge: "SIRE & Planillas",
      desc: "Gestión contable integral, liquidación mensual de impuestos, libros electrónicos, SIRE y procesamiento de planillas PLAME con supervisión legal.",
      link: "/contabilidad-tributacion",
      icon: FileText,
    },
    {
      title: "Derecho Empresarial",
      badge: "Corporativo & OSCE",
      desc: "Constitución de sociedades (SAC, SRL, EIRL), reorganizaciones societarias, contratos comerciales, derecho administrativo y licitaciones OSCE.",
      link: "/constitucion-de-empresas",
      icon: Building2,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
              Especialización Jurídica
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b4b38]">
              Cobertura Legal Integral para Empresas
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#42604e] leading-relaxed">
              Un enfoque multidisciplinario donde tributación, derecho laboral y corporativo se integran para blindar las operaciones de tu negocio.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.title} delay={0.1 * i} duration={0.6}>
                <div className="bg-[#FAFBF9] rounded-2xl p-7 sm:p-9 border border-[#E8E2D5] hover:border-[#fa9b0c]/50 transition-all flex flex-col justify-between h-full group shadow-sm hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#2b4b38]/10 flex items-center justify-center group-hover:bg-[#fa9b0c]/20 transition-colors">
                        <Icon className="w-6 h-6 text-[#2b4b38] group-hover:text-[#fa9b0c] transition-colors" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#fa9b0c] bg-[#fa9b0c]/10 px-3 py-1 rounded-full">
                        {p.badge}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2b4b38] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-[#42604e] text-[15px] leading-relaxed mb-6">
                      {p.desc}
                    </p>
                  </div>
                  <Link
                    href={p.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2b4b38] group-hover:text-[#fa9b0c] transition-colors"
                  >
                    Explorar área de práctica
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 2: INSTITUTIONAL AUTHORITY & TRUST
   ════════════════════════════════════════════════════════════════ */
function AuthorityTrust() {
  const values = [
    {
      title: "Excelencia y Rigor Técnico",
      desc: "Máximo estándar de calidad y sustento jurídico en cada informe, recurso contencioso o planificación fiscal.",
    },
    {
      title: "Integridad y Confidencialidad",
      desc: "Actuamos con transparencia absoluta, ética inquebrantable y reserva profesional en cada asunto encomendado.",
    },
    {
      title: "Compromiso con el Negocio",
      desc: "Asumimos los objetivos de nuestros clientes como propios, protegiendo su patrimonio ante cualquier eventualidad.",
    },
    {
      title: "Innovación y Soluciones Ágiles",
      desc: "Respuestas legales adaptadas al entorno corporativo contemporáneo y a la constante evolución normativa del Perú.",
    },
  ];

  return (
    <section id="valores-institucionales" className="py-20 lg:py-28 bg-[#FAFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal x={-30} duration={0.7}>
            <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
              Valores Institucionales
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b4b38] leading-tight mb-5">
              Por Qué las Empresas Eligen a{" "}
              <span className="text-[#fa9b0c]">ROMA & ABOGADOS</span>
            </h2>
            <p className="text-[#42604e] text-base sm:text-lg leading-relaxed mb-8">
              En un entorno regulatorio exigente donde las decisiones de SUNAT, SUNAFIL y otros entes estatales pueden poner en riesgo la continuidad de tu empresa, contar con abogados y contadores de alto nivel técnico es la mejor inversión para tu seguridad patrimonial.
            </p>
            <div className="p-6 rounded-2xl bg-[#2b4b38] text-white flex items-start gap-4">
              <Shield className="w-8 h-8 text-[#fa9b0c] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-1">Blindaje Jurídico Permanente</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Asesoría estratégica preventiva para que tu empresa crezca sin sobresaltos ni multas innecesarias.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal x={30} duration={0.7} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="group relative pl-5 border-l-2 border-[#fa9b0c]/40 hover:border-[#fa9b0c] transition-all py-1"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#fa9b0c] shrink-0" />
                    <h3 className="font-bold text-[#2b4b38] text-base sm:text-lg group-hover:text-[#fa9b0c] transition-colors">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-[#42604e] text-sm leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 3: COMPANY FORMATION & CORPORATE SUPPORT
   ════════════════════════════════════════════════════════════════ */
function CompanyFormation() {
  const benefits = [
    {
      icon: Shield,
      title: "Patrimonio Blindado y Seguro",
      description:
        "Separación legal efectiva entre el patrimonio personal y los recursos de la empresa ante cualquier contingencia.",
    },
    {
      icon: Building2,
      title: "Licitaciones con el Estado y RNP",
      description:
        "Estructuramos tu empresa para participar en procesos de compras públicas y licitaciones ante el OSCE.",
    },
    {
      icon: Handshake,
      title: "Acceso a Créditos y Alianzas Corporativas",
      description:
        "Facilidad para acceder al sistema financiero formal y suscribir acuerdos comerciales de alto valor.",
    },
  ];

  return (
    <section id="derecho-corporativo" className="py-20 lg:py-28 bg-white border-t border-[#E8E2D5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
              Derecho Corporativo y Societario
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2b4b38] leading-tight mb-4">
              Constitución de Empresas y{" "}
              <span className="text-[#fa9b0c]">Estructuración Societaria</span>
            </h2>
            <p className="text-[#42604e] text-base sm:text-lg leading-relaxed">
              Formaliza tu negocio de manera ágil y con total respaldo legal. Elaboración de minuta, estatutos a medida, inscripción en SUNARP, RUC y Clave SOL sin complicaciones.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="text-center mb-14">
            <Link
              href="/constitucion-de-empresas"
              className="inline-flex items-center gap-2 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 sm:px-10 py-4 rounded-xl text-base sm:text-lg font-bold transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]"
            >
              Constituir Empresa Ahora
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.title} delay={0.1 * i} duration={0.6}>
                <div className="benefit-item-immersive flex flex-row items-start gap-4 sm:gap-[18px] mb-8 last:mb-0 p-5 rounded-2xl bg-[#FAFBF9] border border-[#E8E2D5]">
                  <div className="benefit-icon-pin w-12 h-12 shrink-0 rounded-xl bg-[#fa9b0c]/15 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#2b4b38]" />
                  </div>
                  <div className="benefit-text-block pt-0.5">
                    <h3 className="benefit-item-title text-[18px] font-bold text-[#2b4b38] mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="benefit-item-desc text-[15px] text-[#42604e] leading-relaxed m-0">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 4: REAL CLIENT TESTIMONIALS
   ════════════════════════════════════════════════════════════════ */
const testimonials = [
  {
    name: "Isaac Picon",
    role: "Gerente General, Constructora & Inmobiliaria IP S.A.C.",
    text: "Roma Abogados logró anular una resolución de determinación de SUNAT por más de S/ 450,000 en el Tribunal Fiscal. Su rigor técnico y claridad estratégica marcaron la diferencia. Son el respaldo legal de confianza para nuestra empresa.",
    stars: 5,
  },
  {
    name: "Dalton Vilchez",
    role: "Director Ejecutivo, Corporación Logística del Centro",
    text: "Teníamos una fiscalización laboral de SUNAFIL con riesgo de multas millonarias. El equipo de Roma Abogados asumió la defensa de forma inmediata y logró archivar el proceso. Su rapidez y conocimiento del procedimiento fueron impecables.",
    stars: 5,
  },
  {
    name: "Juan Reyna",
    role: "Gerente de Operaciones, Retail & Distribución Reyna S.A.C.",
    text: "Contratamos el servicio integrado de Outsourcing Contable y asesoría tributaria permanente. Desde entonces, nuestras declaraciones están impecables, implementamos el SIRE sin contratiempos y tenemos la tranquilidad de contar con blindaje jurídico ante cualquier duda.",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-[#FAFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
              Testimonios de Clientes
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2b4b38]">
              Empresas que Confían en{" "}
              <span className="text-[#fa9b0c]">Nuestra Firma</span>
            </h2>
            <p className="mt-3 text-[#42604e] text-base sm:text-lg">
              Casos reales de éxito y protección jurídica efectiva en los sectores construcción, logística y comercio.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={0.1 * i} duration={0.6}>
              <div className="bg-white rounded-2xl p-7 sm:p-8 h-full border border-[#E8E2D5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 fill-[#fa9b0c] text-[#fa9b0c]"
                      />
                    ))}
                  </div>
                  <p className="text-[#1e3527] leading-relaxed mb-6 italic text-[15px]">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E8E2D5]/80">
                  <h4 className="text-[#2b4b38] font-bold text-base">
                    {t.name}
                  </h4>
                  <p className="text-[#42604e] text-xs font-medium mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 5: AUTHORITY METRICS
   ════════════════════════════════════════════════════════════════ */
const metrics = [
  {
    value: "12+",
    label: "Años de Trayectoria",
    subtext: "Liderando asesorías fiscales y corporativas",
  },
  {
    value: "S/ 15M+",
    label: "Contingencias Desvirtuadas",
    subtext: "En Tribunal Fiscal y SUNAT",
  },
  {
    value: "500+",
    label: "Empresas Asesoradas",
    subtext: "En materia tributaria, laboral y societaria",
  },
  {
    value: "100%",
    label: "Respaldo Técnico Especializado",
    subtext: "PUCP, exintegrantes TF y SUNAT",
  },
];

function AuthorityMetrics() {
  return (
    <section id="cifras-autoridad" className="py-20 lg:py-28 bg-[#2b4b38] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Cifras que Respaldan{" "}
              <span className="text-[#fa9b0c]">Nuestra Trayectoria</span>
            </h2>
            <p className="text-white/75 mt-3 text-base">
              Rigor técnico y experiencia jurídica protegiendo el patrimonio de nuestros clientes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((m) => (
            <ScrollReveal key={m.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fa9b0c] mb-2 font-mono">
                {m.value}
              </div>
              <div className="text-white font-bold text-sm sm:text-base mb-1">{m.label}</div>
              <div className="text-white/60 text-xs sm:text-sm">{m.subtext}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 6: LEGAL BLOG & ARTICLES
   ════════════════════════════════════════════════════════════════ */
function ActualidadTributaria() {
  const articles = [
    {
      tag: "Tributario",
      title: "Fiscalizaciones Definitivas vs. Parciales de SUNAT",
      desc: "Plazos legales, requerimientos de información y cómo interponer quejas oportunas ante el Tribunal Fiscal.",
      date: "Guía Especializada",
    },
    {
      tag: "Laboral",
      title: "Inspecciones SUNAFIL: Protocolos de Cumplimiento y SST",
      desc: "Requisitos indispensables en comités de seguridad, reglamentos internos y prevención del hostigamiento laboral.",
      date: "Compliance Laboral",
    },
    {
      tag: "Contabilidad",
      title: "Implementación del Sistema SIRE de SUNAT sin Contingencias",
      desc: "Cómo validar registros de compras y ventas electrónicos para evitar inconsistencias y multas tributarias.",
      date: "Actualización Normativa",
    },
  ];

  return (
    <section id="actualidad-juridica" className="py-20 lg:py-28 bg-[#FAFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#fa9b0c] font-bold text-sm tracking-wider uppercase mb-3">
              Conocimiento Especializado
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2b4b38]">
              Actualidad Tributaria y Empresarial
            </h2>
            <p className="text-[#42604e] mt-3 text-base sm:text-lg">
              Análisis técnico y criterios legales emitidos por el Tribunal Fiscal, SUNAT y el Poder Judicial.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((art, i) => (
            <ScrollReveal key={art.title} delay={0.1 * i} duration={0.6}>
              <div className="bg-white p-7 rounded-2xl border border-[#E8E2D5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#fa9b0c] bg-[#fa9b0c]/10 px-3 py-1 rounded-full inline-block mb-4">
                    {art.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#2b4b38] mb-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-[#42604e] text-sm leading-relaxed mb-6">
                    {art.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-[#2b4b38]/70 pt-4 border-t border-[#E8E2D5]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <BookOpen className="w-3.5 h-3.5 text-[#fa9b0c]" />
                    {art.date}
                  </span>
                  <Link
                    href="/defensa-tributaria-sunat"
                    className="font-bold text-[#fa9b0c] hover:underline"
                  >
                    Consultar →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 7: HIGH CONVERSION CTA
   ════════════════════════════════════════════════════════════════ */
function HighConversionCTA() {
  const { openModal } = useWhatsAppStore();

  return (
    <section id="contacto-estrategico" className="py-20 lg:py-28 relative overflow-hidden bg-[#2b4b38]">
      {/* Decorative blurs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#fa9b0c]/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#42604e]/30 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#fa9b0c] text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
            Atención Rápida y Personalizada
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
            ¿Requieres Asesoría Tributaria, Laboral o Empresarial Especializada?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo de abogados y contadores está listo para analizar tu caso y ofrecerte una estrategia legal sólida con resultados comprobados.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-7 sm:px-9 py-4 rounded-xl text-[15px] sm:text-lg font-bold transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98] w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              CONSULTAR POR WHATSAPP
            </button>
            <Link
              href="/nosotros-contacto"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-7 sm:px-9 py-4 rounded-xl text-[15px] sm:text-lg font-bold transition-all backdrop-blur-sm w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 text-[#fa9b0c]" />
              AGENDAR UNA REUNIÓN
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   HOME PAGE
   ════════════════════════════════════════════════════════════════ */
export default function Home() {
  useScrollSlug();
  return (
    <SiteLayout>
      <Hero />
      <SectionDivider from="#2b4b38" to="#FAFBF9" />

      {/* Leadership: Roberto Marca & ROMA ABOGADOS */}
      <LeadershipPresentation />

      {/* Services Overview */}
      <Services />

      {/* Pillars Overview */}
      <PillarsOverview />

      {/* Authority & Trust */}
      <AuthorityTrust />

      {/* Corporate & Formation */}
      <CompanyFormation />

      {/* Real Testimonials */}
      <Testimonials />

      {/* Authority Metrics */}
      <AuthorityMetrics />

      {/* Actualidad Tributaria */}
      <ActualidadTributaria />

      {/* Final CTA */}
      <HighConversionCTA />
    </SiteLayout>
  );
}
