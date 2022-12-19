describe('Test directory', () => {
    beforeEach(() => {
        cy.login('Admin', 'admin123')
    })

    it('can click directory menu', () => {
        cy.contains('Directory').click()
        cy.get('form').within(() => {
          cy.get('[placeholder="Type for hints..."]').type('Matthew') 
          cy.contains('Matthew Thomas Spiranovic').click()
        }).submit()
    })
  
  })