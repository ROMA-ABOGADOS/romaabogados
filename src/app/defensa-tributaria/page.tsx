import type { Metadata } from "next";
import { DefensaPage } from "@/components/pages/DefensaPage";

export const metadata: Metadata = {
  title: "Defensa Tributaria y SUNAT | Cartas Inductivas, Fiscalizaciones | ROMAABOGADOS",
  description:
    "¿SUNAT te fiscalizó? En ROMAABOGADOS actuamos con urgencia. Atención de cartas inductivas, defensa en fiscalizaciones y detención de cobranzas coactivas. Protege tu patrimonio.",
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
};

export default function Page() {
  return <DefensaPage />;
}
