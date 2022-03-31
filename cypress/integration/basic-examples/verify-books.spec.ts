describe('Book Store', () => {
    beforeEach(() => {
        cy.visit('https://danube-webshop.herokuapp.com/')
    })

    it('Verify the book detail', () => {
        cy.get('.shop-content h2').contains('Top sellers')
        cy.get('.shop-content ul li:nth-child(1) div:nth-child(1)').each(element =>{
            expect(Cypress.$(element).text()).eq('Haben oder haben');
        })
    })
    it('Click the first book - Chai Assertions', () => {
        cy.get('.shop-content h2').contains('Top sellers')
        cy.get('.shop-content ul li:nth-child(1) div:nth-child(1)').click()
        cy.get('.detail-text-content h2').should(($bookName=>{
            const text = $bookName.text()
            console.log(text)
            expect(text).eq('Haben haben')
        }))
    })
    it('Click the first book - Should Assertions', () => {
        cy.get('.shop-content h2').contains('Top sellers')
        cy.get('.shop-content ul li:nth-child(1) div:nth-child(1)').click()
        cy.get('.detail-text-content h2').should('have.text','Haben oder haben')
    })
})