/// <reference types="cypress" />

beforeEach(() => {
    
  cy.step('get board name')
  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .invoke('text')
    .as('boardTitle')

});

it('dynamically check board title', function() {
  
  cy.step('go to board detail')
  cy.get('[data-cy=board-item]')
    .click()
  
  cy.step('board detail name is the same')
  cy.get('[data-cy="board-title"]')
    .invoke('val')
    .should('eq', this.boardTitle)

})