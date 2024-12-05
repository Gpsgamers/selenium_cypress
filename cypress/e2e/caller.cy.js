///<reference types = "cypress" />

import element from "./element";

describe('Login Page Test', () => {
    let ele = new element();
    it('login',()=>{
        cy.viewport(1920, 1080); 
        cy.visit("https://webchat-uikit-qa.contus.us/");
        ele.register("7358337102");
        cy.get('.callLogCount').click();
        cy.get('.FloatingCallAction').click();
        cy.get('[title="Audio call"]').click();
        cy.get(':nth-child(2) > .contactlist > .search > .search-contacts').type("kogila M");
        cy.get('[data-ld="919159673388"] > :nth-child(1)').click();
        cy.get('.callButton').click();
        cy.wait(60000);
    });

});