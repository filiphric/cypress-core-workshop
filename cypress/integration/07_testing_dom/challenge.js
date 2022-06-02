/// <reference types="cypress" />
// ⚠️ database is filled with data before the test

// challenge #1: in the following test, we do a screenshot of our app. 
// we want to hide all texts of our cards. use .invoke() function to 
// achieve this
it('anonymize all card data for screenshot', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card-text], [data-cy=due-date]')

  cy.screenshot()

})

// challenge #2: there are hidden icons in our app that appear only on hover
// in our next test, we want to make a screenshot of them. use .invoke()
// command to show them
it('show hidden icons', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card-edit]')
    
  cy.screenshot()
  
});

// challenge #3: rename our board by pasting the value into the board title
it('renaming board', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=board-title]')
  
});


// challenge #4: practice uploading a file using .selectFile() function,
// just as shown in the demo. drop the file into the dropbox
it('uploading a file', () => {

  cy.visit('/board/1?card=1')

  cy.get('[data-cy="upload-image"]')

})

