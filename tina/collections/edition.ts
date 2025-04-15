import type { Collection } from 'tinacms';

export const EditionCollection: Collection = {
  name: 'editionSalon',
  label: 'Edition Salon',
  path: 'src/data',
  format: 'json',
  match: {
    include: 'editonSalon',
  },
  fields: [
    {
      name: 'date',
      label: 'Date',
      type: 'string',
    },
    {
        name: 'edition',
        label: 'Année de l\'édition',
        type: 'string',
    },
    {
        name: 'pricing',
        label: 'Prix',
        type: 'object',
        fields:[
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
    },
  ],
};