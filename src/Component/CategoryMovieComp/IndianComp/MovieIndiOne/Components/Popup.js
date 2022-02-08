import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Popup({ selected, closePopup }) {
  return (
    <>
      <section className="popup">
        <div className="content mt-5">
          <h2>
            {selected.Title} <span>({selected.Year})</span>
          </h2>
          <p className="rating">Rating: {selected.imdbRating}</p>
          <Container>
            <Row style={{ marginBottom: 20 }}>
              <Col md={5} className="mb-3">
                <img src={selected.Poster} />
              </Col>
              <Col md={7}>
                <p style={{ textAlign: "left" }}>{selected.Plot}</p>
              </Col>
            </Row>
          </Container>
          <button className="close" onClick={closePopup}>
            Close
          </button>
        </div>
      </section>
    </>
  );
}

export default Popup;
