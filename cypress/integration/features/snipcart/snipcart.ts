/// <reference types='cypress' />
import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

Given('go to snipcart local env',()=>{
    cy.visit('http://localhost:3000/')
})
Given('the lands on the items page',()=>{
    cy.findByText('Snipcart Logo Sticker').should('exist')
    cy.findByText('Snipcart Logo Sticker Pack').should('exist')
})
And('verify the snipcart header',()=>{
    cy.findAllByText('Snipcart Store').should('exist')
})
And('click on the first product',()=>{
    cy.findByText('Snipcart Logo Sticker').should('exist').click()
})
And('click on the add cart button',()=>{
    cy.findByText('Add to Cart').should('exist').click()
})
And('check the cart summary with below details',(datatable)=>{
    cy.findByText('Snipcart Logo Sticker').should('exist')
    cy.findByText('Quantity').should('exist')
    cy.findAllByText('1').eq(datatable.rawTable[2][1])
    cy.findAllByText('$2.00').contains(datatable.rawTable[3][1])
})
And('set the viewport of the window',(datatable)=>{
    cy.viewport(1792,522)
})
Then('verify the checkout',()=>{
    cy.findByText('Checkout').should('exist')
})