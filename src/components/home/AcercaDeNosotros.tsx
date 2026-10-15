"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AcercaDeNosotros() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Portrait & Authority Image (Estudio Ugaz ui-about-images style) */}
          <ScrollReveal x={-30} duration={0.7} className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#1e3527] border border-[#2b4b38]/20 group">
              <div className="aspect-[3/4] w-full relative overflow-hidden">
                <img
                  src="/images/hero/hero-subpages-roberto.webp"
                  alt="Dr. Roberto Marca - Socio Principal ROMA & ABOGADOS"
                  className="w-full h-full object-cover object-[center_12%] transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#122217] via-[#122217]/35 to-transparent" />
                
                {/* Subtle top gold accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9b0c] to-transparent" />

                {/* Bottom Card Identity Info */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#fa9b0c] text-[#1e3527] text-xs font-bold uppercase tracking-wider mb-2">
                    Socio Principal
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                    Dr. Roberto Marca
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-1 font-light">
                    Socio Principal & Fundador
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Text Content without Misión & Visión */}
          <ScrollReveal x={30} duration={0.7} className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs tracking-[0.22em] uppercase mb-3">
              ¿Quiénes somos?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2b4b38] leading-[1.18] mb-6">
              ROMA & ABOGADOS
            </h2>

            <div className="space-y-4 text-[#42604e] text-base sm:text-lg leading-relaxed font-light mb-8">
              <p>
                <strong>ROMA ABOGADOS</strong> es una firma especializada en asesoría y defensa tributaria, laboral y empresarial, con más de 15 años de experiencia en el sector empresarial.
              </p>
              <p>
                Contamos con un equipo de profesionales altamente capacitados, con experiencia en SUNAT, Tribunal Fiscal, Poder Judicial y reconocidas sociedades de auditoría tributaria. Bajo el liderazgo de Roberto Marca, abogado egresado de la PUCP y especialista en derecho tributario y empresarial, brindamos soluciones jurídicas estratégicas y eficientes.
              </p>
            </div>

            {/* Bottom Button "Conoce al staff" */}
            <div className="pt-2">
              <Link
                href="/nosotros-contacto#equipo-legal"
                className="inline-flex items-center justify-center gap-2.5 bg-[#2b4b38] hover:bg-[#1e3527] text-white px-8 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Conoce al Staff de Abogados</span>
                <ArrowRight className="w-4 h-4 text-[#fa9b0c]" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
