/// <reference types="cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps"
import { loginPage } from "../../pages/login"
import { dashboardPage } from "../../pages/dashboard"

describe("Validating dashboard S4N Campus elements", () => {

    When(`Log in`, () => {
        loginPage.gettingMainPage()
        loginPage.gettingSinginPage()
        loginPage.fillingOutCredentials()
        loginPage.clickSigninButton()

    }),
        Then(`Validate User dropdown`, () => {
            dashboardPage.userDropdown()
        }),
        And(`Log in after log out`, () => {
            loginPage.gettingMainPage()
            loginPage.gettingSinginPage()
            loginPage.fillingOutCredentials()
            loginPage.clickSigninButton()

        }),
        And(`Verify Discover New`, () => {
            dashboardPage.discoverNew()
        }),
        And(`Verify input button for courses`, () => {
            dashboardPage.inputButton()
        })
})
