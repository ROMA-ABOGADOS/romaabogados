"use client";

import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Andres Rivera",
    role: "Gerente de Administración y Apoderado de TSNET S.A.",
    text: "ROMA Abogados nos apoya en temas legales tributarios desde el año 2016 al día de hoy. Recomiendo sus servicios pues siempre responden de manera rápida las consultas o los casos encargados.",
  },
  {
    name: "Isaac Picon",
    role: "Representante de Vidagro SAC y Picon SAC",
    text: "Roberto me apoya actualmente en los procesos o controversias tributarias de mis empresas, es claro en sus estrategias para disminuir el impacto tributario, tiene un seguimiento personalizado de mis casos y recomiendo su asesoría.",
  },
  {
    name: "Dalton Vilchez",
    role: "Fundador del Grupo Vilchez (Emsunir SA, Emprosa y Polycoas S.A.C.)",
    text: "ROMA Abogados junto a Roberto es un grupo profesional con experiencia en asuntos tributarios, con su apoyo legal seguimos en crecimiento en nuestro grupo empresarial.",
  },
  {
    name: "Juan Reyna",
    role: "Representante de Conviales y Entrevias S.A.C.",
    text: "Roberto y su equipo profesional ha demostrado eficiencia y éxito en los procedimientos contenciosos administrativos y en procesos judiciales en materia tributaria de nuestra Compañía, por lo cual agradecemos y recomendamos su apoyo legal.",
  },
];

export function TestimoniosHome() {
  return (
    <section id="testimonios" className="py-20 lg:py-24 bg-white relative overflow-hidden border-t border-[#2b4b38]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="inline-block text-[#fa9b0c] font-bold text-xs sm:text-sm tracking-[0.22em] uppercase mb-3">
              Casos Reales & Confianza
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2b4b38] leading-[1.18]">
              Testimonios de Clientes
            </h2>
            <div className="w-16 h-0.5 bg-[#fa9b0c] mx-auto mt-4 mb-4" />
            <p className="mt-2 text-[#42604e] text-base sm:text-lg leading-relaxed font-light">
              Empresas que confiaron su defensa fiscal, cumplimiento laboral y contabilidad a nuestra firma.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={t.name}
              delay={0.08 * i}
              className="bg-[#FAFBF9] p-6 sm:p-7 rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#fa9b0c] text-[#fa9b0c]" />
                  ))}
                </div>
                <blockquote className="text-[#2b4b38]/90 font-serif italic leading-relaxed text-sm sm:text-base mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
              </div>
              <div className="pt-4 border-t border-[#2b4b38]/10">
                <h4 className="font-serif text-base font-normal text-[#2b4b38]">{t.name}</h4>
                <p className="text-xs text-[#42604e] mt-0.5 font-medium">{t.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
