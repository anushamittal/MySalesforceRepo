Feature:Create new opportunity

  In order to create a new oppurtunity for customer
  Scenario:Create opportunity for CPL brand
    Given Login to salesfoce
    When Click on an existing brand to create a new opportunity
    Then I fill up basic information for the brand with amount 15000  
