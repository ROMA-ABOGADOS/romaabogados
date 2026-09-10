import type { Metadata } from "next";
import { ConstitucionPage } from "@/components/pages/ConstitucionPage";

export const metadata: Metadata = {
  title: "Constitución de Empresas en Perú | SAC, EIRL, SRL | ROMAABOGADOS",
  description:
    "Constituye tu empresa con asesoría legal experta. Formamos SAC, EIRL y SRL con todo incluido: minuta, escritura pública, SUNARP, RUC, Clave SOL y libro de actas con ROMAABOGADOS.",
  keywords: [
    "constitución de empresas Perú",
    "constituir SAC",
    "constituir EIRL",
    "constituir SRL",
    "creación de empresa",
    "RUC",
    "SUNARP",
    "minuta de constitución",
    "formalización de negocio",
    "Roma Abogados",
  ],
  openGraph: {
    title: "Constitución de Empresas | ROMAABOGADOS",
    description: "Formaliza tu negocio con SAC, EIRL o SRL. Todo incluido: minuta, escritura pública, SUNARP, RUC y Clave SOL. Respaldo legal garantizado.",
    url: "https://romaabogados.pe/constitucion-de-empresas",
    images: [{ url: "/og-image.png", width: 1200, height: 630, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Constitución de Empresas | ROMAABOGADOS",
    description: "Constituye tu empresa SAC, EIRL o SRL con todo incluido. Minuta, SUNARP, RUC y Clave SOL.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <ConstitucionPage />;
}
