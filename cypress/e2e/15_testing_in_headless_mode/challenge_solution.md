1. run cypress in headless mode
```
npx cypress run
```

2. run cypress via module api
```
node module-api.js
```

3. define cypress to only run `test_pass.js` file in this folder
```
npx cypress run --spec cypress/e2e/15_headless_run/test_pass.js
```

4. run the test with no video

```
npx cypress run --spec cypress/e2e/15_headless_run/test_pass.js --config video=false
```
5. run the test in firefox browser

```
npx cypress run --spec cypress/e2e/15_headless_run/test_pass.js --browser firefox
```

6. do challenges 4 and 5, but with module API
```js
const cypress = require('cypress')

cypress
  .run({
    browser: 'firefox',
    config: {
      video: false
    },
    spec: 'cypress/e2e/15_headless_run/test_pass.js'
  })
```

