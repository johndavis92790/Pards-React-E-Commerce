import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/Img/logo_main.png";
import "../../App.css";

// TODO: you probably want to move the CartContext to a separate file since
// this is a circular dependency: App -> Cart -> App
// I can't figure out why your header isn't updating when you click the add product button. Maybe
// removing the circular dependency will help?

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <span className="navText mx-3 text-color">
            <Image src={logo} alt="Logo" height={100} />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <span className="navText mx-3 text-color">Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/product">
              <span className="navText mx-3 text-color">Our Products</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <span className="navText mx-3 text-color">Who We Are</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <span className="navText mx-3 text-color">Contact Us!</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/single">
              <span className="navText mx-3 text-color">Single Part</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <span className="navText mx-3 text-color">Cart</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
