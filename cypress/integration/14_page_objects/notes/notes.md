# Page objects
Contrary to a popular belief, using page objects is completely OK in Cypress. But there might be slightly different reasons why you (don’t) want to implement them.

Why you don’t want to implement page objects
- Cypress has a readable syntax, so you don’t need POs for readability purposes
- Cypress enables you to log in programmatically using `.request()` and provides session restoring, so you don’t need to create a page object for logging in via UI or for your test setup
- Cypress has access to the tested application, so you can use it to inject application internal storage

Why you want to implement page objects
- abstract common logic into separate chunks
- avoid repetition (within reason)
- improve maintainability of your codebase

## Example of a page object
```js
export const board = {
  star(number = 0) {
    cy.get('[data-cy=star]')
      .eq(number)
      .click({force: true})

    return this
  },
  open(number = 0) {
    cy.get('[data-cy=board-item]')
      .eq(number)
      .click()
  }
}
```
Since we are in JavaScript land, we can simply write an object with functions that we can call. If you want to chain those functions, just add `return this` to your function. In your test, you can then use it like this:

```js
import { board } from '../../support/pageObjects/board'

it('Bookmark board and open', () => {

  cy.visit('/')

  board
    .star()
    .open()

})
```
## useful reading
- [great video on page objects](https://testautomationu.applitools.com/cypress-tutorial/chapter7.html)
- [blog about page objects and app actions](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)
- [my blog on Applitools and how app actions work](https://applitools.com/blog/page-objects-app-actions-cypress/)
- [page objects explained on a wordle game](https://glebbahmutov.com/blog/wordle-page-objects/)