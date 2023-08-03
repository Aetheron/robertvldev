import React from "react"
import CourseItem from "./CourseItem"

const date = new Date().getDate().toString()

describe("<CourseItem />", () => {
  it("renders", () => {
    cy.mount(
      <CourseItem title="Cypress Test" date={date} issuer="Cypress.io" />
    )
  })
  it("has the correct text", () => {
    cy.mount(
      <CourseItem title="Cypress Test" date={date} issuer="Cypress.io" />
    )
    cy.get("div.p-card-title").should("have.text", "Cypress Test")
    cy.get("div.p-card-content").should("contain", date)
    cy.get("div.p-card-content").should("contain", "Cypress.io")
  })
})
