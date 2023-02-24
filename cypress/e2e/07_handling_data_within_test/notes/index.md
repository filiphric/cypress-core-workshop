# Handling data within a test
When running Cypess commands, there are two processes happening in the background

1. creating command queue
2. running commands

While command queue is being created, all parameters that are passed into each command are resolved.

This means that any data that we receive at runtime must be made part of enqueued command chain. In Cypress, data passes through the commands, so variables declared and modified outside of command chain might not get resolved properly.

We can see commands being enqueued by adding the following function to our test:
```js
Cypress.on('command:enqueued', ({ name, args }) => {
  console.log(`command: ${name}\narguments: ${args}`)
})
```
This will expose the process of enqueueing commands into the console. To pass information gather during test runtime, we can use aliases or scoping.

## Using scopes
Anytime we get to data that we want to use in our test, we can use `cy.then()` function.

```js
cy.get('[data-cy=board-item]')
  .invoke('text')
  .then(text => {
    // use text from [data-cy=board-item] element
  })
```

## Using aliases
Aliases can help us pass information through our test. they can either be access by `cy.get('@aliasName')`:
```js
cy.get('[data-cy=board-item]')
  .invoke('text')
  .as('boardTitle')

  // some other test actions

cy.get('@boardTitle')
  .then(text => {
    // use text from [data-cy=board-item] element
  })
```

Additionally, aliases are added to Mocha context, which means we can access them using `this` keyword.

> ⚠️ However, this works only with `it('test', function() {})` and not with `it('test', () => {})`

```js
before( () => {
  cy.get('[data-cy=board-item]')
    .invoke('text')
    .as('boardTitle')
}) 

it('test', function() {
  cy.get('[data-cy=board-item]')
    .should('have.text', this.boardTitle)
})
```
A nice side effect of using aliases like this is the fact that it separates our test into "Arrange -> Act -> Assert" pattern, which helps us clearly define each phase of the test and its purpose.

## Useful reading
- [my blog on how variables work in Cypress](https://filiphric.com/cypress-basics-variables)
- [docs explaining variables and asynchronicity in Cypress](https://docs.cypress.io/guides/core-concepts/variables-and-aliases.html#Sharing-Context)
- [article on destructuring and how to use it](https://filiphric.com/using-destructuring-in-cypress)