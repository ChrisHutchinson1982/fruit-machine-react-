describe("User plays game", () => {
  it("start the game with 3 questions marks", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="spin1"]').should("contain.text", "❓");
    cy.get('[data-cy="spin2"]').should("contain.text", "❓");
    cy.get('[data-cy="spin3"]').should("contain.text", "❓");
  });
});
