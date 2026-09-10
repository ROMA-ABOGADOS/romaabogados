import { defineType, defineField } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Página de Inicio (Home)",
  type: "document",
  fields: [
    defineField({
      name: "heroSlides",
      title: "Carrusel del Hero (Slides)",
      type: "array",
      of: [
        {
          type: "object",
          name: "slide",
          fields: [
            { name: "badge", title: "Insignia / Badge", type: "string" },
            { name: "titlePart1", title: "Título (Primera parte)", type: "string" },
            { name: "titleHighlight1", title: "Título resaltado (Verde)", type: "string" },
            { name: "titlePart2", title: "Título (Segunda parte)", type: "string" },
            { name: "titleHighlight2", title: "Título resaltado 2 (Verde)", type: "string" },
            { name: "subtitle", title: "Subtítulo", type: "text", rows: 2 },
            { name: "cta1Text", title: "Texto Botón 1", type: "string" },
            { name: "cta1Link", title: "Enlace Botón 1 (o #whatsapp)", type: "string" },
            { name: "cta2Text", title: "Texto Botón 2", type: "string" },
            { name: "cta2Link", title: "Enlace Botón 2", type: "string" },
            { name: "badges", title: "Mini etiquetas", type: "array", of: [{ type: "string" }] },
            { name: "image", title: "Foto de fondo", type: "image", options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({
      name: "founder",
      title: "Presentación del Estudio / Socio",
      type: "object",
      fields: [
        { name: "title", title: "Nombre / Razón", type: "string" },
        { name: "subtitle", title: "Cargo / Especialidad", type: "string" },
        { name: "quote", title: "Cita / Lema", type: "text", rows: 2 },
        { name: "sectionTitle", title: "Título de la columna derecha", type: "string" },
        { name: "sectionSubtitle", title: "Subtítulo de la columna derecha", type: "text", rows: 2 },
        { name: "image", title: "Fotografía", type: "image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "trajectory",
      title: "Sección Trayectoria y Respaldo",
      type: "object",
      fields: [
        { name: "badge", title: "Badge", type: "string" },
        { name: "title", title: "Título", type: "string" },
        { name: "description", title: "Descripción", type: "text", rows: 4 },
        { name: "achievements", title: "Logros / Viñetas", type: "array", of: [{ type: "string" }] },
      ],
    }),
    defineField({
      name: "servicesSection",
      title: "Sección de Servicios Destacados",
      type: "object",
      fields: [
        { name: "badge", title: "Badge", type: "string", initialValue: "Nuestros Servicios" },
        { name: "title", title: "Título", type: "string", initialValue: "¿Por qué elegir ROMA ABOGADOS?" },
        { name: "subtitle", title: "Subtítulo", type: "text", rows: 2, initialValue: "Ofrecemos soluciones integrales y personalizadas para proteger y potenciar tu negocio." },
        {
          name: "servicesList",
          title: "Lista de Servicios",
          type: "array",
          of: [
            {
              type: "object",
              name: "serviceCard",
              fields: [
                { name: "title", title: "Título del Servicio", type: "string" },
                { name: "description", title: "Descripción", type: "text", rows: 2 },
                { name: "href", title: "Enlace interno", type: "string" },
                { name: "serviceId", title: "ID de WhatsApp", type: "number" },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonios de Clientes",
      type: "array",
      of: [
        {
          type: "object",
          name: "testimonial",
          fields: [
            { name: "name", title: "Nombre del Cliente", type: "string" },
            { name: "text", title: "Testimonio", type: "text", rows: 3 },
            { name: "stars", title: "Estrellas (1-5)", type: "number", initialValue: 5 },
          ],
        },
      ],
    }),
  ],
});
