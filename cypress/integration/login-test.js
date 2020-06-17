import * as faker from "faker/locale/pl";

let correctUser;

describe("Test login functionality", () => {
  beforeEach(() => {
    correctUser = {
      username: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      gender: Math.floor(Math.random() * 2),
      dateOfBirth: faker.date.past(),
    };
    cy.request("POST", "localhost:3000/users", correctUser);
    cy.visit("http://localhost:4200");
  });
  it("Cant login if not typed login and password", () => {
    cy.get("mat-icon")
      .contains(/^person$/)
      .click();
    cy.get("button").contains("Zaloguj").click();
    cy.contains("Hasło jest wymagane!");
    cy.contains("Login jest wymagany!");
  });

  it("Can login if username and password correct", () => {
    cy.get("mat-icon")
      .contains(/^person$/)
      .click();
    cy.get("[formControlName=loginOfUser]").type(correctUser.username);
    cy.get("[formControlName=passwordOfUser]").type(correctUser.password);
    cy.get("button").contains("Zaloguj").click();
    cy.url().should("include", "/games");
  });
});
