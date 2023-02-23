import * as dotenv from 'dotenv'
const { testSetupData } = require('./testSetupData.js')
dotenv.config()

module.exports.registerWorkshopScripts = (on, config) => {
  console.log(process.env.cypress_hideXhr)
  config.env.hideXhr = process.env.cypress_hideXhr
  on('task', { testSetupData })
  return config
};