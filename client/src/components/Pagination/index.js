import React from "react";
import { Row, Col } from "react-bootstrap";

const Pagination = ({ partsPerPage, totalParts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalParts / partsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Row>
      <Col>
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a
                  onClick={() => paginate(number)}
                  href=""
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Col>
    </Row>
  );
};

export default Pagination;
