# Creating custom commands
Custom commands are great if we want to expand our command library or abstract certain parts of our code into its own block

## How to
```js
Cypress.Commands.add('myCommand', () => {

  // your commands here

})
```

## Do we have to?
Well, not really. We can just use a simple JavaScript function:
```js
const myCommand = () => {
  // your commands here
}

it('test', () => {

  myCommand() // works as well

})
```

## Autocomplete and JSDoc
To go all in with our custom command, we can create an `index.d.ts` command in our `cypress/support/` folder
```ts
declare namespace Cypress {
  interface Chainable {
    myCommand(): Chainable<any>
  }
}
```
This will add our command to the Cypress namespace, so the next time you start typing `cy.` yur command will appear in your editor as an autocomplete suggestion.

If you want to add a mini-documentation for your command, you can us JSDoc. This is a special kind of comment that will appear on hover in your editor. The final `index.d.ts` file will look like this:

```ts
declare namespace Cypress {
  interface Chainable {
    /**
     * my custom command does magic stuff!
     */
    myCommand(): Chainable<any>
  }
}
```

# Useful reading
* [docs for creating custom commands](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax)
* [docs for creating autocomplete capabilities for custom commands](https://docs.cypress.io/guides/tooling/typescript-support.html#Types-for-custom-commands)
* [my article on how you can improve your custom command logs](https://filiphric.com/improve-your-custom-command-logs-in-cypress)
* [fun little thought experiment on how you can make your custom command autocomplete your selectors](https://filiphric.com/autocompleting-selectors-in-cypress-with-typescript)