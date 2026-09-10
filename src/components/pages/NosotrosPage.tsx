"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import {
  Target, Eye, CheckCircle2, Monitor, Award, Users, MessageCircle,
  ChevronRight, Mail, MapPin, Clock, Send, ArrowRight, Shield
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { useWhatsAppStore, services } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";
import { useState } from "react";
import { useSanityDocument } from "@/sanity/useSanity";
import { pageNosotrosQuery } from "@/sanity/queries";
import { getSanityImageUrl } from "@/sanity/image";

const columns = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Brindar soluciones jurídicas, tributarias y contables de excelencia que protejan el patrimonio de nuestros clientes y aseguren la estabilidad jurídica y financiera de sus negocios. Trabajamos con transparencia, rigurosidad técnica y un compromiso ético inquebrantable.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Consolidarnos como el estudio jurídico y tributario de referencia en el Perú, reconocido por nuestra solvencia técnica, visión estratégica e innovación en la defensa patrimonial y el crecimiento corporativo.",
  },
];

const values = [
  { label: "Honestidad", description: "Transparencia total en cada proceso, decisión y reporte entregado a nuestros clientes." },
  { label: "Compromiso", description: "Nos dedicamos al 100% a cada caso. Tu estabilidad jurídica y tributaria es nuestra prioridad." },
  { label: "Innovación Tecnológica", description: "Utilizamos software y herramientas digitales avanzadas para una gestión ágil y eficiente." },
  { label: "Especialización Permanente", description: "Nuestro equipo se capacita constantemente para dominar los últimos cambios normativos." },
  { label: "Orientación al Resultado", description: "Buscamos optimizar tu situación legal y tributaria garantizando estricto apego a la ley." },
  { label: "Accesibilidad", description: "Atención personalizada y estratégica para empresas de todos los sectores y tamaños." },
];

const credentials = [
  { icon: Monitor, label: "Software contable y legal de última generación" },
  { icon: Award, label: "Equipo especializado y multidisciplinario" },
  { icon: Users, label: "Atención personalizada y dedicada" },
  { icon: CheckCircle2, label: "Licencias y certificaciones actualizadas" },
];

const contactInfo = [
  { icon: MessageCircle, title: "WhatsApp", detail: "+51 943 366 950", description: "Respuesta inmediata", color: "text-whatsapp", bg: "bg-whatsapp/10" },
  { icon: Mail, title: "Email", detail: "contacto@romaabogados.pe", description: "Respuesta en 24h", color: "text-navy", bg: "bg-navy/10" },
  { icon: MapPin, title: "Ubicación", detail: "Lima, Perú", description: "Atención virtual y presencial", color: "text-purple", bg: "bg-purple/10" },
  { icon: Clock, title: "Horario", detail: "Lun - Vie: 8:00 - 18:00", description: "Sáb: 9:00 - 13:00", color: "text-emerald", bg: "bg-emerald/10" },
];

