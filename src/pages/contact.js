import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Navbar from "../components/navbar"

export default function Contact() {
  return (
    <div className="Contact" style={{ color: `purple` }}>
      <Navbar />
      <Container>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
      </Container>
    </div>
  )
}
