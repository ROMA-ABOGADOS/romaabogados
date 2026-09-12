"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, ArrowUp, Video, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Derecho Tributario", href: "/defensa-tributaria-sunat" },
  { label: "Derecho Laboral", href: "/derecho-laboral" },
  { label: "Outsourcing Contable", href: "/contabilidad-tributacion" },
  { label: "Derecho Empresarial", href: "/constitucion-de-empresas" },
  { label: "Quiénes Somos", href: "/nosotros-contacto" },
];

const serviceLinks = [
  { label: "Consultoría y Planeamiento Tributario", href: "/defensa-tributaria-sunat#ejes-tributarios" },
  { label: "Fiscalizaciones y Defensa SUNAT", href: "/defensa-tributaria-sunat#ejes-tributarios" },
  { label: "Cobranza Coactiva y Embargos", href: "/defensa-tributaria-sunat#ejes-tributarios" },
  { label: "Derecho Laboral & SUNAFIL", href: "/derecho-laboral#ejes-laborales" },
  { label: "Outsourcing Contable & SIRE", href: "/contabilidad-tributacion#ejes-contables" },
  { label: "Gestión de Planillas PLAME", href: "/contabilidad-tributacion#ejes-contables" },
  { label: "Derecho Corporativo & Societario", href: "/constitucion-de-empresas#ejes-empresariales" },
  { label: "Contrataciones con el Estado (OSCE)", href: "/constitucion-de-empresas#ejes-empresariales" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Video, href: "https://tiktok.com", label: "TikTok" },
];

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
            <Link href="/" className="inline-block mb-5 group">
              <img
                src="/logo-verde.png"
                alt="ROMA & ABOGADOS"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Firma de profesionales especializada en asesoría tributaria, laboral y empresarial. 
              Soluciones jurídicas eficientes, estratégicas y con más de 12 años de trayectoria comprobada.
            </p>
            <div className="mt-4 pt-3 border-t border-white/15 space-y-1.5">
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
                href="tel:+51943366950"
                className="flex items-center gap-2 font-semibold text-white hover:text-[#fa9b0c] transition-colors"
                title="Llamar a ROMA & ABOGADOS"
              >
                <Phone className="w-4 h-4 text-[#fa9b0c] shrink-0" />
                +51 943 366 950
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
              <p className="text-xs text-white/60 pt-1">Lunes a Viernes: 8:30 am - 6:30 pm</p>
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
