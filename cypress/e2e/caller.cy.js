///<reference types = "cypress" />

import element from "./element";

describe('Login Page Test', () => {
    let ele = new element();
    it('login',()=>{
        cy.viewport(1920, 1080); 
        cy.visit("https://webchat-uikit-qa.contus.us/");
        ele.register("7358337102");
    });

    it('navigate to the contacts screen',()=>{
        
    });

});