Feature: SnipCart Website Local

  Background: : Launch the Conduit url
    Given go to snipcart local env
    And set the viewport of the window
    Then verify the snipcart header

  Scenario: Add an item to the cart
    Given the lands on the items page
    And click on the first product
    And click on the add cart button
    And check the cart summary with below details
      |Field         | Values                |
      |Product Name  | Snipcart Logo Sticker |
      |Quantity      | 1                     |
      |Total         | $2.00                 |
    Then verify the checkout




