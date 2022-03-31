/// <reference types='cypress' />
import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

Given('go to dandube book store url',()=>{
    cy.visit('https://danube-webshop.herokuapp.com/')
})
And('verify the top seller label',()=>{
    cy.get('.shop-content h2').contains('Top sellers')
})