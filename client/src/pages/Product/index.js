import React, { useState, useEffect } from "react";
import Parts from "../../components/Parts";
import Pagination from "../../components/Pagination";
import axios from "axios";
import { Container, Row, Button, Form, Col } from "react-bootstrap";

//product page for users to see available products and to browse and shop for them
const Product = ({ setCartModalShow }) => {
  //useStates for the parts array, loading status for pagination, parts per page for pagination and the current page for pagination
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [partsPerPage] = useState(10);

  //useEffect to get all the products from the database
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/part");
        setParts(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  //pagination variables
  const indexOfLastPart = currentPage * partsPerPage;
  const indexOfFirstPart = indexOfLastPart - partsPerPage;
  const currentParts = parts.slice(indexOfFirstPart, indexOfLastPart);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //returns searching and filtering options(which do not work currently) at the top of the page and the 
  //pagination buttons at the bottom of the page with all the product cards in the middle
  return (
    <>
      <Container fluid className="m-3">
        <Row>
          <Col>
            <Form>
              <Row>
                <Col sm={4}>
                  <Form.Select key="brand" aria-label="Default select example">
                    <option>Brand</option>
                    <option value="1">Air Lift</option>
                    <option value="2">Curt</option>
                    <option value="3">B&W</option>
                    <option value="3">Firestone</option>
                    <option value="3">Bolt Locks</option>
                  </Form.Select>
                </Col>
                <Col sm={4}>
                  <Form.Select
                    key="category"
                    aria-label="Default select example"
                  >
                    <option>Category</option>
                    <option value="1">Suspension</option>
                    <option value="2">Reciever Hitches</option>
                    <option value="3">Ball Mounts</option>
                    <option value="4">Gooseneck Hitches</option>
                    <option value="5">Weight Distribution</option>
                    <option value="6">Fifth Wheel Hitches</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Button type="submit" variant="success">
                    Filter
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <Form>
              <Row>
                <Col sm={4}>
                  <Form.Group className="mb-3" controlId="search">
                    <Form.Control
                      type="text"
                      placeholder="Search Part Number"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Button type="submit" variant="success">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Parts parts={currentParts} loading={loading} setCartModalShow={setCartModalShow}></Parts>
        <Pagination
          partsPerPage={partsPerPage}
          totalParts={parts.length}
          paginate={paginate}
        />
      </Container>
    </>
  );
};

export default Product;
