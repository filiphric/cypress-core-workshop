# Headless (run) mode
Headless mode allows us to run our tests via terminal.

By default, Cypress will run all files in `cypress/e2e` folder. This can be configured in `cypress.config.js` with options:
```json
  "specPattern": "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
  "ignoreSpecPattern": "**/*.md"
```

Or can be defined as a flag in terminal:
```
npx cypress run --spec cypress/e2e/15_headless_run.js
```

There are many other flags that can be found in the [docs](https://docs.cypress.io/guides/guides/command-line#cypress-run)

## Module API
Besides this, you can use module API to run your tests. This gives you an opportunity to handle the test results in your own way and send them to Slack or Discord via webhook, or save them to a file:
```js
const cypress = require('cypress')

cypress
  .run({
    browser: 'firefox'
  }).then((results) => {
    console.log(results)
  })
  .catch((err) => {
    console.error(err)
  })
```

## Useful reading
* [my blog on how you can use module API](https://filiphric.com/test-grepping-in-cypress-using-module-api)
* [docs for headless mode](https://docs.cypress.io/guides/guides/command-line.html#cypress-run)
* [setting up filtering using cypress.config.js](https://docs.cypress.io/guides/references/configuration.html#Folders-Files)
* [cross browser testing in Cypress](https://docs.cypress.io/guides/guides/cross-browser-testing.html#Periodic-Basis)