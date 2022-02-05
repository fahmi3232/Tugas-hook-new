import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
import Axios from "../Axios";
import "./style.css";
import YouTube from "react-youtube";

const image_uri = "https://image.tmdb.org/t/p/original/";

const styleH3 = {
  textAlign: "left",
  marginBottom: 15,
};

const Image = { borderRadius: "10px" };

const HororComp = ({ url, title, isLargeRow }) => {
  const [horor, setHoror] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const getHoror = async () => {
    setLoading(true);
    try {
      let res = await Axios.get(url);
      setHoror(res.data.results);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getHoror();
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = async (hor, isLargeRow) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else if (!isLargeRow) {
      let trailerurl = await Axios.get(
        `/movie/${hor.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
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
            {horor.map((hor, index) => {
              return (
                <>
                <div className="container">
                  <img
                    
                    key={index}
                    className="image"
                    style={Image}
                    src={`${image_uri}${hor.poster_path}`}
                  />
                  <div className="middle">
                    <div onClick={() => handleClick(hor, isLargeRow)} className="text">TRAILER</div>
                  </div>
                  </div>
                </>
              );
            })}
          </div>

          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </>
      )}
    </div>
  );
};

export default HororComp;
