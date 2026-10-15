import type { Metadata } from "next";
import { DefensaPage } from "@/components/pages/DefensaPage";

export const metadata: Metadata = {
  title: "Defensa Tributaria y SUNAT | ROMA & ABOGADOS",
  description:
    "¿SUNAT te fiscalizó? En ROMA & ABOGADOS actuamos con urgencia. Atención de cartas inductivas, defensa en fiscalizaciones y detención de cobranzas coactivas. Protege tu patrimonio.",
  keywords: [
    "defensa tributaria",
    "cartas inductivas SUNAT",
    "fiscalización SUNAT",
    "cobranza coactiva",
    "multas SUNAT",
    "reclamos tributarios",
    "defensa ante SUNAT",
    "ROMA & ABOGADOS",
  ],
};

export default function Page() {
  return <DefensaPage />;
}
