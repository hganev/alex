describe('My First Test', function() {
    it('Visits inozona website', function() {
      cy.visit('http://inozona.com')

      cy.contains('Home')
    })
  })