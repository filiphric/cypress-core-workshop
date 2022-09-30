/// <reference types="cypress" />
const data = require('../../fixtures/testData.json')

it('setting up the database', () => {
    
  cy.task('seedDatabase', data)
  cy.visit(`/board/12345`)

});