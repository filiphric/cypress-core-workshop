/// <reference types="cypress" />

// challenge #1: create a card using UI and use .intercept() command
// for watching the http request for the card creation
// test the response status code and some of the attributes 
// of the card you created
it('creates a card', () => {

  cy.visit(`/board/1`)

  cy.intercept('POST', '/api/cards')
    .as('createCard')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('card{enter}')

  cy.wait('@createCard')
    .then( ({ response, request }) => {

      expect(request.body.boardId).to.eq(1)
      expect(response.statusCode).to.eq(201)
      expect(response.body.description).to.be.empty

    })
  
});

// challenge #2: create and check the card you created using UI and use .intercept() command
// to catch the http request that happens. test its status code
it('checking the card', () => {

  cy.visit(`/board/1`)

  cy.intercept('PATCH', '/api/cards/*').as('checkCard')
  
  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('milk{enter}')

  cy.get('[data-cy="card-checkbox"]')
    .check()

  cy.wait('@checkCard')
    .its('response.statusCode')
    .should('eq', 200)

});

// challenge #3: use the file twoBoards.json from fixtures folder, 
// or create your own fixture file and use it in the test
it('shows list of boards from fixture', () => {

  cy.intercept('GET', '/api/boards', {
      fixture: 'twoBoards'
    })

  cy.visit('/');

  cy.get('[data-cy=board-item')
    .should('have.length', 2)

})

// challenge #4: try explicitly defining empty response body instead of using fixture
it('shows no boards in the list', () => {

  cy.intercept('GET', '/api/boards', [])

  cy.visit('/');

  cy.contains('Get started!')
    .should('be.visible')

})

// challenge #5: add an attribute to the .intercept() command that will
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