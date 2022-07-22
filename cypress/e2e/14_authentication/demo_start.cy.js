/// <reference types="cypress" />

it.only('Logged in user sees private board', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .should('be.visible')
  
});

it('Opens the private board', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .click()

})