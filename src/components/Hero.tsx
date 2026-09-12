"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";
import { useSanityDocument } from "@/sanity/useSanity";
import { homePageQuery } from "@/sanity/queries";
import { getSanityImageUrl } from "@/sanity/image";

/* ═══════════════════════════════════════════════════════════════════════
   HERO SLIDER — Dynamic Rotating Banner (4s infinite cycle)
   5 slides: Inicio → Constitución → Contabilidad → Defensa → Nosotros
   ═══════════════════════════════════════════════════════════════════════ */

const SLIDE_INTERVAL = 4000;

type CtaConfig =
  | { text: string; type: "whatsapp"; serviceId: number | null }
  | { text: string; type: "link"; href: string }
  | { text: string; type: "scroll" };

interface SlideData {
  id: string;
  badge: string;
  h1: React.ReactNode;
  subtitle: string;
  cta1: CtaConfig;
  cta2: CtaConfig;
  badges: string[];
}

const slides: SlideData[] = [
  {
    id: "firma",
    badge: "Firma Especializada en Asesoría Jurídica y Empresarial",
    h1: (
      <>
        Soluciones Jurídicas{" "}
        <br className="hidden sm:block" />
        <span className="text-[#fa9b0c]">Estratégicas y Eficientes.</span>
      </>
    ),
    subtitle:
      "Especialistas en Derecho Tributario, Laboral y Empresarial. Protegemos el valor de tu empresa y garantizamos seguridad jurídica con el más alto rigor técnico.",
    cta1: { text: "Consultar Especialista →", type: "whatsapp", serviceId: null },
    cta2: { text: "Nuestros Servicios", type: "scroll" },
    badges: ["Rigor Técnico PUCP", "Respuesta Inmediata", "Soluciones a Medida"],
  },
  {
    id: "tributario",
    badge: "Derecho Tributario & Defensa Fiscal",
    h1: (
      <>
        Defensa Tributaria{" "}
        <br className="hidden sm:block" />
        Ante <span className="text-[#fa9b0c]">SUNAT y Tribunal Fiscal.</span>
      </>
    ),
    subtitle:
      "Consultoría fiscal preventiva, atención experta a cartas inductivas, fiscalizaciones, recursos de apelación y suspensión de cobranzas coactivas.",
    cta1: {
      text: "Defensa Tributaria Ya",
      type: "link",
      href: "/defensa-tributaria-sunat",
    },
    cta2: {
      text: "Conocer Servicios",
      type: "link",
      href: "/defensa-tributaria-sunat",
    },
    badges: ["Exintegrantes TF & SUNAT", "Cartas Inductivas", "Cobranza Coactiva"],
  },
  {
    id: "laboral",
    badge: "Derecho Laboral & Inspecciones SUNAFIL",
    h1: (
      <>
        Gestión Preventiva y{" "}
        <br className="hidden sm:block" />
        <span className="text-[#fa9b0c]">Defensa Laboral Estratégica.</span>
      </>
    ),
    subtitle:
      "Auditorías laborales de compliance, SST, prevención de contingencias, descargos ante SUNAFIL y defensa judicial bajo la Nueva Ley Procesal del Trabajo.",
    cta1: {
      text: "Asesoría Laboral",
      type: "link",
      href: "/derecho-laboral",
    },
    cta2: {
      text: "Ver Casos Laborales",
      type: "link",
      href: "/derecho-laboral",
    },
    badges: ["Inspecciones SUNAFIL", "Auditorías de Cumplimiento", "Litigios Laborales"],
  },
  {
    id: "contable",
    badge: "Outsourcing Contable & Tributario",
    h1: (
      <>
        Contabilidad Integral con{" "}
        <br className="hidden sm:block" />
        <span className="text-[#fa9b0c]">Blindaje Legal Permanente.</span>
      </>
    ),
    subtitle:
      "Teneduría contable, determinación mensual de tributos, implementación del SIRE y liquidación de planillas PLAME respaldadas por firmas aliadas de primer nivel.",
    cta1: {
      text: "Planes de Outsourcing",
      type: "link",
      href: "/contabilidad-tributacion",
    },
    cta2: {
      text: "Ver Detalles",
      type: "link",
      href: "/contabilidad-tributacion",
    },
    badges: ["Implementación SIRE", "Libros Electrónicos", "Alianzas Estratégicas"],
  },
  {
    id: "empresarial",
    badge: "Derecho Empresarial, Civil & OSCE",
    h1: (
      <>
        Derecho Corporativo,{" "}
        <br className="hidden sm:block" />
        Contratos y <span className="text-[#fa9b0c]">Licitaciones del Estado.</span>
      </>
    ),
    subtitle:
      "Constitución de sociedades (SAC, SRL, EIRL), reorganizaciones societarias, contratos civiles/comerciales y asesoría en contrataciones públicas con OSCE.",
    cta1: {
      text: "Asesoría Corporativa",
      type: "link",
      href: "/constitucion-de-empresas",
    },
    cta2: {
      text: "Ver Áreas de Práctica",
      type: "link",
      href: "/constitucion-de-empresas",
    },
    badges: ["Gobierno Corporativo", "Contratos Comerciales", "Registro RNP / OSCE"],
  },
];

/* ═══ Counter component ═══ */
function CounterItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value, 2500);
  return (
    <div className="text-center">
      <span
        ref={ref}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight"
      >
        {count}
        {suffix}
      </span>
      <p className="text-white/70 text-xs sm:text-sm mt-1 font-medium">{label}</p>
    </div>
  );
}

