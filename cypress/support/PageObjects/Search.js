class Search {
    homepage() {
      cy.visit("/");
    }
  
    Field() {
      return  cy.get("#search-field")
    }
  
  
    ResultsList() {
      return  cy.get(".SearchOverlay-Results > ul > li")
    }

    Results(){
       return cy.get(".SearchOverlay-Results")
    }
  }
  
  export default Search;
  