const singleBoard = require('./fixtures/singleBoard.json')
const singleBoardSingleList = require('./fixtures/singleBoardSingleList.json')
const singleBoardSingleListThreeCards = require('./fixtures/singleBoardSingleListThreeCards.json')
const singleBoardTwoListsFiveCards = require('./fixtures/singleBoardTwoListsFiveCards.json')
const singleBoardTwoListsTwoCards = require('./fixtures/singleBoardTwoListsTwoCards.json')
const twoBoards = require('./fixtures/twoBoards.json')
const empty = require('./fixtures/empty.json')

const beforeTestSeeds = {
  'cypress/integration/01_open_app/demo_end.js': singleBoard,
  'cypress/integration/01_open_app/challenge_solution.js': singleBoardSingleListThreeCards,
  'cypress/integration/03_interaction/demo_start.js': twoBoards,
  'cypress/integration/03_interaction/demo_end.js': twoBoards,
  'cypress/integration/03_interaction/challenge_solution.js': twoBoards,
  'cypress/integration/04_simple_assertions/challenge_solution.js': singleBoard,
  'cypress/integration/05_chaining_commands/demo_start.js': singleBoardTwoListsFiveCards,
  'cypress/integration/05_chaining_commands/demo_end.js': singleBoardTwoListsFiveCards,
  'cypress/integration/05_chaining_commands/challenge.js': singleBoardTwoListsFiveCards,
  'cypress/integration/05_chaining_commands/challenge_solution.js': singleBoardTwoListsFiveCards,
  'cypress/integration/06_chai_assertions/demo_start.js': singleBoardTwoListsFiveCards,
  'cypress/integration/06_chai_assertions/end.js': singleBoardTwoListsFiveCards,
  'cypress/integration/06_chai_assertions/challenge.js': singleBoardTwoListsFiveCards,
  'cypress/integration/06_chai_assertions/challenge_solution.js': singleBoardTwoListsFiveCards,
  'cypress/integration/10_intercept/demo_start.js': singleBoardSingleList,
  'cypress/integration/10_intercept/demo_end.js': singleBoardSingleList,
  'cypress/integration/14_page_objects/demo_start.js': singleBoard,
  'cypress/integration/14_page_objects/demo_start.js': singleBoard,

}

const beforeEachTestSeeds = {
  'cypress/integration/04_simple_assertions/demo_start.js': singleBoardSingleList,
  'cypress/integration/04_simple_assertions/demo_end.js': singleBoardSingleList,
  'cypress/integration/07_testing_dom/demo_start.js': singleBoardTwoListsFiveCards,
  'cypress/integration/07_testing_dom/demo_end.js': singleBoardTwoListsFiveCards,
  'cypress/integration/07_testing_dom/challenge.js': singleBoardTwoListsFiveCards,
  'cypress/integration/07_testing_dom/challenge_solution.js': singleBoardTwoListsFiveCards,
  'cypress/integration/11_network_stub/demo_start.js': singleBoard,
  'cypress/integration/11_network_stub/demo_end.js': singleBoard,
  'cypress/integration/12_plugins/demo_start.js': singleBoardTwoListsTwoCards,
  'cypress/integration/12_plugins/demo_end.js': singleBoardTwoListsTwoCards,
}

before( () => {

  const dbState = beforeTestSeeds[`${Cypress.spec.relative}`]

  if (dbState) {
    cy.task('setupDb', dbState, { log: false })
    cy.info('💡 I’ve set up the DB state for you', dbState)
  }

})

beforeEach( () => {

  const dbState = beforeEachTestSeeds[`${Cypress.spec.relative}`]

  if (dbState) {
    cy.task('setupDb', dbState, { log: false })
    cy.info('💡 I’ve set up the DB state for you', dbState)
  }

})