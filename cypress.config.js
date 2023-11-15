const { defineConfig } = require('cypress')
const { registerWorkshopScripts } = require('./workshop-scripts/workshopScripts.js')
const { seedDatabase } = require('./cypress/scripts/seedDatabase.js')

module.exports = defineConfig({
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    setupNodeEvents(on, config) {
      registerWorkshopScripts(on, config)

      const version = config.env.version || 'local' // --env version="value"

      config.env = require(`./cypress/config/${version}.json`)

      config.baseUrl = config.env.baseUrl
   
      return config
    },
    // uncomment this if you want to hide xhr requests in your timeline
    // env: {
    //   hideXhr: false
    // },
    baseUrl: 'http://localhost:3000',
  },
})
 