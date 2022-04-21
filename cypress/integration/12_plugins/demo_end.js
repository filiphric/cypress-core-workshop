/// <reference types="cypress" />

it('drag and drop', () => {

  cy.visit(`/board/1`)

  cy.get('[data-cy=card-list]')
    .eq(0)
    .as('todo')

  cy.get('[data-cy=card-list]')
    .eq(1)
    .as('done')

  cy.get('[data-cy=card]')
    .drag('@done')

});
