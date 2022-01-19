describe('Homepage', () => {
  describe('When you visit home', () => {
    it('Should visit home page', () => {
      cy.visit('/');
    });
  });
  describe('When you visit home', () => {
    it('it should find the content "Inventory Tracker"', () => {
      cy.visit('/');
      cy.contains('Inventory Tracker');
    });
  });
  describe('When you visit home', () => {
    it('it should find the content "Product"', () => {
      cy.visit('/');
      cy.contains('Product');
    });
  });
});
