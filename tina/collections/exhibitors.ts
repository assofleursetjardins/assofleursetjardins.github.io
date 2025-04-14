import type { Collection } from 'tinacms';

export const ExhibitorsCollection: Collection = {
  name: 'exhibitors',
  label: 'Exhibitors',
  path: 'src/data/exhibitors',
  format: 'json',
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'string',
    },
  ],
};
