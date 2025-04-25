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
      label: '⚠️ Site internet',
      type: 'object',
      name: 'site',
      description:
        'Informations sur le site internet (titre, description, adresse, bannière). A modifier avec précaution.',
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
      label: 'Edition',
      type: 'object',
      name: 'edition',
      description:
        "Informations sur l'édition du salon (date, prix du ticket, prix du parking, etc.)",
      fields: [
        {
          name: 'date',
          label: 'Date',
          type: 'string',
        },
        {
          name: 'edition',
          label: "Année de l'édition",
          type: 'string',
        },
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
        {
          name: 'editionRegistration',
          label: 'Inscription',
          type: 'object',
          fields: [
            {
              name: 'registrationEditionDate',
              label: "Année de l'édition",
              type: 'string',
            },
            {
              name: 'registrationShowCallout',
              label: "Afficher le callout d'inscription",
              type: 'boolean',
            },
          ],
        },
      ],
    },
    {
      label: 'Contact',
      type: 'object',
      name: 'contact',
      description: 'Adresse postale, téléphone et email',
      fields: [
        {
          type: 'object',
          name: 'address',
          label: 'Adresse postale',
          fields: [
            {
              label: 'Adresse postale',
              type: 'string',
              name: 'postalAddress',
            },
            {
              label: 'Lien Google Maps',
              type: 'string',
              name: 'postalAddressLink',
            },
          ],
        },
        {
          label: 'Téléphones',
          type: 'object',
          name: 'phone',
          fields: [
            {
              label: 'Téléphone contact',
              type: 'string',
              name: 'general',
            },
            {
              label: 'Téléphone presse',
              type: 'string',
              name: 'presse',
            },
          ],
        },
        {
          label: 'Emails',
          type: 'object',
          name: 'email',
          fields: [
            {
              label: 'Email de contact',
              type: 'string',
              name: 'general',
            },
            {
              label: 'Email presse',
              type: 'string',
              name: 'presse',
            },
          ],
        },
      ],
    },
    {
      label: 'Réseaux sociaux',
      type: 'object',
      name: 'social',
      description: 'Réseaux sociaux',
      ui: {
        itemProps: (item) => ({
          label: item?.label || 'Nouveau réseau',
        }),
      },
      fields: [
        {
          label: 'Liste des réseaux',
          type: 'object',
          name: 'networks',
          description: 'Ajouter vos réseaux sociaux',
          list: true,
          fields: [
            {
              label: 'Nom du réseau',
              type: 'string',
              name: 'label',
            },
            {
              label: 'Url du réseau',
              type: 'string',
              name: 'url',
            },
          ],
        },
      ],
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
      ],
    },
  ],
};
