/// <reference types="cypress" />
import {Given} from "cypress-cucumber-preprocessor/steps"
import {loginPage} from "../../pages/login"

describe("Login into S4N Campus", () => {
    
    Given(`Get the main page`, () => {
       loginPage.gettingMainPage()
    }),
    And(`Get Sign in page`, () => {
        loginPage.gettingSinginPage()
    }),
    Then(`Fill out credentials`, () => {
        loginPage.fillingOutCredentials()
    }),
    And(`Click on Sign in Button`, () => {
        loginPage.clickSigninButton()
    }),
    And(`Validate  page after Sign in`, () => {
        loginPage.mainPage()
    })

})