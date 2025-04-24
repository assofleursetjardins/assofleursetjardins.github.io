import type { Collection } from 'tinacms';

export const HomeCollection: Collection = {
  name: 'home',
  label: 'Accueil',
  path: 'src/pages',
  format: 'mdx',
  match: {
    include: 'index',
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
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
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
    },
  ],
};
