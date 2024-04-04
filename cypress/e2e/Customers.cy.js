describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/simple-reactjs-app/customerlist')
    cy.get('.App-title').should('have.text' , 'Simple React App');
    cy.get(':nth-child(1) > .panel-body > .btn');
    cy.get('.customerdetails > .centeralign > .panel-heading > .panel-title').should('have.text' , 'Doukali Omar');
    cy.get(':nth-child(2) > .panel-body > .btn').click();
    cy.get('.customerdetails > .centeralign > .panel-heading > .panel-title').should('have.text','ABCD');
  })
})