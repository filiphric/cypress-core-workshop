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
