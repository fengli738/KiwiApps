import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../picture/elogo.PNG";
import '../Home.css';
export class Home extends Component {
  render() {
    return (
      <section>
      <Navbar collapseOnSelect expand="lg" variant="light" className="navbar bg-watercolor">
        <Navbar.Brand href="/About"><img src={logo} className="logo" alt="Homelogo"></img> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Service">Service</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </section>
    )
  }
}
