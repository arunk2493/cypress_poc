describe('Book Store Interception Testing Library', () => {
    beforeEach(()=>{

        cy.intercept('GET', '**/api/users?page=2', {fixture:'users.json'}).as('books')
    })

    it('GET Users - Stubbed Response',()=>{
        cy.visit('https://reqres.in/')
        cy.findByText('List users').should('exist').click()
        cy.intercept('GET', '**/api/users?page=2', {fixture:'users.json'}).as('books')
        cy.findByText('200').should('exist')
    })
    it('GET single User - Stubbed Response',()=>{
        cy.visit('https://reqres.in/')
        cy.findByText('Single user').should('exist').click()
        cy.intercept('GET', '**/api/users/2', {fixture:'singleuser.json'}).as('user')
        cy.findByText('/api/users/2').should('exist').click()
    })
})