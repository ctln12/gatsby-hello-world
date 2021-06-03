import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Navbar from "../components/navbar"

export default function Home() {
  return(
    <div className="Home">
      <Navbar />
      <Container>
        <Header headerText="Hello Gatsby!" />
        <p>What a world.</p>
        <img src="https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1250&q=80" width="300" alt="Webstacks" />
      </Container>
    </div>
  )
}
