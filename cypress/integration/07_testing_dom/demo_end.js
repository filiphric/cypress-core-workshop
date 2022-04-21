/// <reference types="cypress" />

const longText = require('../../fixtures/longText.json')[0]

it('get element attributes', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card-text]')
    .eq(0)
    .invoke('text')
    .invoke('toLowerCase')
    .should('contain', 'milk')
  
});

it('call a jQuery function on element', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=footer-link]')
    .invoke('prop', 'href')
    .should('eq', 'https://filiphric.com/')

})

it('handling long text', () => {

  cy.visit('/board/1?card=1')

  cy.get('[data-cy="card-description"]')
    .invoke('val', longText)

})

it('uploading a file', () => {

  cy.visit('/board/1?card=1')

  cy.get('[type=file]')
    .invoke('show')
    .selectFile('cypress/fixtures/cypress_logo.png')

  cy.get('[data-cy="image-delete"]')
    .click()

  cy.get('[data-cy="upload-image"]')
    .selectFile('cypress/fixtures/cypress_logo.png', { action: 'drag-drop' })

})
