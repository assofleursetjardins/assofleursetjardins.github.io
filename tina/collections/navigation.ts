import type { Collection } from 'tinacms';

export const NavigationCollection: Collection = {
  name: 'navigations',
  label: 'Navigation du site',
  path: 'src/data',
  format: 'json',
  match: {
    include: 'navigations',
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: 'primary',
      label: 'Navigation principale',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.label || 'Nouvel élément',
        }),
      },
      fields: [
        {
          name: 'label',
          label: 'Titre',
          type: 'string',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'string',
        },
        {
          name: 'url',
          label: 'URL',
          type: 'string',
        },
      ],
    },
    {
      name: 'footer',
      label: 'Navigation de pied de page',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.label || 'Nouvel élément',
        }),
      },
      fields: [
        {
          name: 'label',
          label: 'Titre',
          type: 'string',
        },
        {
          name: 'url',
          label: 'URL',
          type: 'string',
        },
      ],
    },
  ],
};
