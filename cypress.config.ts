import { defineConfig } from "cypress"

export default defineConfig({
  projectId: "j22kj8",
  video: true,

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
