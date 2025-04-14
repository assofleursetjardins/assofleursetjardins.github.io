import type { Collection } from 'tinacms';

export const ProgramCollection: Collection = {
  name: 'program',
  label: 'Program',
  path: 'src/data/program',
  format: 'json',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
    },
  ],
};
