import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Navbar from "../components/navbar"

export default function About() {
  return (
    <div className="About" style={{ color: `purple` }}>
      <Navbar />
      <Container>
        <Header headerText="About Gatsby" />
        <p>Such wow. Very React.</p>
      </Container>
    </div>
  )
}
