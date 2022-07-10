/// <reference types="cypress" />

// challenge #1: use the file twoBoards.json from fixtures folder, 
// or create your own fixture file and use it in the test
it('shows list of boards from fixture', () => {

  cy.intercept('GET', '/api/boards', {
      fixture: 'twoBoards'
    })

  cy.visit('/');

  cy.get('[data-cy=board-item')
    .should('have.length', 2)

})

// challenge #2: try explicitly defining empty response body instead of using fixture
it('shows no boards in the list', () => {

  cy.intercept('GET', '/api/boards', [])

  cy.visit('/');

  cy.contains('Get started!')
    .should('be.visible')

})

// challenge #3: add an attribute to the .intercept() command that will
// make the request fail
it('shows error message when creating a board', () => {

  cy.intercept('POST', '/api/boards', {
    forceNetworkError: true
  })
  
  cy.visit('/');

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('garden project{enter}')

  cy.get('[data-cy="notification-message"]')
    .should('be.visible')

})

// challenge #4: dynamically change name of a board in the board list
it('dynamically changes board name', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards'
    }, (req) => {
      req.reply(res => {
        res.body[0].name = "hello!"
      })
    }).as('boards')

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .eq(0)
    .should('have.text', 'hello!')

})