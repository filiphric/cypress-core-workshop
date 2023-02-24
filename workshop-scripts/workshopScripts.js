import * as dotenv from 'dotenv'
const { testSetupData } = require('./testSetupData.js')
dotenv.config()

module.exports.registerWorkshopScripts = (on, config) => {
  config.env.hideXhr = Boolean(process.env.cypress_hideXhr)
  config.scrollBehavior = false
  on('task', { testSetupData })
  return config
};