import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'j22kj8',
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
