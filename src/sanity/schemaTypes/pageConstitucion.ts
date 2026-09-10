import { defineType, defineField } from "sanity";

export const pageConstitucion = defineType({
  name: "pageConstitucion",
  title: "Página: Constitución de Empresas",
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
      name: "sectionPackagesTitle",
      title: "Título de la Sección de Paquetes",
      type: "string",
      initialValue: "Tipos Societarios Disponibles",
    }),
    defineField({
      name: "sectionPackagesSubtitle",
      title: "Subtítulo de la Sección de Paquetes",
      type: "string",
      initialValue: "Selecciona la modalidad que mejor se adapte a tu visión y número de socios.",
    }),
    defineField({
      name: "packages",
      title: "Paquetes Societarios (SAC, EIRL, SRL, Cooperativa)",
      type: "array",
      of: [
        {
          type: "object",
          name: "packageItem",
          fields: [
            { name: "name", title: "Sigla (ej. SAC, EIRL)", type: "string" },
            { name: "fullName", title: "Nombre Completo (ej. Sociedad Anónima Cerrada)", type: "string" },
            { name: "price", title: "Precio / Tarifa", type: "string" },
            { name: "recommended", title: "Destacado / Recomendado", type: "boolean" },
            { name: "idealFor", title: "Ideal para (Descripción corta)", type: "text", rows: 2 },
            {
              name: "features",
              title: "Beneficios y Trámites Incluidos",
              type: "array",
              of: [{ type: "string" }],
            },
            { name: "serviceId", title: "ID de Servicio WhatsApp", type: "number" },
          ],
        },
      ],
    }),
    defineField({
      name: "sectionStepsTitle",
      title: "Título de Proceso Paso a Paso",
      type: "string",
      initialValue: "¿Cómo es el proceso?",
    }),
    defineField({
      name: "steps",
      title: "Pasos del Proceso de Constitución",
      type: "array",
      of: [
        {
          type: "object",
          name: "stepItem",
          fields: [
            { name: "num", title: "Número de Paso (ej. 01)", type: "string" },
            { name: "title", title: "Título del Paso", type: "string" },
            { name: "desc", title: "Descripción", type: "text", rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: "sectionFaqsTitle",
      title: "Título de Preguntas Frecuentes",
      type: "string",
      initialValue: "Preguntas Frecuentes sobre Constitución",
    }),
    defineField({
      name: "faqs",
      title: "Lista de Preguntas y Respuestas (FAQ)",
      type: "array",
      of: [
        {
          type: "object",
          name: "faqItem",
          fields: [
            { name: "q", title: "Pregunta", type: "string" },
            { name: "a", title: "Respuesta", type: "text", rows: 3 },
          ],
        },
      ],
    }),
  ],
});
