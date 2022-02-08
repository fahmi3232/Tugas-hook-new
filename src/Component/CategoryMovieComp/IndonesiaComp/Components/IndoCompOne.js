import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../MovieComp/style.css";
import "../../GlobalStyle.css";
// import ModalIndoComp from "./ModalIndoComp";

const style = {
  textAlign: "left",
  marginBottom: 15,
};

const Image = { borderRadius: "15px" };

const IndoCompOne = ({ title }) => {
  const [indo, setIndo] = useState([]);
  const [loading, setLoading] = useState(false);

  const getIndo = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        "https://www.omdbapi.com/?apikey=20e7f455&s=cinta"
      );
      setIndo(res.data.Search);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getIndo();
  }, []);
  return (
    <div>
      <Container style={{ marginTop: 100 }}>
        <Row>
          <div
            style={{
              textAlign: "left",
              marginBottom: 10,
              fontFamily: "'Balsamiq Sans', cursive",
            }}
          >
            <h4>{title}</h4>
          </div>
          {indo.map((ind, index) => {
            return (
              <Col
                md={4}
                xs={6}
                sm={6}
                lg={2}
                className="d-flex justify-content-center"
              >
                <Link to={"/movie/" + ind.imdbID}>
                <Card className="mb-3 imag" style={{ width: "11rem" }}>
                  <Card.Img
                    className="img"
                    style={{ height: 230 }}
                    variant="top"
                    src={ind.Poster}
                  />
                </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default IndoCompOne;
