/// <reference types="cypress" />

import { board } from '../../support/pageObjects/board'

it('ohviezdičkovanie boardu a otvorenie', () => {

  cy.visit('/')

  board
    .star(0)
    .open(0)
  
});