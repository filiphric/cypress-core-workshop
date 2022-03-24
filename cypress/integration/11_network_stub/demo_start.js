/// <reference types="cypress" />

it('loads a list of boards from fixture', () => {

  cy.intercept({
    method: 'GET', 
    url: '/api/boards'
  })
    .as('boardList')

  cy.visit('/');

})

it('shows an error message when creating a board', () => {

  cy.intercept('POST', '/api/boards')
    .as('boardCreate')

  cy.visit('/');

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('garden project{enter}')

})

it('reloads boards when it’s taking too long', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards'
  })
    .as('boards')

  cy.visit('/')
  
});