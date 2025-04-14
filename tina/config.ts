import { defineConfig } from 'tinacms';
import { PagesCollection } from 'tina/collections/pages.ts';
import { ExhibitorsCollection } from 'tina/collections/exhibitors.ts';
import { ProgramCollection } from 'tina/collections/program.ts';
import { InfosCollection } from 'tina/collections/infos.ts';

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: './assets/medias',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      PagesCollection,
      ExhibitorsCollection,
      ProgramCollection,
      InfosCollection,
    ],
  },
});
