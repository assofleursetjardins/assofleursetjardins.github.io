import type { Collection } from 'tinacms';

export const InfosCollection: Collection = {
  name: 'infos',
  label: 'Infos générales',
  path: 'src/data',
  format: 'json',
  match: {
    include: 'infoGeneral',
  },
  ui: {
    filename: {
      slugify: () => 'infoGeneral',
    },
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      label: 'Site internet',
      type: 'object',
      name: 'site',
      fields: [
        {
          label: 'Titre du site',
          type: 'string',
          name: 'title',
        },
        {
          label: 'Description',
          type: 'string',
          name: 'description',
        },
        {
          label: 'Adresse du site',
          type: 'string',
          name: 'url',
        },
        {
          label: 'Emails',
          type: 'object',
          name: 'email',
          fields: [
            {
              label: 'Email de contact',
              type: 'string',
              name: 'contact',
            },
            {
              label: 'Email presse',
              type: 'string',
              name: 'presse',
            },
          ],
        },
        {
          label: 'Bannière',
          type: 'object',
          name: 'message',
          fields: [
            {
              label: 'Texte de la bannière',
              type: 'string',
              name: 'text',
            },
            {
              label: 'Afficher la bannière',
              type: 'boolean',
              name: 'isVisible',
            },
          ],
        },
      ],
    },
    {
      label: 'Téléphone',
      type: 'object',
      name: 'phone',
      fields: [
        {
          label: 'Téléphone contact',
          type: 'string',
          name: 'contact',
        },
        {
          label: 'Téléphone presse',
          type: 'string',
          name: 'presse',
        },
      ],
    },
    {
      label: 'Adresse postale',
      type: 'string',
      name: 'address',
    },
    {
      label: 'Statistiques',
      type: 'object',
      name: 'analytics',
      fields: [
        {
          label: 'Google Analytics',
          type: 'string',
          name: 'google',
        },
        {
          label: 'Matomo',
          type: 'string',
          name: 'matomo',
        },
        {
          label: 'Lien Google Maps',
          type: 'string',
          name: 'googleMapsLink',
        },
      ],
    },
    {
      label: 'Réseaux sociaux',
      type: 'object',
      name: 'social',
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.label || 'Nouveau réseau',
        }),
      },
      fields: [
        {
          label: 'Nom du réseau',
          type: 'string',
          name: 'label',
        },
        {
          label: 'Nom d’utilisateur',
          type: 'string',
          name: 'username',
        },
      ],
    },
  ],
};
