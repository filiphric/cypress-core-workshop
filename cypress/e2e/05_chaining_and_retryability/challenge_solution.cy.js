/// <reference types="cypress" />

// ⚠️ database is filled with data before the test
// ⚠️ some of the examples contain "evil code" that will cause some API responses to load slowly
import { cardsLoadSlowly } from '../../../workshop-scripts/evilCode'

// challenge #1: there are two assertions in this test. one of them passes, but other does not
// try to change command chain in a way that .contains() will become a child command
// and the test passes
it('asserting card titles', () => {

  cy.visit('/board/1')

  cy.contains('[data-cy=card]', 'Feb 14 2022')
    .should('contain.text', 'Bread')

  cy.get('[data-cy=list]')
    .eq(1)
    .contains('[data-cy=card]', 'Feb 14 2022')
    .should('contain.text', 'Shampoo')

})

// challenge #2: this test is failing, because the response from the server is returning too slowly
// add a timeout option, so that the test will wait long enough
it('has five cards', () => {

  // 😈 evil code
  cardsLoadSlowly(6000) 

  cy.visit('/board/1')

  cy.get('[data-cy=card-text]', { timeout: 7000 })
    .should('have.length', 5)
  
});

// challenge #3: this test is passing, but the command chain in this test 
// is way too long and confusing. it’s testing different items, although 
// it is not clear at first sight. run this test and split the command 
// chain in ways that’s easier to read
it('checks list name, card attributes and opens card detail', () => {

  cy.visit('/board/1')

  // has card with text "bread"
  cy.contains('Bread')

  // list name is correct
  cy.get('[data-cy=list-name]')
    .first()
    .should('have.value', 'Groceries')
    
  // third card contains text "Juice"
  cy.get('[data-cy=card]')
    .eq(2)
    .should('contain.text', 'Juice')
    
  // second card has proper date
  cy.get('[data-cy=due-date]')
    .eq(1)
    .should('have.text', 'Feb 14 2022')
    
  // open card detail
  cy.get('[data-cy=card]')
    .last()
    .click()
  
});