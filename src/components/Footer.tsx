"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, ArrowUp, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Derecho Tributario", href: "/defensa-tributaria-sunat" },
  { label: "Derecho Laboral", href: "/derecho-laboral" },
  { label: "Derecho Empresarial", href: "/constitucion-de-empresas" },
  { label: "Outsourcing Contable", href: "/contabilidad-tributacion" },
  { label: "Quiénes Somos", href: "/nosotros-contacto" },
];

const serviceLinks = [
  { label: "Consultoría y Planeamiento Tributario", href: "/defensa-tributaria-sunat#ejes-tributarios" },
  { label: "Fiscalizaciones y Defensa SUNAT", href: "/defensa-tributaria-sunat#ejes-tributarios" },
  { label: "Cobranza Coactiva y Embargos", href: "/defensa-tributaria-sunat#ejes-tributarios" },
  { label: "Derecho Laboral & SUNAFIL", href: "/derecho-laboral#ejes-laborales" },
  { label: "Derecho Corporativo & Societario", href: "/constitucion-de-empresas#ejes-empresariales" },
  { label: "Constitución y Formalización de Empresas", href: "/constitucion-de-empresas#ejes-empresariales" },
  { label: "Outsourcing Contable Integral", href: "/contabilidad-tributacion#ejes-contables" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TikTokIcon, href: "https://tiktok.com", label: "TikTok" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.88-4.49V8.78a8.28 8.28 0 0 0 4.84 1.55v-3.5a4.84 4.84 0 0 1-.95-.14z" />
    </svg>
  );
}

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-[#2b4b38] text-white border-t border-[#fa9b0c]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 group">
              <img
                src="/logo-footer.png"
                alt="ROMA & ABOGADOS"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <div className="pt-2 border-t border-white/15 space-y-1.5">
              <p className="text-white/60 text-xs uppercase tracking-wider font-semibold">Estudio Jurídico Especializado</p>
              <a
                href="mailto:contacto@romaabogados.pe"
                className="text-[#fa9b0c] hover:text-[#eda340] text-sm font-semibold transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 shrink-0" />
                contacto@romaabogados.pe
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#fa9b0c] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 hover:text-[#fa9b0c] text-sm transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#fa9b0c] mb-4">
              Nuestros Servicios
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-white/75 hover:text-[#fa9b0c] text-xs sm:text-sm transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#fa9b0c] mb-4">
              Contacto Directo
            </h4>
            <div className="space-y-2.5 text-sm text-white/80 mb-6">
              <a
                href="tel:+51905454792"
                className="flex items-center gap-2 font-semibold text-white hover:text-[#fa9b0c] transition-colors"
                title="Llamar a ROMA & ABOGADOS"
              >
                <Phone className="w-4 h-4 text-[#fa9b0c] shrink-0" />
                +51 905 454 792
              </a>
              <a
                href="mailto:contacto@romaabogados.pe"
                className="flex items-center gap-2 text-white/85 hover:text-[#fa9b0c] transition-colors"
                title="Enviar correo a ROMA & ABOGADOS"
              >
                <Mail className="w-4 h-4 text-[#fa9b0c] shrink-0" />
                contacto@romaabogados.pe
              </a>
              <div className="flex items-center gap-2 text-white/75">
                <MapPin className="w-4 h-4 text-[#fa9b0c] shrink-0" />
                Lima, Perú (Atención Nacional)
              </div>
            </div>

            <h4 className="font-bold text-xs uppercase tracking-wider text-[#fa9b0c] mb-3">
              Redes Sociales
            </h4>
            <div className="flex gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-[#fa9b0c] hover:text-[#1e3527] rounded-xl flex items-center justify-center transition-all text-white/90"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#1e3527]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p className="text-white/70 text-xs sm:text-sm">
              © 2026 ROMA & ABOGADOS (romaabogados.pe). Todos los derechos reservados.
            </p>
            <p className="text-white/45 text-xs">
              Diseñado y desarrollado por <a href="https://www.fastpagepro.com" target="_blank" rel="noopener noreferrer" className="text-[#fa9b0c] hover:underline">FastPagePro</a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/nosotros-contacto" className="text-white/60 hover:text-white text-xs transition-colors">
              Términos & Privacidad
            </Link>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 bg-white/10 hover:bg-[#fa9b0c] hover:text-[#1e3527] rounded-xl flex items-center justify-center transition-all text-white"
              aria-label="Ir arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
