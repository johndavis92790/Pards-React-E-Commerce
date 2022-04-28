import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Img/logo_main.png";
import "../../App.css";

function Footer({ user, setUser }) {
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
        <Nav.Link as={Link} to="/product">
          <span className="navText mx-3 text-color">Shop Products</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          <span className="navText mx-3 text-color">Who We Are</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          <span className="navText mx-3 text-color">Contact Us!</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/cart">
          <span className="navText mx-3 text-color">Cart</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          <span className="navText mx-3 text-color">Login</span>
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
        {/* Logo/Link to home page */}
        <Navbar.Brand as={Link} to="/">
          <span className="navText mx-3 text-color">
            <Image src={logo} alt="Logo" height={150} />
          </span>
        </Navbar.Brand>
        <Nav className="me-auto align">
          {/* Text for Company Location, Address, Hours, and phone number */}
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
          {/*All Navigation links below*/}
          {menu}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
