class CheckoutForm {
  contactForm(firstName, lastName, email, city) {
    cy.xpath("/html//input[@id='firstname']").type(firstName);
    cy.xpath("/html//input[@id='lastname']").type(lastName);
    cy.xpath("/html//input[@id='guest_email']").type(email);
    cy.xpath("/html//input[@id='city']").type(city);
  }
}

export default CheckoutForm;
