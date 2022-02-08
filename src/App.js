import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import NavbarComp from "./Pages/NavbarComp";
import FormComp from "./Pages/FormComp";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import IndoCompOne from "./Component/CategoryMovieComp/IndonesiaComp/Components/IndoCompOne";
import IndiComp from "./Component/CategoryMovieComp/IndianComp/MovieIndiOne";
import MovieIdComp from "./Component/CategoryMovieComp/IndonesiaComp/MovieIdComp";
import ListMovieComp from "./Component/CategoryMovieComp/IndoMovie/MovieOne/ListMovieComp";
import MovieKorean from "./Component/CategoryMovieComp/KoreanComp/MovieKoreanOne";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/indonesia" element={<IndoCompOne />} />
          <Route path="/india" element={<IndiComp />} />
          <Route path="/form" element={<FormComp />} />
          <Route path="/movie/:imdbID/:" element={<MovieIdComp />} />
          <Route path="/list-movie" element={<ListMovieComp />} />
          <Route path="/korea" element={<MovieKorean />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
