/// <reference types="cypress" />

import { board } from '../../support/pageObjects/board'

it('Bookmark board and open', () => {

  cy.visit('/')

  board
    .star()
    .open()
  
});