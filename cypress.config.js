const { defineConfig } = require('cypress')
const { setupDb } = require('./workshop-scripts/testSetupTask.js')

module.exports = defineConfig({
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('task', { setupDb })
    },
    baseUrl: 'http://localhost:3000',
    excludeSpecPattern: ['*.md', '*.html', '*.png', '*.jpeg'],
  },
})
