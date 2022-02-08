import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

function SubKoreanComp({ mov, openPopup }) {
  return (
    <>
      <div className="result" onClick={() => openPopup(mov.imdbID)}>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "10rem" }}>
                <Card.Img variant="top" src={mov.Poster} />
                <Card.Body>
                  <Button variant="danger">Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SubKoreanComp;
