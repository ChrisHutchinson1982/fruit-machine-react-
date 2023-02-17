import SpinComment from "./SpinComment";

describe("SpinComment", () => {
  it("displays WIN! WIN! WIN! comment when 3 matching fruit items", () => {
    cy.mount(
      <SpinComment getSpins={["🍒", "🍒", "🍒"]} renderComments={true} />
    );
    cy.get('[data-cy="spin-comment"]').should("contain.text", "WIN! WIN! WIN!");
  });
  it("displays ALMOST! comment when two matching fruit items", () => {
    cy.mount(
      <SpinComment getSpins={["🍒", "🍒", "🍊"]} renderComments={true} />
    );
    cy.get('[data-cy="spin-comment"]').should("contain.text", "ALMOST!");
  });
  it("displays ALMOST! comment when two matching fruit items, combination two ", () => {
    cy.mount(
      <SpinComment getSpins={["🍒", "🍊", "🍒"]} renderComments={true} />
    );
    cy.get('[data-cy="spin-comment"]').should("contain.text", "ALMOST!");
  });
  it("displays ALMOST! comment when two matching fruit items, combination two ", () => {
    cy.mount(
      <SpinComment getSpins={["🍊", "🍒", "🍒"]} renderComments={true} />
    );
    cy.get('[data-cy="spin-comment"]').should("contain.text", "ALMOST!");
  });
});
