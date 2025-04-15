import type { Collection } from 'tinacms';

export const NavigationCollection: Collection = {
    name: 'navigations',
    label: 'Navigantion du site',
    path: 'src/data',
    format: 'json',
    match: {
        include: 'navigations',
    },
    fields: [
        {
            name: 'primary',
            label: 'Navigation principale',
            type: 'object',
            fields: [
                {   
                    name: 'title',
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
            fields: [
                {   
                    name: 'title',
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
