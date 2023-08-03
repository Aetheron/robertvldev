describe("the certifications page", () => {
  it("loads", () => {
    cy.visit("/certifications")
  })

  it("has the right cards", () => {
    cy.visit("/certifications")
    cy.contains("Stripe Architect")
    cy.contains("Elements of SCRUM")
    cy.contains("Become an SEO Expert")
    cy.contains("React Fundamentals")
  })
})
