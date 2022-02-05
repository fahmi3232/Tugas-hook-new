import React, { useState, useEffect } from "react";
import Axios from "../Axios";
import requests from "../ApiKey";
import "./style.css";
import Slider from "react-slick";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(requests.fetchUpcoming);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner mt-5"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 style={{textAlign: "left"}} className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
        <div className="d-flex py-5">
        <button className="banner__button">Putar Sekarang</button>
        {/* <button className="banner__button">My List</button> */}
        </div>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;