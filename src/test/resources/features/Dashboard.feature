Feature: Salesforce dashboard configuration

  In order to check that user can create a new dashboard
  @Dashboard
  Scenario:Creating a new dashboard
    Given login into salesforce
    When I click on the Dashboard tab
    And click on new dashboard
    Then in the new window enter the name
