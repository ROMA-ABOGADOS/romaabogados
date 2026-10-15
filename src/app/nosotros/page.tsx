import type { Metadata } from "next";
import { NosotrosPage } from "@/components/pages/NosotrosPage";

export const metadata: Metadata = {
  title: "Quiénes Somos | ROMA & ABOGADOS",
  description:
    "Conoce a ROMA & ABOGADOS, firma especializada en asesoría tributaria, laboral, corporativa y outsourcing contable en el Perú. Solvencia técnica y resultados comprobados.",
  keywords: [
    "ROMA & ABOGADOS",
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
