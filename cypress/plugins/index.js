const { setupDb } = require('../../workshop-scripts/testSetupTask.js')

module.exports = (on, config) => {
  on('task', { setupDb })
}
