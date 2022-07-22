/// <reference types="cypress" />

// SOLUTION EXPLANATION: challenge #1
// cy.request will yield the response of our request in a form of object
// this object will contain response body, response status and some other
// data. using .its() command we are picking the "body" attribute within
// this object and "id" attribute within the "body" object. we don’t really
// have to use .its() command, but it makes things easier for us in challenge #2
// instead of writing "this.boardId.body.id" we can just use "this.boardId"
beforeEach( function() {

  cy.request('POST', '/api/boards', { name: 'new board '})
    .its('body.id')
    .as('boardId')

}) 

// SOLUTION EXPLANATION: challenge #2
// since we have created an alias in challenge #1, we can just reference it
// using this.boardId. This will resolve to whatever our board id is.
// so if the board id is 123456, the resolved url will be 
// "http://localhost:3000/board/123456"
it('opens a board', function() {

  cy.visit(`/board/${this.boardId}`)
  
})

// SOLUTION EXPLANATION: challenge #3
// we are using our "boardId" alias the same way as in challenge #2, but instead
// of using it within visit() command, we are using it to fill the request body
// in our cy.request() command
it('creates a new list', function() {

  cy.request('POST', '/api/lists', { name: 'new list', boardId: this.boardId })
    .its('status')
    .should('eq', 201)

})

// SOLUTION EXPLANATION: challenge #4
// In order to create a card, we need to send "boardId" and "listId" in our
// second cy.request() command.
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

// SOLUTION EXPLANATION: extra credit challenge
// principle is pretty much the same here, but in this example we need
// both "id" and "name" from our list creation request. this will then
// later in our test get used both in our request and in our assertion
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