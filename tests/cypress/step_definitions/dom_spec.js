import { Then, And } from 'cypress-cucumber-preprocessor/steps'

Then('the view should contain an elem with text {string}', (elem) => {
  cy.contains(elem)
})

Then('the view should not contain an elem with text {string}', (elem) => {
  cy.contains(elem).should('not.exist')
})

And('I click on the button {string} for {int} times', async (buttonClass, times) => {
  for (let i = 0; i < times; i++) {
    await cy.get('.' + buttonClass).click()
  }
})
