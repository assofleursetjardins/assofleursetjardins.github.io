import type { Collection } from 'tinacms';

export const ExhibitorsCollection: Collection = {
  name: 'exhibitors',
  label: 'Exposants',
  path: 'src/data',
  format: 'json',
  match: {
    include: 'exhibitors',
  },
  ui: {
    filename: {
      slugify: () => 'exhibitors',
    },
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: 'exhibitors',
      label: 'Liste des exposants',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.name || 'Nouvel exposant',
        }),
      },
      fields: [
        {
          label: 'Nom de l’exposant',
          type: 'string',
          name: 'name',
          isTitle: true,
          required: true,
        },
        {
          label: 'Description',
          type: 'string',
          name: 'description',
        },
        {
          label: 'Catégorie',
          type: 'string',
          name: 'category',
        },
      ],
    },
  ],
};
