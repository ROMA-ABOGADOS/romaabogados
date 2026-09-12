"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useWhatsAppStore } from "@/lib/whatsapp";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Derecho Tributario", href: "/defensa-tributaria-sunat" },
  { label: "Derecho Laboral", href: "/derecho-laboral" },
  { label: "Outsourcing Contable", href: "/contabilidad-tributacion" },
  { label: "Derecho Empresarial", href: "/constitucion-de-empresas" },
  { label: "Quiénes Somos", href: "/nosotros-contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useWhatsAppStore();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
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
            ? "header-scrolled bg-white/98 shadow-md"
            : "header-hero bg-[#2b4b38] border-b border-[#fa9b0c]/15"
        }`}
      >
        {/* Brand gradient line */}
        <div
          className="w-full h-[3.5px] transition-opacity duration-300"
          style={{
            background: 'linear-gradient(90deg, #2b4b38 0%, #fa9b0c 50%, #42604e 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 sm:py-2.5">

            {/* ── Logo Principal: ROMA & ABOGADOS (Crossfade sincronizado 300ms) ── */}
            <Link
              href="/"
              className="relative flex items-center shrink-0 z-10 group h-10 sm:h-11 md:h-12 w-[180px] sm:w-[220px] md:w-[250px]"
            >
              {/* Logo sobre fondo verde (letras blancas + dorado) */}
              <img
                src="/logo-verde.png"
                alt="ROMA & ABOGADOS - Tributario, Laboral & Empresarial"
                className={`absolute inset-0 h-full w-auto object-contain transition-opacity duration-300 ease-in-out ${
                  scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              />
              {/* Logo sobre fondo blanco (letras oscuras + dorado) */}
              <img
                src="/logo.png"
                alt="ROMA & ABOGADOS - Tributario, Laboral & Empresarial"
                className={`absolute inset-0 h-full w-auto object-contain transition-opacity duration-300 ease-in-out ${
                  scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-[14px] font-bold tracking-wide transition-colors duration-300 rounded-md ${
                    scrolled
                      ? isActive(item.href)
                        ? "text-[#2b4b38]"
                        : "text-[#2b4b38]/80 hover:text-[#fa9b0c]"
                      : isActive(item.href)
                        ? "text-[#fa9b0c]"
                        : "text-white/90 hover:text-[#fa9b0c]"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#fa9b0c]" />
                  )}
                </Link>
              ))}
              <button
                onClick={() => openModal()}
                className={`ml-2 px-4 py-2.5 rounded-xl text-[13px] font-bold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md ${
                  scrolled
                    ? "bg-[#2b4b38] hover:bg-[#1e3527] text-white border border-[#fa9b0c]/40"
                    : "bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] shadow-lg shadow-[#fa9b0c]/25 active:scale-[0.98]"
                }`}
              >
                Consultoría Gratuita
              </button>
            </nav>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`xl:hidden relative z-10 flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
                scrolled
                  ? "text-[#2b4b38] hover:bg-[#2b4b38]/5"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Menú de navegación"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6" strokeWidth={2.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={2.5} />
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] xl:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-[70] xl:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="px-4 py-3 border-b border-[#E8E2D5] shrink-0 flex items-center justify-between bg-[#FAFBF9]">
                <img
                  src="/logo.png"
                  alt="ROMA & ABOGADOS"
                  className="h-9 w-auto object-contain max-w-[200px]"
                />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-[#2b4b38] hover:bg-gray-100 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Nav */}
              <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-xl text-[15px] font-bold transition-colors ${
                      isActive(item.href)
                        ? "bg-[#fa9b0c]/15 text-[#2b4b38] border-l-4 border-[#fa9b0c]"
                        : "text-[#2b4b38]/80 hover:bg-[#2b4b38]/[0.05] hover:text-[#2b4b38]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="px-4 pb-6 pt-3 border-t border-[#E8E2D5] shrink-0 space-y-2.5 bg-[#FAFBF9]">
                <button
                  onClick={() => { setIsMobileOpen(false); openModal(); }}
                  className="w-full bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] py-3.5 rounded-xl text-[15px] font-bold transition-all shadow-md shadow-[#fa9b0c]/25"
                >
                  Consultoría Gratuita
                </button>
                <a
                  href="tel:+51943366950"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[14px] font-semibold text-[#2b4b38] hover:bg-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#fa9b0c]" />
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
