import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Axios from "../Axios";
import "./style.css";

const image_uri = "https://image.tmdb.org/t/p/original/";

const Image = { borderRadius: "15px" };

const GenreActionComp = ({ url, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 6,
    
  };

  const [action, setAction] = useState([]);

  const getAction = async () => {
    try {
      let respon = await Axios.get(url);
      setAction(respon.data.results);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getAction();
  }, []);
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <h4 style={{textAlign: "left"}}> {title} </h4>
          <Slider {...settings}>
            {/* <div className="rw_imags"> */}
              {action.map((acti, index) => {
                return (
                  <Col  key={index}>
                    <img
                      className="rw_imag"
                      style={Image}
                      src={`${image_uri}${acti.poster_path}`}
                    />
                  </Col>
                );
              })}
            {/* </div> */}
          </Slider>
        </Row>
      </Container>
    </div>
  );
};

export default GenreActionComp;
