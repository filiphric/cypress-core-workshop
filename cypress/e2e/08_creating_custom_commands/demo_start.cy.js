/// <reference types="cypress" />

it('creates new list and a new card', () => {

  cy.visit(`/board/1`)

  cy.get('[data-cy="add-list-input"]')
    .type('Groceries{enter}')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('milk{enter}')
  
});