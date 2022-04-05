import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Img/logo_main.png";
import "../../App.css";

function Footer({ setProductSelection }) {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <span className="navText mx-3 text-color">
            <Image src={logo} alt="Logo" height={150} />
          </span>
        </Navbar.Brand>
        <Nav className="me-auto align">
          <Navbar.Text className="text-center text-color">
            <a href="https://www.google.com/maps/place/5910+300+W,+Murray,+UT+84107">
              5910 S 300 W
              <br />
              Murray, UT 84107
            </a>
            <br />
            <p className="text-color">
              Call Us Now!: <a href="tel:+1-801-262-4864">801-262-4864</a>
            </p>
            <p className="text-color">
              Open Monday - Friday 8:30 am to 5:00 pm
            </p>
          </Navbar.Text>
          <Nav.Link as={Link} to="/">
            <span className="navText mx-3 text-color">Home</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/product"
            onClick={() => setProductSelection(null)}
          >
            <span className="navText mx-3 text-color">Our Products</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            <span className="navText mx-3 text-color">Who We Are</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            <span className="navText mx-3 text-color">Contact Us!</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <span className="navText mx-3 text-color">Login</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            <span className="navText mx-3 text-color">Cart</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/upload">
            <span className="navText mx-3 text-color">Upload</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/orders">
            <span className="navText mx-3 text-color">Orders</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
