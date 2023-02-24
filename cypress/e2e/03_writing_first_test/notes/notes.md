# Writing your first test

## Basic commands:
[`.click()`](https://docs.cypress.io/api/commands/click.html#Syntax) - clicks a DOM element

[`.type()`](https://docs.cypress.io/api/commands/type.html#Syntax) - types into text input or textarea

## How to choose what to test?
Go for mission critical user stories first, then (maybe) do the rest. Only automate stuff that saves you time.

## Typing special characters
Usually wrapped in `{}`. All can be [found in the documentation](https://docs.cypress.io/api/commands/type.html#Arguments).

## Clicking on elements
Cypress will only click single element that is visible, enabled, not covered by other elements, etc. The list of all the checks can be found [in Cypress docs](https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability). 

## Useful reading
* [docs for .type() command](https://docs.cypress.io/api/commands/type.html)
* [special characters for .type() command](https://docs.cypress.io/api/commands/type.html#Arguments)
* [docs for .click() command](https://docs.cypress.io/api/commands/click.html#Syntax)
* [explanation of Cypress actionability checks](https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability)