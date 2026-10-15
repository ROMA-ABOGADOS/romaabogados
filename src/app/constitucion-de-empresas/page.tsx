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
    url: "https://romaabogados.pe/constitucion-de-empresas",
    images: [{ url: "/og-image.png", width: 1200, height: 630, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Derecho Empresarial | ROMA & ABOGADOS",
    description: "Asesoría y defensa jurídica especializada en Derecho Administrativo, Derecho Civil y Derecho Corporativo.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <ConstitucionPage />;
}
