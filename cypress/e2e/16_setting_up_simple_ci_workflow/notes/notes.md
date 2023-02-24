# Setting up a simple CI workflow
Whenever we integrate our tests into a CI/CD pipeline, we need to think of the machine that runs our tests as of a totally new one.

We need to copy our project, install all dependencies, run the application and then run our Cypress tests. This sounds like a lot of work, so luckily GitHub action workflows come to the rescue.

Cypress has [created their own action workflow](https://github.com/cypress-io/github-action) that can be easily configured to install our project, run the application as well as tests, and handle proper caching.

The very basic setup looks like this:

```yml
name: e2e-tests
on: [push]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Cypress run
        uses: cypress-io/github-action@v5
        with:
          start: npm start
```

This will do all the things I mentioned everytime we push new code to the remote branch. The file serves as a recipe and is stored in `.github/workflows` folder.


## Useful reading
* [my blog on how to set up Github actions](https://filiphric.com/cypress-and-git-hub-actions-step-by-step-guide)
* [docs for headless mode](https://docs.cypress.io/guides/guides/command-line.html#cypress-run)
* [setting up filtering using cypress.config.js](https://docs.cypress.io/guides/references/configuration.html#Folders-Files)
* [cross browser testing in Cypress](https://docs.cypress.io/guides/guides/cross-browser-testing.html#Periodic-Basis)