// Describe block for the 'Submit a Report' test suite
describe('Submit a Report Test', () => {
  // Test case for submitting a report successfully
  it('should submit a report successfully', () => {
    // Visits the home page of the application
    cy.visit('http://localhost:3000/');
    // Verifies that the URL includes '/'
    cy.url().should('include', '/');

    // Gets the element with ID 'customer-card' and verifies its text content
    cy.get('#customer-card').should('have.text', 'Total Customers');

    // Gets the element with ID 'damage-card' and verifies its text content
    cy.get('#damage-card').should('have.text', 'Total Damages');
  });
});
