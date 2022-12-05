const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1800,
  viewportHeight: 700,

  e2e: {
    baseUrl: "https://qatest-dev.indvp.com/",
    specPattern: "cypress/e2e/**/*.js",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
