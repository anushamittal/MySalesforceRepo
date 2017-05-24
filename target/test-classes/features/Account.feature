Feature: Account Creation

  In order to check the creation of a new account

  @Account
  Scenario:Account creation for CPL as a new business prospect
    Given I open up salesforce to create new account for CPL
    Then I enter <CPL> AccountName,<www.CPL.com> Website, <0123456> Phone,<7> Employees,<37 City Street> BillingStreet, <78945> Zipcode for CPL
    Then Create a new contact for that account


