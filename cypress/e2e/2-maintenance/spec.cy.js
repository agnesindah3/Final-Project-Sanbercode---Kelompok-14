describe('Test directory', () => {
    beforeEach(() => {
        cy.login('Admin', 'admin123')
    })

    it('can search purge employee record', () => {
        cy.contains('Maintenance').click()
        cy.get("input[name='password']").type('admin123')
        cy.get('form').submit()

        cy.get('form').within(() => {
          cy.get('[placeholder="Type for hints..."]').type('Matthew') 
        }).submit()
    })

    it('can search purge candidate record', () => {
        cy.contains('Maintenance').click()
        cy.get("input[name='password']").type('admin123')
        cy.get('form').submit()

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeCandidateData')
        cy.get('form').within(() => {
          cy.get('[placeholder="Type for hints..."]').type('Matthew') 
        }).submit()
    })

    it('can search download personal data', () => {
        cy.contains('Maintenance').click()
        cy.get("input[name='password']").type('admin123')
        cy.get('form').submit()

        cy.contains('Access Records')
        cy.get('form').within(() => {
          cy.get('[placeholder="Type for hints..."]').type('Matthew') 
        }).submit()
    })
  
  })