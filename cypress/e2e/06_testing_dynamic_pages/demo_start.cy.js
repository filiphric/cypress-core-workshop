/// <reference types="cypress" />

import { cardsLoadRandomly, cardsLoadSlowly } from '../../../workshop-scripts/evilCode'

beforeEach(() => {

  cy.visit('/board/1')

});

it('has zero cards', () => {

  cy.contains('Loading')
    .should('not.exist')

  cy.get('[data-cy=card]')
    .should('not.exist')

})

it('loads all cards',() => {

  cardsLoadSlowly(10000)

  cy.get('[data-cy=card]', { timeout: 11000 })
    .should('have.length', 5)

})

it.only('shows details of "Soap" card', () => {

  cardsLoadRandomly(4000)
  
  cy.get('[data-cy=card]')
    .last()
    .should('contain.text', 'Soap')
    .click()

  cy.get('[data-cy="card-detail-title"]')
    .should('have.value', 'Soap') 
  
});