import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/Img/logo_main.png";
import "../../App.css";

function Navigation({ user, setUser }) {
  const logout = async () => {
    await fetch("http://localhost:3003/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include'
    });
    setUser('');
  }

  let menu;
  if (user === undefined) {
    menu = (
      <>
        <Nav.Link as={Link} to="/">
          <span className="navText mx-3 text-color">Home</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          <span className="navText mx-3 text-color">Who We Are</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/product">
          <span className="navText mx-3 text-color">Shop Products</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          <span className="navText mx-3 text-color">Contact Us!</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/cart">
          <span className="navText mx-3 text-color">Cart</span>
        </Nav.Link>
      </>
    )
  } else {
    menu = (
      <>
        <Nav.Link as={Link} to="/">
          <span className="navText mx-3 text-color">Home</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/product">
          <span className="navText mx-3 text-color">Shop Products</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/upload">
          <span className="navText mx-3 text-color">Upload Products</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/dashboard">
          <span className="navText mx-3 text-color">Dashboard</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/" onClick={logout}>
          <span className="navText mx-3 text-color">Logout</span>
        </Nav.Link>
      </>
    )
  }
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
            {menu}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
