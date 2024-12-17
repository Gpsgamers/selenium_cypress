///<reference types = "cypress" />

import {element} from './element.js';

describe('Login Page Test', () => {
    it('login',()=>{
        cy.viewport(1920, 1080); 
        cy.visit("https://webchat-uikit-qa.contus.us/");
        element.register("7358337102");
        cy.get('.callLogCount').should('be.visible', { timeout: 20000 }).click();
        cy.get('.FloatingCallAction').click();
        cy.get('[title="Audio call"]').click();
        cy.get(':nth-child(2) > .contactlist > .search > .search-contacts').type("kogila M");
        cy.get('[data-ld="919159673388"] > :nth-child(1)').click();
        cy.get('.callButton').click();
        cy.wait(60000);
    });

});