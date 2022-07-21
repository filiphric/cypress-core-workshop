it('opening the trello application', () => {

  // SOLUTION EXPLANATION: challenge #1

  // this works once you define "baseUrl" 
  // inside your cypress.config.js file:
  //
  /// module.exports = defineConfig({
  ///   e2e: {
  ///     baseUrl: 'http://localhost:3000', <<< like this
  ///   },
  /// })
  cy.visit('/')

  // SOLUTION EXPLANATION: challenge #2
  // because we have defined our baseUrl inside cypress.config.js file,
  // we can just define the path in our .visit() command.
  // the full URL will resolve to "http://localhost/board/1"
  cy.visit('/board/1')

  // SOLUTION EXPLANATION: challenge #3
  // In addition to opening URL path, we can open an URL, we can
  // define a URL query. In some applications, this can open different
  // views. Notice how we didn’t have to click on a card to open
  // its detail. Our app is programmed to open the card detail if there’s
  // a URL query in it. 

  // 📚 You can read more about different URL attributes
  // here: https://developer.mozilla.org/en-US/docs/Web/API/URL
  cy.visit('/board/1?card=1')

  // SOLUTION EXPLANATION: extra credit challenge
  // In previous example we defined the URL query explicitly, but we
  // can also pass them as an option. Notice how query parameters are 
  // always written in a "attribute=value" pair. When you have multiple
  // query parameters, instead of pasting them into URL path, you can 
  // define them as an object that will contain attribute value pairs
  // inside it.
  // 📚 https://docs.cypress.io/api/commands/visit#Add-query-paramaters
  cy.visit('/board/1', {
    qs: {
      card: 1
    }
  })

});