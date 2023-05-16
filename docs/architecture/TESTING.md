# Testing

There is a purist school of thought not to mix meta data within the app code that will execute at runtime. While we _do_ want to be clean, we want to weigh solutions against their practical benefits. This means that we _do_ decorate our components, and eventually DOM elements, with `data-testid` attributes.

This attribute enables the code to be highly testable. This holds true for unit tests via Jest, as much as end-to-end tests via tools such as Cypress.
