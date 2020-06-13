describe("Test home page", () => {
  it("Visit home page", () => {
    cy.visit("http://localhost:4200");
  });
  it("Check posibility of login if not typed login and password", () => {
    cy.get("mat-icon")
      .contains(/^person$/)
      .click();
    cy.get("button").click();
    cy.contains("Hasło jest wymagane!");
    cy.contains("Login jest wymagany!");
  });
  it("Check posibility of registration if not typed login and password", () => {
    cy.get("mat-icon").contains("person_add").click();
    cy.get("button").click();
    cy.contains("Hasło jest wymagane!");
    cy.contains("Login jest wymagany!");
    cy.contains("Email jest wymagany!");
    cy.contains("Potwierdzenie hasła jest wymagane!");
    cy.contains("Data urodzin jest wymagana!");
  });
  it("Check posibility of registration if all data is correct", () => {
    // cy.get("mat-icon").contains("person_add").click();
    // cy.get("button").click();
    // cy.contains("Hasło jest wymagane!");
    // cy.contains("Login jest wymagany!");
    // cy.contains("Email jest wymagany!");
    // cy.contains("Potwierdzenie hasła jest wymagane!");
    // cy.contains("Data urodzin jest wymagana!");
  });
});
