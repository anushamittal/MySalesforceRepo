$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Account.feature");
formatter.feature({
  "line": 1,
  "name": "Account Creation",
  "description": "\r\nIn order to check the creation of a new account",
  "id": "account-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 39287432,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Account creation for CPL as a new business prospect",
  "description": "",
  "id": "account-creation;account-creation-for-cpl-as-a-new-business-prospect",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Account"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open up salesforce to create new account for CPL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter \u003cCPL\u003e AccountName,\u003cwww.CPL.com\u003e Website, \u003c0123456\u003e Phone,\u003c7\u003e Employees,\u003c37 City Street\u003e BillingStreet, \u003c78945\u003e Zipcode for CPL",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Create a new contact for that account",
  "keyword": "Then "
});
formatter.match({
  "location": "Account.I_open_up_salesforce_to_create_new_account_for_CPL()"
});
formatter.result({
  "duration": 29546920296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cCPL\u003e",
      "offset": 8
    },
    {
      "val": "\u003cwww.CPL.com\u003e",
      "offset": 26
    },
    {
      "val": "\u003c0123456\u003e",
      "offset": 49
    },
    {
      "val": "\u003c7\u003e",
      "offset": 65
    },
    {
      "val": "\u003c37 City Street\u003e",
      "offset": 79
    },
    {
      "val": "\u003c78945\u003e",
      "offset": 111
    }
  ],
  "location": "Account.I_fill_up_information_for_CPL(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 21568135900,
  "status": "passed"
});
formatter.match({
  "location": "Account.Create_a_new_contact_for_that_account()"
});
formatter.result({
  "duration": 35410,
  "status": "passed"
});
});