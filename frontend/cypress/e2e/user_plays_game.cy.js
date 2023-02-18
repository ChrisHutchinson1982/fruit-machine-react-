describe("User plays game", () => {
  it("game starts with 3 questions marks", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="spin1"]').should("contain.text", "❓");
    cy.get('[data-cy="spin2"]').should("contain.text", "❓");
    cy.get('[data-cy="spin3"]').should("contain.text", "❓");
  });
  it("game shows 3 random fruit emojis when button is clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="spin-button"]').click();

    cy.get('[data-cy="spin1"]').each((x) => {
      expect(x.text()).to.be.oneOf(["🍒", "🍌", "🍏", "🍊", "🍇"]);
    });

    cy.get('[data-cy="spin2"]').each((x) => {
      expect(x.text()).to.be.oneOf(["🍒", "🍌", "🍏", "🍊", "🍇"]);
    });

    cy.get('[data-cy="spin3"]').each((x) => {
      expect(x.text()).to.be.oneOf(["🍒", "🍌", "🍏", "🍊", "🍇"]);
    });
  });
  it("game shows comment when button is clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="spin-button"]').click();

    cy.get('[data-cy="spin-comment"]').each((x) => {
      expect(x.text()).to.be.oneOf(["WIN! WIN! WIN!", "ALMOST!", "UNLUCKY!"]);
    });
  });
});
