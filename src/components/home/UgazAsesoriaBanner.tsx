"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";

export function UgazAsesoriaBanner() {
  const { openModal } = useWhatsAppStore();

  return (
    <section className="py-16 sm:py-20 bg-[#FAFBF9] border-t border-[#2b4b38]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden bg-white border border-[#2b4b38]/15 shadow-lg">
            {/* Ambient subtle background decorative shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#fa9b0c]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#2b4b38]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Image (Estudio Ugaz Style) */}
              <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-96 w-full overflow-hidden bg-gradient-to-t from-[#1e3527] to-[#2b4b38]/90">
                <img
                  src="/images/team/abogada-asociada.webp"
                  alt="Asesora Legal ROMA & ABOGADOS"
                  className="w-full h-full object-cover object-[center_15%]"
                />
                {/* Subtle gradient blend to the right */}
                <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
                <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
                <span className="inline-block text-[#fa9b0c] font-bold text-xs sm:text-sm tracking-[0.22em] uppercase mb-3">
                  Atención Inmediata
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.2] mb-8 max-w-xl">
                  Te brindamos asesoría legal en todas las áreas
                </h2>
                <div>
                  <button
                    onClick={() => openModal(null)}
                    className="inline-flex items-center justify-center gap-3 bg-[#1e3527] hover:bg-[#2b4b38] text-white px-9 py-4 rounded-2xl text-base font-semibold tracking-wide transition-all shadow-md hover:shadow-xl active:scale-[0.98] group"
                  >
                    <MessageCircle className="w-5 h-5 text-[#fa9b0c]" />
                    <span>Solicitar asesoría</span>
                    <ArrowRight className="w-4 h-4 text-[#fa9b0c] transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
