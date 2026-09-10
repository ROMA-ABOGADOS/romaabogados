import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración Global del Sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Nombre de la Marca',
      type: 'string',
      initialValue: 'ROMAABOGADOS',
    }),
    defineField({
      name: 'tagline',
      title: 'Lema / Subtítulo Corporativo',
      type: 'string',
      initialValue: 'Estudio Jurídico & Tributario',
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono Principal',
      type: 'string',
      initialValue: '+51 943 366 950',
    }),
    defineField({
      name: 'whatsapp',
      title: 'Número de WhatsApp (solo números con código país)',
      type: 'string',
      initialValue: '51943366950',
    }),
    defineField({
      name: 'email',
      title: 'Correo Electrónico de Contacto',
      type: 'string',
      initialValue: 'contacto@romaabogados.pe',
    }),
    defineField({
      name: 'address',
      title: 'Ubicación / Ciudad',
      type: 'string',
      initialValue: 'Lima, Perú',
    }),
    defineField({
      name: 'schedule',
      title: 'Horario de Atención',
      type: 'string',
      initialValue: 'Lun - Vie: 8:00 - 18:00 / Sáb: 9:00 - 13:00',
    }),
    defineField({
      name: 'footerDescription',
      title: 'Descripción del Pie de Página',
      type: 'text',
      rows: 3,
      initialValue: 'Protegemos el patrimonio y aseguramos el crecimiento de tu empresa con asesoría jurídica de excelencia, contabilidad integral y defensa estratégica ante SUNAT.',
    }),
    defineField({
      name: 'logo',
      title: 'Logotipo Oficial (Opcional - Imagen)',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
