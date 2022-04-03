import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../NavFooter";

function Footer(props) {
  const { setNavSelection } = props;

  return (
    <Container className="App-header">
      <Row>
        <Col xs={9}>
          <Navigation setNavSelection={setNavSelection}></Navigation>
        </Col>
      </Row>
        <Col className="text-center" xs={3}>
          <a href="https://www.google.com/maps/place/5910+300+W,+Murray,+UT+84107">
            5910 S 300 W
            <br />
            Murray, UT 84107
          </a>
          <br />
          <a href="tel:+1-801-262-4864">801-262-4864</a>
          <p className="text-color" >Open Monday - Friday 8:30 am to 5:00 pm</p>
        </Col>
    </Container>
  );
}

export default Footer;
