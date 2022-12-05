// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("selectMenuItem", (menuitem) => {
  cy.get("ul li .MenuOverlay-ItemFigure").each(($el, index, $list) => {
    if ($el.text().includes(menuitem)) {
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add("selectProduct", (productName) => {
  cy.xpath("//p[@class='ProductCard-Name ProductCard-Name_isLoaded']").each(
    ($el, index, $list) => {
      if ($el.text().includes(productName)) {
        cy.wrap($el).click();
      }
    }
  );
});

Cypress.Commands.add("CartCheck", () => {
  const text = "There are no products in cart.";

  cy.xpath("//img[@alt='Cart Icon']")
    .click({ force: true })
    .get(".Overlay")
    .then(($el) => {
      if ($el.text().includes(text)) {
        cy.get(".CartOverlay-Empty").should(
          "include.text",
          "There are no products in cart"
        );
      } else {
        return cy.get(".CartOverlay-CheckoutButton")
      }
    });
});



// Cypress.Commands.add('login', (email, password) => { ... })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
