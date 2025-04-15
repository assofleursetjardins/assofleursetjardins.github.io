import type { Collection } from 'tinacms';

export const ProgramCollection: Collection = {
  name: 'program',
  label: 'Program',
  path: 'src/data',
  format: 'json',
  match: {
    include: 'program',
  },
  fields: [
    {
      name: 'schedule',
      label:'Horaires',
      type: 'object',
      list: true,
      fields: [
        {
          name : 'Opening',
          label:'Ouverture',
          type: 'string',
        },
        {
          name : 'Closing',
          label:'Fermeture',
          type: 'string',
        },
        {
          name : 'Date',
          label:'Date',
          type: 'datetime',
        },
      ],
    },
  ],
};
