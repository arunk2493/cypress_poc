Feature: Conduit Webpage

  Background: : Launch the Conduit url
    Given go to conduit url
    And verify the conduit header

  Scenario: Login with the user
    Given the user clicks signin button
    And enter the below details
    |username | password |
    |Arunk24  | Welcome@2022 |
    And click on the signin button
    Then verify the username at the top

  Scenario: Login with the user - fail case
    Given the user clicks signin button
    And enter the below details
      |username | password |
      |Arunk24  | Welcome@2022 |
    And click on the signin button
    Then verify the username not at the top



