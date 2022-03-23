# DOM testing

## Calling functions on yielded elements
- we can use JS functions like `.toUpperCase()` with using `.invoke()` function


## jQuery and DOM
- DOM elements are wrapped in jQuery:

```js
cy.get('[data-cy=footer-link]')
  .then( $el => {
    console.log($el) // returns jQuery-wrapped element
  })
```

This means we can use jQuery functions by using `.invoke()` function:

```js
cy.get('#hiddenElement')
  .invoke('show')
```

## Pasting text
- we can manipulate DOM in many ways - hiding, showing elements, adding classes or changing input value
- this means we can save some time using `.invoke('val')` instead of `.type()` for simulating a paste action

## Uploading a file
- whenever an app does a file upload, there’s an input like this:
```html
<input type="file">
```
For drop elements, it is hidden. Both cases can be solved by `.selectFile()` command (available from v 9.3.0)

```js
cy.get('[type=file]')
  .selectFile('cypress/fixtures/file.pdf')

cy.get('#dropzone')
  .selectFile('cypress/fixtures/file.pdf', { action: 'drag-drop' })
```

## Useful reading
* [jQuery documentation](https://api.jquery.com/)
* [.invoke() command documentation](https://docs.cypress.io/api/commands/invoke)
* [.selectFile command documentation](https://docs.cypress.io/api/commands/selectfile)
* [checking attributes of an element](https://filiphric.com/cypress-basics-check-attributes-value-and-text)
