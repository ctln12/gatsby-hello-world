import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Navbar from "../components/navbar"
import User from "../components/user"

export default function AboutCSSModules() {
  return (
    <div className="AboutCSSModules" style={{ color: `purple` }}>
      <Navbar />
      <Container>
        <Header headerText="About CSS Modules" />
        <p>CSS Modules are cool</p>
        <User
          username="Maria Randall"
          avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
          excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        <User
          username="Daniela Dewitt"
          avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
          excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
      </Container>
    </div>
  )
}
