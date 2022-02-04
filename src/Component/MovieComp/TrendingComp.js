import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Axios from "../Axios";
import "./style.css";

const image_uri = "https://image.tmdb.org/t/p/original/";

const styleH3 = {
  textAlign: "left",
  marginBottom: 15,
};

const Image = { borderRadius: "15px" };

const TrendingComp = ({ url, title }) => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTrending = async () => {
    setLoading(true);
    try {
      let res = await Axios.get(url);
      setTrending(res.data.results);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getTrending();
  }, []);
  return (
    <div className="mt-5 cont">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h4 style={styleH3}>{title}</h4>
          <div className="rw_imags">
            {trending.map((trend, index) => {
              return (
                <img
                  // key={index}
                  className="rw_imag"
                  style={Image}
                  src={`${image_uri}${trend.poster_path}`}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default TrendingComp;
