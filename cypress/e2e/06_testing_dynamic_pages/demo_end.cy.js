/// <reference types="cypress" />

import { cardsLoadSlowly } from '../../../workshop-scripts/evilCode'

beforeEach(() => {

  cy.visit('/board/1')

});

it('has zero cards', () => {

  cardsLoadSlowly(3000)

  cy.contains('Loading')
    .should('not.exist')

  cy.get('[data-cy=card]')

})

it('loads all cards', () => {

  cardsLoadSlowly(5000)

  cy.get('[data-cy=card]', { timeout: 6000 })
    .should('have.length', 5)

})

it('shows details of "Soap" card', () => {

  cy.get('[data-cy=card]') // query
    .eq(4) // query
    .find('[data-cy=card-text]', { timeout: 10000 }) // query
    .click() // action
    .get('[data-cy="card-detail-title"]') // query, new chain
    .should('have.value', 'Soap') // assertion
  
});