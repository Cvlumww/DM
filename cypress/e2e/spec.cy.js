describe("template spec", () => {
  it("passes", () => {
    cy.visit("localhost:3000");

    cy.focused().should("have.class", "Add");
  });

  // it("Is Clickable", () => {
  //   cy.visit("localhost:3000");

  //   cy.get(".Add").click();
  // });

  it("Popup form takes input", () => {
    const typedDragonName = "Dragon";
    const typedDragonInitiative = 21;
    const typedDragonHP = 300;

    const typedPlayer1Name = "Player 1";
    const typedPlayer1Initiative = 16;
    const typedPlayer1HP = 90;

    const typedPlayer2Name = "Player 2";
    const typedPlayer2Initiative = 20;
    const typedPlayer2HP = 30;

    cy.viewport(1500, 900);

    // Opens the page
    cy.visit("localhost:3000");

    // Opens the form
    cy.get(".Add").click();

    // Inputs the value for Dragon
    cy.get("form>input")
      .eq(0)
      .type(typedDragonName)
      .should("have.value", typedDragonName);

    cy.get("form>input")
      .eq(1)
      .type(typedDragonInitiative)
      .should("have.value", typedDragonInitiative);

    cy.get("form>input")
      .eq(2)
      .type(typedDragonHP)
      .should("have.value", typedDragonHP);
    cy.get("form").submit();

    // Inputs the value for Player 1
    cy.get("form>input")
      .eq(0)
      .type(typedPlayer1Name)
      .should("have.value", typedPlayer1Name);

    cy.get("form>input")
      .eq(1)
      .type(typedPlayer1Initiative)
      .should("have.value", typedPlayer1Initiative);

    cy.get("form>input")
      .eq(2)
      .type(typedPlayer1HP)
      .should("have.value", typedPlayer1HP);
    cy.get("form").submit();

    // Inputs the value for Player 2
    cy.get("form>input")
      .eq(0)
      .type(typedPlayer2Name)
      .should("have.value", typedPlayer2Name);

    cy.get("form>input")
      .eq(1)
      .type(typedPlayer2Initiative)
      .should("have.value", typedPlayer2Initiative);

    cy.get("form>input")
      .eq(2)
      .type(typedPlayer2HP)
      .should("have.value", typedPlayer2HP);
    cy.get("form").submit();

    cy.get(".closeForm").click();

    cy.get(".Sort").click();
  });

  // it("Sorts the array by Initiative Order", () => {
  //   cy.visit("localhost:3000");
  // });
});
