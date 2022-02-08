import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SubKoreanComp from "./SubKoreanComp";

const MovieKoreanComp = ({ openPopup, film }) => {
  return (
    <div>
      <Container style={{ marginTop: 100 }}>
        <Row>
          <Col className="results mt-3">
            {film.map((mov) => (
              <SubKoreanComp key={mov.imdbID} mov={mov} openPopup={openPopup} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieKoreanComp;
