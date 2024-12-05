///<reference types = "cypress" />

import element from "./element";

describe('Login Page Test', () => {
    let ele = new element();
    
    it('login',()=>{
        cy.viewport(1920, 1080); 
        cy.visit("https://webchat-uikit-qa.contus.us/");
        ele.register("9159673388");
        cy.get('.attenCall', { timeout: 20000 }).should('be.visible');
        cy.wait(4000);
        cy.get('.attenCall').click();
        cy.wait(6000);
        cy.intercept('GET', 'wss://janus.mirrorfly.com/', (req) => {
            req.reply((res) => {
              res.delay(10000);
              res.send({ message: 'This is a delayed response' }); // Mock response
            });
        }).as('getDelayedResponse');

        ele.goOffline();
        cy.wait(8000);
        ele.goOnline();
        cy.wait(16000);

    });
});

