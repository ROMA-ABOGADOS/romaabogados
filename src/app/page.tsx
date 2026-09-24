"use client";

import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ExperienciaComprobada } from "@/components/home/ExperienciaComprobada";
import { AcercaDeNosotros } from "@/components/home/AcercaDeNosotros";
import { PublicacionesRecientes } from "@/components/home/PublicacionesRecientes";
import { FraseInstitucional } from "@/components/home/FraseInstitucional";
import { NuestrasNoticias } from "@/components/home/NuestrasNoticias";
import { SolicitarAsesoriaBanner } from "@/components/home/SolicitarAsesoriaBanner";
import { useScrollSlug } from "@/hooks/use-scroll-slug";

export default function Home() {
  useScrollSlug();

  return (
    <SiteLayout>
      {/* 1. BANNER / SLIDER — Estudio Ugaz #banner ui-slider */}
      <Hero />

      {/* 2. NUESTRAS ÁREAS — Estudio Ugaz ui-section--our-area with photographic cards & circular badges */}
      <Services />

      {/* 3. EXPERIENCIA COMPROBADA — Estudio Ugaz ui-section--experience with 4 big metric counters */}
      <ExperienciaComprobada />

      {/* 4. ACERCA DE NOSOTROS — Estudio Ugaz ui-section--about-us with partner portrait, Misión & Visión */}
      <AcercaDeNosotros />

      {/* 5. PUBLICACIONES RECIENTES — Estudio Ugaz ui-section--publications with photographic editorial cards */}
      <PublicacionesRecientes />

      {/* 6. FRASE INSTITUCIONAL — Estudio Ugaz ui-sentence banner */}
      <FraseInstitucional />

      {/* 7. NUESTRAS NOTICIAS & JURISPRUDENCIA — Estudio Ugaz ui-section--our-notices */}
      <NuestrasNoticias />

      {/* 8. SOLICITAR ASESORÍA — Estudio Ugaz ui-section--question */}
      <SolicitarAsesoriaBanner />
    </SiteLayout>
  );
}
