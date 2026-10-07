"use client";

import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Isaac Picon",
    role: "Gerente General, Constructora & Inmobiliaria IP S.A.C.",
    text: "Roma Abogados logró anular una resolución de determinación de SUNAT por más de S/ 450,000 en el Tribunal Fiscal. Su rigor técnico y claridad estratégica marcaron la diferencia. Son el respaldo legal de confianza para nuestra empresa.",
  },
  {
    name: "Dalton Vilchez",
    role: "Director Ejecutivo, Corporación Logística del Centro",
    text: "Teníamos una fiscalización laboral de SUNAFIL con riesgo de multas millonarias. El equipo de Roma Abogados asumió la defensa de forma inmediata y logró archivar el proceso. Su rapidez y conocimiento del procedimiento fueron impecables.",
  },
  {
    name: "Juan Reyna",
    role: "Gerente de Operaciones, Retail & Distribución Reyna S.A.C.",
    text: "Contratamos el servicio integrado de Outsourcing Contable y asesoría tributaria permanente. Desde entonces, nuestras declaraciones están impecables, implementamos el SIRE sin contratiempos y tenemos la tranquilidad de contar con blindaje jurídico ante cualquier duda.",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={t.name}
              delay={0.1 * i}
              className="bg-[#FAFBF9] p-8 rounded-2xl border border-[#2b4b38]/10 hover:border-[#fa9b0c]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
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
