import type { Metadata } from "next";
import { NosotrosPage } from "@/components/pages/NosotrosPage";

export const metadata: Metadata = {
  title: "Quiénes Somos & Equipo Legal | ROMA & ABOGADOS",
  description:
    "Conoce al equipo legal y consultores de ROMA & ABOGADOS. Más de 15 años de trayectoria en defensa tributaria, laboral y empresarial en el Perú. Rigor técnico y ética inquebrantable.",
  keywords: [
    "ROMA & ABOGADOS",
    "Roma Abogados",
    "Roberto Marca",
    "estudio jurídico Lima",
    "abogados Perú",
    "asesores tributarios Lima",
    "defensa SUNAT",
    "Tribunal Fiscal",
  ],
  openGraph: {
    title: "Quiénes Somos & Equipo Legal | ROMA & ABOGADOS",
    description: "Conoce a nuestros abogados y consultores especialistas en defensa tributaria, laboral y empresarial en el Perú. +15 años de experiencia.",
    url: "https://www.romaabogados.pe/nosotros-contacto",
    siteName: "ROMA & ABOGADOS",
    images: [
      { url: "https://www.romaabogados.pe/og-image.jpg", width: 1200, height: 630, type: "image/jpeg" },
      { url: "https://www.romaabogados.pe/og-image.png", width: 1200, height: 630, type: "image/png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiénes Somos & Equipo Legal | ROMA & ABOGADOS",
    description: "Firma legal especializada en asesoría tributaria, laboral y empresarial en el Perú.",
    images: ["https://www.romaabogados.pe/og-image.jpg"],
  },
};

export default function Page() {
  return <NosotrosPage />;
}
