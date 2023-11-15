declare namespace Cypress {
  interface Chainable {
    /**
     * Selects element by data-cy attribute
     * @param selector 
     * @example
     * cy.dataCy('add-list-input')
     */
    dataCy(selector: string): Chainable<Element>
  }
}