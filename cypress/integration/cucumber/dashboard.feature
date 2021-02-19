@dashboard
Feature: dashboard
    Validate dashboard
    Scenario: Validating dashboard S4N Campus elements
        When Log in
        Then Validate User dropdown
        And Log in after log out
        And Verify Discover New
        And Verify input button for courses