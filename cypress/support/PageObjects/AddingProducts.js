class AddingProducts {
  navigate() {
    cy.visit("/");
  }

  addToBasket() {
    return cy.get("div .ProductActions .AddToCart").click();
  }


  notification() {
    return cy.get(".Notification-Text").then(($ele) => {
      if ($ele.text() == "Product added to cart!") {
        cy.get(".Notification-Text").should(
          "have.text",
          "Product added to cart!"
        )
      } else {
        cy.get(".Notification-Text").should(
          "have.text",
          "Sorry! The product is out of stock!"
        );
      }
    });
  }
}

export default AddingProducts;
