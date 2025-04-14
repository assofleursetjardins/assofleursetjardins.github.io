import { defineConfig } from 'tinacms';
import { PagesCollection } from './collections/pages';
import { ExhibitorsCollection } from './collections/exhibitors';
import { ProgramCollection } from './collections/program';
import { InfosCollection } from './collections/infos';

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
