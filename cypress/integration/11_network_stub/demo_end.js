/// <reference types="cypress" />

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

  cy.intercept('POST', '/api/boards', {
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

it('reloads boards when it’s taking too long', () => {

  cy.intercept({
      method: 'GET',
      url: '/api/boards',
      times: 1
    }, (req) => {
      req.reply(res => {

        res.delay = 8000

      })
    }).as('boards')

  cy.visit('/')

  cy.contains('Reload?')
    .click()
  
});