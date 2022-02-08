import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Result from "./Result";

function Results({ openPopup, movie }) {
  return (
    <>
      <Container>
        <Row>
          <Col className="results mt-3">
            {movie.map((mov) => (
              <Result key={mov.imdbID} mov={mov} openPopup={openPopup} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Results;
