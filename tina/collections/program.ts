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
      name: 'ProgramSalon',
      label: 'Salon',
      type: 'object',
      fields: [
        {
          name: 'schedule',
          label: 'Horaires',
          type: 'object',
          fields: [
            {
              name: 'Opening',
              label: 'Ouverture',
              type: 'string',
            },
            {
              name: 'Closing',
              label: 'Fermeture',
              type: 'string',
            },
            {
              name: 'Date',
              label: 'Date',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
