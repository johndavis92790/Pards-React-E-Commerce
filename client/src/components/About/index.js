import React from 'react';
import coverImage from '../../assets/Img/about.png';
import {Container, Row, Col, Image} from "react-bootstrap";

function About() {
  return (
    <Container fluid="md">
      <Row className="text-center">
        <Col className="mx-auto my-5"><h1 id="about"><style>About Us</style></h1>
      <Image src={coverImage} className="mx-auto py-4 img" style={{ width: "50%" }} alt="cover" />
      <div className="aboutBody">
        <p className="mb-0">
        OUR HISTORY <p></p>

            Pard's Equalizer Trailer Hitch Co., Inc. was started in 1977 at Pard's backyard 
            in Midvale, Utah. Although affectionately known as Pard, his name is actually 
            Jerry Martin.

            Jerry was a millwright for 17 years before he retired his lunch box to start his 
            own business. He started a hitch business because he had to get an equalizer set 
            up on his father's car and he was not pleased with how the company set it up. His 
            comment was "I need to start my own hitch business to make sure people are set up 
            correctly when towing a trailer." So it was; now, 36 years later, Pard's Equalizer 
            Trailer Hitch Co., Inc is still going strong. Pard made all of his own receiver 
            hitches and ball mounts for several years. With the market changing, his clientele 
            changed as well from needing receivers put on their vehicles to other items such 
            as fifth wheel hitches, trailer repairs, running gears, couplers, springs, frame 
            repairs, etc.

            Pard's Equalizer Trailer Hitch Co., Inc has dealt with all the major hitch companies 
            (i.e. Valley, Reese, Draw-Tite, B&W, Curt, Roadmaster, and Blue Ox). Pard designed 
            the first bolt-on-receiver in 1978 and took it Louisville, KY to the largest RV show 
            in the nation at that time. From that introduction, all the major hitch companies 
            used his design and made similar hitches into their Class III designs. Pard has now 
            taken the back seat and turned over the company to his son, Boyd Martin, who follows 
            the same premises that his father has.

            Owner operated since 1977, Pard's Equalizer Trailer Hitch Co, Inc is known for 
            doing exceptional work, repairing and maintaining trucks and trailers for a number 
            of companies. We know our customers depend on reliable, clean, and efficient work 
            and we always strive to exceed their expectations. In order to satisfy our customers' 
            needs, we offer flexible scheduling, the best parts available on the market, and 
            great work ethic for every service we provide.

            Our service technicians are highly trained and are dedicated to providing excellent 
            service while keeping your safety as first priority! We strive to exceed our customers 
            expectations and we will always stand by our service. Also, as a courtesy to our 
            customers we do provide transportation to Trax and Front Runner upon request.
        </p>
      </div>
        </Col>
      </Row>
    </Container>
    
      
  );
}

export default About;
