/// <reference types="cypress" />

describe('FOCALDATA', () => {
  it('donoyet', () => {

// Your assignment here is to test the pinning functionality on response options by writing test cases and automating them.

// Access to the application and the survey builder
// You can find a staging environment for our survey builder at: https://dashboard.focaldata.dev

// Once there, create a new project, go right past the 'Audience' page on to the 'Survey' page.

// You are now on the focaldata survey builder. This is where customers choose what questions to ask the target audience.

// Pinning feature acceptance criteria
// When I’ve randomised the order of response options, I can pin certain responses so they stay in the same position

// Acceptance criteria

// ·  If the user enables randomised responses, then they can pin one or more responses so those responses don’t change position.
// ·  They can pin responses wherever they can randomise responses (i.e. single-select, multi-select, ranked, matrix rows and columns).

// ·  If a response is pinned, it is always shown to respondents in the original order/position (e.g. there are three response options: A, B, C. I randomise responses and pin C. A and B will now change position. C will always stay in the third position because it is pinned.)



// Your solution
// ·  Please use Cypress and javascript/typescript to write the automation
// ·  You can use anything for the test plan, and using Cucumber (or other Gherkin specs) is accepted

// ·  We should be able to run your tests on our machines and the documentation should contain the steps needed to run them
    //Visit website
    cy.visit('/')
    //Insert email in email field
    cy.get('[aria-label="Input"]').type('florincucos93@gmail.com')
    //insert password in paswword field
    cy.get('[aria-label="Password input"]').type('Parolabuna0')
    //click on Login
    cy.get('#root > div > div > div > div > form > div > div:nth-child(5)').click()
    //click on first Draft
    cy.get('[href="/survey/3438a519-7137-479c-8ef3-bb5ec0d8fbcc/audience"]').click()
    //click on Survey
    cy.get('#root > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-direction-xs-column.mui-cache-1wkwmmc > div.MuiGrid-root.MuiGrid-container.tss-173m74h-shadow.mui-cache-1b1jvye > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-4.mui-cache-qx4sdb > nav > ol > li:nth-child(3) > button > p').click()
    //get and store pin value
    cy.get('[aria-label="Unpin response option"]').invoke('attr', 'value').as('@pinnedText')
    //

  })
})