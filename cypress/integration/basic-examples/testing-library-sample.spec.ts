describe('Book Store', () => {
    beforeEach(() => {
        cy.visit('https://danube-webshop.herokuapp.com/')
    })

    it('Verify the header - testing Library', () => {
        cy.findByText('Top sellers').should('exist')
        cy.findByText('Haben oder haben').click()
        cy.findByText('by Fric Eromm').should('exist')
    })
    it('Verify the header - testing Library - Fail Case', () => {
        cy.findByText('Top selle').should('exist')
        cy.findByText('Haben oder haben').click()
        cy.findByText('by Frc Eromm').should('exist')
    })
})