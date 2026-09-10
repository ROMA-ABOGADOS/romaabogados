import type { Metadata } from "next";
import { NosotrosPage } from "@/components/pages/NosotrosPage";

export const metadata: Metadata = {
  title: "Nosotros | ROMAABOGADOS - Estudio Jurídico y Tributario en Perú",
  description:
    "Conoce a ROMAABOGADOS, estudio especializado en derecho corporativo, asesoría tributaria y contabilidad integral en Perú. Respaldo legal, transparencia y resultados comprobados.",
  keywords: [
    "ROMAABOGADOS",
    "Roma Abogados",
    "estudio jurídico Lima",
    "abogados corporativos Perú",
    "asesores tributarios Lima",
    "defensa SUNAT",
  ],
};

export default function Page() {
  return <NosotrosPage />;
}
