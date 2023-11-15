/// <reference types="cypress" />

it('sends a request over API', () => {

  cy.request('POST', '/api/boards', {
    name: 'board created via APi'
  })

  cy.visit('/')
  
});

it('response gets 201 status', () => {

  cy.request('POST', '/api/boards', {
    name: 'board created via APi'
  }).its('status')
    .should('eq', 201)
  
});

it('testing board list', () => {

  cy.request({
    method: 'GET',
    url: '/api/boards',
    headers: {
      accept: 'application/json'
    }
  }).then( boards => {
    expect(boards.status).to.eq(200)
    expect(boards.body).to.be.empty
  })
  
});

beforeEach(() => {

  cy.request('POST', '/api/reset')
  
});