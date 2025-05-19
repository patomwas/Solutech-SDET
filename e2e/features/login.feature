Feature: User Login

  Scenario: User tries to login with invalid credentials
    Given I am on the login page
    When I enter invalid credentials
    Then I should see an error message
