/// <reference types="cypress" />

const cypress = require('cypress')

cypress
  .run({
    browser: 'firefox',
    headed: true,
    spec: 'cypress/e2e/15_headless_run/test_pass.js',
    config: {
      video: false
    }
  }).then((results) => {
    console.log(results)
  })
  .catch((err) => {
    console.error(err)
  })