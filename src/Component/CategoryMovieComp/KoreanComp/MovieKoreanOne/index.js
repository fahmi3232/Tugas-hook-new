import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./Components/Popup";
import { Container, Row } from "react-bootstrap";
import MovieKoreanComp from "./Components/MovieKoreanComp";

function MovieKorean() {
  const [state, setState] = useState({
    results: [],
    selected: {},
  });
  const [film, setFilm] = useState([]);

  const getFilm = async () => {
    try {
      let resp = await axios.get(
        "https://www.omdbapi.com/?apikey=20e7f455&s=korea"
      );
      setFilm(resp.data.Search);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getFilm();
  }, []);
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App mt-5">
      <Container>
          <MovieKoreanComp film={film} openPopup={openPopup} />
      </Container>
      <main>
        {typeof state.selected.Title != "undefined" ? (
          <Popup movie={film} selected={state.selected} closePopup={closePopup}
          />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default MovieKorean;
