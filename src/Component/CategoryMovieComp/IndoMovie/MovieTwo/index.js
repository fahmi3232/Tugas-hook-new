import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./Component/Popup";
import { Container, Row } from "react-bootstrap";
import MovieTwoComp from "./Component/MovieTwoComp";

function ListMovieComp() {
  const [state, setState] = useState({
    results: [],
    selected: {},
  });
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    try {
      let res = await axios.get(
        "https://www.omdbapi.com/?apikey=20e7f455&s=rindu"
      );
      setMovie(res.data.Search);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getMovie();
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
        {/* <header>
          <h1>Indonesian Movies</h1>
        </header> */}
        <Row>
          <MovieTwoComp
            movie={movie}
            openPopup={openPopup}
          />
        </Row>
      </Container>
      <main>
        {typeof state.selected.Title != "undefined" ? (
          <Popup
            movie={movie}
            selected={state.selected}
            closePopup={closePopup}
          />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default ListMovieComp;
