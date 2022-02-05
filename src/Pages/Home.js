import React from "react";
import { Row } from "react-bootstrap";
import ApiKey from "../Component/ApiKey";
import BannerComp from "../Component/MovieComp/BannerComp";
import UpComingComp from "../Component/MovieComp/UpComingComp";
import ComedyComp from "../Component/MovieComp/ComedyComp";
import GenreActionComp from "../Component/MovieComp/GenreActionComp";
import HororComp from "../Component/MovieComp/HororComp";
import OriginalComp from "../Component/MovieComp/OriginalComp";
import TopRateComp from "../Component/MovieComp/TopRateComp";
import TrendingComp from "../Component/MovieComp/TrendingComp";
import Anime from "../Component/AnimeComp";

const image_uri = "https://image.tmdb.org/t/p/original/";

const Home = () => {
  return (
    <div>
      <Row
        title="NETFLIX ORIGNALS"
        url={ApiKey.fetchNetflixOriginals}
        isLargeRow
      />
      <BannerComp url={ApiKey.fetchUpcoming} />
      <TopRateComp title="Top Rate Movie" url={ApiKey.fetchTopRated} />
      <TrendingComp title="Video Trending" url={ApiKey.fetchTrending} />
      <OriginalComp title="Video Original" url={ApiKey.fetchNetflixOriginals} />
      <GenreActionComp title="Genre Action" url={ApiKey.fetchActionMovies} />
      <ComedyComp title="Genre Comedy" url={ApiKey.fetchComedyMovies} />
      <HororComp title="Genre Horor" url={ApiKey.fetchHorrorMovies} />
      <UpComingComp title="Coming Soon" url={ApiKey.fetchUpcoming} />
      <Anime />
    </div>
  );
};

export default Home;
