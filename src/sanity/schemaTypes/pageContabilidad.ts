import { defineType, defineField } from "sanity";

export const pageContabilidad = defineType({
  name: "pageContabilidad",
  title: "Página: Contabilidad y Tributación",
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
      name: "alertTitle",
      title: "Título de la Alerta SUNAT",
      type: "string",
      initialValue: "Alerta Preventiva SUNAT",
    }),
    defineField({
      name: "alertText",
      title: "Texto de la Alerta SUNAT",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "stats",
      title: "Métricas y Estadísticas",
      type: "array",
      of: [
        {
          type: "object",
          name: "statItem",
          fields: [
            { name: "value", title: "Valor (ej. 100%, 0)", type: "string" },
            { name: "label", title: "Descripción", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "mainFeatures",
      title: "Servicios Contables Principales",
      type: "array",
      of: [
        {
          type: "object",
          name: "mainFeatureItem",
          fields: [
            { name: "title", title: "Nombre del Servicio (ej. Libros Electrónicos)", type: "string" },
            { name: "desc", title: "Descripción", type: "text", rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: "additionalServices",
      title: "Servicios Complementarios",
      type: "array",
      of: [
        {
          type: "object",
          name: "additionalServiceItem",
          fields: [
            { name: "title", title: "Nombre del Servicio", type: "string" },
            { name: "desc", title: "Descripción", type: "text", rows: 2 },
            { name: "price", title: "Tarifa", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "laborFeatures",
      title: "Servicios de Planilla Laboral",
      type: "array",
      of: [
        {
          type: "object",
          name: "laborFeatureItem",
          fields: [
            { name: "title", title: "Nombre del Trámite (ej. Planilla Mensual PDT 601)", type: "string" },
            { name: "desc", title: "Descripción", type: "text", rows: 2 },
          ],
        },
      ],
    }),
  ],
});
