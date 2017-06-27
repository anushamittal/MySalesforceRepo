$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SalesforceCampaign.feature");
formatter.feature({
  "line": 1,
  "name": "Salesforce Campaign configuration",
  "description": "\r\nIn order to check that company users can configure salesforce campaign configuration",
  "id": "salesforce-campaign-configuration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11360581376,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Create Campaign",
  "description": "",
  "id": "salesforce-campaign-configuration;create-campaign;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@campaign"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am existing user of salesforce with access \"csr\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I login and create a campaign for my company",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter firstname, lastname, abc company name and 7 number of employees",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "a campaign is successfully created",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I can see the success message",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\"csr\"",
      "offset": 45
    }
  ],
  "location": "CampaignSteps.I_am_existing_user_of_salesforce_with_access(String)"
});
formatter.result({
  "duration": 23981215396,
  "status": "passed"
});
formatter.match({
  "location": "CampaignSteps.I_login_and_create_a_campaign_for_my_company()"
});
formatter.result({
  "duration": 5707234413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 29
    },
    {
      "val": "7",
      "offset": 50
    }
  ],
  "location": "CampaignSteps.I_enter_firstname(String,String)"
});
formatter.result({
  "duration": 7491295621,
  "status": "passed"
});
formatter.match({
  "location": "CampaignSteps.a_campaign_is_successfully_created()"
});
formatter.result({
  "duration": 36436,
  "status": "passed"
});
formatter.match({
  "location": "CampaignSteps.I_can_see_the_success_message()"
});
formatter.result({
  "duration": 34897,
  "status": "passed"
});
formatter.before({
  "duration": 1394381245,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Create Campaign",
  "description": "",
  "id": "salesforce-campaign-configuration;create-campaign;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@campaign"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am existing user of salesforce with access \"manager\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I login and create a campaign for my company",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter firstname, lastname, abc company name and 7 number of employees",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "a campaign is successfully created",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I can see the success message",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\"manager\"",
      "offset": 45
    }
  ],
  "location": "CampaignSteps.I_am_existing_user_of_salesforce_with_access(String)"
});
formatter.result({
  "duration": 2450199809,
  "status": "passed"
});
formatter.match({
  "location": "CampaignSteps.I_login_and_create_a_campaign_for_my_company()"
});
formatter.result({
  "duration": 5095539041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 29
    },
    {
      "val": "7",
      "offset": 50
    }
  ],
  "location": "CampaignSteps.I_enter_firstname(String,String)"
});
formatter.result({
  "duration": 3576951756,
  "status": "passed"
});
formatter.match({
  "location": "CampaignSteps.a_campaign_is_successfully_created()"
});
formatter.result({
  "duration": 91347,
  "status": "passed"
});
formatter.match({
  "location": "CampaignSteps.I_can_see_the_success_message()"
});
formatter.result({
  "duration": 32844,
  "status": "passed"
});
formatter.before({
  "duration": 1459620849,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Create Campaign",
  "description": "",
  "id": "salesforce-campaign-configuration;create-campaign;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@campaign"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am existing user of salesforce with access \"ceo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I login and create a campaign for my company",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter firstname, lastname, abc company name and 7 number of employees",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "a campaign is successfully created",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I can see the success message",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\"ceo\"",
      "offset": 45
    }
  ],
  "location": "CampaignSteps.I_am_existing_user_of_salesforce_with_access(String)"
});
formatter.result({
  "duration": 2655652188,
  "status": "passed"
});
formatter.match({
  "location": "CampaignSteps.I_login_and_create_a_campaign_for_my_company()"
});
formatter.result({
  "duration": 5156054781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 29
    },
    {
      "val": "7",
      "offset": 50
    }
  ],
  "location": "CampaignSteps.I_enter_firstname(String,String)"
});
formatter.result({
  "duration": 2671778497,
  "status": "passed"
});
formatter.match({
  "location": "CampaignSteps.a_campaign_is_successfully_created()"
});
formatter.result({
  "duration": 72359,
  "status": "passed"
});
formatter.match({
  "location": "CampaignSteps.I_can_see_the_success_message()"
});
formatter.result({
  "duration": 89294,
  "status": "passed"
});
});