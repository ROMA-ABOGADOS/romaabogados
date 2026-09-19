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

  const quote =
    founder?.quote ||
    "Brindamos soluciones jurídicas eficientes y estratégicas con el más alto rigor técnico para proteger y potenciar tu negocio.";

  return (
    <section id="socio-principal" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Full Editorial Executive Portrait */}
          <ScrollReveal x={-30} duration={0.7} className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#1e3527] border border-[#2b4b38]/20 group">
              <div className="aspect-[3/4] w-full relative overflow-hidden">
                <img
                  src="/images/hero/hero-subpages-roberto.webp"
                  alt="Dr. Roberto Marca - Socio Principal ROMA & ABOGADOS"
                  className="w-full h-full object-cover object-[center_12%] transform group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                {/* Elegant dark vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#15251b] via-[#15251b]/40 to-transparent" />
                
                {/* Subtle top gold accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent" />

                {/* Overlay Caption at bottom of photo */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#fa9b0c] text-[#1e3527] text-xs font-bold uppercase tracking-wider mb-2">
                    Socio Principal
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                    Roberto Marca
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-1 leading-relaxed">
                    Exintegrante del Tribunal Fiscal y de la SUNAT. Abogado por la Pontificia Universidad Católica del Perú (PUCP).
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Institutional Authority (Estudio Ugaz Style) */}
          <ScrollReveal x={30} duration={0.7} className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
              Acerca de la Firma • Liderazgo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2b4b38] leading-[1.18] mb-6">
              Excelencia Jurídica y Visión de Negocios
            </h2>

            {/* Editorial Quote */}
            <blockquote className="border-l-2 border-[#fa9b0c] pl-5 italic text-[#2b4b38]/90 font-serif text-lg sm:text-xl mb-6 leading-relaxed">
              &ldquo;{quote}&rdquo;
            </blockquote>

            <p className="text-[#42604e] text-base leading-relaxed mb-8">
              ROMA & ABOGADOS es una firma de profesionales especializada en asesoría tributaria, laboral y empresarial. Combinamos la experiencia en organismos del Estado con una visión corporativa ágil y estratégica para blindar las operaciones de su empresa.
            </p>

            {/* 2 Strategic Pillars (Ugaz Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div className="p-5 rounded-xl bg-[#FAFBF9] border border-[#2b4b38]/10 hover:border-[#fa9b0c]/30 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-[#2b4b38]">
                  <Scale className="w-5 h-5 text-[#fa9b0c]" />
                  <h4 className="font-serif text-lg font-normal text-[#2b4b38]">Rigor Fiscal y SUNAT</h4>
                </div>
                <p className="text-xs text-[#42604e] leading-relaxed">
                  Defensa especializada en fiscalizaciones complejas y litigios ante el Tribunal Fiscal.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAFBF9] border border-[#2b4b38]/10 hover:border-[#fa9b0c]/30 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-[#2b4b38]">
                  <Shield className="w-5 h-5 text-[#fa9b0c]" />
                  <h4 className="font-serif text-lg font-normal text-[#2b4b38]">Blindaje Corporativo</h4>
                </div>
                <p className="text-xs text-[#42604e] leading-relaxed">
                  Auditorías laborales SUNAFIL, comités SST y formalización societaria integral.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="button"
                onClick={() => openModal(null)}
                className="inline-flex items-center justify-center gap-2.5 bg-[#2b4b38] hover:bg-[#1e3527] text-white px-7 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-[#fa9b0c]" />
                Agendar una Consulta
              </button>
              <Link
                href="/nosotros-contacto"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#FAFBF9] text-[#2b4b38] border border-[#2b4b38]/20 hover:border-[#fa9b0c] px-7 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all"
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
   SECTION: REAL CLIENT TESTIMONIALS
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
    <section id="testimonios" className="py-24 lg:py-32 bg-[#FAFBF9] border-t border-[#2b4b38]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
              Casos Reales • Testimonios
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2b4b38] font-normal leading-[1.18]">
              Empresas que Confían en{" "}
              <span className="text-[#fa9b0c]">Nuestra Firma</span>
            </h2>
            <p className="mt-4 text-[#42604e] text-base sm:text-lg leading-relaxed">
              Resultados verificados y protección jurídica estratégica en los sectores inmobiliario, logística y comercio corporativo.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={0.1 * i} duration={0.6}>
              <div className="bg-white rounded-2xl p-8 sm:p-9 h-full border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-[#fa9b0c] text-[#fa9b0c]"
                      />
                    ))}
                  </div>
                  <blockquote className="text-[#2b4b38]/90 font-serif italic leading-relaxed mb-8 text-base sm:text-[17px]">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                </div>
                <div className="pt-5 border-t border-[#2b4b38]/10">
                  <h4 className="font-serif text-lg font-normal text-[#2b4b38]">
                    {t.name}
                  </h4>
                  <p className="text-[#42604e] text-xs font-medium mt-1 leading-snug">
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
   SECTION: LEGAL BLOG & ARTICLES (Estudio Ugaz Publication Style)
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
      title: "Cierre Contable y Cumplimiento Tributario Preventivo",
      desc: "Estrategias contables bajo NIIF y conciliaciones periódicas para asegurar cero contingencias ante SUNAT.",
      date: "Gestión Corporativa",
    },
  ];

  return (
    <section id="actualidad-juridica" className="py-24 lg:py-32 bg-white border-t border-[#2b4b38]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.2em] uppercase mb-3">
              Análisis y Opinión Legal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2b4b38] font-normal leading-[1.18]">
              Actualidad Tributaria y Empresarial
            </h2>
            <p className="text-[#42604e] mt-4 text-base sm:text-lg leading-relaxed">
              Criterios técnicos, resoluciones del Tribunal Fiscal y jurisprudencia clave para la toma de decisiones.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((art, i) => (
            <ScrollReveal key={art.title} delay={0.1 * i} duration={0.6}>
              <div className="bg-[#FAFBF9] p-8 sm:p-9 rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative group">
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#fa9b0c] bg-[#fa9b0c]/10 px-3 py-1 rounded-full inline-block mb-4">
                    {art.tag}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2b4b38] mb-3 leading-snug group-hover:text-[#fa9b0c] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-[#42604e] text-sm leading-relaxed mb-6">
                    {art.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-[#2b4b38]/70 pt-5 border-t border-[#2b4b38]/10">
                  <span className="flex items-center gap-1.5 font-medium">
                    <BookOpen className="w-3.5 h-3.5 text-[#fa9b0c]" />
                    {art.date}
                  </span>
                  <Link
                    href="/defensa-tributaria-sunat"
                    className="font-semibold text-[#fa9b0c] hover:underline inline-flex items-center gap-1"
                  >
                    Consultar Especialidad →
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
   SECTION 7: HIGH CONVERSION CTA (Estudio Ugaz Authority Banner)
   ════════════════════════════════════════════════════════════════ */
function HighConversionCTA() {
  const { openModal } = useWhatsAppStore();

  return (
    <section id="contacto-estrategico" className="py-24 lg:py-32 relative overflow-hidden bg-[#1e3527] text-white">
      {/* Subtle background blurs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#fa9b0c]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#42604e]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-sm">
            Atención Rápida y Personalizada
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.18] mb-6 max-w-3xl mx-auto">
            ¿Requieres Asesoría Tributaria, Laboral o Empresarial Especializada?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Nuestro equipo de abogados y contadores está listo para analizar tu caso con estricta confidencialidad y diseñar una estrategia jurídica sólida.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98] w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar por WhatsApp
            </button>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide transition-all backdrop-blur-sm w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 text-[#fa9b0c]" />
              Agendar una Consulta
            </button>
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

      {/* Leadership: Roberto Marca & ROMA ABOGADOS */}
      <LeadershipPresentation />

      {/* Services Overview - 4 Practice Areas */}
      <Services />

      {/* Real Testimonials */}
      <Testimonials />

      {/* Actualidad Jurídica */}
      <ActualidadTributaria />

      {/* Final CTA */}
      <HighConversionCTA />
    </SiteLayout>
  );
}
