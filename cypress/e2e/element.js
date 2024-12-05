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

  goOffline(){
    cy.log('**go offline**')
    .then(() => {
      return Cypress.automation('remote:debugger:protocol',
        {
          command: 'Network.enable',
        })
    })
    .then(() => {
      return Cypress.automation('remote:debugger:protocol',
        {
          command: 'Network.emulateNetworkConditions',
          params: {
            offline: true,
            latency: 0,
            downloadThroughput: 0,
            uploadThroughput: 0,
          },
        })
    });
  }

  goOnline() {
    cy.log('**go online**')
    .then(() => {
      return Cypress.automation('remote:debugger:protocol',
        {
          command: 'Network.enable',
        })
    })
    .then(() => {
      return Cypress.automation('remote:debugger:protocol',
        {
          command: 'Network.emulateNetworkConditions',
          params: {
            offline: false,
            latency: 0,
            downloadThroughput: -1,
            uploadThroughput: -1,
          },
        })
    });
  }

}
  
  export default element;