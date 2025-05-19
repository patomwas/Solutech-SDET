Feature: Book Tour as Guest

  Scenario: Guest books a tour from homepage
    Given I am on the homepage
    When I enter valid guest booking details
    Then the booking should be successful
