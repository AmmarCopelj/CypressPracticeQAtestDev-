import LoginPage from "../../support/PageObjects/LoginsInfoPO.js";

describe("Validation of User info from Dashboard", function () {
  let data;
  before(() => {
    cy.fixture("example").then((fData) => {
      data = fData;
    });
  });

  it("Sign in with valid credentials and check user info", function () {
    const loginPage = new LoginPage();
    ///
    loginPage.navigate();
    loginPage.enterEmail().type(data.email);
    loginPage.enterPassword().type(data.password);
    loginPage.submit().wait(2000);
    loginPage
      .notification()
      .should("have.text", "You are successfully logged in!")
    loginPage.Dashboard()
    loginPage.ValueTable();
    const MyAccount = [data.firstName, data.lastName, data.email];
    cy.get("tbody > tr > th").should("have.length", 3);
    cy.get("tbody > tr > th")
      .next()
      .each((item, index, list) => {
        expect(Cypress.$(item).text()).to.eq(MyAccount[index]);
      });






    //   cy.get("tbody > tr:nth-child(1) > th").each(($el, index, $list) => {
    //     const text = $el.text();
    //     if (text.includes("First name")) {
    //       cy.get("tbody > tr:nth-child(1) > th")
    //         .eq(index)
    //         .next()
    //         .then(function (firstname) {
    //           const FirstName = firstname.text();
    //           expect(FirstName).to.equal(data.firstName);
    //         });
    //     }
    //   });
  });
});

// it("Sign in with valid credentials", function () {
//   const loginPage = new LoginPage();
//   ///
//   loginPage.navigate();
//   loginPage.enterEmail().type(data.email);
//   loginPage.enterPassword().type(data.password);
//   loginPage.submit().wait(2000)
//   loginPage.notification().should("have.text", "You are successfully logged in!")
//   loginPage.Dashboard()
//   loginPage.ValueTable()
// //   cy.get(".ExpandableContent").contains("li", "Dashboard").click();
// //   cy.get(".KeyValueTable");
//   const MyAccount = [data.firstName, data.lastName, data.email];
//   cy.get("tbody > tr > th").should("have.length", 3);
//   cy.get("tbody > tr > th")
//     .next()
//     .each((item, index, list) => {
//       expect(Cypress.$(item).text()).to.eq(MyAccount[index]);
//     });

//   //   cy.get("tbody > tr:nth-child(1) > th").each(($el, index, $list) => {
//   //     const text = $el.text();
//   //     if (text.includes("First name")) {
//   //       cy.get("tbody > tr:nth-child(1) > th")
//   //         .eq(index)
//   //         .next()
//   //         .then(function (firstname) {
//   //           const FirstName = firstname.text();
//   //           expect(FirstName).to.equal(data.firstName);
//   //         });
//   //     }
//   //   });
// });
