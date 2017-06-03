Feature: Salesforce Campaign configuration

  In order to check that company users can configure salesforce campaign configuration

  @campaign
  Scenario Outline:Create Campaign

    Given I am existing user of salesforce with access <accesstype>
    When I login and create a campaign for my company
    Then I enter firstname, lastname, abc company name and 7 number of employees
    Then a campaign is successfully created
    And I can see the success message


  Examples:
  | accesstype|
  |   "csr"    |
  |   "manager"|
  |   "ceo"     |

