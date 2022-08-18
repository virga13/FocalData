export class CommonMethods{
    //it visits url
    visitSite(url){
        cy.visit(url);   
    };

    //it clicks on selector
    clickOnElement(selector){
        cy.get(selector).click()
    };
     
    //it asserts the current url contains text
    assertUrlContainsText(text){
        cy.url().should('include', text);

    };
    //it types text into selector
    typeTextIntoElement(selector, text){
        cy.get(selector).type(text, {delay : 0});
    };
    //it clears the selector content
    clearElement(selector){
        cy.get(selector).clear();
    };
    //it asserts the selector includes text
    assertEleContainsText(selector, text){
        cy.get(selector).should('include.text', text);
    };

    clickOnDescription(){
        cy.get('.description_tab.active').click();
    };

    assertDescription(){
        cy.get('').should('include.text', 'Product Description')
    };

    assertEleContainsTextIsVisible(selector, text){
        cy.get(selector).contains(text).should('be.visible');
    };

    isVisible(selector){
        cy.get(selector).should('be.visible')
    };
        

}

export const commonMethods = new CommonMethods();
