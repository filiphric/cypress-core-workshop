/// <reference types="cypress" />

it('sends a request over API', () => {

  cy.request('POST', '/api/boards', {
    name: "I created this board using .request() command!"
  })

  cy.visit('/')
  
});

it('response gets 201 status', () => {

  cy
    .request('POST', '/api/boards', {
      name: "I created this board using .request() command!"
    })
    .its('status')
    .should('eq', 201)
  
});

it('response provides additional data', () => {

  const boardName = "I created this board using .request() command!"

  cy
    .request('POST', '/api/boards', {
      name: boardName
    })
    .then( board => {
      expect(board.body.created).to.be.a('string')
      expect(board.body.id).to.be.a('number')
      expect(board.body.name).to.eq(boardName)
      expect(board.body.starred).to.be.false
      expect(board.body.user).to.eq(0)
    })

  cy.visit('/')
  
});

beforeEach( () => {

  cy.request('POST', '/api/reset')

})  