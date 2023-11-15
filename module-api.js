/// <reference types="cypress" />
const axios = require('axios')
const cypress = require('cypress')

cypress
  .run({
    browser: 'firefox',
    headed: true,
    spec: 'cypress/e2e/15_testing_in_headless_mode/test_pass.cy.js',
    config: {
      video: false
    }
  }).then(({ totalTests, totalFailed, totalPassed }) => {
    axios.post('https://discord.com/api/webhooks/956586221302345728/nynCPjpY0F2XW4mH1BRcmp3vAkn9D6n6qU-H599xylat89qlFgHm1juazH5eEevJNi2q', {
      content: `
      Cypress run has finished!
      \`\`\`${JSON.stringify({
          totalTests,
          totalFailed,
          totalPassed,
        }, null, 2)}\`\`\``
    });
  })