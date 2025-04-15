import type { Collection } from 'tinacms';

export const ExhibitorsCollection: Collection = {
  name: 'exhibitors',
  label: 'Exposants',
  path: 'src/data',
  format: 'json',
  match: {
    include: 'exhibitors.json',
  },
  fields: [
    {
      label: 'Nom',
      type: 'string',
      name: 'name',
      isTitle: true,
      required: true,
    },
    { label: 'Description', type: 'string', name: 'description' },
    { label: 'Catégorie', type: 'string', name: 'category' },
  ],
};
