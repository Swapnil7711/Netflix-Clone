import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movie, setMovies] = useState([]);

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
    </div>
  );
}

export default Row;
