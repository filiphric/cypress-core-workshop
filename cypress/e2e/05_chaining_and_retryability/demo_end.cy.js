/// <reference types="cypress" />

import { cardsLoadRandomly, cardsLoadSlowly } from '../../../workshop-scripts/evilCode'

it('opens a card with due date on 1st March', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=list]')
    .eq(1)
    .contains('Mar 01 2022')
    .click()

})

it('actions, queries, assertions',  { defaultCommandTimeout: 10000 }, () => {

  // action
  cy.visit('/board/1')

  // query
  cy.get('[data-cy=card]')
    .eq(2)
    .should('contain.text', 'Milk') // assertion

  cy.get('[data-cy=due-date]')
    .eq(2)
    .should('have.text', 'Mar 01 2022')

});
