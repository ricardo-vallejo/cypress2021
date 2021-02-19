/// <reference types="cypress" />

export class dashboardS4NCampus {
    userDropdown() {
        // Testing elemnt from drop down
        cy.get('.toggle-user-dropdown > .fa').click()
        cy.get('#user-menu > :nth-child(2) > a').click()
        cy.get('.toggle-user-dropdown > .fa').click()
        cy.get('#user-menu > :nth-child(3) > a').click()
        cy.get('.toggle-user-dropdown > .fa').click()
        cy.get('#user-menu > :nth-child(4) > a').click()
        cy.get('.toggle-user-dropdown > .fa').click()
        cy.get('#user-menu > :nth-child(5) > a').click()
    }
    discoverNew(){
        cy.get('.main > :nth-child(2) > .tab-nav-link').click()
        cy.get(':nth-child(1) > .course > a > .course-image > .cover-image > .learn-more').click()
        cy.go('back')
        cy.get(':nth-child(2) > .course > a > .course-image > .cover-image > .learn-more').click()
        cy.go('back')
        cy.get(':nth-child(3) > .course > a > .course-image > .cover-image > .learn-more').click()
        cy.go('back')
        cy.get(':nth-child(4) > .course > a > .course-image > .cover-image > .learn-more').click()
        cy.go('back')
        cy.get(':nth-child(5) > .course > a > .course-image > .cover-image > .learn-more').click()
        cy.go('back')
        cy.get(':nth-child(6) > .course > a > .course-image > .cover-image > .learn-more').click()
        cy.go('back')
        cy.get(':nth-child(7) > .course > a > .course-image > .cover-image > .learn-more').click()
        cy.go('back')
        cy.get(':nth-child(8) > .course > a > .course-image > .cover-image > .learn-more').click()
        cy.go('back')
        cy.get(':nth-child(9) > .course > a > .course-image > .cover-image > .learn-more').click()
        cy.go('back')
        cy.get(':nth-child(10) > .course > a > .course-image > .cover-image > .learn-more').click()
        cy.go('back')
        cy.get(':nth-child(11) > .course > a > .course-image > .cover-image > .learn-more').click()
        cy.go('back')
        cy.get(':nth-child(12) > .course > a > .course-image > .cover-image > .learn-more').click()
        cy.go('back')
    }
    inputButton(){
        cy.get('#discovery-input').click().type("kafka")
        cy.get('.button').click()
        cy.get('.facet-option > .fa').click()
        cy.get('#discovery-input').click().type("linux")
        cy.get('.button').click()
        cy.get('.facet-option > .fa').click()
    }
}

export const dashboardPage = new dashboardS4NCampus()