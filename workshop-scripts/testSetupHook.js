const singleBoard = require('./fixtures/singleBoard.json')
const singleBoardSingleList = require('./fixtures/singleBoardSingleList.json')
const singleBoardSingleListSingleCard = require('./fixtures/singleBoardSingleListSingleCard.json')
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
  'cypress/e2e/03_writing_first_test/demo_start.cy.js': twoBoards,
  'cypress/e2e/03_writing_first_test/demo_end.cy.js': twoBoards,
  'cypress/e2e/03_writing_first_test/challenge_solution.cy.js': twoBoards,
  'cypress/e2e/05_effective_command_chaining/demo_start.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/05_effective_command_chaining/demo_end.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/05_effective_command_chaining/challenge.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/05_effective_command_chaining/challenge_solution.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/06_testing_dynamic_pages/demo_start.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/06_testing_dynamic_pages/demo_end.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/06_testing_dynamic_pages/challenge.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/06_testing_dynamic_pages/challenge_solution.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/07_handling_data_within_test/demo_end.cy.js': singleBoardSingleList,
  'cypress/e2e/07_handling_data_within_test/challenge.cy.js': singleBoardSingleListSingleCard,
  'cypress/e2e/07_handling_data_within_test/challenge_solution.cy.js': singleBoardSingleListSingleCard,
  'cypress/e2e/08_creating_custom_commands/demo_start.cy.js': singleBoard,
  'cypress/e2e/08_creating_custom_commands/demo_end.cy.js': singleBoard,
  'cypress/e2e/08_creating_custom_commands/challenge.cy.js': singleBoard,
  'cypress/e2e/08_creating_custom_commands/challenge_solution.cy.js': singleBoard,
  'cypress/e2e/12_handling_authentication_flow/demo_start.cy.js': singleBoardSingleListThreeCardsSingleUser,
  'cypress/e2e/12_handling_authentication_flow/demo_end.cy.js': singleBoardSingleListThreeCardsSingleUser,
  'cypress/e2e/12_handling_authentication_flow/challenge_solution.cy.js': singleBoardSingleListThreeCardsTwoUsers
}

const beforeEachTestSeeds = {
  'cypress/e2e/04_making_assertions/demo_start.cy.js': singleBoardSingleListSingleCard,
  'cypress/e2e/04_making_assertions/demo_end.cy.js': singleBoardSingleListSingleCard,
  'cypress/e2e/04_making_assertions/challenge_solution.cy.js': singleBoardSingleListSingleCard,
  'cypress/e2e/09_intercepting_network_requests/demo_start.cy.js': singleBoardSingleList,
  'cypress/e2e/09_intercepting_network_requests/demo_end.cy.js': singleBoardSingleList,
  'cypress/e2e/09_intercepting_network_requests/challenge_solution.cy.js': singleBoardSingleList,
  'cypress/e2e/09_intercepting_network_requests/challenge.cy.js': singleBoardSingleList,
  'cypress/e2e/11_installing_useful_plugins/demo_end.cy.js': empty,
  'cypress/e2e/11_installing_useful_plugins/challenge.cy.js': singleBoardTwoListsTwoCards,
  'cypress/e2e/11_installing_useful_plugins/challenge_solution.cy.js': singleBoardTwoListsTwoCards,
}

before( () => {

  const path = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

  const dbState = beforeTestSeeds[`${path}`]
  
  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before all tests', dbState)
  }

})

beforeEach( () => {

  const path = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

  const dbState = beforeEachTestSeeds[`${path}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})