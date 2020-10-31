import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import logo from "./foto/logos.jpg"

export const Navigacija = () => {
    return(
      <Navbar expand="lg">
        <Navbar.Brand>
        <img class="logo" src={logo} alt="kafe logo"/>
        </Navbar.Brand>
        <Navbar.Brand href="/index.html">Kafe Leonardo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/index.html">Početna</Nav.Link>
            <Nav.Link href="#galerija">Galerija</Nav.Link>
            <Nav.Link href="#meni">Meni</Nav.Link>
            <Nav.Link href="#kontakt">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }