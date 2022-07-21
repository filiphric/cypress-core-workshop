/// <reference types="cypress" />

// challenge #1: try resetting the database using setupDb script
it('resetting the database', () => {

  cy.visit('/')
    
});

// challenge #2: now try seeding the database with your own data and open
// a board that you have seeded in
it('seeding the database', () => {

  cy.visit('/board/12345')
    
});

// challenge #3: try changing the configuration using config argument in
// cypress.config.js file
it('change configuration using setupNodeEvents()', () => {

  cy.log(Cypress.config('baseUrl'))
  
});

// 💯 extra credit challenge: create a "mobile" configuration
// that will change viewport width and viewport height when you 
// open cypress like this: "npx cypress open --env MOBILE=true"
it('switch configuration via CLI', () => {

  cy.log(Cypress.config('viewportWidth'))
  cy.log(Cypress.config('viewportHeight'))
  
});