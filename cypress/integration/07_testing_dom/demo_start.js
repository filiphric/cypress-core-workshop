/// <reference types="cypress" />

const longText = require('../../fixtures/longText.json')[0]

it('get element attributes', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy=card-text]')
    .eq(0)
    .should('contain', 'milk')
  
});

it('call a jQuery function on element', () => {

  cy.visit('/board/123456789')

  cy.get('[data-cy=footer-link]')

})

it('handling long text', () => {

  cy.visit('/board/123456789?card=77958252506')

  cy.get('[data-cy="card-description"]')
    .type(longText)

})

it('uploading a file', () => {

  cy.visit('/board/123456789?card=77958252506')

})
