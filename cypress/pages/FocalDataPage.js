import { dataFocal, selectorFocal } from "../config/data/focalData";

export class FocalDataPage{
    
    visitSite(){
        cy.visit('/')
    };

    insertEmailToLogin(){
        cy.get(selectorFocal.emailBox).type(dataFocal.myUserEmail)
    };

    insertPasswordToLogin(){
        cy.get(selectorFocal.passBox).type(dataFocal.myUserPass)
    };

    clickLogin(){
        cy.get(selectorFocal.loginButton).click({force : true})
        cy.url().should('include', '/projects')
    };

    clickOnDraft(){
        cy.get(selectorFocal.firstDraft).click()
        cy.url().should('include', '/audience')
    };

    clickOnSurvey(){
        cy.get('li.MuiBreadcrumbs-li').eq(1).click()
    };

    storePinValue(){
        cy.get(selectorFocal.pinnedQuestion).invoke('attr', 'value').as('pinnedText')
        cy.log('@pinnedText')
    };

    storePinIndex(){
        cy.get('[aria-label="Unpin response option"]').invoke('index').as('pinnedIndex')
        cy.log()
    };

    storeQuestionsIndex(){
        cy.get('.tss-1jh9npg-grid-gridItem').parent().each($index) 
            cy.invoke(index);
    };

    storeEachQuestionsIndex(){
    cy.get('[aria-label="Unpin response option"]').each(($ele, index) => {
        if ($ele.text().includes('a')) {
         cy.log(index) //logs the index
    }});
    };



};

export const focalDataPage = new FocalDataPage();