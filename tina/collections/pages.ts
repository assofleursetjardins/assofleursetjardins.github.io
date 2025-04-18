import type { Collection } from 'tinacms';

export const PagesCollection: Collection = {
  name: 'posts',
  label: 'Pages',
  path: 'src/pages',
  format: 'mdx',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true,
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description',
      required: true,
    },
    {
      type: 'image',
      name: 'image',
      label: 'Image',
    },
    {
      type: 'string',
      name: 'imgtitle',
      label: "Nom de l'image",
    },
    {
      type: 'string',
      name: 'author',
      label: 'Auteur',
    },
    {
      type: 'datetime',
      name: 'date',
      label: 'Date',
    },
    {
      type: 'string',
      name: 'metaTitle',
      label: 'Titre meta',
    },
    {
      type: 'string',
      name: 'metaDescription',
      label: 'Description meta',
    },
    {
      type: 'string',
      name: 'asideComponents',
      label: 'Composants de la side bar',
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
    },
  ],
};

