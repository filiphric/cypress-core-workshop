const { defineConfig } = require('cypress')
const { registerWorkshopScripts } = require('./workshop-scripts/workshopScripts.js')
const { seedDatabase } = require('./cypress/scripts/seedDatabase.js')

module.exports = defineConfig({
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    setupNodeEvents(on, config) {
      registerWorkshopScripts(on, config)
      return config
    },
    // uncomment this if you want to hide xhr requests in your timeline
    env: {
      hideXhr: false
    },
    baseUrl: 'http://localhost:3000',
    projectId: 'od9q5x'
  },
})
 