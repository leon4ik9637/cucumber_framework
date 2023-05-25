public class Recap {
    /*
    Automation Framework:
    Automation Framework is not a single tool or
    process, but it is a collection of tools and
    processes working together to support automated
    testing of any application

    Build tool, dependencies-libraries-plugins,
    design pattern - organizing and rules - utils, programming
    language,

    dependencies - libraries - plugins -> UI - API - DB
    Security, Performance, more...

    TDD - TestNG based framework
        - Maven project
        - Get dependencies in pom.xml
            - WebDriverManager, TestNG, Selenium
            WebDriver, HtmlUnitDriver
            - surefire plugin
        - packages under test
            - pages (POM design pattern)
            - utils (Driver, Waiter and more)
            - scripts
        - configuration.properties -> for reading
        global information in key-value pairs

    2. BDD - Cucumber based framework
        - Create a new Maven project called as
        cucumber_framework
        - Get dependencies in pom.xml
            selenium-java - 3.141.59
            webdrivermanager - 3.8.1
            webdriver (html) - 2.6
            cucumber-java (io) - 4.2.0
            cucumber-junit (io) - 4.2.0

        - Install "Gherkin" and "Cucumber for java"
        plugins
        - Configure packages - resource folder and
        configuration.properties
            - packages under test
                - pages
                - steps
                - utils
                - runners
        - Create Hooks class for before and after
        actions like setup and teardown

        - NOTE: We will have only after teardown in
        the Hooks as Cucumber does not allow
        inheritance between steps classes


    FIRST SCRIPT WITH BDD
    Scenario: Validate Google search
    Given user navigates to https://www.google.com/
    When user search for “Tesla”
    Then user should see “Tesla” in the url
    And user should see “Tesla” in the title

    In Cucumber framework, @Test will be replaced
    with Give, When, Then, And annotations

    HOW TO CREATE SCRIPTS WITH CUCUMBER
        1. Create a feature file and write your
        scenarios
        WHAT TO HAVE IN A FEATURE FILE?
            a. Feature: functionality
            b. Scenario: it is what you want to test
        2. Write steps definition for each step in
        the feature file




    Scenario vs test case vs test script
    Scenario: High level brief summary of test case.
    Test case: is manual terminology and step by
    step definition of scenario.
    Test script: is automation terminology and
    basically automated test case.

    Gherkin language: is the language of any BDD
    tool like Cucumber-SpecFlow, etc

     */
}
