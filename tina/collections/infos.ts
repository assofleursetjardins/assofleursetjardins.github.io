import type { Collection } from 'tinacms';

export const InfosCollection: Collection = {
  name: 'infos',
  label: 'Infos générales',
  path: 'src/data',
  format: 'json',
  match: {
    include: 'infoGeneral.json',
  },
  fields: [
    {
      label: 'Titre du site',
      type: 'string',
      name: 'site_title',
      nameOverride: 'site.title',
    },
    {
      label: 'Description',
      type: 'string',
      name: 'site_description',
      nameOverride: 'site.description',
    },
    {
      label: 'URL',
      type: 'string',
      name: 'site_url',
      nameOverride: 'site.url',
    },
    {
      label: 'Email contact',
      type: 'string',
      name: 'site_email_contact',
      nameOverride: 'site.email.contact',
    },
    {
      label: 'Email presse',
      type: 'string',
      name: 'site_email_presse',
      nameOverride: 'site.email.presse',
    },
    {
      label: 'Texte de bannière',
      type: 'string',
      name: 'site_message_text',
      nameOverride: 'site.message.text',
    },
    {
      label: 'Message visible',
      type: 'boolean',
      name: 'site_message_isVisible',
      nameOverride: 'site.message.isVisible',
    },
    {
      label: 'Téléphone contact',
      type: 'string',
      name: 'phone_contact',
      nameOverride: 'phone.contact',
    },
    {
      label: 'Téléphone presse',
      type: 'string',
      name: 'phone_presse',
      nameOverride: 'phone.presse',
    },
    { label: 'Adresse', type: 'string', name: 'address' },
    {
      label: 'Google Analytics',
      type: 'string',
      name: 'analytics_google',
      nameOverride: 'analytics.google',
    },
    {
      label: 'Matomo',
      type: 'string',
      name: 'analytics_matomo',
      nameOverride: 'analytics.matomo',
    },
    {
      label: 'Google Maps',
      type: 'string',
      name: 'analytics_googleMapsLink',
      nameOverride: 'analytics.googleMapsLink',
    },
    {
      label: 'Réseaux sociaux',
      type: 'object',
      name: 'social',
      list: true,
      fields: [
        { label: 'Réseau', type: 'string', name: 'label' },
        { label: 'Nom d’utilisateur', type: 'string', name: 'username' },
      ],
    },
  ],
};
