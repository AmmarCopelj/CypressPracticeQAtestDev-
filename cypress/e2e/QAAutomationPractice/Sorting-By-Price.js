import AddingProducts from "../../support/PageObjects/AddingProducts.js";
import Billing from "../../support/PageObjects/Billing.js";
import CheckoutForm from "../../support/PageObjects/CheckoutForm.js";

describe("Adding products to basket", function () {
  let data;
  before(() => {
    cy.fixture("example").then((fData) => {
      data = fData;
    });
  });

  it("Sort products by price from low to high", function () {
    const addProducts = new AddingProducts();

    addProducts.navigate();
    cy.selectMenuItem("Home Décor");
    cy.get("ul li .MenuOverlay-ItemList>*")
      .contains("All Home Décor")
      .click({ force: true });
    cy.get("#category-sort ").select("Price: Low to High", { force: true });
    cy.get(".CategoryProductList-Page > li").should("have.length.gt", 0);
    cy.get(".ProductPrice ").then(($price) => {
      const text = Cypress._.map($price, (p) => p.innerText);
      cy.log(text.join(",")); ///could be hundreds of items so good practice is to use text.slice(0, 5)
      // const firstWord = (text) => text.split("")[1]
      // const words = text.map(firstWord)
      // cy.log(words.join(","))
      const justDigits = (str) => str.replace(/[^0-9.]/g, "");
      const Numbers = text.map(justDigits);
      cy.log(Numbers.join(","));
      const numbers = Numbers.map(parseFloat);
      cy.log(numbers.join(","));

      const sorted = Cypress._.sortBy(numbers);
      //   expect(sorted).to.deep.equal(numbers);
      expect(sorted).to.be.sorted();
    });
  });
  it("Sort products by price from high to low", function () {
    const addProducts = new AddingProducts();
    addProducts.navigate();
    cy.selectMenuItem("Home Décor");
    cy.get("ul li .MenuOverlay-ItemList>*")
      .contains("All Kitchen & Dining")
      .click({ force: true });
    cy.get("#category-sort ").select("Price: High to Low", { force: true });
    cy.get(".CategoryProductList-Page > li").should("have.length.gt", 0);
    // cy.get(".ProductPrice ")
    cy.get(".ProductCard-Link")
      .find('span[itemprop="lowPrice"]')
      .then(($price) => {
        const text = Cypress._.map($price, (p) => p.innerText);

        cy.log(text.join(","));
        const digits = text.map(parseFloat);
        cy.log(digits.join(","));
        const sorted2 = Cypress._.sortBy(digits).reverse(digits);
        cy.log(sorted2.join(","));
        expect(sorted2).to.be.descending;
      });
  });
});
