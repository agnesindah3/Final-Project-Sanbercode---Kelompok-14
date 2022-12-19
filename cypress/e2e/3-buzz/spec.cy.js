describe('Test directory', () => {
    beforeEach(() => {
        cy.login('Admin', 'admin123')
    })

    it('can click directory menu', () => {
        cy.contains('Buzz').click()
    })
  
  })