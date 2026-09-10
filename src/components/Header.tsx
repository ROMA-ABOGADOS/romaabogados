"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Scale } from "lucide-react";
import { useWhatsAppStore } from "@/lib/whatsapp";
import Image from "next/image";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Constitución", href: "/constitucion-de-empresas" },
  { label: "Contabilidad", href: "/contabilidad-tributacion" },
  { label: "Asesoría Tributaria", href: "/defensa-tributaria-sunat" },
  { label: "Nosotros", href: "/nosotros-contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useWhatsAppStore();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("mobile-menu-open");
    };
  }, [isMobileOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  const scrolled = isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 ease-in-out ${
          scrolled
            ? "header-scrolled"
            : "header-hero"
        }`}
      >
        {/* Brand gradient line — smooth 4px with GPU compositing */}
        <div
          className={`w-full h-[4px] transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: 'linear-gradient(90deg, #183D2F 0%, #C5A572 50%, #22523F 100%)',
            willChange: 'opacity',
            transform: 'translateZ(0)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="navbar-brand-fixed">

            {/* ── Logo: ROMAABOGADOS ── */}
            <Link href="/" className="flex items-center shrink-0 relative z-10 py-1 group">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                    scrolled
                      ? "bg-[#183D2F] text-[#C5A572] group-hover:bg-[#22523F]"
                      : "bg-white/10 text-[#C5A572] backdrop-blur-md border border-white/20 group-hover:bg-white/20"
                  }`}
                >
                  <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col">
                  <span
                    className={`font-black text-lg sm:text-xl md:text-2xl tracking-tight leading-none transition-colors duration-300 ${
                      scrolled ? "text-[#183D2F]" : "text-white"
                    }`}
                  >
                    ROMA<span className="text-[#C5A572]">ABOGADOS</span>
                  </span>
                  <span
                    className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.22em] mt-1 transition-colors duration-300 ${
                      scrolled ? "text-[#C5A572]" : "text-white/80"
                    }`}
                  >
                    Estudio Jurídico & Tributario
                  </span>
                </div>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-[15px] font-bold tracking-wide transition-colors duration-200 rounded-md ${
                    scrolled
                      ? isActive(item.href)
                        ? "text-[#183D2F]"
                        : "text-[#183D2F]/80 hover:text-[#C5A572]"
                      : isActive(item.href)
                        ? "text-[#C5A572]"
                        : "text-white/85 hover:text-[#C5A572]"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-colors duration-300 ${
                        scrolled ? "bg-[#C5A572]" : "bg-[#C5A572]"
                      }`}
                    />
                  )}
                </Link>
              ))}
              <button
                onClick={() => openModal()}
                className={`ml-2 px-5 py-2.5 rounded-lg text-[14px] font-bold tracking-wide transition-all duration-200 ${
                  scrolled
                    ? "bg-[#183D2F] hover:bg-[#22523F] text-[#FAF8F5] shadow-sm hover:shadow-md border border-[#C5A572]/40"
                    : "bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/25"
                }`}
              >
                Consultoría Gratuita
              </button>
            </nav>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden relative z-10 flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                scrolled
                  ? "text-[#183D2F] hover:bg-[#183D2F]/5 active:bg-[#183D2F]/10"
                  : "text-white hover:bg-white/10 active:bg-white/20"
              }`}
              aria-label="Menú de navegación"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" strokeWidth={2} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] max-w-[80vw] bg-white z-50 lg:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="navbar-brand-fixed px-4 border-b border-[#E8E2D5] shrink-0 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#183D2F] text-[#C5A572] flex items-center justify-center shadow-sm">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-base text-[#183D2F] tracking-tight leading-none">
                      ROMA<span className="text-[#C5A572]">ABOGADOS</span>
                    </span>
                    <span className="text-[8px] uppercase font-bold text-[#C5A572] tracking-wider mt-0.5">
                      Estudio Jurídico
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-[#183D2F] hover:bg-gray-100 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Nav */}
              <nav className="flex-1 overflow-y-auto px-3 py-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-lg text-[15px] font-semibold transition-colors drawer-nav-link ${
                      isActive(item.href)
                        ? "drawer-nav-active"
                        : "text-[#183D2F]/80 hover:bg-[#183D2F]/[0.05] hover:text-[#183D2F]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="px-4 pb-4 pt-2 border-t border-[#E8E2D5] shrink-0 space-y-2">
                <button
                  onClick={() => { setIsMobileOpen(false); openModal(); }}
                  className="w-full bg-[#183D2F] hover:bg-[#22523F] text-[#FAF8F5] py-3 rounded-lg text-[15px] font-bold transition-colors border border-[#C5A572]/40"
                >
                  Consultoría Gratuita
                </button>
                <a
                  href="tel:+51943366950"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-[14px] font-medium text-[#183D2F]/80 hover:bg-gray-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +51 943 366 950
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
