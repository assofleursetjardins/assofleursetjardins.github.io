import type { Collection } from 'tinacms';

export const InfosCollection: Collection = {
  name: 'infos',
  label: 'Infos',
  path: 'src/data/infoGeneral',
  format: 'json',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
    },
  ],
};
