import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "hu6m2960",
    dataset: "production",
  },
  studioHost: "romaabogados",
  vite: (config) => ({
    ...config,
    css: {
      postcss: {
        plugins: [],
      },
    },
  }),
});
