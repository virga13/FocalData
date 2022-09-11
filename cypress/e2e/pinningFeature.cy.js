/// <reference types="cypress" />


import { dataFocal, selectorFocal } from "../config/data/focalData";
import { focalDataPage } from "../pages/FocalDataPage"

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
focalDataPage.visitSite();
    
//Insert email in email field
focalDataPage.insertEmailToLogin(selectorFocal.emailBox, dataFocal.myUserEmail)

//insert password in paswword field
focalDataPage.insertPasswordToLogin(selectorFocal.passBox, dataFocal.myUserPass);

//click on Login and assert Login Successfull
focalDataPage.clickLogin(selectorFocal.loginButton);

//click on first Draft and verify if clicked
focalDataPage.clickOnDraft(selectorFocal.firstDraft);

// //click on Survey
focalDataPage.clickOnSurvey();

// get and store pin value
focalDataPage.storePinValue();
  
//get pin index
focalDataPage.storePinIndex();
 
//get index of all or unpinned q
//  focalDataPage.storeQuestionsIndex();
 
    // cy.login();
    // cy.clickDraft();
    // cy.clickSurvey();
    // cy.getAndStoreQuestionsIndex();

    // focalDataPage.storeEachQuestionsIndex();


  })
})