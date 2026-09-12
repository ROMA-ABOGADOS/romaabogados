import { create } from "zustand";

export interface Service {
  id: number;
  name: string;
  category: string;
  price: string;
  priceNum: number;
}

export const services: Service[] = [
  // Derecho Tributario
  { id: 1, name: "Consultoría y Planeamiento Tributario", category: "Derecho Tributario", price: "Propuesta a medida", priceNum: 0 },
  { id: 2, name: "Fiscalización SUNAT (Cartas Inductivas y Esquelas)", category: "Derecho Tributario", price: "Atención inmediata", priceNum: 0 },
  { id: 3, name: "Procedimientos ante Tribunal Fiscal (Apelaciones)", category: "Derecho Tributario", price: "Atención inmediata", priceNum: 0 },
  { id: 4, name: "Cobranza Coactiva y Suspensión de Embargos", category: "Derecho Tributario", price: "Atención urgente", priceNum: 0 },
  { id: 5, name: "Procesos Contencioso-Administrativos y Medidas Cautelares", category: "Derecho Tributario", price: "Propuesta a medida", priceNum: 0 },

  // Derecho Laboral
  { id: 6, name: "Consultoría Laboral Preventiva y Contratos", category: "Derecho Laboral", price: "Propuesta a medida", priceNum: 0 },
  { id: 7, name: "Inspecciones y Descargos ante SUNAFIL / MTPE", category: "Derecho Laboral", price: "Atención urgente", priceNum: 0 },
  { id: 8, name: "Auditoría de Compliance Laboral y SST (Ley 27942)", category: "Derecho Laboral", price: "Propuesta a medida", priceNum: 0 },
  { id: 9, name: "Litigios Laborales y Procesos Judiciales (NLPT)", category: "Derecho Laboral", price: "Atención especializada", priceNum: 0 },
  { id: 10, name: "Gestión Migratoria para Empresas (Visas / MIGRACIONES)", category: "Derecho Laboral", price: "Propuesta a medida", priceNum: 0 },

  // Outsourcing Contable
  { id: 11, name: "Outsourcing Contable Integral y Cumplimiento SIRE", category: "Outsourcing Contable", price: "Propuesta mensual", priceNum: 0 },
  { id: 12, name: "Gestión de Planillas, PLAME y Beneficios Laborales", category: "Outsourcing Contable", price: "Propuesta mensual", priceNum: 0 },
  { id: 13, name: "Declaraciones Juradas (DJ SUNAT) y Libros Electrónicos", category: "Outsourcing Contable", price: "Propuesta a medida", priceNum: 0 },

  // Derecho Empresarial
  { id: 14, name: "Constitución de Empresas (S.A.C., S.R.L., E.I.R.L.)", category: "Derecho Empresarial", price: "Asesoría integral", priceNum: 0 },
  { id: 15, name: "Reorganización Societaria, Fusiones y Due Diligence", category: "Derecho Empresarial", price: "Propuesta a medida", priceNum: 0 },
  { id: 16, name: "Contratos Civiles y Mercantiles", category: "Derecho Empresarial", price: "Propuesta a medida", priceNum: 0 },
  { id: 17, name: "Contrataciones con el Estado y Registro RNP / OSCE", category: "Derecho Empresarial", price: "Asesoría estratégica", priceNum: 0 },

  // General
  { id: 18, name: "Consulta Jurídica Integral / Otra Consulta", category: "General", price: "Atención personalizada", priceNum: 0 },
];

interface WhatsAppState {
  isOpen: boolean;
  selectedServiceId: number | null;
  openModal: (serviceId?: number) => void;
  closeModal: () => void;
}

export const useWhatsAppStore = create<WhatsAppState>((set) => ({
  isOpen: false,
  selectedServiceId: null,
  openModal: (serviceId) =>
    set({ isOpen: true, selectedServiceId: serviceId ?? null }),
  closeModal: () =>
    set({ isOpen: false, selectedServiceId: null }),
}));

export function generateWhatsAppURL(
  serviceName: string,
  servicePrice: string,
  name: string,
  notes: string
): string {
  const message = `Hola *ROMA & ABOGADOS*.

⚖️ *Servicio de interés:* ${serviceName}
📋 *Modalidad:* ${servicePrice}
👤 *Nombre / Empresa:* ${name}
${notes.trim() ? `💬 *Consulta:* ${notes.trim()}\n` : ""}
Solicito una consulta legal y propuesta estratégica.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=51943366950&text=${encodedMessage}`;
}
