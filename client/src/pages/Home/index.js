import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import "../../App.css";
import icon from "../../assets/Img/hitch2.jpg";

function Home() {
  return (
    <>
      <section className="bgimage">
        <div className="container-fluid">
          <div className="row">
            <div className="text-style">
              <h1>Welcome to Pards</h1>
              <h2>
                Your partner in hitches, vehicle wiring, and trailer repair
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Container fluid="md">
        <Row className="text-center">
          <Col className="mx-auto my-5" sm={6}>
            <Image className="img homeApp" src={icon} alt="Icon"></Image>
            <h3 className="homeApp">Enhance Your Trailer Hitch Experience</h3>
            <h5>
              Owner operated since 1977, Pard's Equalizer Trailer Hitch Co, Inc
              is known for doing exceptional work, repairing and maintaining
              trucks and trailers for a number of companies.
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
