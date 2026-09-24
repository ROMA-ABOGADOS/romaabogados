"use client";

import { useWhatsAppStore } from "@/lib/whatsapp";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function SolicitarAsesoriaBanner() {
  const { openModal } = useWhatsAppStore();

  return (
    <section className="relative py-24 lg:py-28 bg-[#1e3527] overflow-hidden text-white border-t border-white/10">
      {/* Background Graphic & Blurs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#fa9b0c]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#42604e]/25 rounded-full blur-3xl pointer-events-none" />

      {/* Thin Gold Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fa9b0c]/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#fa9b0c] text-xs font-bold uppercase tracking-[0.22em] mb-5 backdrop-blur-sm">
            Atención Especializada Inmediata
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.2] mb-6 max-w-3xl mx-auto">
            Te brindamos asesoría jurídica y contable en todas las áreas
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Analizamos la situación tributaria, laboral o societaria de tu empresa con estricto rigor y confidencialidad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2.5 bg-[#fa9b0c] hover:bg-[#eda340] text-[#1e3527] px-8 py-4 rounded-xl text-base font-bold tracking-wide transition-all shadow-lg shadow-[#fa9b0c]/25 hover:shadow-xl active:scale-[0.98] w-full sm:w-auto cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Asesoría por WhatsApp
            </button>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl text-base font-semibold tracking-wide transition-all backdrop-blur-sm w-full sm:w-auto cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#fa9b0c]" />
              Agendar una Consulta
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
