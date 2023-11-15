Cypress.Commands.add('dataCy', (selector) => {

  Cypress.log({
    displayName: 'dataCy',
    message: selector,
    consoleProps() {
      return {
        selector: selector
      }
    }
  })

  cy.get(`[data-cy="${selector}"]`, { log: false })

})