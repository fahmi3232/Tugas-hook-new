import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Axios from "../Axios";

const image_uri = "https://image.tmdb.org/t/p/original/";

const styleH3 = {
  textAlign: "left",
  marginBottom: 15,
};

const Image = { borderRadius: "15px" };

const OriginalComp = ({ url, title }) => {
  const [original, setOriginal] = useState([]);
  const [loading, setLoading] = useState(false);

  const getOriginal = async () => {
    setLoading(true);
    try {
      let resp = await Axios.get(url);
      setLoading(false);
      setOriginal(resp.data.results);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getOriginal();
  }, []);
  return (
    <div className="mt-5 cont">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h4 style={styleH3}>{title}</h4>
          <div className="rw_images">
            {original.map((origin, index) => {
              return (
                <img
                key={index}
                  className="rw_imag"
                  style={Image}
                  src={`${image_uri}${origin.poster_path}`}
                />
              );
            })}
          </div>
          <div className="mt-5" >
            <Container>
              <Row>
                <Col className="d-flex justify-content-center" md={12} xs={12}>
                  <img style={{ width: "100%", maxHeight: "100%", textAlign: 'center', borderRadius: "10px" }} src="https://thumbor.prod.vid.id/1gijLqalnHTqVf3K2DDQsTkvMzc=/1200x142/filters:quality(70)/vidio-web-prod-breaking-banner/uploads/breaking_banner/image/1863/b0eee0.jpg" />
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </div>
  );
};

export default OriginalComp;
