## Using variables in Cypress

Everything happening in Cypress can be summed up by this image:
![Cypress runner](./variables.jpeg)

Code like `console.log()` will run immediately. While this code is running, nothing else is happening - so the code is sync (blocking). Cypress commands will queue up and execute after browser opens.

## Useful reading
- [my blog on how variables work in Cypress](https://filiphric.com/cypress-basics-variables)
- [docs explaining variables and asynchronicity in Cypress](https://docs.cypress.io/guides/core-concepts/variables-and-aliases.html#Sharing-Context)
- [article on destructuring and how to use it](https://filiphric.com/using-destructuring-in-cypress)