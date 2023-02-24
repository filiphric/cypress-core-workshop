/// <reference types="cypress" />

// challenge #1: create three new custom commands. one for creating new board
// one for creating new list and one for creating new card
// and use them in test

Cypress.Commands.add('addBoard', (boardName) => {

  cy.get('[data-cy="create-board"]')
    .click()

  cy.get('[data-cy="new-board-input"]')
    .type(`${boardName}{enter}`)
  
})
Cypress.Commands.add('addList', (listName) => {

  cy.get('[data-cy=add-list-input]')
    .type(`${listName}{enter}`)
  
})
Cypress.Commands.add('addCard', (cardName) => {

  cy.get('[data-cy=new-card]')
    .click()

  cy.get('[data-cy=new-card-input]')
    .type(`${cardName}{enter}`)
  
})

it('creates new board, list and card', () => {

  cy.visit('/')
  cy.addBoard('new board')
  cy.addList('new list')
  cy.addCard('new card')
  
});