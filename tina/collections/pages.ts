import type { Collection } from 'tinacms';

export const PagesCollection: Collection = {
  name: 'pages',
  label: 'Pages',
  path: 'src/pages',
  format: 'mdx',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
    },
  ],
};
