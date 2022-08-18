describe('FOCALDATA', () => {

    beforeEach(() => {
        //visit site
        cy.visit('https://dashboard.focaldata.dev');
        //enter user
        cy.get('.MuiGrid-root').contains('Email').parent().find('[aria-label="Input"]').type('florincucos93@gmail.com');
        //enter pwd
        cy.get('.MuiGrid-root').contains('Password').parent().find('[aria-label="Password input"]').type('Parolabuna0');
        //click login
        cy.get('[type="submit"]').click();
        //assert login success
        cy.url().should('contain', '/projects');
    });

    it('Pinning feature', () => {
        //deschide primu draft
        cy.get('.MuiChip-outlined').eq(0).click();
        //merge pe survey
        cy.get('.MuiButton-textPrimary').contains('Survey').click();
        // looking for pin and store value
        cy.get('[aria-label="Unpin response option"]').parents('li').find('input')
            .invoke('attr', 'value').then(val => {
            cy.wrap(val).as('pinnedText');
        });
        //store pinned option`s position
        cy.get('[aria-label="Unpin response option"]').parents('li')
            .invoke('index').then(ind => {
            cy.wrap(ind).as('pinnedIndex');
        });
        //invoke value and indexes of not pinned
        for (let j = 1; j <= 3; j++){
        for (let i = 0; i <= 3; i++){
            cy.get('[data-rbd-droppable-id="drop-basicQuestion-responseOptions"] li').eq(i).find('button').eq(0).then($option => {
                cy.wrap($option).invoke('attr', 'aria-label').then(xxx => {
                    const yyy = xxx.toString();
                    if (yyy === 'Icon Button') {
                        cy.log('Element is pinned');
                    } else {

                        cy.wrap($option).parent().parents('li').find('input')
                            .invoke('attr', 'value').then(val => {
                            cy.wrap(val).as(`unpinnedText${j}`);
                            const text = val.toString();
                            cy.get('[data-rbd-droppable-context-id="1"] li').find(`[value="${text}"]`).parents('li').invoke('index').then(ind => {
                                cy.wrap(ind).as(`unpinnedIndex${j}`);
                            })
                        });
                    }
                })

            });
        }
        }

        //click on Preview
        cy.window().then(win => {
            cy.wait(4000);
            cy.stub(win, 'open').as('open');
            cy.get('.MuiButton-outlined').contains('Preview').click({force: true});
        });
        cy.get('@open').should('be.calledWith', Cypress.sinon.match.string).then(stub => {
            const newUrl = stub.args[0][0];
            cy.visit(newUrl);
        });
        //look for option stored previously and assert it`s position
        cy.get('@pinnedText').then(val => {
            cy.get('@pinnedIndex').then(ind => {
                const text = val.toString();
                cy.get('.MuiPaper-root').find('p').contains(text).parents('.MuiPaper-root').invoke('index').then(ind2 => {
                    cy.wrap(ind2).should('eq', ind);
                });
            });
        });

        //look for unpinned options
        cy.get('@unpinnedText1').then(t0 => {
            cy.get('@unpinnedText2').then(t1 =>{
                cy.get('@unpinnedText3').then(t2 =>{
                    cy.get('@unpinnedIndex1').then(i0 => {
                        cy.get('@unpinnedIndex2').then(i1 =>{
                            cy.get('@unpinnedIndex3').then(i2 => {
                                cy.get('.MuiPaper-root').find('p').contains(t0).parents('.MuiPaper-root').invoke('index').then(inew0 => {
                                    cy.get('.MuiPaper-root').find('p').contains(t1).parents('.MuiPaper-root').invoke('index').then(inew1 => {
                                        cy.get('.MuiPaper-root').find('p').contains(t2).parents('.MuiPaper-root').invoke('index').then(inew2 => {
                                            cy.wrap(inew0).should('not.eq', i0);
                                            cy.wrap(inew1).should('not.eq', i1);
                                            cy.wrap(inew2).should('not.eq', i2);
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
});
