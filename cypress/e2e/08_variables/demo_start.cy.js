/// <reference types="cypress" />

it('opening a board', function() {

  cy.request('POST', '/api/boards', { name: 'new board' })
    .then( ({ body }) => {

      const boardId = body.id

      cy.visit(`/board/${boardId}`)

    })

})