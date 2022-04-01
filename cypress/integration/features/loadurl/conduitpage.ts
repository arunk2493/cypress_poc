/// <reference types='cypress' />
import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

Given('go to conduit url',()=>{
    cy.visit('https://angular.realworld.io/')
})
Given('the user clicks signin button',()=>{
    cy.findByText('Sign in').should('exist').click()
    cy.findByPlaceholderText('Email').should('exist')

})
And('enter the below details',(datatable)=>{
    cy.findByPlaceholderText('Email').type(datatable.rawTable[1][0])
    cy.findByPlaceholderText('Password').type(datatable.rawTable[1][1])
})
And('verify the conduit header',()=>{
    cy.findAllByText('conduit').should('exist')
})
And('click on the signin button',()=>{
    cy.findAllByText('conduit').should('exist')
})
Then('verify the username at the top',(datatable)=>{
    cy.findByAltText('Arunk24').should('exist')
})
Then('verify the username not at the top',(datatable)=>{
    cy.findByAltText('Arunk24').should('not.exist')
})