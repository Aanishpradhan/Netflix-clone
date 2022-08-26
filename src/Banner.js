import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./Requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        // console.log(
        request.data.results[ // []
          Math.floor(Math.random() * request.data.result.length - 1)
        ]
      );
      return request;
      //   );
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPostion: "center center",
      }}
    >
      <div className="banner__contents">
        {/* {" "} */}
        {/* <<<background image*/}
        {/* title */}
        {/* <h1>{movie?.title || movie?.name || movie?.original_name}</h1> */}
        <h1 className="banner__title">
          {/* {" "} */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
        {truncate(movie?.overview, 150)}
        {/* div >2 buttons */}
        {/* description */}
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
