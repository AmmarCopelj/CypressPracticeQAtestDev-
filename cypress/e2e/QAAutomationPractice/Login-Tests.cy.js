/// <reference types="Cypress"/>

import LoginPage from "../../support/PageObjects/LoginsInfoPO.js";

describe("Visit page & login", function() {
  let data;
  before(() => {
    cy.fixture("example").then((fData) => {
      data = fData;
    });
  });

  it("Sign in with valid credentials", function () {
    const loginPage = new LoginPage();
    ///
    loginPage.navigate();
    loginPage.enterEmail().type(data.email);
    loginPage.enterPassword().type(data.password);
    loginPage.submit();
    loginPage
      .notification()
      .should("have.text", "You are successfully logged in!");
  });

  it("User cannot sign without valid email", () => {
    const unsuccessfullogin = new LoginPage();
    unsuccessfullogin.navigate();
    unsuccessfullogin.enterEmail().type(data.wrongEmail);
    unsuccessfullogin.enterPassword().type(data.password);
    unsuccessfullogin.submit();
    unsuccessfullogin
      .notification()
      .should(
        "have.text",
        "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
      );
  });
  it("User cannot sign without valid password", () => {
    const unsuccessfullogin1 = new LoginPage();
    unsuccessfullogin1.navigate();
    unsuccessfullogin1.enterEmail().type(data.email);
    unsuccessfullogin1.enterPassword().type(data.wrongPassword);
    unsuccessfullogin1.submit();
    unsuccessfullogin1
      .fieldMessage()
      .should("have.text", "Password should be at least 8 characters long");
  });
});
