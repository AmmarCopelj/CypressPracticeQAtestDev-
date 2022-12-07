import Search from "../../support/PageObjects/Search.js";

describe("Verify search functionality", function () {
  const search = new Search();

  var searchKeywordProduct = "Spray";
  var noProduct = "abc";

  beforeEach(function () {
    search.homepage();
  });

  it("Check products are displayed when user enters a keyword in Search field", function () {
    search.Field().type(searchKeywordProduct).type("{enter}");
    search.ResultsList().should("include.text", searchKeywordProduct );
  });

  it("Check No results message is displayed when user enters a random keyword in Search field", function () {
    search.Field().type(noProduct).type("{enter}");
    search.Results().should("contain.text", "No results found!");
  });

  it("Check the search field has suggestion related to the searched keyword", function () {
    search.Field().type(searchKeywordProduct);
    search.Results().contains(searchKeywordProduct, { matchCase: false });
  });
});
