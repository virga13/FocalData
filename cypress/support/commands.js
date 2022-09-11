// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { dataFocal, selectorFocal } = require("../config/data/focalData");
const { focalDataPage } = require("../pages/FocalDataPage");

Cypress.Commands.add('login', () => {
    focalDataPage.visitSite();
    
    //Insert email in email field
    focalDataPage.insertEmailToLogin(selectorFocal.emailBox, dataFocal.myUserEmail)

    //insert password in paswword field
    focalDataPage.insertPasswordToLogin(selectorFocal.passBox, dataFocal.myUserPass);

    //click on Login and assert Login Successfull
    focalDataPage.clickLogin(selectorFocal.loginButton);
})

Cypress.Commands.add('clickDraft', () => {
       //click on first Draft and verify if clicked
       focalDataPage.clickOnDraft(selectorFocal.firstDraft);
})

Cypress.Commands.add('clickSurvey', () => {
 
    // //click on Survey
    focalDataPage.clickOnSurvey();
})

Cypress.Commands.add('getAndStoreQuestionsIndex', () => {
     // get and store pin value
     focalDataPage.storePinValue();
  
     //get pin index
     focalDataPage.storePinIndex();
 
     //get index of all or unpinned q
     focalDataPage.storeQuestionsIndex();
})
