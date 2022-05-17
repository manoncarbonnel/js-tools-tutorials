const reporter = require('cucumber-html-reporter')

const options = {
  brandTitle: 'Cypress.io | CucumberJS report',
  jsonDir: './reports/cucumber/',
  launchReport: false,
  metadata: {
    'Application Manager': '1.0.0'
  },
  output: './reports/cypress/report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  theme: 'bootstrap'
}

// Generate report
reporter.generate(options)
