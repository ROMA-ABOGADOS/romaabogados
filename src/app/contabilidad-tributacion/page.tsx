import type { Metadata } from "next";
import { ContabilidadPage } from "@/components/pages/ContabilidadPage";

export const metadata: Metadata = {
  title: "Outsourcing Contable | Gestión Contable, Tributaria & Planillas | ROMA & ABOGADOS",
  description:
    "Outsourcing contable integral con ROMA & ABOGADOS. Gestión contable y tributaria, liquidación de impuestos, procesamiento de planillas y obligaciones laborales.",
  keywords: [
    "outsourcing contable",
    "gestión contable y tributaria",
    "planillas",
    "PDT PLAME",
    "AFPnet",
    "declaración IGV Renta",
    "Roma Abogados",
  ],
  openGraph: {
    title: "Outsourcing Contable | ROMA & ABOGADOS",
    description: "Gestión contable y tributaria, procesamiento de planillas y obligaciones laborales con respaldo legal permanente.",
    url: "https://romaabogados.pe/contabilidad-tributacion",
    images: [{ url: "/og-image.png", width: 1200, height: 630, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outsourcing Contable | ROMA & ABOGADOS",
    description: "Gestión contable, tributaria y de planillas con ROMA & ABOGADOS.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <ContabilidadPage />;
}
