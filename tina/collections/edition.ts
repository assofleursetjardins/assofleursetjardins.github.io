import type { Collection } from 'tinacms';

export const EditionCollection: Collection = {
  name: 'editonSalon',
  label: 'Edition Salon',
  path: 'src/data',
  format: 'json',
  match: {
    include: 'editonSalon',
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: 'date',
      label: 'Date',
      type: 'string',
    },
    {
      name: 'edition',
      label: "Année de l'édition",
      type: 'string',
    },
    {
      name: 'ticketPrice',
      label: 'Prix du ticket',
      type: 'string',
    },
    {
      name: 'parkingPrice',
      label: 'Prix du parking',
      type: 'string',
    },
  ],
};
