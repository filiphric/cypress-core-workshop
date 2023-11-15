/// <reference types="cypress" />

beforeEach( () => {

  cy.visit('/board/1')

})

it('cards are visible', () => {

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('Bread{enter}')

  cy.get('[data-cy="card"]')
    .should('be.visible')

  cy.get('[data-cy="card"]')
    .should('have.length', 2)

})

it('has the checkbox in checked state', () => {

  cy.get('[data-cy=card-checkbox]')
  .check()

  cy.get('[data-cy=card-checkbox]')
    .should('be.checked')

  cy.get('[data-cy="due-date"]')
    .should('have.class', 'completed')

})

it.only('has correct list name', () => {

  cy.get('[data-cy=list-name]')
    .should('have.value', 'Groceries')

})