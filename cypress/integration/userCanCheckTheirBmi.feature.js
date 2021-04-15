describe("User can check their Bmi", () => {
  it("user can enter weight and height", () => {
    cy.visit("http://localhost:3001");
    cy.contains("BMI Calculator");
    cy.get("#weight").type("90");
    cy.get("#height").type("186");
    cy.get('#Calculate').click()
  });
});
