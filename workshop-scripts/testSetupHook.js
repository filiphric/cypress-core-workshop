const path = require('path');
const singleBoard = require('./fixtures/singleBoard.json')
const singleBoardSingleList = require('./fixtures/singleBoardSingleList.json')
const singleBoardSingleListThreeCards = require('./fixtures/singleBoardSingleListThreeCards.json')
const singleBoardTwoListsFiveCards = require('./fixtures/singleBoardTwoListsFiveCards.json')
const singleBoardTwoListsTwoCards = require('./fixtures/singleBoardTwoListsTwoCards.json')
const singleBoardSingleListThreeCardsSingleUser = require('./fixtures/singleBoardSingleListThreeCardsSingleUser.json')
const singleBoardSingleListThreeCardsTwoUsers = require('./fixtures/singleBoardSingleListThreeCardsTwoUsers.json')
const twoBoards = require('./fixtures/twoBoards.json')
const empty = require('./fixtures/empty.json')

const beforeTestSeeds = {
  'cypress/e2e/01_open_app/demo_end.cy.js': singleBoard,
  'cypress/e2e/01_open_app/challenge_solution.cy.js': singleBoardSingleListThreeCards,
  'cypress/e2e/03_interaction/demo_start.cy.js': twoBoards,
  'cypress/e2e/03_interaction/demo_end.cy.js': twoBoards,
  'cypress/e2e/03_interaction/challenge_solution.cy.js': twoBoards,
  'cypress/e2e/04_simple_assertions/challenge_solution.cy.js': singleBoard,
  'cypress/e2e/05_chaining_and_retryability/demo_start.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/05_chaining_and_retryability/demo_end.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/05_chaining_and_retryability/challenge.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/05_chaining_and_retryability/challenge_solution.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/06_chai_assertions/demo_start.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/06_chai_assertions/end.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/06_chai_assertions/challenge.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/06_chai_assertions/challenge_solution.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/09_intercept/demo_start.cy.js': singleBoardSingleList,
  'cypress/e2e/09_intercept/demo_end.cy.js': singleBoardSingleList,
  'cypress/e2e/14_authentication/demo_start.cy.js': singleBoardSingleListThreeCardsSingleUser,
  'cypress/e2e/14_authentication/demo_end.cy.js': singleBoardSingleListThreeCardsSingleUser,
  'cypress/e2e/14_authentication/challenge_solution.cy.js': singleBoardSingleListThreeCardsTwoUsers
}

const beforeEachTestSeeds = {
  'cypress/e2e/04_simple_assertions/demo_start.cy.js': singleBoardSingleList,
  'cypress/e2e/04_simple_assertions/demo_end.cy.js': singleBoardSingleList,
  'cypress/e2e/11_network_stub/demo_start.cy.js': singleBoard,
  'cypress/e2e/11_network_stub/demo_end.cy.js': singleBoard,
  'cypress/e2e/11_plugins/demo_start.cy.js': empty,
  'cypress/e2e/11_plugins/demo_end.cy.js': empty,
  'cypress/e2e/11_plugins/challenge.cy.js': singleBoardTwoListsTwoCards,
  'cypress/e2e/11_plugins/challenge_solution.cy.js': singleBoardTwoListsTwoCards,
}

before( () => {

  const testPath = path.normalize(Cypress.spec.relative)

  const dbState = beforeTestSeeds[`${testPath}`]
  
  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before all tests', dbState)
  }

})

beforeEach( () => {

  const testPath = path.normalize(Cypress.spec.relative)

  const dbState = beforeEachTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})