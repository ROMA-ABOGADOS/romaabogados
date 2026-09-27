"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useWhatsAppStore } from "@/lib/whatsapp";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Derecho Tributario", href: "/defensa-tributaria-sunat" },
  { label: "Derecho Laboral", href: "/derecho-laboral" },
  { label: "Derecho Empresarial", href: "/constitucion-de-empresas" },
  { label: "Outsourcing Contable", href: "/contabilidad-tributacion" },
  { label: "Quiénes Somos", href: "/nosotros-contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useWhatsAppStore();
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      const isScrollingDown = currentScrollY > lastScrollY;
      const diff = Math.abs(currentScrollY - lastScrollY);

      setIsScrolled(currentScrollY > 60);

      if (currentScrollY <= 40) {
        // En la parte superior siempre visible
        setIsVisible(true);
      } else if (diff > 8) {
        if (isScrollingDown && currentScrollY > 120) {
          // Al hacer scroll hacia abajo, ocultar menú
          setIsVisible(false);
        } else if (!isScrollingDown) {
          // Al subir scroll, reaparecer menú
          setIsVisible(true);
        }
      }

      lastScrollYRef.current = currentScrollY;
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
    if (href === "/defensa-tributaria-sunat") {
      return pathname.startsWith("/defensa-tributaria");
    }
    if (href === "/nosotros-contacto") {
      return pathname.startsWith("/nosotros");
    }
    return pathname.startsWith(href);
  }

  const isHomePage = pathname === "/";
  const scrolled = isScrolled;
  // En el inicio (hero) se oculta el logo para no duplicar con el video; al hacer scroll aparece
  const showLogo = !isHomePage || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 ease-in-out ${
          isVisible || isMobileOpen ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "header-scrolled bg-white/95 backdrop-blur-md border-b border-[#2b4b38]/10 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            : isHomePage
              ? "header-hero bg-transparent border-b border-transparent shadow-none"
              : "header-hero bg-black/20 backdrop-blur-md border-b border-white/10"
        }`}
      >
        {/* Línea de acento institucional */}
        <div
          className={`w-full h-[3px] transition-opacity duration-300 ${
            !scrolled && isHomePage ? "opacity-0" : "opacity-100"
          }`}
          style={{
            background: 'linear-gradient(90deg, #2b4b38 0%, #fa9b0c 50%, #42604e 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 sm:py-2.5">

            {/* ── Logo Principal: Oculto en el hero de Inicio para no duplicar, visible al scroll ── */}
            <Link
              href="/"
              onClick={() => {
                if (pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`relative flex items-center shrink-0 z-10 group h-10 sm:h-11 md:h-12 w-[180px] sm:w-[220px] md:w-[250px] transition-all duration-300 ease-in-out ${
                showLogo
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {/* Logo sobre fondo oscuro/video */}
              <img
                src="/logo-white.png"
                alt="ROMA & ABOGADOS - Tributario, Laboral & Empresarial"
                className={`absolute inset-0 h-full w-auto object-contain object-left transition-opacity duration-300 ease-in-out ${
                  scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              />
              {/* Logo sobre fondo blanco */}
              <img
                src="/logo.png"
                alt="ROMA & ABOGADOS - Tributario, Laboral & Empresarial"
                className={`absolute inset-0 h-full w-auto object-contain object-left transition-opacity duration-300 ease-in-out ${
                  scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              />
            </Link>

            {/* ── Desktop Nav (Elementos resaltados en rojo) ── */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    if (isActive(item.href)) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`relative px-3 py-2 text-[14px] font-bold tracking-wide transition-colors duration-300 rounded-md ${
                    scrolled
                      ? isActive(item.href)
                        ? "text-[#2b4b38]"
                        : "text-[#2b4b38]/80 hover:text-[#fa9b0c]"
                      : isActive(item.href)
                        ? "text-[#fa9b0c] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                        : "text-white/95 hover:text-[#fa9b0c] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
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
                    : "bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] shadow-lg shadow-black/40 hover:scale-105 active:scale-[0.98] cursor-pointer"
                }`}
              >
                Agendar una Consulta
              </button>
            </nav>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`xl:hidden relative z-10 flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
                scrolled
                  ? "text-[#2b4b38] hover:bg-[#2b4b38]/5"
                  : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] hover:bg-white/10"
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
                    onClick={() => {
                      setIsMobileOpen(false);
                      if (isActive(item.href)) {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
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
                  Agendar una Consulta
                </button>
                <a
                  href="tel:+51905454792"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[14px] font-semibold text-[#2b4b38] hover:bg-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#fa9b0c]" />
                  +51 905 454 792
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
