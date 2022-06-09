/// <reference types="cypress" />

it('Bookmark board and open', () => {

  cy.visit('/')

  cy.get('[data-cy=star]')
    .click({force: true})

  cy.get('[data-cy=board-item]')
    .click()
  
});