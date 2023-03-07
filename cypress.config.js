const { defineConfig } = require('cypress');

module.exports = defineConfig({
    projectId: '1fm93v',
    defaultCommandTimeout: 15000,
    env: {
        apiUrl: 'https://apiv2.vestiairecollective.com',
    },
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: 'cypress/integration/test*.js',
        baseUrl: 'https://us.vestiairecollective.com',
        hideXHRInCommandLog: true,
        viewportWidth: 1280,
        viewportHeight: 800,
        chromeWebSecurity: false,
    },
});
