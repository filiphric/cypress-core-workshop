/// <reference types="cypress" />

it('board has no lists', () => {

  cy.intercept('GET', '/api/lists?boardId=1')
    .as('getLists')

  cy.visit('/board/1')

  cy.wait('@getLists')

  cy.get('[data-cy=list]')
    .should('not.exist')
  
});

it('deleting a list', () => {

  cy.intercept({
    method: 'DELETE',
    url: '/api/lists/*'
  }).as('deleteList')

  cy.visit('/board/1')

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
    fixture: 'twoBoards.json'
  })
    .as('boardList')

  cy.visit('/');

})

it.only('shows an error message when creating a board', () => {

  cy.intercept({
    method: 'POST', 
    url: '/api/boards'
  }, {
    forceNetworkError: true
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