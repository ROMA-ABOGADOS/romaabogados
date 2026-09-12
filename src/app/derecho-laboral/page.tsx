import type { Metadata } from "next";
import { LaboralPage } from "@/components/pages/LaboralPage";

export const metadata: Metadata = {
  title: "Derecho Laboral y SUNAFIL | Asesoría Preventiva y Defensa | ROMA & ABOGADOS",
  description:
    "Asesoría preventiva, compliance laboral, defensa en inspecciones de SUNAFIL, litigios de la Nueva Ley Procesal del Trabajo y gestión migratoria empresarial con ROMA & ABOGADOS.",
  keywords: [
    "derecho laboral",
    "asesoria laboral lima",
    "inspecciones SUNAFIL",
    "multas SUNAFIL",
    "compliance laboral",
    "comite SST",
    "litigios laborales",
    "despidos",
    "ROMA ABOGADOS",
  ],
  openGraph: {
    title: "Derecho Laboral y Defensa ante SUNAFIL | ROMA & ABOGADOS",
    description:
      "Asesoría jurídica laboral preventiva, auditorías de cumplimiento, comparecencias SUNAFIL y defensa litigiosa en el Perú.",
    url: "https://romaabogados.pe/derecho-laboral",
    images: [{ url: "/og-image.png", width: 1200, height: 630, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Derecho Laboral y SUNAFIL | ROMA & ABOGADOS",
    description:
      "Protegemos a tu empresa ante contingencias laborales, auditorías de cumplimiento y fiscalizaciones de SUNAFIL.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <LaboralPage />;
}
