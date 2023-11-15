/// <reference types="cypress" />

beforeEach(() => {

  // get board name
  // arrange
  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .invoke('text')
    .as('boardTitle')

})

it('dynamically check board title', function() {

  // go to board detail
  // act
  cy.get('[data-cy=board-item]')
    .click()

  // board detail name is the same
  // assert
  cy.get('[data-cy="board-title"]')
    .should('have.value', this.boardTitle)

});

afterEach(function() {
  console.log(this.boardTitle)
})