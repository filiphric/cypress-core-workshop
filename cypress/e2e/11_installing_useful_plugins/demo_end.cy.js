/// <reference types="cypress" />

it('api testing', () => {

  cy.api('POST', '/api/boards', {
    name: "Hello world"
  })

  cy.api('PATCH', '/api/boards/1', {
    starred: true
  })

  cy.api('DELETE', '/api/boards/1')

});
