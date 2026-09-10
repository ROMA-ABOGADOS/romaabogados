import { defineType, defineField } from "sanity";

export const pageDefensa = defineType({
  name: "pageDefensa",
  title: "Página: Defensa Tributaria SUNAT",
  type: "document",
  fields: [
    defineField({
      name: "heroSubtitle",
      title: "Subtítulo del Hero",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "heroImage",
      title: "Imagen de Portada",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "sectionSituationsTitle",
      title: "Título de la Sección de Casos (ej. Elige tu)",
      type: "string",
      initialValue: "Elige tu",
    }),
    defineField({
      name: "sectionSituationsHighlight",
      title: "Palabra Destacada en Rojo (ej. situación)",
      type: "string",
      initialValue: "situación",
    }),
    defineField({
      name: "sectionSituationsSubtitle",
      title: "Subtítulo de la Sección de Casos",
      type: "string",
      initialValue: "Cada caso es diferente. Selecciona tu situación y te ayudamos de inmediato.",
    }),
    defineField({
      name: "urgentCards",
      title: "Tarjetas de Casos de Urgencia (Cartas Inductivas, Fiscalización, Coactiva)",
      type: "array",
      of: [
        {
          type: "object",
          name: "urgentCard",
          fields: [
            { name: "title", title: "Título del Caso (ej. Cartas Inductivas)", type: "string" },
            { name: "price", title: "Precio / Tarifa (ej. Desde S/ 200)", type: "string" },
            { name: "urgency", title: "Alerta de Urgencia (ej. Tienes 10 días hábiles para responder)", type: "string" },
            { name: "description", title: "Descripción del Caso", type: "text", rows: 3 },
            {
              name: "details",
              title: "¿Qué Incluye? (Viñetas)",
              type: "array",
              of: [{ type: "string" }],
            },
            { name: "cta", title: "Texto del Botón CTA", type: "string" },
            { name: "serviceId", title: "ID de Servicio WhatsApp", type: "number" },
          ],
        },
      ],
    }),
    defineField({
      name: "whyUsTitle",
      title: "Título de ¿Por qué confiar en nosotros?",
      type: "string",
      initialValue: "¿Por qué confiar en nosotros?",
    }),
    defineField({
      name: "whyUsItems",
      title: "Puntos de Confianza (Viñetas)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "inversionistaHeroTitle",
      title: "Título Sección Asesoría al Inversionista",
      type: "string",
      initialValue: "Asesoría al Inversionista",
    }),
    defineField({
      name: "inversionistaHeroSubtitle",
      title: "Subtítulo Sección Asesoría al Inversionista",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "inversionistaFeatures",
      title: "Servicios para Inversionistas",
      type: "array",
      of: [
        {
          type: "object",
          name: "inversionistaFeature",
          fields: [
            { name: "title", title: "Título del Servicio", type: "string" },
            { name: "desc", title: "Descripción", type: "text", rows: 2 },
          ],
        },
      ],
    }),
  ],
});
