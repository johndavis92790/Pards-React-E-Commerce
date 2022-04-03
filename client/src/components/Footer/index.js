import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import logo from "../../assets/Img/logo_main.png";
import "../../App.css";

function Footer(props) {
  const { setNavSelection } = props;

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <span
            style={{ cursor: "pointer" }}
            className="navTextName mx-3"
            onClick={() => setNavSelection("home")}
          >
            <Image src={logo} alt="Logo" height={150} />
          </span>
        </Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Text>
              <a href="https://www.google.com/maps/place/5910+300+W,+Murray,+UT+84107">
                5910 S 300 W
                <br />
                Murray, UT 84107
              </a>
              <br />
              Office: <a href="tel:+1-801-262-4864">801-262-4864</a>
              <p className="text-color">
                Open Monday - Friday 8:30 am to 5:00 pm
              </p>
            </Navbar.Text>
            <Nav.Link>
              <span
                className="navText mx-3 text-color"
                onClick={() => setNavSelection("home")}
              >
                Home
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className="navText mx-3 text-color"
                onClick={() => setNavSelection("product")}
              >
                Our Products
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className="navText mx-3 text-color"
                onClick={() => setNavSelection("about")}
              >
                Who We Are
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className="navText mx-3 text-color"
                onClick={() => setNavSelection("contact")}
              >
                Contact Us!
              </span>
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
