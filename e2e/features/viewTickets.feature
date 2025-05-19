Feature: View All Tickets

  Scenario: Admin views all tickets
    Given I am logged in as admin
    When I navigate to the tickets page
    Then I should see a list of all tickets
