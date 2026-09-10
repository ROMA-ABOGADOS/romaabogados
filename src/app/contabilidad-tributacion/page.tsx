import type { Metadata } from "next";
import { ContabilidadPage } from "@/components/pages/ContabilidadPage";

export const metadata: Metadata = {
  title: "Contabilidad Integral y Tributación | Tercerización Contable | ROMAABOGADOS",
  description:
    "Terceriza tu contabilidad con expertos de ROMAABOGADOS. Libros electrónicos, SIRE, declaraciones IGV/Renta, planillas, conciliaciones y estados financieros para empresas en Perú.",
  keywords: [
    "contabilidad Perú",
    "tercerización contable",
    "libros electrónicos SUNAT",
    "SIRE",
    "declaración IGV",
    "declaración de renta",
    "planilla electrónica",
    "contador tributario",
    "Roma Abogados",
  ],
  openGraph: {
    title: "Contabilidad Integral | ROMAABOGADOS",
    description: "Terceriza tu contabilidad con expertos. Libros electrónicos, declaraciones mensuales, planillas y cumplimiento tributario completo.",
    url: "https://romaabogados.pe/contabilidad-tributacion",
    images: [{ url: "/og-image.png", width: 1200, height: 630, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contabilidad Integral | ROMAABOGADOS",
    description: "Terceriza tu contabilidad. Libros electrónicos, SIRE, declaraciones IGV/Renta y planillas.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <ContabilidadPage />;
}
