import React, { useState, useEffect } from "react";
import Parts from "../../components/Parts";
import Pagination from "../../components/Pagination";
import axios from "axios";
import { Container, Row, Button, Form, Col } from "react-bootstrap";

const Product = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [partsPerPage] = useState(10);

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

  const indexOfLastPart = currentPage * partsPerPage;
  const indexOfFirstPart = indexOfLastPart - partsPerPage;
  const currentParts = parts.slice(indexOfFirstPart, indexOfLastPart);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        <Parts parts={currentParts} loading={loading}></Parts>
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
