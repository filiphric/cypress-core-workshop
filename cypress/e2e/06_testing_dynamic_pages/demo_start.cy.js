/// <reference types="cypress" />

import { cardsLoadSlowly } from '../../../workshop-scripts/evilCode'

beforeEach(() => {

  cy.visit('/board/1')

});

it.only('has zero cards', () => {

  cardsLoadSlowly(3000)

  cy.get('[data-cy=card]')
    .should('not.exist')

})

it('loads all cards', () => {

  cardsLoadSlowly(3000)

  cy.get('[data-cy=card]')
    .should('have.length', 5)

})

it('shows details of "Juice" card', () => {

  cy.get('[data-cy=card]')
    .last()
    .find('[data-cy=card-text]', { timeout: 10000 })
    .should('have.text', 'Juice')
  
});