import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SubIndiComp from "./SubIndiComp";

const IndiCompOne = ({ openPopup, film }) => {
  return (
    <div>
      <Container style={{ marginTop: 100 }}>
        <Row>
          <Col className="results mt-3">
            {film.map((mov) => (
              <SubIndiComp key={mov.imdbID} mov={mov} openPopup={openPopup} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IndiCompOne;
