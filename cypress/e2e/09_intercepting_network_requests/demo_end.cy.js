/// <reference types="cypress" />

it('there are no boards on page', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards'
  }).as('boards')

  cy.visit('/')

  cy.wait('@boards')

  cy.get('[data-cy=board-item]')
    .should('not.exist')
  
});

it('deleting a list', () => {

  cy.visit('/board/1')

  cy.intercept('DELETE', '/api/lists/*')
    .as('deleteList')

  cy.get('[data-cy="list-options"]')
    .click()

  cy.get('[data-cy="delete-list"]')
    .click()

  cy.wait('@deleteList')
    .its('response.statusCode')
    .should('eq', 200)
  
});

it('loads a list of boards from fixture', () => {

  cy.intercept({
    method: 'GET', 
    url: '/api/boards'
  }, {
      fixture: 'twoBoards'
    })
    .as('boardList')

  cy.visit('/');

})

it('shows an error message when creating a board', () => {

  cy.intercept({
    method: 'POST', 
    url: '/api/boards'
  }, {
      statusCode: 500
    })
    .as('boardCreate')

  cy.visit('/');

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('garden project{enter}')

  cy.get('[data-cy="notification-message"]')
    .should('be.visible')

})