it('class, id, attr', { baseUrl: null }, () => {

  cy.visit('./mini-apps/shapes.html');

})

it('cypress commands', { baseUrl: null }, () => {

  cy.visit('./mini-apps/rainbow.html');

  // selecting first element
  cy.get('li')

  // selecting element using index
  cy.get('li')

  // searching for child element
  cy.get('ul')

  // searching for previous element
  cy.contains('violet')

});