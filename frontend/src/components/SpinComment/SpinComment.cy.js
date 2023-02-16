import SpinComment from "./SpinComment";

describe("SpinComment", () => {
  it("display spin comment", () => {
    cy.mount(<SpinComment spinComment="WIN! WIN! WIN!" />);
    cy.get('[data-cy="spin-comment"]').should("contain.text", "WIN! WIN! WIN!");
  });
});