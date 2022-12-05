class Billing {
  SecureCheckout() {
    return cy.xpath("//a[@href='/checkout']").click({ force: true });
  }
}
export default Billing;
