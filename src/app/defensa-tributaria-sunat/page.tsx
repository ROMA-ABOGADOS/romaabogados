import type { Metadata } from "next";
import { DefensaPage } from "@/components/pages/DefensaPage";

export const metadata: Metadata = {
  title: "Defensa Tributaria y SUNAT | Cartas Inductivas, Fiscalizaciones | ROMAABOGADOS",
  description:
    "¿SUNAT te fiscalizó? Actuamos con urgencia. Atención de cartas inductivas, defensa en fiscalizaciones y negociación de cobranzas coactivas. Protege tu patrimonio con ROMAABOGADOS.",
  keywords: [
    "defensa tributaria",
    "cartas inductivas SUNAT",
    "fiscalización SUNAT",
    "cobranza coactiva",
    "multas SUNAT",
    "reclamos tributarios",
    "defensa ante SUNAT",
    "Roma Abogados",
  ],
  openGraph: {
    title: "Defensa Tributaria Urgente | ROMAABOGADOS",
    description: "Atención urgente de cartas inductivas, fiscalizaciones SUNAT y cobranzas coactivas. Escudo legal y tributario para proteger tu patrimonio.",
    url: "https://romaabogados.pe/defensa-tributaria-sunat",
    images: [{ url: "/og-image.png", width: 1200, height: 630, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Defensa Tributaria Urgente | ROMAABOGADOS",
    description: "¿SUNAT te fiscalizó? Atención urgente de cartas inductivas, fiscalizaciones y cobranza coactiva.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <DefensaPage />;
}
