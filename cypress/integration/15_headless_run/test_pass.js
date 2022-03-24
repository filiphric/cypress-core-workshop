/// <reference types="cypress" />
beforeEach( () => {
  cy.request('POST', '/api/reset')
})

it('creates new board, list and card', () => {

  cy.visit('/')
  cy.get('[data-cy=first-board]')
    .type('new board{enter}')

  cy.get('[data-cy=add-list-input]')
    .type('new list{enter}')

  cy.get('[data-cy=new-card]')
    .click()

  cy.get('[data-cy=new-card-input]')
    .type('new card{enter}')
  
});