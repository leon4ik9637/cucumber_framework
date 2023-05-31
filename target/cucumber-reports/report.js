$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/etsy.feature");
formatter.feature({
  "name": "Etsy Landing Page Validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Validate Etsy main navigation header items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.etsy.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see below menu item links",
  "rows": [
    {
      "cells": [
        "",
        "Jewelry \u0026 Accessories",
        "Clothing \u0026 Shoes",
        "Home \u0026 Living",
        "Wedding \u0026 Party",
        "Toys \u0026 Entertainment",
        "Art \u0026 Collectibles",
        "Craft Supplies",
        "Gifts \u0026 Gift Cards"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EtsySteps.user_should_see_below_menu_item_links(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/google.feature");
formatter.feature({
  "name": "Google Search Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Google search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user searches for \"Tesla\" on Google",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSteps.user_searches_for_on_Google(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Tesla\" in the url",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Tesla\" in the title",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Google search results",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user searches for \"Apple\" on Google",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSteps.user_searches_for_on_Google(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see results are more than 0",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSteps.userShouldSeeResultsAreMoreThan(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/heroapp.feature");
formatter.feature({
  "name": "HeroApp Functionalities",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"http://the-internet.herokuapp.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate add/remove element page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user clicks on \"Add/Remove Elements\" link",
  "keyword": "When "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Add/Remove Elements\" heading",
  "keyword": "Then "
});
formatter.match({
  "location": "HeroAppSteps.userShouldSeeHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Add Element\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.userShouldSeeButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Add Element\" button",
  "keyword": "When "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Delete\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "HeroAppSteps.userShouldSeeButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Delete\" button",
  "keyword": "When "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not see \"Delete\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "HeroAppSteps.userShouldNotSeeButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"http://the-internet.herokuapp.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate context menu page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user clicks on \"Context Menu\" link",
  "keyword": "When "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Context Menu\" heading",
  "keyword": "Then "
});
formatter.match({
  "location": "HeroAppSteps.userShouldSeeHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Context menu items are custom additions that appear in the right-click menu.\" text",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.user_should_see_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Right-click in the box below to see one called \u0027the-internet\u0027. When you click it, it will trigger a JavaScript alert.\" text",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.user_should_see_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see a rectangle box to right click",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.user_should_see_a_rectangle_box_to_right_click()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user right clicks on rectangle box",
  "keyword": "When "
});
formatter.match({
  "location": "HeroAppSteps.user_right_clicks_on_rectangle_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see a popup displaying message \"You selected a context menu\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HeroAppSteps.user_should_see_a_popup_displaying_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/wikipedia.feature");
formatter.feature({
  "name": "Wiki Search Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user searches for \"\u003ckey\u003e\" on Wikipedia",
  "keyword": "When "
});
formatter.step({
  "name": "user should see \"\u003ckey\u003e\" in the title",
  "keyword": "Then "
});
formatter.step({
  "name": "user should see \"\u003ckey\u003e\" in the url",
  "keyword": "And "
});
formatter.step({
  "name": "user should see \"\u003ckey\u003e\" in the first heading",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "key"
      ]
    },
    {
      "cells": [
        "Elon Musk"
      ]
    },
    {
      "cells": [
        "Bill Gates"
      ]
    },
    {
      "cells": [
        "Johny Depp"
      ]
    },
    {
      "cells": [
        "Kobe Bryant"
      ]
    },
    {
      "cells": [
        "bob the builder"
      ]
    },
    {
      "cells": [
        "Cristiano Ronaldo"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Elon Musk\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Elon Musk\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Elon Musk\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Elon Musk\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Bill Gates\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Bill Gates\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Bill Gates\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Bill Gates\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Johny Depp\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Johny Depp\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat steps.BaseSteps.user_should_see_in_the_title(BaseSteps.java:34)\n\tat ✽.user should see \"Johny Depp\" in the title(src/test/resources/features/wikipedia.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user should see \"Johny Depp\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Johny Depp\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Kobe Bryant\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Kobe Bryant\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Kobe Bryant\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Kobe Bryant\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"bob the builder\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"bob the builder\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat steps.BaseSteps.user_should_see_in_the_title(BaseSteps.java:34)\n\tat ✽.user should see \"bob the builder\" in the title(src/test/resources/features/wikipedia.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user should see \"bob the builder\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"bob the builder\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wiki search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"Cristiano Ronaldo\" on Wikipedia",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.userSearchesForOnWikipedia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Cristiano Ronaldo\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Cristiano Ronaldo\" in the url",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Cristiano Ronaldo\" in the first heading",
  "keyword": "And "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeInTheFirstHeading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Wikipedia main languages",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see below languages around the logo",
  "rows": [
    {
      "cells": [
        "English",
        "Русский",
        "日本語",
        "Deutsch",
        "Español",
        "Français",
        "Italiano",
        "中文"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeBelowLanguagesAroundTheLogo(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});