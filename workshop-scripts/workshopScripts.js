require('dotenv').config()
const { testSetupData } = require('./testSetupData.js')

module.exports.registerWorkshopScripts = (on, config) => {
  config.env.hideXhr = Boolean(process.env.cypress_hideXhr)
  on('task', { testSetupData })
  return config
};