Feature: View All Bookings

  Scenario: Admin views all bookings
    Given I am logged in as admin
    When I navigate to the bookings page
    Then I should see a list of all bookings
