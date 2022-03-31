import { Navbar, Nav, Container, Image } from "react-bootstrap";
import React from 'react';
import logo from '../../assets/Img/logo_main.png';

function Navigation(props) {
  const { setNavSelection } = props;

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <span
            style={{ cursor: "pointer" }}
            className="navTextName mx-3"
            onClick={() => setNavSelection("home")}
          >
            <Image src={logo} alt="Logo" height={100} />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <span
                className="navText mx-3"
                onClick={() => setNavSelection("home")}
              >
                Home
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className="navText mx-3"
                onClick={() => setNavSelection("product")}
              >
                Our Products
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className="navText mx-3"
                onClick={() => setNavSelection("about")}
              >
                Who We Are
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className="navText mx-3"
                onClick={() => setNavSelection("contact")}
              >
                Contact Us!
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;