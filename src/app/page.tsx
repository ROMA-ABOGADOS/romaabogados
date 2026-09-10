"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ConferencistaGallery } from "@/components/ConferencistaGallery";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { motion } from "framer-motion";
import { useSanityDocument } from "@/sanity/useSanity";
import { homePageQuery } from "@/sanity/queries";
import { getSanityImageUrl } from "@/sanity/image";
import {
  MessageCircle,
  CheckCircle2,
  Shield,
  Building2,
  Handshake,
  Star,
  Users,
  Calendar,
  ArrowRight,
  Award,
  Facebook,
  Instagram,
  Video,
  Phone,
} from "lucide-react";

/* ════════════════════════════════════════════════════════════════
   SECTION 0: PRESENTATION — Michael Jhon B. Profile
   ════════════════════════════════════════════════════════════════ */
function FounderPresentation() {
  const { openModal } = useWhatsAppStore();
  const sanityHome = useSanityDocument<any>(homePageQuery, null);
  const founder = sanityHome?.founder;

  const title = founder?.title || "ROMA ABOGADOS";
  const subtitle = founder?.subtitle || "ESTUDIO JURÍDICO & TRIBUTARIO";
  const quote = founder?.quote || "Defendemos tus derechos, protegemos tu patrimonio y aseguramos la estabilidad de tu empresa.";
  const sectionTitle = founder?.sectionTitle || "Respaldo Legal y Empresarial";
  const sectionSubtitle = founder?.sectionSubtitle || "Acompañamos a empresarios y emprendedores con soluciones legales, contables y de defensa fiscal de alto impacto.";
  const imageSrc = founder?.image ? getSanityImageUrl(founder.image, "/jhon-fundador.webp") : "/jhon-fundador.webp";

  const actionButtons = [
    { label: "Seminarios Gratuitos", href: "#capacitacion-gratuita", icon: Video },
    { label: "WhatsApp Grupo Emprendedores", href: "https://chat.whatsapp.com/", icon: MessageCircle, external: true },
    { label: "Consulta Tributaria Empresarial", action: () => openModal(), icon: Phone },
    { label: "Reservar una reunión", action: () => openModal(), icon: Calendar },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Video, href: "#", label: "TikTok" },
  ];

  return (
    <section id="fundador" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT: Photo + Name + Title + Quote */}
          <ScrollReveal x={-30} duration={0.7} className="flex flex-col items-center text-center">
            {/* Photo with bottom fade */}
            <div className="relative w-[220px] sm:w-[260px] lg:w-[280px] mb-6">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={imageSrc}
                  alt={`${title} - ${subtitle}`}
                  className="w-full h-[280px] sm:h-[320px] lg:h-[340px] object-cover object-top"
                />
                {/* Bottom fade gradient */}
                <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/70 to-transparent pointer-events-none" />
              </div>
              {/* Decorative accent lines (brand colors) */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-[#183D2F] rounded-tl-2xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-[#C5A572] rounded-br-2xl" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#183D2F] tracking-tight leading-tight">
              {title}
            </h3>
            <p className="text-[#C5A572] font-bold text-sm sm:text-base tracking-[0.1em] uppercase mt-2">
              {subtitle}
            </p>
            <p className="text-[#183D2F]/80 text-base sm:text-lg italic leading-relaxed mt-4 max-w-sm">
              &ldquo;{quote}&rdquo;
            </p>
          </ScrollReveal>

          {/* RIGHT: Title + Subtitle + Social + Buttons */}
          <ScrollReveal x={30} duration={0.7} className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#183D2F] leading-tight mb-3">
              {sectionTitle}
            </h2>
            <p className="text-[#183D2F]/70 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
              {sectionSubtitle}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl bg-white border border-[#E8E2D5] hover:border-[#C5A572] hover:bg-[#C5A572]/10 flex items-center justify-center text-[#183D2F] hover:text-[#C5A572] transition-all shadow-sm"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Action Buttons — Full Width on Mobile */}
            <div className="flex flex-col gap-3 w-full max-w-md">
              {actionButtons.map((btn) => {
                const Icon = btn.icon;
                if (btn.external) {
                  return (
                    <a
                      key={btn.label}
                      href={btn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center gap-3 bg-[#183D2F] hover:bg-[#22523F] text-[#FAF8F5] px-5 py-3.5 rounded-xl text-[15px] font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                    >
                      <Icon className="w-5 h-5 text-[#C5A572] flex-shrink-0" />
                      {btn.label}
                    </a>
                  );
                }
                if (btn.action) {
                  return (
                    <button
                      key={btn.label}
                      type="button"
                      onClick={btn.action}
                      className="w-full flex items-center gap-3 bg-[#183D2F] hover:bg-[#22523F] text-[#FAF8F5] px-5 py-3.5 rounded-xl text-[15px] font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                    >
                      <Icon className="w-5 h-5 text-[#C5A572] flex-shrink-0" />
                      {btn.label}
                    </button>
                  );
                }
                return (
                  <a
                    key={btn.label}
                    href={btn.href}
                    className="w-full flex items-center gap-3 bg-[#183D2F] hover:bg-[#22523F] text-[#FAF8F5] px-5 py-3.5 rounded-xl text-[15px] font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                  >
                    <Icon className="w-5 h-5 text-[#C5A572] flex-shrink-0" />
                    {btn.label}
                  </a>
                );
              })}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 1: CONFERENCE CAPTURE CARD
   ════════════════════════════════════════════════════════════════ */
function ConferenceCaptureCard() {
  const { openModal } = useWhatsAppStore();

  return (
    <section id="capacitacion-gratuita" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal duration={0.7}>
          <div className="bg-white rounded-3xl shadow-lg shadow-[#183D2F]/[0.04] border border-[#E8E2D5] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
              {/* Left: Text content */}
              <div className="p-8 sm:p-10 lg:p-14">
                <span className="inline-block bg-[#C5A572]/15 text-[#183D2F] text-xs sm:text-sm font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
                  🎓 CAPACITACIÓN GRATUITA
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#183D2F] leading-tight mb-4">
                  Accede Sin Costo a Nuestra Conferencia en Vivo
                </h2>
                <p className="text-[#C5A572] font-semibold text-base sm:text-lg mb-4">
                  Cómo Pagar Menos Impuesto y Ganar Más Dinero, Cumpliendo la Ley
                </p>
                <p className="text-[#364A41] leading-relaxed mb-8">
                  Miles de emprendedores ya están aplicando estos conocimientos y
                  transformando su negocio con estrategias simples pero poderosas.
                </p>
                <button
                  onClick={() => openModal(10)}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#C5A572] hover:bg-[#B39360] text-[#112C22] px-7 sm:px-9 py-4 sm:py-[18px] rounded-xl text-[15px] sm:text-lg font-bold transition-all shadow-lg shadow-[#C5A572]/25 hover:shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  ¡INSCRÍBETE GRATIS AHORA!
                </button>
              </div>

              {/* Right: Decorative visual */}
              <div className="relative hidden lg:flex items-center justify-center min-h-[340px] bg-gradient-to-br from-[#183D2F] via-[#112C22] to-[#22523F] p-12">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#C5A572]/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#183D2F]/20 rounded-full blur-3xl" />
                <div className="relative text-center">
                  <div className="w-28 h-28 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center">
                    <Calendar className="w-14 h-14 text-[#C5A572]" />
                  </div>
                  <p className="text-white font-bold text-xl mb-1">EN VIVO</p>
                  <p className="text-white/70 text-sm">Capacitación Tributaria</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 2: CONFERENCE SPEAKER AUTHORITY
   ════════════════════════════════════════════════════════════════ */
function SpeakerAuthority() {
  const achievements = [
    "Especialista en Tributación y Optimización Fiscal Legal",
    "Asesor de exitosos Contribuyentes",
    "Mentor y Coach en PNL y Superación Personal",
  ];

  return (
    <section id="conferencista" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: label -> title -> image -> trajectory | Desktop: image left, text right */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          {/* 1. Text header - order-1 mobile (first), order-2 desktop (right col) */}
          <ScrollReveal x={30} duration={0.7} className="order-1 lg:order-2">
            <span className="inline-block text-[#C5A572] font-semibold text-sm tracking-wider uppercase mb-4">
              EXPERIENCIA Y RESPALDO LEGAL
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#183D2F] leading-tight mb-5">
              <span className="whitespace-nowrap">ROMA ABOGADOS:</span>{" "}
              <span className="text-[#C5A572]">Trayectoria sólida</span> protegiendo
              patrimonios en el Perú
            </h2>
          </ScrollReveal>

          {/* 2. Gallery Carousel - order-2 mobile, order-1 desktop (left col, spans 2 rows) */}
          <ScrollReveal x={-30} duration={0.7} className="order-2 lg:order-1 lg:row-span-2">
            <ConferencistaGallery />
          </ScrollReveal>

          {/* 3. Text body (trajectory + achievements) - order-3 mobile (after image), right col row 2 desktop */}
          <ScrollReveal x={30} duration={0.7} className="order-3 lg:order-3 lg:col-start-2">
            <p className="text-[#364A41] leading-relaxed mb-8">
              Con una trayectoria de excelencia en derecho corporativo, asesoría tributaria,
              contabilidad integral y defensa legal frente a SUNAT, el equipo de ROMA ABOGADOS ha
              ayudado a cientos de empresas a operar con seguridad jurídica, optimizando su
              gestión y blindando su patrimonio frente a contingencias.
            </p>
            <ul className="space-y-4">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#C5A572] flex-shrink-0 mt-0.5" />
                  <span className="text-[#183D2F] font-bold text-base sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 3: COMPANY FORMATION + RUC 20 BENEFITS
   ════════════════════════════════════════════════════════════════ */
function CompanyFormation() {
  const { openModal } = useWhatsAppStore();

  const benefits = [
    {
      icon: Shield,
      title: "Patrimonio Seguro",
      description:
        "Tus recursos y patrimonio estarán seguros frente a cualquier imprevisto.",
    },
    {
      icon: Building2,
      title: "Licitaciones con el Estado",
      description:
        "Podrás trabajar con el Estado y aprovechar sus programas empresariales.",
    },
    {
      icon: Handshake,
      title: "Créditos y Alianzas",
      description:
        "Amplía tus oportunidades comerciales al trabajar con empresas de mayor nivel y facilita el acceso a futuros créditos empresariales.",
    },
  ];

  return (
    <section id="constitucion-empresas" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#183D2F] leading-tight mb-4">
              Constituye tu empresa{" "}
              <span className="text-[#C5A572]">Precios a Consultar</span>
            </h2>
            <p className="text-[#364A41] text-lg leading-relaxed">
              Formaliza tu negocio de manera rápida y segura. Incluye minuta,
              partida registral, RUC, Clave SOL y asesoría personalizada para que
              operes legalmente desde el primer día.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="text-center mb-14">
            <Link
              href="/constitucion-de-empresas"
              className="inline-flex items-center gap-2 bg-[#C5A572] hover:bg-[#B39360] text-[#112C22] px-8 sm:px-10 py-4 rounded-xl text-base sm:text-lg font-bold transition-all shadow-lg shadow-[#C5A572]/25 hover:shadow-xl active:scale-[0.98]"
            >
              ¡Constituir Ya!
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.title} delay={0.1 * i} duration={0.6}>
                <div className="benefit-item-immersive flex flex-row items-start gap-4 sm:gap-[18px] mb-9 last:mb-0">
                  <div className="benefit-icon-pin w-[46px] h-[46px] shrink-0 rounded-[10px] bg-[#C5A572]/15 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#183D2F]" />
                  </div>
                  <div className="benefit-text-block pt-0.5">
                    <h3 className="benefit-item-title text-[18px] font-bold text-[#183D2F] mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="benefit-item-desc text-[14px] text-[#364A41] leading-[1.5] m-0">
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
   SECTION 4: TESTIMONIALS
   ════════════════════════════════════════════════════════════════ */
const testimonials = [
  {
    name: "Fernando",
    text: "Gracias a la asesoría tributaria y legal de Roma Abogados, logré ordenar mi empresa y reducir contingencias. Su equipo me explicó cada paso con claridad y profesionalismo. Totalmente recomendados.",
    stars: 5,
  },
  {
    name: "María Fernanda",
    text: "Constituí mi empresa con ellos y el proceso fue rápido y sin complicaciones. Desde la minuta hasta el RUC, todo quedó perfecto. Ahora opero con total tranquilidad y respaldo legal.",
    stars: 5,
  },
  {
    name: "Juan",
    text: "La asesoría estratégica que recibí fue clave para el crecimiento de mi negocio. Me ayudaron a tomar decisiones financieras correctas y a cumplir con todas mis obligaciones tributarias.",
    stars: 5,
  },
  {
    name: "Lilia",
    text: "Llevo más de 2 años con su servicio de contabilidad integral y cada mes me siento tranquila sabiendo que mis declaraciones están correctas. Excelente equipo y atención personalizada.",
    stars: 5,
  },
];

function Testimonials() {
  const sanityHome = useSanityDocument<any>(homePageQuery, null);
  const activeTestimonials =
    sanityHome?.testimonials && sanityHome.testimonials.length > 0
      ? sanityHome.testimonials
      : testimonials;

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#C5A572] font-semibold text-sm tracking-wider uppercase mb-4">
              Testimonios
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#183D2F]">
              Nuestros Clientes{" "}
              <span className="text-[#C5A572]">Hablan Por Nosotros</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {activeTestimonials.map((t: any, i: number) => (
            <ScrollReveal key={t.name} delay={0.1 * i} duration={0.6}>
              <div className="bg-white rounded-2xl p-7 sm:p-8 h-full border border-[#E8E2D5] shadow-sm hover:shadow-md transition-shadow">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars || 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-[#C5A572] text-[#C5A572]"
                    />
                  ))}
                </div>
                <p className="text-[#142820] leading-relaxed mb-6 italic text-[15px] sm:text-base">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#183D2F]/10 flex items-center justify-center">
                    <span className="text-[#183D2F] font-bold text-sm">
                      {t.name
                        .split(" ")
                        .map((w: string) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>
                  <span className="text-[#183D2F] font-bold text-sm">
                    {t.name}
                  </span>
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
    value: "20+",
    label: "Años de Experiencia",
    subtext: "Potenciando negocios en el Perú",
  },
  {
    value: "5,000+",
    label: "Empresas Constituidas",
    subtext: "Con RUC 20 activo y sin complicaciones",
  },
  {
    value: "15,000+",
    label: "Emprendedores Capacitados",
    subtext: "En talleres, seminarios y tips tributarios",
  },
  {
    value: "Equipo Experto",
    label: "Colaboradores",
    subtext: "Contadores y abogados listos para protegerte",
  },
];

function AuthorityMetrics() {
  return (
    <section id="metricas" className="py-20 lg:py-28 bg-[#183D2F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Números que{" "}
              <span className="text-[#C5A572]">Hablan por Nosotros</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={0.1 * i} duration={0.6}>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C5A572] mb-2">
                  {m.value}
                </p>
                <p className="text-white font-semibold text-base sm:text-lg mb-1">
                  {m.label}
                </p>
                <p className="text-white/60 text-sm">{m.subtext}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 6: HIGH CONVERSION CTA
   ════════════════════════════════════════════════════════════════ */
function HighConversionCTA() {
  const { openModal } = useWhatsAppStore();

  return (
    <section id="contacto" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #183D2F 0%, #112C22 100%)",
        }}
      />
      {/* Decorative blurs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C5A572]/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#22523F]/30 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white leading-tight mb-8 max-w-3xl mx-auto">
            ¡No busques más! Nosotros nos encargamos de tus declaraciones y te
            ayudamos a evitar inconvenientes con SUNAT.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/constitucion-de-empresas"
              className="inline-flex items-center justify-center gap-2 bg-[#C5A572] hover:bg-[#B39360] text-[#112C22] px-7 sm:px-9 py-4 rounded-xl text-[15px] sm:text-lg font-bold transition-all shadow-lg shadow-[#C5A572]/25 hover:shadow-xl active:scale-[0.98] w-full sm:w-auto"
            >
              <Building2 className="w-5 h-5" />
              QUIERO CONSTITUIR MI EMPRESA AHORA
            </Link>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/40 text-white px-7 sm:px-9 py-4 rounded-xl text-[15px] sm:text-lg font-bold transition-all backdrop-blur-sm w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              CONSULTORÍA GRATUITA
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
      <SectionDivider from="#112C22" to="#FAF8F5" />

      {/* Section 1: Conference Capture Card */}
      <ConferenceCaptureCard />

      {/* Section 3: Company Formation + RUC 20 Benefits */}
      <CompanyFormation />

      {/* Services */}
      <Services />

      <SectionDivider from="#FAF8F5" to="#FAF8F5" />

      {/* Section 0: Founder Presentation */}
      <FounderPresentation />

      {/* Section 2: Speaker Authority */}
      <SpeakerAuthority />

      {/* Section 4: Testimonials */}
      <Testimonials />

      {/* Section 5: Authority Metrics (forest green bg) */}
      <AuthorityMetrics />

      {/* Section 6: High Conversion CTA */}
      <HighConversionCTA />
    </SiteLayout>
  );
}
