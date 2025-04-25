import type { Collection } from 'tinacms';

export const ProgramCollection: Collection = {
  name: 'program',
  label: 'Programme',
  path: 'src/data',
  format: 'json',
  match: {
    include: 'program',
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: 'schedule',
      label: 'Horaires',
      description: 'Horaires des stands et des activités',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.date || 'Nouvel élément',
        }),
      },
      fields: [
        {
          name: 'date',
          label: 'Date',
          type: 'string',
        },
        {
          name: 'opening',
          label: 'Ouverture',
          type: 'string',
        },
        {
          name: 'closing',
          label: 'Fermeture',
          type: 'string',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'rich-text',
          toolbarOverride: ['heading', 'bold', 'italic', 'ul', 'link'],
        },
      ],
    },
  ],
};
