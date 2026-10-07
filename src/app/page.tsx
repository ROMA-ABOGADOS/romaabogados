"use client";

import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AcercaDeNosotros } from "@/components/home/AcercaDeNosotros";
import { PublicacionesRecientes } from "@/components/home/PublicacionesRecientes";
import { TestimoniosHome } from "@/components/home/TestimoniosHome";
import { UgazAsesoriaBanner } from "@/components/home/UgazAsesoriaBanner";
import { useScrollSlug } from "@/hooks/use-scroll-slug";

export default function Home() {
  useScrollSlug();

  return (
    <SiteLayout>
      {/* 1. HERO — Video Banner */}
      <Hero />

      {/* 2. NUESTRAS ÁREAS — Photographic cards */}
      <Services />

      {/* 3. ACERCA DE NOSOTROS — Partner portrait & authority text */}
      <AcercaDeNosotros />

      {/* 4. PUBLICACIONES RECIENTES — 3 editorial publications */}
      <PublicacionesRecientes />

      {/* 5. TESTIMONIOS — Updated client reviews */}
      <TestimoniosHome />

      {/* 6. SOLICITAR ASESORÍA — Estudio Ugaz inspired banner */}
      <UgazAsesoriaBanner />
    </SiteLayout>
  );
}
