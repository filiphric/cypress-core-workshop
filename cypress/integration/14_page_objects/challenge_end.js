/// <reference types="cypress" />

// the following code would properly be in a separate file and imported to the test
// import { card } from '../../support/pageObjects/card'
export const card = {
  create(cardName = 'new card', listNumber = 0) {
    cy.get('[data-cy=new-card]')
      .eq(listNumber)
      .click()

    cy.get('[data-cy=new-card-input]')
      .type(`${cardName}{enter}`)

    return this
  },
  check(number = 0) {
    cy.get('[data-cy=card-checkbox]')
      .eq(number)
      .check()

    return this
  },
  openDetail(number = 0) {
    cy.get('[data-cy=card]')
      .eq(number)
      .click()

    return this
  }
}

beforeEach( () => {

  cy.request('POST', '/api/boards', { name: 'new board '})
    .its('body.id').as('boardId')
    .then( boardId => {
      cy.request('POST', '/api/lists', {
        name: 'new list',
        boardId
      })
    })

})

it('creating, checking and opening a card', function() {

  cy.visit(`/board/${this.boardId}`)

  card
    .create('new card')
    .check()
    .openDetail()
  
});