/* ═══ CTA Renderer ═══ */
function CtaButton({
  cta,
  variant,
}: {
  cta: CtaConfig;
  variant: "primary" | "secondary";
}) {
  const { openModal } = useWhatsAppStore();

  const basePrimary =
    "inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98]";
  const baseSecondary =
    "inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm";
  const cls = variant === "primary" ? basePrimary : baseSecondary;

  if (cta.type === "link") {
    return (
      <Link href={cta.href} className={cls}>
        {cta.text}
      </Link>
    );
  }

  const handleClick = () => {
    if (cta.type === "whatsapp") {
      openModal(cta.serviceId ?? undefined);
    } else if (cta.type === "scroll") {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <button onClick={handleClick} className={cls}>
      {cta.text}
      {cta.type === "whatsapp" && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   HERO SLIDER COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
export function Hero() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const sanityHome = useSanityDocument<any>(homePageQuery, null);

  const activeSlides: SlideData[] = useMemo(() => {
    if (!sanityHome?.heroSlides || !Array.isArray(sanityHome.heroSlides) || sanityHome.heroSlides.length === 0) {
      return slides;
    }
    return sanityHome.heroSlides.map((s: any, idx: number) => {
      const fallback = slides[idx % slides.length];
      const h1 = (
        <>
          {s.titlePart1 || fallback.badge}{" "}
          {s.titleHighlight1 && <span className="text-[#fa9b0c]">{s.titleHighlight1}</span>}{" "}
          {s.titlePart2 && (
            <>
              <br className="hidden sm:block" />
              {s.titlePart2}{" "}
            </>
          )}
          {s.titleHighlight2 && <span className="text-[#fa9b0c]">{s.titleHighlight2}</span>}
        </>
      );
      return {
        id: `sanity-slide-${idx}`,
        badge: s.badge || fallback.badge,
        h1,
        subtitle: s.subtitle || fallback.subtitle,
        cta1: s.cta1Link === "#whatsapp" ? { text: s.cta1Text || "Consultar Especialista →", type: "whatsapp", serviceId: null } : { text: s.cta1Text || "Consultar", type: "link", href: s.cta1Link || "#" },
        cta2: s.cta2Link === "#servicios" ? { text: s.cta2Text || "Nuestros Servicios", type: "scroll" } : { text: s.cta2Text || "Ver más", type: "link", href: s.cta2Link || "#" },
        badges: s.badges || fallback.badges,
      };
    });
  }, [sanityHome]);

  const slide = activeSlides[active % activeSlides.length];

  /* Auto-rotation: 4s interval, pauses on hover */
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % activeSlides.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, activeSlides.length]);

  return (
    <section
      className="relative flex overflow-hidden hero-fade-top"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ═══ LAYER 0 — Slide Backgrounds (crossfade) ═══ */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`hero-slide-bg${index === active ? " hero-slide-active" : ""}`}
          data-slide={index}
          aria-hidden={index !== active}
        />
      ))}

      {/* ═══ LAYER 1 — Brand Overlay (shared) ═══ */}
      <div className="hero-brand-overlay" aria-hidden="true" />

      {/* ═══ LAYER 2 — Decorative Blurs + Dot Pattern ═══ */}
      <div className="hero-decor-layer">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#42604e]/30 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#fa9b0c]/15 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ═══ LAYER 20 — Content (animated per slide) ═══ */}
      <div className="hero-content max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="hero-text-col">
          {/* Animated text wrapper — key re-triggers entrance animation */}
          <motion.div
            key={`slide-text-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2"
            >
              <Shield className="w-3.5 h-3.5 text-[#fa9b0c]" />
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">
                {slide.badge}
              </span>
            </motion.div>

            {/* H1 — with staggered translateY entrance */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-h1 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight"
            >
              {slide.h1}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle mt-6 text-[15px] sm:text-[17px] lg:text-[18px] text-[#FAFBF9]/85 max-w-lg leading-relaxed font-light"
            >
              {slide.subtitle}
            </motion.p>

            {/* CTAs — Functional actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-ctas mt-10 flex flex-col sm:flex-row gap-3.5"
            >
              <CtaButton cta={slide.cta1} variant="primary" />
              <CtaButton cta={slide.cta2} variant="secondary" />
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hero-trust mt-7 flex flex-wrap gap-x-5 gap-y-2 text-white/60 text-xs sm:text-sm"
            >
              {slide.badges.map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#fa9b0c]" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ═══ COUNTERS — Fixed authority anchors (don't rotate) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="hero-counters mt-14 lg:mt-20 grid grid-cols-3 gap-3 sm:gap-6 hero-text-col"
        >
          {[
            { value: 12, suffix: "+", label: "Años de Trayectoria" },
            { value: 15, suffix: "M+", label: "S/ en Contingencias Anuladas" },
            { value: 99, suffix: "%", label: "Resoluciones Favorables" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center"
            >
              <CounterItem
                value={item.value}
                suffix={item.suffix}
                label={item.label}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ═══ NAVIGATION DOTS — Bottom left ═══ */}
      <div className="hero-slider-dots absolute bottom-16 left-4 sm:left-8 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`transition-all duration-300 cursor-pointer ${
              index === active
                ? "w-8 h-2.5 bg-[#fa9b0c] rounded-full"
                : "w-2.5 h-2.5 bg-white/35 hover:bg-white/60 rounded-full"
            }`}
            aria-label={`Diapositiva ${index + 1}`}
          />
        ))}
      </div>

      {/* ═══ PROGRESS BAR — 4s cycle indicator ═══ */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-[3px] bg-white/[0.08]">
        <div
          key={`progress-${active}-${isPaused ? "p" : "r"}`}
          className={`hero-progress-fill h-full bg-gradient-to-r from-[#fa9b0c] to-[#eda340] ${isPaused ? "paused" : ""}`}
        />
      </div>

      {/* Scroll down indicator */}
      <ScrollDownIndicator />
    </section>
  );
}
