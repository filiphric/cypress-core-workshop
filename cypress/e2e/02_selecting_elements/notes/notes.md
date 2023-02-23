# Selecting elements
`cy.contains()` to select an element by text
`cy.get()` to select an element by query selector

## Cheat sheet
```js
cy.get('a') 
cy.get('.class')
cy.get('#id')
cy.get('[attribute]')
cy.get('[attribute=value]')
```

## Best practices
Definitely try to use custom test attributes. Classes are most prone to change in web apps, absolute selectors are flaky and IDs need unique names which makes them hard to maintain.

## Autocomplete in VS Code
```
/// <reference types="cypress" />
```

## Traversing in DOM
There are several great commands that enable you to traverse or filter elements on page to help you get to the one you need in a readable way. You don’t need xpath, it’s really hard to read.

## Useful reading
* [my blog on the topic of selectors](https://filiphric.com/cypress-basics-selecting-elements)
* [my blog about xpath vs. css selectors](https://filiphric.com/cypress-basics-xpath-vs-css-selectors)
* [my blog on the topic of .contains() command](https://filiphric.com/contains-an-overlooked-gem-in-cypress)
* [Best practices on selectors recommended by Cypress](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements)
* [documentation for .get() command](https://docs.cypress.io/api/commands/get.html#Usage)
* [documentation for .contains() command](https://docs.cypress.io/api/commands/contains.html#Usage)
* [W3 Schools documentation for selectors](https://www.w3schools.com/cssref/css_selectors.asp)
* [Very nice diagram for explaining various relations between elements](https://frontend30.com/css-selectors-cheatsheet/)
* [game for learning and practicing your CSS selectors](https://flukeout.github.io/)
