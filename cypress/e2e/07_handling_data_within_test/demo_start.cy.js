/// <reference types="cypress" />

it('check board title in detail', () => {

  // get board name
  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .invoke('text')

  // go to board detail
  cy.get('[data-cy=board-item]')
    .click()

  // board detail name is the same
  cy.get('[data-cy="board-title"]')

})

it('dynamically check board title', () => {

  let boardTitle

  // get board name
  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .invoke('text').then( text => {
      boardTitle = text
    })

    // go to board detail
    cy.get('[data-cy=board-item]')
      .click()

    // board detail name is the same
    cy.get('[data-cy="board-title"]')
      .should('have.value', boardTitle)
 
    
});