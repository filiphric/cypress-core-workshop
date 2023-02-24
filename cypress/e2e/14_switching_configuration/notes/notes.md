# Switching configuration

## config
This is an object that contains all the configuration attributes. Having access to this enables us to change the configuration while Cypress is opening. This will work both for interactive (`npx cypress open`) and headless mode (`npx cypress run`). 

Let’s say we configure our config like this:

```js
setupNodeEvents(on, config) {
  if (config.env.version === "prod") {
    config.baseUrl = 'http://trello.com'
    config.env.apiVersion = 'v2'
  }

  return config
}
```

Whenever we now pass `npx cypress open --env version=prod` our `baseUrl` will become `http://trello.com` and `apiVersion` will become `v2`

## Multiple environments
If we need to switch between multiple configurations, one of the strategies would be to create `json` files with different configurations and create a logic that will react based on passed attribute.

```js
setupNodeEvents(on, config) {
  // if version not defined, use local
  const version = config.env.version || 'local'
  // load env from json
  config.env = require(`./cypress/config/${version}.json`);
  // change baseUrl
  config.baseUrl = config.env.baseUrl

  return config
}
```

## How is configuration resolved?
There are multiple ways of resolving configuration and using `setupNodeEvents()` function is just one of them. [They follow a hierarchy which you can read more about here](https://docs.cypress.io/guides/references/configuration#Resolved-Configuration).

## Useful reading
* [my blog about creating config plugin (v9)](https://filiphric.com/create-a-configuration-plugin-in-cypress)
* [docs for using configuration API](https://docs.cypress.io/api/plugins/configuration-api.html#Usage)