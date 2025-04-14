// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "./assets/medias",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages du site",
        path: "src/pages",
        format: "mdx",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true
          },
          { type: "string", name: "description", label: "Description" },
          { type: "image", name: "image", label: "Image" },
          {
            type: "string",
            name: "imgtitle",
            label: "Titre de l\u2019image",
            required: false
          },
          { type: "string", name: "author", label: "Auteur", required: false },
          { type: "datetime", name: "date", label: "Date" },
          { type: "string", name: "metaTitle", label: "Meta Title (SEO)" },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description (SEO)"
          },
          {
            type: "string",
            name: "asideComponents",
            label: "Composants aside",
            list: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu principal",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
