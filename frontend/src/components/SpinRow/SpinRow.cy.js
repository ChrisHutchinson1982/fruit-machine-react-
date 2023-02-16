import SpinRow from "./SpinRow";

describe("SpinComment", () => {
  it("displays 3 question marks before button is selected", () => {
    cy.mount(<SpinRow />);
    cy.get('[data-cy="spin1"]').should("contain.text", "❓");
    cy.get('[data-cy="spin2"]').should("contain.text", "❓");
    cy.get('[data-cy="spin3"]').should("contain.text", "❓");
  });
  it("does not display 3 question marks after button is selected", () => {
    const setSpinCommentMock = cy.stub();
    cy.mount(<SpinRow setSpinComment={setSpinCommentMock} />);
    cy.get('[data-cy="spin-button"]').click();
    cy.get('[data-cy="spin1"]').should("not.contain.text", "❓");
    cy.get('[data-cy="spin2"]').should("not.contain.text", "❓");
    cy.get('[data-cy="spin3"]').should("not.contain.text", "❓");
  });
});
