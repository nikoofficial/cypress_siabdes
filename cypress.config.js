const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "81v8w5",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "nuxt",
      bundler: "webpack",
    },
  },

  component: {
    devServer: {
      framework: "nuxt",
      bundler: "webpack",
    },
  },

  component: {
    devServer: {
      framework: "nuxt",
      bundler: "webpack",
    },
  },
});
