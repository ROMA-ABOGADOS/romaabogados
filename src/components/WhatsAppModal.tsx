"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, User, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useWhatsAppStore, services, generateWhatsAppURL } from "@/lib/whatsapp";

export function WhatsAppModal() {
  const { isOpen, closeModal, selectedServiceId } = useWhatsAppStore();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  const effectiveSelectedId = selectedId ?? selectedServiceId;
  const selectedService = services.find((s) => s.id === effectiveSelectedId);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleSubmit() {
    if (!name.trim()) return;
    const serviceName = selectedService?.name || "Asesoría Legal General";
    const servicePrice = selectedService?.price || "Propuesta a medida";
    const url = generateWhatsAppURL(serviceName, servicePrice, name, notes);
    window.open(url, "_blank");
    closeModal();
    setName("");
    setNotes("");
    setSelectedId(null);
  }

  const categories = [
    "Derecho Tributario",
    "Derecho Laboral",
    "Outsourcing Contable",
    "Derecho Empresarial",
    "General",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm z-50"
            onClick={closeModal}
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[9998] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
            style={{ zIndex: 9998 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[92%] sm:max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto border border-[#2b4b38]/15">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#2b4b38] to-[#1e3527] p-5 rounded-t-2xl flex items-center justify-between border-b border-[#fa9b0c]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#fa9b0c] rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <MessageCircle className="w-5 h-5 text-[#1e3527]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg leading-snug">Consulta Legal y Tributaria</h3>
                    <p className="text-white/80 text-xs sm:text-sm">ROMA & ABOGADOS • +51 943 366 950</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                  aria-label="Cerrar modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 space-y-5">
                {/* Service Selection */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-[#2b4b38] flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-[#fa9b0c]" />
                    Seleccione un servicio o área de práctica *
                  </Label>
                  <select
                    value={effectiveSelectedId || ""}
                    onChange={(e) => setSelectedId(Number(e.target.value) || null)}
                    className="w-full h-11 rounded-xl border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b4b38] focus:border-[#2b4b38] transition-all font-medium text-gray-800"
                  >
                    <option value="">-- Seleccione un servicio --</option>
                    {categories.map((cat) => (
                      <optgroup key={cat} label={`── ${cat} ──`}>
                        {services
                          .filter((s) => s.category === cat)
                          .map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.name}
                            </option>
                          ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                {/* Service Info Banner */}
                {selectedService && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="bg-[#2b4b38]/5 border border-[#2b4b38]/15 rounded-xl p-3.5 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs font-semibold text-[#42604e] uppercase tracking-wider">Área / Especialidad</p>
                      <p className="text-sm font-bold text-[#2b4b38]">{selectedService.category}</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#fa9b0c]/15 text-[#2b4b38] border border-[#fa9b0c]/30">
                      {selectedService.price}
                    </span>
                  </motion.div>
                )}

                {/* Name */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-[#2b4b38] flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#fa9b0c]" />
                    Nombre completo o Razón Social *
                  </Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: Juan Pérez / Empresa S.A.C."
                    className="h-11 border-gray-300 focus-visible:ring-[#2b4b38] focus-visible:border-[#2b4b38] rounded-xl"
                  />
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-[#2b4b38] flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#fa9b0c]" />
                    Detalle de su consulta o urgencia
                  </Label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Describa brevemente su caso, notificación o requerimiento..."
                    rows={3}
                    className="border-gray-300 focus-visible:ring-[#2b4b38] focus-visible:border-[#2b4b38] resize-none rounded-xl"
                  />
                </div>

                {/* Submit */}
                <Button
                  onClick={handleSubmit}
                  disabled={!name.trim()}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold h-12 text-[15px] rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar Consulta por WhatsApp
                </Button>

                <p className="text-xs text-center text-gray-500">
                  Se abrirá WhatsApp directamente con el número oficial <strong className="text-[#2b4b38]">+51 943 366 950</strong> y su consulta prellenada.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
