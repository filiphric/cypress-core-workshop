/// <reference types="cypress" />

Cypress.Commands.add('dataCy', (selector) => {

  Cypress.log({
    displayName: 'dataCy',
    message: selector,
    consoleProps() {
      return {
        selector
      }
    }
  })

  cy.get(`[data-cy=${selector}]`, { log: false })

})

it('creates new list and a new card', () => {

  cy.visit(`/board/1`)

  cy.dataCy('add-list-input')
    .type('Groceries{enter}')

  cy.dataCy('new-card')
    .click()

  cy.dataCy('new-card-input')
    .type('milk{enter}')
  
});