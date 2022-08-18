const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: 0,
  defaultCommandTimeout: 30000,
  e2e: {
    baseUrl: 'https://dashboard.focaldata.dev'
  },
});