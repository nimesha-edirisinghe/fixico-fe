// Describe block for the 'Submit a Report' test suite
describe('Submit a Report Test', () => {
  // Test case for checking the number of table column names
  it('should be there eight table column names', () => {
    // Visits the home page of the application
    cy.visit('http://localhost:3000/');
    // Verifies that the URL includes '/'
    cy.url().should('include', '/');

    // Clicks on the list item with the text "Damage Reports" in the navigation menu
    cy.contains('li', 'Damage Reports')
      .should('have.class', 'text-indigo-100')
      .click();

    // Within the 'report-table' element, checks the number of table headers (th elements)
    cy.get('#report-table').within(() => {
      cy.get('#report-table-head').find('th').should('have.length', 8);
    });
  });

  // Test case for submitting a report successfully
  it('should submit a report successfully', () => {
    // Visits the home page of the application
    cy.visit('http://localhost:3000/');
    // Verifies that the URL includes '/'
    cy.url().should('include', '/');

    // Clicks on the list item with the text "Damage Reports" in the navigation menu
    cy.contains('li', 'Damage Reports')
      .should('have.class', 'text-indigo-100')
      .click();

    // Gets the initial table row count
    cy.get('#report-table tbody tr')
      .its('length')
      .then((initialRowCount) => {
        // Clicks the button with the ID 'new-report' to open the modal for creating a new report
        cy.get('#new-report').click();

        // Dropdown selectors and their option values for selecting brand and model
        const dropdownBrandSelector = '#brand-selector';
        const dropdownModelSelector = '#model-selector';
        const optionBrandValue = 'Audi';
        const optionModelValue = '100';

        // Selects brand and model options from the dropdown selectors
        cy.get(dropdownBrandSelector).select(optionBrandValue);
        cy.get(dropdownBrandSelector).should('have.value', optionBrandValue);
        cy.get(dropdownModelSelector).select(optionModelValue);
        cy.get(dropdownModelSelector).should('have.value', optionModelValue);

        // Fills out the form fields for name, email, address, and description
        cy.get('#name').type('Nimesha');
        cy.get('#name').should('have.value', 'Nimesha');

        cy.get('#email').type('nimesha@gmail.com');
        cy.get('#email').should('have.value', 'nimesha@gmail.com');

        cy.get('#address').type('Gampaha');
        cy.get('#address').should('have.value', 'Gampaha');

        cy.get('#description').type('Gampaha');
        cy.get('#description').should('have.value', 'Gampaha');

        // Attaches a file named 'example.png' to the file input
        cy.get('input[type="file"]').as('fileInput');
        cy.fixture('example.png').then((fileContent) => {
          cy.get('#fileInput').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'example.png',
            mimeType: 'image/png',
          });
        });

        // Clicks the button with the ID 'submit-btn' to submit the form
        cy.get('#submit-btn', { timeout: 5000 }).click({ force: true });
        // Reloads the page after form submission
        cy.reload();
        // Gets the updated table row count and verifies that it increased by one
        cy.get('#report-table tbody tr')
          .its('length')
          .then((updatedRowCount) => {
            expect(updatedRowCount).to.equal(initialRowCount + 1);
          });
      });
  });
});
