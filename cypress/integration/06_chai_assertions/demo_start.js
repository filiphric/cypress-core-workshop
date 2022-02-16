/// <reference types="cypress" />

beforeEach( () => {

  cy.visit('/board/123456789')

})

it('check text of the first card', () => {

  cy
    .get('[data-cy="card-text"]')
    .eq(0)
    .should('have.text', 'Milk')

});

it('check text of all cards in first list', () => {

  cy
    .get('[data-cy=card-text]')
    .eq(0)
    .should('have.text', 'Milk')

  cy
    .get('[data-cy=card-text]')
    .eq(1)
    .should('have.text', 'Bread')

  cy
    .get('[data-cy=card-text]')
    .eq(2)
    .should('have.text', 'Juice')

});


it('check text of all cards in all lists', () => {

  const texts = ['Milk', 'Bread', 'Juice', 'Shampoo', 'Soap']

  cy
    .get('[data-cy=card-text]')

});