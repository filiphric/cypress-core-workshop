/// <reference types="cypress" />

beforeEach(() => {

  cy.request('POST', '/api/boards', { name: 'new board' })
    .its('body.id')
    .as('boardId')

}) 

it('opening a board', function() {

  cy.visit(`/board/${this.boardId}`)

})