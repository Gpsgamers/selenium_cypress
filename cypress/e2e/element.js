class element {

  //--- register
  country = '#countryCode';
  numberField = 'input';
  continue_btn = '#GetOtp';
  verifyotp_btn = '#VerifyOtp';
  sessionlogout_confirmbtn = '.btn-logout';
  //---



  register(number){
    cy.get(this.country).should('be.visible', { timeout: 10000 });
    cy.get(this.numberField).type(number);
    cy.get(this.continue_btn).click();
    cy.get(this.verifyotp_btn ).click();
    cy.get(this.sessionlogout_confirmbtn).should('exist').then(() => {
        cy.get(this.sessionlogout_confirmbtn).click();
    });
}

  }
  
  export default element;