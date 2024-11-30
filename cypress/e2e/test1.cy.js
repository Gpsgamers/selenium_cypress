///<reference types = "cypress" />

it('Google search',()=>{
    cy.visit('https://onthefly-qa.contus.us/register')
    cy.get('#name').type('dadadawdwawda@dwdadw.com')
    cy.get('#organisationNames').type('dadadawdwawda@dwdadw.com')
    cy.get('#emailID').type('dadadawdwawda@dwdadw.com')
    cy.get('#phoneNum').type('9876543210')
    cy.get('#password').type('Welcome@123')
});