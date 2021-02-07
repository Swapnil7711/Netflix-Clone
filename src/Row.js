import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import PopupVideoPlayer from "./PopupVideoPlayer";
import movieTrailer from "movie-trailer";
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movie, setMovies] = useState([]);

  const [trailer, setTrailer] = useState("");

  const playTrailer = (film) => {
    if (trailer) {
      setTrailer("");
    } else {
      
      movieTrailer( film?.name || film?.title, {id: true} ).then( (response) => {
        console.log( response );
        setTrailer(response);
      
      } ).catch((error)=>{
        console.log(error)
      })
    }

   
  };

  

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movie);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movie.map(
          (film) =>
            ((isLargeRow && film.poster_path) ||
              (!isLargeRow && film.backdrop_path)) && (
              <img
                onClick={() => {
                  playTrailer(film);
                }}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={film.id}
                src={`${base_url}${
                  isLargeRow ? film.poster_path : film.backdrop_path
                }`}
                alt={film.name}
              />
            )
        )}
      </div>
      {trailer && <PopupVideoPlayer trailerId={trailer} />}
    </div>
  );
}

export default Row;
