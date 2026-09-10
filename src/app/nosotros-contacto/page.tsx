import type { Metadata } from "next";
import { NosotrosPage } from "@/components/pages/NosotrosPage";

export const metadata: Metadata = {
  title: "Nosotros y Contacto | ROMAABOGADOS - Estudio Jurídico y Tributario",
  description:
    "Conoce a ROMAABOGADOS, estudio especializado en derecho corporativo, asesoría tributaria y contabilidad en Perú. Respaldo legal, solvencia y resultados comprobados.",
  keywords: [
    "ROMAABOGADOS",
    "Roma Abogados",
    "estudio jurídico Lima",
    "abogados Perú",
    "asesores tributarios Lima",
    "defensa SUNAT",
  ],
  openGraph: {
    title: "Nosotros y Contacto | ROMAABOGADOS",
    description: "Trayectoria y respaldo legal protegiendo patrimonios en el Perú. Transparencia, rigurosidad y resultados. Agenda tu consulta gratuita.",
    url: "https://romaabogados.pe/nosotros-contacto",
    images: [{ url: "/og-image.png", width: 1200, height: 630, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros y Contacto | ROMAABOGADOS",
    description: "Estudio líder en asesoría legal corporativa y tributaria en Perú. Consulta gratuita.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <NosotrosPage />;
}
