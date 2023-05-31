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

    1. TDD - TestNG based framework
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

    /*
    Automation framework:
    - Automation framework is a set of rules,
    regulations, and design patterns that we
    implement to build a project structure
    - It is used to increase code reusability,
    provide easy maintenance, and allows multiple
    users to work on same project
    - It is a constructive blend of various
    guidelines, coding standards, concepts,
    processes, practices, project hierarchies,
    reporting mechanism, test data injections etc.
    to pillar automation testing

    WHY DO WE NEED AUTOMATION FRAMEWORK?
    - Reusability
    - readability
    - efficiency
    - maintenance - organize
    - reporting
    - less time and effort - less cost for the company
    - decreasing human errors

    Different Automation Frameworks
    - Data-driven Testing Framework (DDD)
    - Keyword-driven Testing Framework
    - Hybrid Frameworks
    - Test Driven Development Framework
    - Behavior Driven Development Framework

    TDD Framework
        - We create tests first
        - Initially it fails
        - Few days later, dev push their code
        - Run scripts again, make sure it is passing

    @Test
    public void validateLogin(){
        driver.get(url);
        driver.findElement(By.id("username")).sendKeys(validU);
        driver.findElement(By.id("password")).sendKeys(validP);
        driver.findElement(By.id("loginBtn")).click();
    }

    Code-freeze in last 2 days
    Only if testers come up with issues then devs can only
    push the code to fix those issues, no new functions in the
    code to be tested within the last 2 days of the sprint

    Test-Driven and Behavior-Driven are the most common
    frameworks used with Agile methodology

    Cucumber_framework
        1. Create feature file and scenarios
        2. Generate step implementation (source
        code) - POM, Driver, Utils
        3. Runner clas to execute your scenarios

    TestNG_framework
        1. Create test cases - JIRA
        2. Automate scripts - @Test - POM, Driver,
        Utils
        3. Add tests to suites - xml files (Smoke,
        Regression)

    Background keyword groups the common steps and increases the
    code reusability in the feature files
    - Can be only used in the BeforeSteps

    Scenario Outline:
    - It is similar to @DataProvider in TestNG
    - We use it when we need to run the same script with
    different data sets
    - It should be defined with "Scenario Outline"
    - It must be followed with examples

    Reports:
    - surefire reports
    - index.html

    Cucumber framework
    - feature files
    - steps (utils, pages)
    - Runner
        - features = "featuresPath",
        - glue = "steps",
        - tags = "tagToBeExecuted",
        - monochrome = "true/false",
        - dryRun = true/false (to see if missing any steps -> put true)
        - plugin = {"", ""}


    Recap:
    1. Test-Driven Development Framework
        a. programming language - Java
        b. build tool - Maven (Gradle, ANT)
        c. dependencies - libraries - plugins

        TestNG based - @Test
        1. Write script before development starts
        2. Execute and get failures
        3. Development process
        4. Execute again and give feedbacks to
        what has been developed
        5. Make sure all scripts pass and then
        mark user stories done

    Requirements: Figma (visual requirements),
    Confluence: Written documents - requirements
    Confluence is the wikipedia of the company
    Azure DevOps = Wiki + Pipelines + Version
    control + Test case management system

        ***QUESTION: Where is the execution point?
        xml files are the execution points
        We define the suite with classes and
        methods to be executed in xml files

        Later, we integrate our xml files with
        Maven using profiles in the pom.xml using
        surefire plugin. And this helps us to run
        different profiles with Maven commands,
        later to be integrated with Jenkins and
        pipelines.

        mvn test -PSuiteName

    2. Behavior-Driven Development Framework
        a. programming language - Java
        b. build tool - Maven (Gradle, ANT)
        c. dependencies - libraries - plugins

        Behaviors - Gherkin steps
        Given   -> pre-condition
        When    -> actions
        Then    -> assertions - validations

        ***QUESTION: Where is the execution point?
        Runner is the start point of execution
        with Cucumber-BDD framework

            features = "src/test/resources/features",
            glue = "steps",
            tags = "@Google"
            plugin = "html:target/cucumber-reports"

        1. It reads the given tag and navigates to
        feature
        2. It finds all the scenarios which have that
        given tag and starts executing one by one
        3.When a scenario is found with the given tag, it
        immediately finds the step implementation for it
        with glue
        4. After executing all, it creates given reports
        with plugin

        Later, we integrate our Runner class with Maven
        in the pom.xml using surefire plugin. And this
        helps us to run different Tags(suites) with Maven
        commands, later to be integrated with Jenkins and
        pipelines.

        Version Control + Maven + Jenkins -> Automatically
        trigger Smoke, Regression and other suites in pipelines

        BDD REPORTS

        1. CUCUMBER REPORTS:
        These reports are generated with Cucumber APIs

        2. SUREFIRE REPORTS:
        These reports are generated with Maven
        mvn test -Dcucumber.options="--tags @Smoke"






























     */

}
