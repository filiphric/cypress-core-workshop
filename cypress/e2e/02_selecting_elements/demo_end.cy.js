/// <reference types="cypress" />

it('class, id, attr', { baseUrl: null }, () => {

  cy.visit('./mini-apps/shapes.html');

  cy.contains('Shapes') // select using text
    .get('h1') // select using tag
    .get('.square') // select using class
    .get('#circle') // select using id
    .get('[data-cy="triangle"]'); // select using attribute

})

it('cypress commands', { baseUrl: null }, () => {

  cy.visit('./mini-apps/rainbow.html');

  cy.get('li')
    .first()

  cy.get('li')
    .eq(2)

  cy.get('ul')
    .find('.green')

  cy.contains('violet')
    .prev()

});