/// <reference types="cypress" />

export class loginS4NCampus {
    gettingMainPage() {
        // visiting S4N Campus
        cy.visit("https://campus.seven4n.com/")
        // Validating Sign in button exist 
        cy.get('.sign-in-btn')
    }
    gettingSinginPage() {
        // Validating  Sign in button exist and click on it
        cy.get(':nth-child(2) > .sign-in-btn').click()
        // Validating  email input  exist
        cy.get('#login-email')
        // Validating  password input exist
        cy.get('#login-password')
        // Validating Sign in button exist 
        cy.get('.action')
    }
    fillingOutCredentials(){
        // filling out credentials
      
        cy.fixture('login.json').as('userData')
        cy.get('@userData').then((userData) => {
        cy.get('#login-email').type(userData.userName)
        cy.get('#login-password').type(userData.password)
        })
        
    }
    clickSigninButton(){
        // click on Sign in button 
        cy.get('.action').click()
    }
    mainPage(){
        // validating succesfull sign in
        cy.get('.username')
        cy.get('.main > :nth-child(1) > .active')
        cy.get('.main > :nth-child(2) > .tab-nav-link')
    } 
}
export const loginPage = new loginS4NCampus()