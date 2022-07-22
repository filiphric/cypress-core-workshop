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
it('resetting the database', () => {

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
it('seeding the database', () => {

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

// SOLUTION EXPLANATION: challenge #3
// setupNodeEvents() function has access to the whole configuration
// so all you need to do is to resolve the baseUrl in that function_
// 
/// setupNodeEvents(on, config) {
///   config.baseUrl = "https://cypress.io"
///   return config
/// }
// 
// this will override the baseUrl that you have set up in the "e2e" 
// object in the config
it('change configuration using setupNodeEvents()', () => {

  cy.log(Cypress.config('baseUrl'))
  
});

// SOLUTION EXPLANATION: extra credit challenge
// in this solutution we need to connect two parts in our flow:
//
// 1. how we open cypress
// 2. how we define stuff in setupNodeEvents() function
//
// when we open cypress using "npx cypress open --env MOBILE=true",
// our env object will look like this:
//
/// env: {
///   MOBILE: true
/// }
//
// this is not visible in cypress.config.js, but it can be seen 
// in Cypress app > settings tab > project settings > resolved configuration
// in our setupNodeEvents function we can access this value using
// config.env.MOBILE
//
// because of this, we can resolve viewportWidth and viewportHeight 
// like this:
//
/// setupNodeEvents(on, config) {
///   config.viewportWidth = config.env.MOBILE && 300
///   config.viewportHeight = config.env.MOBILE && 600
///   return config
/// }
//
// which means that if config.env.MOBILE will be true, it will resolve
// to 300 and 600 respectively
it.only('switch configuration via CLI', () => {

  cy.log(Cypress.config('viewportWidth'))
  cy.log(Cypress.config('viewportHeight'))
  
});