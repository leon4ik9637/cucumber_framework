@Regression
Feature: Wiki Search Functionality

  Scenario Outline: Validate Wiki search
    Given user navigates to "https://www.wikipedia.org/"
    When user searches for "<key>" on Wikipedia
    Then user should see "<key>" in the title
    And user should see "<key>" in the url
    And user should see "<key>" in the first heading
    Examples:
      | key               |
      | Elon Musk         |
      | Bill Gates        |
      | Johny Depp        |
      #| Post Malone       |
      #| Jack Harlow       |
      #| Lil Baby          |
      #| Irina Shayk       |
      | Kobe Bryant       |
      | bob the builder   |
      | Cristiano Ronaldo |
      #| Robert downey jr  |
      #| Piero Manzoni     |



