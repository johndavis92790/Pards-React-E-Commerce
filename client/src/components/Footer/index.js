import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../Nav";

function Footer(props) {
  const { setNavSelection } = props;

  return (
    <Container>
      <Row>
        <Col xs={9}>
          <Navigation setNavSelection={setNavSelection}></Navigation>
        </Col>
        <Col xs={3}>
          <a href="https://www.google.com/maps/place/5910+300+W,+Murray,+UT+84107">
            5910 S 300 W
            <br />
            Murray, UT 84107
          </a>
          <br />
          <a href="tel:+1-801-262-4864">801-262-4864</a>
          <p>Open Monday - Friday 8:30 am to 5:00 pm</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
