/// <reference types="cypress" />

it.only('board has no lists', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=list]')
    .should('not.exist')
  
});

it('deleting a list', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="list-options"]')
    .click()

  cy.get('[data-cy="delete-list"]')
    .click()

});

it('loads a list of boards from fixture', () => {

  cy.intercept({
    method: 'GET', 
    url: '/api/boards'
  })
    .as('boardList')

  cy.visit('/');

})

it('shows an error message when creating a board', () => {

  cy.intercept({
    method: 'POST', 
    url: '/api/boards'
  })
    .as('boardCreate')

  cy.visit('/');

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('garden project{enter}')

})