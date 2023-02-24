/// <reference types="cypress" />

// SOLUTION EXPLANATION: challenge #1
// in order for this to work, you need to import the clearDatabase
// function into your cypress.config.js file like this:
// const { clearDatabase } = require('./cypress/scripts/clearDatabase')
// and then define a task for it in the setupNodeEvents function:
//
/// setupNodeEvents(on, config) {
///   on('task', { clearDatabase })
/// }
it.skip('resetting the database', () => {

  cy.task('clearDatabase')
  cy.visit('/')
    
});

// SOLUTION EXPLANATION: challenge #2
// the solution is similar to the first challenge. you import the function
// and then define it inside the setupNodeEvents function so it looks like
// this:
//
/// setupNodeEvents(on, config) {
///   on('task', { clearDatabase, seedDatabase })
/// }
//
// to pass data do the script, you give cy.task() command a second argument
// this will get passed to the seedDatabase.js file as the "data" argument
it.skip('seeding the database', () => {

  cy.task('seedDatabase', {
    boards: [{
      name: 'seeded board',
      id: 12345,
      starred: false,
      user: 0,
      created: '2022-07-17'
    }],
    lists: [],
    cards: [],
    users: []
  })
  
  cy.visit('/board/12345')
    
});