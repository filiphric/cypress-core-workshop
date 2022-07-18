const { defineConfig } = require('cypress')
const { setupDb } = require('./workshop-scripts/setupDbFile.js')

module.exports = defineConfig({
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { setupDb })
    },
    baseUrl: 'http://localhost:3000',
    excludeSpecPattern: ['*.md', '*.html', '*.png', '*.jpeg'],
  },
})
