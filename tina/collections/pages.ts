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
      name: 'layout',
      label: 'Layout',
      options: [
        {
          label: 'Page basique',
          value: '../layouts/BaseLayout.astro',
        },
        {
          label: "Page d'accueil",
          value: '../layouts/HomeLayout.astro',
        },
      ],
      required: true,
      ui: {
        component: 'select',
        description: 'Choisir le layout de la page',
      },
    },
    {
      type: 'object',
      name: 'seo',
      label: 'SEO',
      fields: [
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
          name: 'metaKeywords',
          label: 'Mots clés meta',
        },
        {
          type: 'string',
          name: 'metaImage',
          label: 'Image meta',
        },
      ],
    },

    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
    },
    {
      type: 'object',
      label: 'Composants du bas de la page',
      name: 'bottomComponents',
      ui: {
        itemProps: (item) => {
          const component = item?.component;
          const options = [
            { label: 'Liste des exposants', value: 'ExhibitorList' },
            { label: 'Bloc Inscription', value: 'Inscription' },
            { label: 'Bloc Localisation', value: 'Localisation' },
            { label: 'Bloc Info pratiques', value: 'InfoPratiques' },
          ];
          const selectedOption = options.find((opt) => opt.value === component);
          return {
            label: selectedOption?.label || 'Nouvel élément',
          };
        },
      },
      fields: [
        {
          type: 'string',
          label: 'Composant',
          name: 'component',
          options: [
            { label: 'ExhibitorList', value: 'ExhibitorList' },
            { label: 'Inscription', value: 'Inscription' },
            { label: 'Localisation', value: 'Localisation' },
            { label: 'InfoPratiques', value: 'InfoPratiques' },
          ],
          ui: {
            component: 'select',
          },
        },
      ],
      list: true,
    },
    {
      type: 'object',
      label: 'Composants de la side bar',
      name: 'asideComponents',
      ui: {
        itemProps: (item) => {
          const component = item?.component;
          const options = [
            { label: 'Liste des exposants', value: 'ExhibitorList' },
            { label: 'Bloc Inscription', value: 'Inscription' },
            { label: 'Bloc Localisation', value: 'Localisation' },
            { label: 'Bloc Iinfo pratiques', value: 'InfoPratiques' },
          ];
          const selectedOption = options.find((opt) => opt.value === component);
          return {
            label: selectedOption?.label || 'Nouvel élément',
          };
        },
      },
      fields: [
        {
          type: 'string',
          label: 'Composant',
          name: 'component',
          options: [
            { label: 'Inscription', value: 'Inscription' },
            { label: 'Localisation', value: 'Localisation' },
            { label: 'InfoPratiques', value: 'InfoPratiques' },
          ],
          ui: {
            component: 'select',
          },
        },
      ],
      list: true,
    },
  ],
};
