import Axios from "../Axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import './style.css'
import Slider from "react-slick";

const image_uri = "https://image.tmdb.org/t/p/original/";

const styleH3 = {
  textAlign: "left",
  marginBottom: 15
}

const Image = { borderRadius: "15px"}

const styleP = {
  marginTop: -10,marginBottom: 27,
  textAlign: "left", paddingLeft: 8, fontSize: 15
}

const TopRateComp = ({ url, title }) => {
  const [topRate, setTopRate] = useState([]);
  const [loading, setLoading] = useState(false)

  const getRate = async () => {
    setLoading(true)
    try {
      let respo = await Axios.get(url);
      setTopRate(respo.data.results);
      setLoading(false)
    } catch (e) {
      setLoading(true)
      console.log(e.message);
    }
  };

  useEffect(() => {
    getRate();
  }, []);
  return (
    <div className="mt-5 cont">
      {
        loading ? "Loading..." :
        <>
        <h4 style={styleH3}>{title}</h4>
        <div className="rw_imags">
          {topRate.map((top, index) => {
            return (
              // <Col md={2} xs={4}>
              <>
                <img className="rw_imag" style={Image} src={`${image_uri}${top.poster_path}`} />
                </>
                /* <Card style={{ width: "10rem", marginBottom: 16 }}>
                  <Card.Img style={Image} variant="top" src={`${image_uri}${top.poster_path}`} />
                </Card>
                  <p style={styleP}>{top.original_title}</p> */
              // </Col>
            );
          })}
        </div>
        </>
      }
    </div>
  );
};

export default TopRateComp;
