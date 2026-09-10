import { defineType, defineField } from 'sanity';

export const pageNosotros = defineType({
  name: 'pageNosotros',
  title: 'Página: Nosotros',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo del Hero',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen de Portada',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'mission',
      title: 'Misión',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'vision',
      title: 'Visión',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'values',
      title: 'Valores',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'valueItem',
          fields: [
            { name: 'label', title: 'Valor', type: 'string' },
            { name: 'description', title: 'Descripción', type: 'text', rows: 2 },
          ],
        },
      ],
    }),
  ],
});
