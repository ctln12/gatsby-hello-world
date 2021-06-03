import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import {
  navbar,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

export default function Navbar() {
  return(
    <Container>
      <nav className={navbar}>
        <Link to="/" className={navLinkText} style={{ textDecorationLine: 'none' }}>
          <h3>Gatsby Tutorial</h3>
        </Link>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about-css-modules" className={navLinkText}>
              About CSS Modules
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
