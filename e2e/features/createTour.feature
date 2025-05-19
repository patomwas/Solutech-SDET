Feature: Create Tour

  Scenario: Admin creates a new tour
    Given I am logged in as admin
    When I add a new tour with valid details
    Then the tour should be created successfully
