import SpinRow from "./SpinRow";

describe("SpinComment", () => {
  it("displays 3 question marks before button is selected", () => {
    cy.mount(<SpinRow />);
    cy.get('[data-cy="spin1"]').should("contain.text", "❓");
    cy.get('[data-cy="spin2"]').should("contain.text", "❓");
    cy.get('[data-cy="spin3"]').should("contain.text", "❓");
  });
});
