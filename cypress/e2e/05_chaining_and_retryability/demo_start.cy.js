/// <reference types="cypress" />

it('opens a card with due date on 1st March', () => {

  cy.visit('/board/1')

  cy.contains('Mar 01 2022')

})

it('actions, queries, assertions', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .eq(2)
    .should('contain.text', 'Milk')

});
