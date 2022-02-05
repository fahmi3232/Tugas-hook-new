import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
import Axios from "../Axios";
import "./style.css";
import YouTube from "react-youtube";
import { Col, Container, Row } from "react-bootstrap";

const image_uri = "https://image.tmdb.org/t/p/original/";

const styleH3 = {
  textAlign: "left",
  marginBottom: 15,
};

const Image = { borderRadius: "17px" };

const UpComingComp = ({ url, title, isLargeRow }) => {
  const [upComing, setUpComing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const getUpComing = async () => {
    setLoading(true);
    try {
      let res = await Axios.get(url);
      console.log(res.data);
      setUpComing(res.data.results);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUpComing();
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = async (upc, isLargeRow) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else if (!isLargeRow) {
      let trailerurl = await Axios.get(
        `/movie/${upc.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

  return (
    <div className="mt-5 cont">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h5 style={styleH3}>{title}</h5>
          <div className="rw_imags">
            {upComing.map((upc, index) => {
              return (
                <>
                  <div className="container">
                    <img
                      key={index}
                      className="imagess"
                      style={Image}
                      src={`${image_uri}${upc.backdrop_path}`}
                    />
                    <div className="middle">
                      <div
                        onClick={() => handleClick(upc, isLargeRow)}
                        className="text"
                      >
                        TRAILER
                      </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <p>{upc.original_title}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          <div className="mt-5" >
            <Container>
              <Row>
                <Col className="d-flex justify-content-center" md={12} xs={12}>
                  <img style={{ width: "100%", maxHeight: "100%", textAlign: 'center', borderRadius: "10px" }} src="https://thumbor.prod.vid.id/gUD1wcuXi1RYyIjfPMjq0wUQ0So=/1200x142/filters:quality(70)/vidio-web-prod-breaking-banner/uploads/breaking_banner/image/898/81d862.png" />
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </div>
  );
};

export default UpComingComp;
