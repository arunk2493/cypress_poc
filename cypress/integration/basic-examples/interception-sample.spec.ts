describe('Book Store Interception', () => {
    beforeEach(()=>{
        cy.visit('https://angular.realworld.io/').as('launch')
        cy.intercept('GET', '**/api/tags')
        cy.intercept('GET', '**/api/tags', { fixture: 'tags.json' }).as('tag')
        cy.intercept('GET', '**/articles*', { fixture: 'articles.json' }).as('article')
    })

    it('Article Validation - Stubbed Response',()=>{
        //cy.wait('@launch')
        cy.wait('@tag').then((interception)=>{
            cy.get('.tag-list>a').should('contain.text','welcome')
            cy.get('div.article-preview a h1').should('contain.text','Create a new implementation')
        })
    })
})