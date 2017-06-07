$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Account.feature");
formatter.feature({
  "line": 1,
  "name": "Account Creation",
  "description": "\r\nIn order to check the creation of a new account",
  "id": "account-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 18348218964,
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
  "location": "Account.I_open_up_salesforce_to_create_new_account_for_CPL(String)"
});
formatter.result({
  "duration": 169243457,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027stepdefinitions.Account.I_open_up_salesforce_to_create_new_account_for_CPL(String) in file:/C:/Users/Swarn/Downloads/salesforce-master/salesforce-master/SelenideTest/target/test-classes/\u0027 with pattern [^I open up salesforce to create new account for CPL$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Given I open up salesforce to create new account for CPL\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:101)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:62)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:289)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\r\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\r\n\tat org.testng.TestRunner.run(TestRunner.java:614)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "enter \u003cCPL\u003e",
      "offset": 2
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
  "status": "skipped"
});
formatter.match({
  "location": "Account.Create_a_new_contact_for_that_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/CreateOpportunity.feature");
formatter.feature({
  "line": 1,
  "name": "Create new opportunity",
  "description": "\r\nIn order to create a new oppurtunity for customer",
  "id": "create-new-opportunity",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3369500768,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Create opportunity for CPL brand",
  "description": "",
  "id": "create-new-opportunity;create-opportunity-for-cpl-brand",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Login to salesfoce",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on an existing brand to create a new opportunity",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I fill up basic information for the brand with amount 15000",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("features/Dashboard.feature");
formatter.feature({
  "line": 1,
  "name": "Salesforce dashboard configuration",
  "description": "\r\nIn order to check that user can create a new dashboard",
  "id": "salesforce-dashboard-configuration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2928266926,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Creating a new dashboard",
  "description": "",
  "id": "salesforce-dashboard-configuration;creating-a-new-dashboard",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Dashboard"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "login into salesforce",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the Dashboard tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on new dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "in the new window enter the name",
  "keyword": "Then "
});
formatter.match({
  "location": "Dashboard.login_into_salesforce(String)"
});
formatter.result({
  "duration": 456735,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027stepdefinitions.Dashboard.login_into_salesforce(String) in file:/C:/Users/Swarn/Downloads/salesforce-master/salesforce-master/SelenideTest/target/test-classes/\u0027 with pattern [^login into salesforce$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Given login into salesforce\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:101)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:62)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:289)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\r\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\r\n\tat org.testng.TestRunner.run(TestRunner.java:614)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Dashboard.I_click_on_the_Dashboard_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard.click_on_new_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard.in_the_new_window_enter_the_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/SalesforceCampaign.feature");
formatter.feature({
  "line": 1,
  "name": "Salesforce Campaign configuration",
  "description": "\r\nIn order to check that company users can configure salesforce campaign configuration",
  "id": "salesforce-campaign-configuration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2848639007,
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
  "duration": 4857734706,
  "status": "passed"
});
formatter.match({
  "location": "CampaignSteps.I_login_and_create_a_campaign_for_my_company()"
});
formatter.result({
  "duration": 4542668041,
  "error_message": "Element not found {By.xpath: .//*[@id\u003d\u0027Lead_Tab\u0027]/a}\nExpected: visible\nScreenshot: file:/C:/Users/Swarn/Downloads/salesforce-master/salesforce-master/SelenideTest/build/reports/tests/1496826700666.0.png\nTimeout: 4 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027Lead_Tab\u0027]/a\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\r\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsVisible(WebElementSource.java:72)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:14)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:11)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:135)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:79)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:56)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat pageobjects.LeadsPage.createNewLead(LeadsPage.java:55)\r\n\tat stepdefinitions.CampaignSteps.I_login_and_create_a_campaign_for_my_company(CampaignSteps.java:47)\r\n\tat ✽.When I login and create a campaign for my company(features/SalesforceCampaign.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027Lead_Tab\u0027]/a\"}\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 15 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027DESKTOP-H976MNN\u0027, ip: \u0027192.168.203.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\Swarn\\AppData\\Local\\Temp\\scoped_dir21400_5345}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 56f50bafef6a7087f364454e5354cad6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\r\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsVisible(WebElementSource.java:72)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:14)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:11)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:135)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:79)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:56)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat pageobjects.LeadsPage.createNewLead(LeadsPage.java:55)\r\n\tat stepdefinitions.CampaignSteps.I_login_and_create_a_campaign_for_my_company(CampaignSteps.java:47)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:289)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\r\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\r\n\tat org.testng.TestRunner.run(TestRunner.java:614)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "CampaignSteps.a_campaign_is_successfully_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CampaignSteps.I_can_see_the_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 3284159553,
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
  "duration": 2136696717,
  "status": "passed"
});
formatter.match({
  "location": "CampaignSteps.I_login_and_create_a_campaign_for_my_company()"
});
formatter.result({
  "duration": 4236898759,
  "error_message": "Element not found {By.xpath: .//*[@id\u003d\u0027Lead_Tab\u0027]/a}\nExpected: visible\nScreenshot: file:/C:/Users/Swarn/Downloads/salesforce-master/salesforce-master/SelenideTest/build/reports/tests/1496826710653.1.png\nTimeout: 4 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027Lead_Tab\u0027]/a\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\r\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsVisible(WebElementSource.java:72)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:14)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:11)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:135)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:79)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:56)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat pageobjects.LeadsPage.createNewLead(LeadsPage.java:55)\r\n\tat stepdefinitions.CampaignSteps.I_login_and_create_a_campaign_for_my_company(CampaignSteps.java:47)\r\n\tat ✽.When I login and create a campaign for my company(features/SalesforceCampaign.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027Lead_Tab\u0027]/a\"}\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027DESKTOP-H976MNN\u0027, ip: \u0027192.168.203.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\Swarn\\AppData\\Local\\Temp\\scoped_dir21400_5345}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 56f50bafef6a7087f364454e5354cad6\r\n\tat sun.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\r\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsVisible(WebElementSource.java:72)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:14)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:11)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:135)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:79)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:56)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat pageobjects.LeadsPage.createNewLead(LeadsPage.java:55)\r\n\tat stepdefinitions.CampaignSteps.I_login_and_create_a_campaign_for_my_company(CampaignSteps.java:47)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:289)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\r\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\r\n\tat org.testng.TestRunner.run(TestRunner.java:614)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "CampaignSteps.a_campaign_is_successfully_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CampaignSteps.I_can_see_the_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 2857898926,
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
  "duration": 2306182911,
  "status": "passed"
});
formatter.match({
  "location": "CampaignSteps.I_login_and_create_a_campaign_for_my_company()"
});
formatter.result({
  "duration": 4299224628,
  "error_message": "Element not found {By.xpath: .//*[@id\u003d\u0027Lead_Tab\u0027]/a}\nExpected: visible\nScreenshot: file:/C:/Users/Swarn/Downloads/salesforce-master/salesforce-master/SelenideTest/build/reports/tests/1496826720179.2.png\nTimeout: 4 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027Lead_Tab\u0027]/a\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\r\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsVisible(WebElementSource.java:72)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:14)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:11)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:135)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:79)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:56)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat pageobjects.LeadsPage.createNewLead(LeadsPage.java:55)\r\n\tat stepdefinitions.CampaignSteps.I_login_and_create_a_campaign_for_my_company(CampaignSteps.java:47)\r\n\tat ✽.When I login and create a campaign for my company(features/SalesforceCampaign.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027Lead_Tab\u0027]/a\"}\n  (Session info: chrome\u003d58.0.3029.110)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 16 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.39.0\u0027, revision: \u002714fa800511cc5d66d426e08b0b2ab926c7ed7398\u0027, time: \u00272013-12-16 13:18:38\u0027\nSystem info: host: \u0027DESKTOP-H976MNN\u0027, ip: \u0027192.168.203.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\Swarn\\AppData\\Local\\Temp\\scoped_dir21400_5345}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.110, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 56f50bafef6a7087f364454e5354cad6\r\n\tat sun.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:554)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:299)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\r\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsVisible(WebElementSource.java:72)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:14)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:11)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:135)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:79)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:56)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat pageobjects.LeadsPage.createNewLead(LeadsPage.java:55)\r\n\tat stepdefinitions.CampaignSteps.I_login_and_create_a_campaign_for_my_company(CampaignSteps.java:47)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:289)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\r\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\r\n\tat org.testng.TestRunner.run(TestRunner.java:614)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "CampaignSteps.a_campaign_is_successfully_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CampaignSteps.I_can_see_the_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/SearchField.feature");
formatter.feature({
  "line": 1,
  "name": "Salesforce text search",
  "description": "\r\nTo test search field",
  "id": "salesforce-text-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2770384884,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User can search text by keyword.",
  "description": "",
  "id": "salesforce-text-search;user-can-search-text-by-keyword.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@seacrh"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "login to salesforce.com",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on search field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter a keyword Acme in the input field",
  "keyword": "And "
});
formatter.match({
  "location": "searchfield.login_to_salesforce_com(String)"
});
formatter.result({
  "duration": 209893,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027stepdefinitions.searchfield.login_to_salesforce_com(String) in file:/C:/Users/Swarn/Downloads/salesforce-master/salesforce-master/SelenideTest/target/test-classes/\u0027 with pattern [^login to salesforce.com$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Given login to salesforce.com\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:101)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:62)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:289)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\r\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\r\n\tat org.testng.TestRunner.run(TestRunner.java:614)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "searchfield.click_on_search_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Acme",
      "offset": 16
    }
  ],
  "location": "searchfield.enter_a_keyword_in_the_input_field(String)"
});
formatter.result({
  "status": "skipped"
});
});