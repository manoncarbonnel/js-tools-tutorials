Feature:
    In order to prove that Cypress and Cucumber are correctly installed
    As a user
    I want to have a home page

    Scenario: It shows a home page
        When a scenario sends a request to "/"
        Then the view should contain an elem with text "Hello Vue 3 + Vite"

    Scenario: It does not show a message when counter is initialized
        When a scenario sends a request to "/"
        Then the view should not contain an elem with text "You have reached the sky!"

    Scenario: It shows a message when counter hits a certain level
        When a scenario sends a request to "/"
        And I click on the button "count" for 7 times
        Then the view should contain an elem with text "You have reached the sky!"
