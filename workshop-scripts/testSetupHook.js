const singleBoard = require('./fixtures/singleBoard.json')
const singleBoardSingleListThreeCards = require('./fixtures/singleBoardSingleListThreeCards.json')
const empty = require('./fixtures/empty.json')

const specs = {
  'cypress/integration/01_open_app/demo_end.js': singleBoard,
  'cypress/integration/01_open_app/challenge_solution.js': singleBoardSingleListThreeCards
}

before( () => {

  const dbState = specs[`${Cypress.spec.relative}`]

  cy.task('setupDb', dbState, { log: false })
  cy.info('💡 I’ve set up the DB state for you', dbState)

})