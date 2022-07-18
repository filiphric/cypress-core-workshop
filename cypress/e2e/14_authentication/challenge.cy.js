/// <reference types="cypress" />

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
  
});