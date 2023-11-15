/// <reference types="cypress" />

it('class, id, attr', { baseUrl: null }, () => {

  cy.visit('./mini-apps/shapes.html');

  cy.contains(/Shapes/)
  cy.get('h1')
  cy.get('.square')
  cy.get('#circle')
  cy.get('[data-cy=triangle]')

})

it.only('cypress commands', { baseUrl: null }, () => {

  cy.visit('./mini-apps/rainbow.html');

  // selecting first element
  cy.get('li').first()

  // selecting element using index
  cy.get('li').eq(2)

  // searching for child element
  cy.get('ul').find('.green')

  // searching for previous element
  cy.contains('violet').prev()

});