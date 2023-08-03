import React from "react"
import FlipCard from "./FlipCard"

describe("<FlipCard />", () => {
  it("renders", () => {
    cy.mount(<FlipCard title="Test" front={<></>} back={<></>} />)
  })

  it("has the correct text", () => {
    cy.mount(<FlipCard title="Test" front={<></>} back={<p>Back text</p>} />)
    cy.get("div.relative").should("contain.text", "Test")
    cy.get("div.relative").should("contain.text", "Back text")
  })

  it("flips on hover", () => {
    cy.mount(<FlipCard title="Test" front={<></>} back={<p>Back text</p>} />)
    cy.get("div.relative").trigger("mouseover").wait(1000)
    cy.get("div.relative").contains("Back text").should("be.visible")
    cy.get("div.relative").contains("Test").should("not.be.visible")
  })
})
