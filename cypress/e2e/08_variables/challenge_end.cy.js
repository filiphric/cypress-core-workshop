/// <reference types="cypress" />

// #1: create a new board using API in the beforeEach and add an alias to it
beforeEach( function() {

  cy.request('POST', '/api/boards', { name: 'new board '})
    .its('body.id')
    .as('boardId')

}) 

// #2: open the board by using the alias you created in beforeEach hook
it('opens a board', function() {

  cy.visit(`/board/${this.boardId}`)
  
})

// #3: create a new list inside the created board
it('creates a new list', function() {

  cy.request('POST', '/api/lists', { name: 'new list', boardId: this.boardId })
    .its('status')
    .should('eq', 201)

})

// #4: create a new list and a new card that will be inside the board
it('creates a new list and a new card', function() {

  cy.request('POST', '/api/lists', { name: 'new list', boardId: this.boardId })
    .its('body.id')
    .then( listId => {
    
      cy.request('POST', '/api/cards', { 
        name: 'new card',
        boardId: this.boardId,
        listId
      })

  })
  
})

// #5: create a new list, card, open that board and assert that the
// card detail contains the list name
it('shows list name in the card detail', function() {

  cy.request('POST', '/api/lists', { name: 'new list', boardId: this.boardId })
    .its('body')
    .then( ({ id, name }) => {
    
      cy.request('POST', '/api/cards', { 
        name: 'new card',
        boardId: this.boardId,
        listId: id
      })

      cy.visit(`/board/${this.boardId}`)

      cy.get('[data-cy=card]')
        .click()

      cy.get('[data-cy=card-list-name]')
        .should('have.text', name)

  })

})