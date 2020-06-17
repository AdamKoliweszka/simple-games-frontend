// describe("Test of registration functionality", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:4200");
//   });
//   it("Check posibility of registration if not typed login and password", () => {
//     cy.get("mat-icon").contains("person_add").click();
//     cy.get("button").click();
//     cy.contains("Hasło jest wymagane!");
//     cy.contains("Login jest wymagany!");
//     cy.contains("Email jest wymagany!");
//     cy.contains("Potwierdzenie hasła jest wymagane!");
//     cy.contains("Data urodzin jest wymagana!");
//   });
//   it("Check posibility of registration if all data is correct", () => {
//     cy.get("mat-icon").contains("person_add").click();
//     cy.get("[formControlName=loginOfUser]").type(correctUser.username);
//     cy.get("[formControlName=passwordOfUser]").type(correctUser.password);
//     cy.get("[formControlName=emailOfUser]").type(correctUser.email);
//     cy.get("[formControlName=passwordOfUserConfirmation]").type(
//       correctUser.confirmationPassword
//     );
//     cy.get("[formControlName=dateOfBirthOfUser]").type(correctUser.birthDate);
//     if (correctUser.gender == "female") cy.get("[id=female]").click();
//     else cy.get("[id=male]").click();
//     cy.get("button").contains("Zarejestruj").click();
//     cy.contains("Rejestracja powiodła się!");
//     cy.contains("Przejdź do logowania...");
//     cy.contains("Przejdź do ponownej rejestracji...");
//   });
// });
