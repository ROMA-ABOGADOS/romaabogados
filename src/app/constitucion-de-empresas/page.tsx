import type { Metadata } from "next";
import { ConstitucionPage } from "@/components/pages/ConstitucionPage";

export const metadata: Metadata = {
  title: "Derecho Empresarial | Administrativo, Civil & Corporativo | ROMA & ABOGADOS",
  description:
    "Asesoría y defensa jurídica especializada en Derecho Administrativo, Derecho Civil y Derecho Corporativo con ROMA & ABOGADOS. Soluciones estratégicas y eficientes.",
  keywords: [
    "derecho empresarial",
    "derecho corporativo",
    "derecho administrativo",
    "derecho civil",
    "constitución de empresas Perú",
    "Roma Abogados",
    "estudio jurídico Lima",
  ],
  openGraph: {
    title: "Derecho Empresarial | ROMA & ABOGADOS",
    description: "Asesoría y defensa jurídica integral en Derecho Administrativo, Derecho Civil y Derecho Corporativo.",
    url: "https://www.romaabogados.pe/constitucion-de-empresas",
    siteName: "ROMA & ABOGADOS",
    images: [
      { url: "https://www.romaabogados.pe/og-image.jpg", width: 1200, height: 630, type: "image/jpeg" },
      { url: "https://www.romaabogados.pe/og-image.png", width: 1200, height: 630, type: "image/png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Derecho Empresarial | ROMA & ABOGADOS",
    description: "Asesoría y defensa jurídica especializada en Derecho Administrativo, Derecho Civil y Derecho Corporativo.",
    images: ["https://www.romaabogados.pe/og-image.jpg"],
  },
};

export default function Page() {
  return <ConstitucionPage />;
}
