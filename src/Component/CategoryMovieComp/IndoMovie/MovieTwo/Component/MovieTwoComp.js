import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SubMovieComp from "./SubMovieComp";

function MovieTwoComp({ openPopup, movie }) {
  return (
    <>
      <Container>
        <Row>
          <Col className="results mt-3">
            {movie.map((mov) => (
              <SubMovieComp key={mov.imdbID} mov={mov} openPopup={openPopup} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MovieTwoComp;
