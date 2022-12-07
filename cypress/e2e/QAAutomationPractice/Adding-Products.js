import AddingProducts from "../../support/PageObjects/AddingProducts.js";
import Billing from "../../support/PageObjects/Billing.js";
import CheckoutForm from "../../support/PageObjects/CheckoutForm.js";

describe("Adding products to basket", function () {
  const addProducts = new AddingProducts();

  beforeEach(function () {
    addProducts.homepage();
  });
  let data;
  before(() => {
    cy.fixture("example").then((fData) => {
      data = fData;
    });
  });

  it("Add product from stock to basket and assert notification", function () {
    const addProducts = new AddingProducts();
    const billing = new Billing();
    const checkoutFill = new CheckoutForm();

    cy.selectMenuItem("Portmeirion");
    cy.get("ul li .MenuOverlay-ItemList>*")
      .contains("Cooking")
      .click({ force: true });
    cy.selectProduct("White Porcelain Cake Plates");
    cy.get("#HeaderInput").xpath("//span[.='+']").first().click();
    cy.get("#HeaderInput").xpath("//span[.='+']").last().click();
    addProducts.addToBasket();
    addProducts.notification();
    cy.CartCheck();
    billing.SecureCheckout();
    checkoutFill.contactForm(
      data.firstName,
      data.lastName,
      data.email,
      data.city
    );
  });

  it("Add second product out of stock and assert notification", function () {
    const addProducts = new AddingProducts();
    const billing = new Billing();
    const checkoutFill = new CheckoutForm();

    cy.selectMenuItem("Portmeirion");
    cy.get("ul li .MenuOverlay-ItemList>*")
      .contains("Amor")
      .click({ force: true });
    cy.selectProduct("Amor Porcelain Classic Mugs - Assorted Set of Two");
    addProducts.addToBasket();
    addProducts.notification();
    cy.CartCheck();
    billing.SecureCheckout();
    // checkoutFill.contactForm(
    //   data.firstName,
    //   data.lastName,
    //   data.email,
    //   data.city)
  });
});
