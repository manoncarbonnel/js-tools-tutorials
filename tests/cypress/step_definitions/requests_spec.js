import { When } from 'cypress-cucumber-preprocessor/steps'

When('a scenario sends a request to {string}', (route) => {
  cy.visit(route)
})
