/// <reference types="cypress" />

it('setting up the database', () => {

  cy.task('seedDatabase', {
    boards: [],
    lists: [],
    cards: [],
    users: []
  })

  cy.visit(`/`)

});