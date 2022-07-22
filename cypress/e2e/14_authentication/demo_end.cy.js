/// <reference types="cypress" />

Cypress.Commands.add('loginByApi', () => {

  cy.session('loginByApi', () => {

    cy.request('POST', '/api/login', {
      email: 'filip@filiphric.sk',
      password: 'Asdf.1234#'
    }).then(({ body }) => {
      cy.setCookie('trello_token', body.accessToken)
    })

  })

})

it('Logged in user sees private board', () => {

  cy.loginByApi()

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .should('be.visible')
  
});

it('Opens the private board', () => {

  cy.loginByApi()

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .click()

})