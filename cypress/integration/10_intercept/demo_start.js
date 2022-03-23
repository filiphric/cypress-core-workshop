/// <reference types="cypress" />

it('creating a new card', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('milk{enter}')
  
});

it('board has no lists', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy=list]')
    .should('not.exist')
  
});

it('deleting a list', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy="list-options"]')
    .click()

  cy.get('[data-cy="delete-list"]')
    .click()

});