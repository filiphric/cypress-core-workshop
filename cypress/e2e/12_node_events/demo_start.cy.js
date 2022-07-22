/// <reference types="cypress" />

it('setting up the database', () => {

  cy.visit(`/`)

});

it('setting up configuration', () => {

  cy.log(Cypress.config('baseUrl'))
  cy.visit('/')
  
});