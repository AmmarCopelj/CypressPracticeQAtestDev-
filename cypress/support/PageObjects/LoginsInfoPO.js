class LoginPage {
  navigate() {
    cy.visit("/");
    cy.get('div[aria-label="My account"]').contains("Sign in").click();
  }
  enterEmail() {
    return cy.get('input[id="email"]').eq(0);
  }
  enterPassword() {
    return cy.get('input[id="password"]').eq(0);
  }
  submit() {
    return cy
      .get('button[class="Button"]')
      .contains("Sign in")
      .click({ force: true });
  }

  notification() {
    return cy.get(".Notification-Text");
  }

  fieldMessage() {
    return cy.get(".Field-Message");
  }

  Dashboard() {
    return   cy.get(".ExpandableContent").contains("li", "Dashboard").click();

  }
  ValueTable(){
    return   cy.get(".KeyValueTable")

  }
}
export default LoginPage;