export function NosotrosPage() {
  useScrollSlug();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation(0.1);
  const { ref: credRef, isVisible: credVisible } = useScrollAnimation(0.1);
  const { openModal } = useWhatsAppStore();
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const sanityDoc = useSanityDocument<any>(pageNosotrosQuery, null);

  const heroImageSrc = sanityDoc?.heroImage
    ? getSanityImageUrl(sanityDoc.heroImage, "/jhon-nosotros.webp")
    : "/jhon-nosotros.webp";

  const heroSubtitle =
    sanityDoc?.heroSubtitle ||
    "Transparencia, solvencia jurídica y resultados medibles. Conoce al estudio que protege y respalda el crecimiento de tu empresa en Perú.";

  const missionText = sanityDoc?.mission || columns[0].description;
  const visionText = sanityDoc?.vision || columns[1].description;
  const activeValues =
    sanityDoc?.values && sanityDoc.values.length > 0 ? sanityDoc.values : values;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const serviceName = services.find((s) => s.name === formData.service)?.name || formData.service || "General";
    const message = `Hola *ROMA ABOGADOS*.\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nServicio: ${serviceName}\nMensaje: ${formData.message}`;
    const url = `https://api.whatsapp.com/send?phone=51943366950&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <SiteLayout>
      {/* ═══ SUBPAGE HERO — Responsive Layout ═══ */}
      <section id="hero" className="relative w-full min-h-screen min-h-[100dvh] flex items-center overflow-hidden bg-[#112C22] pt-[100px] pb-12">
        {/* Background image layer */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src={heroImageSrc}
            alt="Especialista Roma Abogados"
            className="w-full h-full object-cover object-[center_15%] md:object-[60%_20%] lg:object-[70%_22%] xl:object-[75%_20%] scale-105 brightness-[0.40] md:brightness-100"
          />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#112C22] via-[#112C22]/80 to-transparent w-full md:w-[70%] lg:w-[60%] z-10"></div>
          <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#112C22]/90 via-[#112C22]/60 to-[#0B1E17] z-10"></div>
        </div>
        {/* Content — same container as homepage */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col justify-center text-left">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
            {/* Breadcrumb */}
            <Link href="/" className="inline-flex items-center gap-1 text-white/50 hover:text-white/75 text-[13px] transition-colors">
              Inicio <ChevronRight className="w-4 h-4" /> Nosotros
            </Link>
            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-h1 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mt-5"
            >
              ROMA <span className="text-[#C5A572]">ABOGADOS</span>
            </motion.h1>
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle mt-5 text-[15px] sm:text-[17px] lg:text-[18px] text-[#f8fafc]/80 max-w-lg leading-relaxed font-light"
            >
              {heroSubtitle}
            </motion.p>
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-ctas mt-8 flex flex-col sm:flex-row gap-3.5"
            >
              <button
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-2.5 bg-[#C5A572] hover:bg-[#B39360] text-[#112C22] px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#C5A572]/25 hover:shadow-xl active:scale-[0.98]"
              >
                Consultoría Gratuita
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="mailto:contacto@romaabogados.pe"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm"
              >
                <Mail className="w-4 h-4" />
                Escríbenos
              </a>
            </motion.div>
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hero-trust mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-white/45 text-xs sm:text-sm"
            >
              {[
                "+21,000 empresas",
                "Transparencia total",
                "Resultados comprobados"
              ].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A572]" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
        </div>
        {/* Scroll down indicator */}
        <ScrollDownIndicator />
      </section>

      {/* Mission & Vision */}
      <SectionDivider from="#112C22" to="#FAF8F5" />
      <section id="mision-vision" className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={aboutRef} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#C5A572] font-semibold text-sm tracking-wider uppercase mb-4">Quiénes Somos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183D2F]">
              Nuestro propósito es <span className="text-[#C5A572]">tu tranquilidad</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {columns.map((col, i) => {
              const Icon = col.icon;
              return (
                <motion.div
                  key={col.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                  className="bg-white rounded-2xl p-8 border border-[#E8E2D5] shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#183D2F]/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#183D2F]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#183D2F] mb-4">{col.title}</h3>
                  <p className="text-[#364A41] leading-relaxed">
                    {i === 0 ? missionText : visionText}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-[#183D2F] mb-8 text-center">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeValues.map((v: any, i: number) => (
                <ScrollReveal
                  key={v.label}
                  delay={0.05 * i}
                  duration={0.4}
                  y={20}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E8E2D5] hover:shadow-sm transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#C5A572] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-[#183D2F]">{v.label}</span>
                    <p className="text-xs text-[#364A41] mt-1 leading-relaxed">{v.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <SectionDivider from="#FAF8F5" to="#FAF8F5" />
      <section id="credenciales" className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={credRef} className="bg-[#183D2F] rounded-2xl p-8 lg:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C5A572]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#22523F]/30 rounded-full blur-3xl" />
            <div className="relative">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={credVisible ? { opacity: 1, y: 0 } : {}}
                className="text-2xl font-bold text-white mb-8 text-center"
              >
                ¿En qué nos respaldamos?
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {credentials.map((cred, i) => {
                  const Icon = cred.icon;
                  return (
                    <motion.div
                      key={cred.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={credVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                      className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="w-14 h-14 bg-[#C5A572]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-[#C5A572]" />
                      </div>
                      <p className="text-white/90 text-sm font-medium">{cred.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <SectionDivider from="#FAF8F5" to="#FAF8F5" />
      <section id="contacto" className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#C5A572] font-semibold text-sm tracking-wider uppercase mb-4">Contacto</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183D2F]">
              Hablemos
            </h2>
            <p className="mt-4 text-lg text-[#364A41]">
              Estamos listos para ayudarte. Envíanos un mensaje y recibe asesoría personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <ScrollReveal
              x={-30}
              duration={0.6}
              className="lg:col-span-3 bg-white rounded-2xl border border-[#E8E2D5] p-6 lg:p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#183D2F] mb-6">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#183D2F]">Nombre completo *</label>
                  <input name="name" value={formData.name} onChange={handleChange} required placeholder="Tu nombre"
                    className="w-full h-10 rounded-lg border border-[#E8E2D5] bg-[#FAF8F5] px-3 text-sm text-[#183D2F] focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50 focus:border-[#C5A572] transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#183D2F]">Email</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com"
                      className="w-full h-10 rounded-lg border border-[#E8E2D5] bg-[#FAF8F5] px-3 text-sm text-[#183D2F] focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50 focus:border-[#C5A572] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#183D2F]">Servicio</label>
                    <select name="service" value={formData.service} onChange={handleChange}
                      className="w-full h-10 rounded-lg border border-[#E8E2D5] bg-[#FAF8F5] px-3 text-sm text-[#183D2F] focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50 focus:border-[#C5A572] transition-all">
                      <option value="">-- Seleccionar --</option>
                      {services.map((s) => (<option key={s.id} value={s.name}>{s.name}</option>))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#183D2F]">Mensaje</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Cuéntanos sobre tu necesidad..." rows={4}
                    className="w-full rounded-lg border border-[#E8E2D5] bg-[#FAF8F5] px-3 py-2 text-sm text-[#183D2F] focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50 focus:border-[#C5A572] transition-all resize-none" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg">
                  <Send className="w-5 h-5" /> Enviar por WhatsApp
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal
              x={30}
              duration={0.6}
              delay={0.2}
              className="lg:col-span-2 space-y-4"
            >
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="bg-white rounded-xl border border-[#E8E2D5] p-5 hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-[#183D2F]/10 rounded-xl flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 text-[#183D2F]`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#183D2F] text-sm">{info.title}</h4>
                        <p className="text-[#183D2F] font-bold mt-0.5">{info.detail}</p>
                        <p className="text-xs text-[#364A41] mt-0.5">{info.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <button onClick={() => openModal()} className="w-full bg-[#183D2F] hover:bg-[#22523F] text-[#FAF8F5] rounded-xl p-5 flex items-center justify-center gap-3 font-semibold transition-all shadow-md hover:shadow-lg border border-[#C5A572]/40">
                <MessageCircle className="w-5 h-5 text-[#C5A572]" /> Consultoría Gratuita
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
