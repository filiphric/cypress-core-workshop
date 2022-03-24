/// <reference types="cypress" />

import { card } from '../../support/pageObjects/card'

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

it('odškrtnutie a otvorenie karty', function() {

  cy.visit(`/board/${this.boardId}`)

  card
    .create('new card')
    .check()
    .openDetail()
  
});