@login
Feature: Login
    Login into S4N Campus
    Scenario: Login into S4N Campus
        Given Get the main page
        And Get Sign in page
        Then Fill out credentials
        And Click on Sign in Button
        And Validate  page after Sign in