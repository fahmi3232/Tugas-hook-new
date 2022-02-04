import React from "react";
import ApiKey from "../Component/ApiKey";
import BannerComp from "../Component/MovieComp/BannerComp";
import GenreActionComp from "../Component/MovieComp/GenreActionComp";
import OriginalComp from "../Component/MovieComp/OriginalComp";
import TopRateComp from "../Component/MovieComp/TopRateComp";
import TrendingComp from "../Component/MovieComp/TrendingComp";

const image_uri = "https://image.tmdb.org/t/p/original/";

const Home = () => {
  return (
    <div>
      <BannerComp url={ApiKey.fetchUpcoming} />
      <TopRateComp title="Top Rate Movie" url={ApiKey.fetchTopRated} />
      <TrendingComp title="Video Trending" url={ApiKey.fetchTrending} />
      <OriginalComp title="Video Original" url={ApiKey.fetchNetflixOriginals} />
      <GenreActionComp title="Genre Action" url={ApiKey.fetchActionMovies} />
    </div>
  );
};

export default Home;
