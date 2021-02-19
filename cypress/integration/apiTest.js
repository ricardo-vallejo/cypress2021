/// <reference types="cypress" />

context("Test API", () => {

    it("Test Explore courses Endpoint", () => {
        cy.request({
            method:'GET',
            url: 'https://campus.seven4n.com/courses',

        }).then((response) => {
            expect(response).to.have.property('status', 200)

        })
    })
})