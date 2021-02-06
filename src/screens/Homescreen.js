import React from "react";
import "./Homescreen.css";
import Nav from "../Nav";
import Banner from "../Banner.js";
import requests from "../Requests";
import Row from "../Row";
function Homescreen() {
  return (
    <div className="homescreen">
      <Nav />

      {/* Banner */}

      <Banner />
      <Row
        title="Netflix Originals "
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now " fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated " fetchUrl={requests.fetchToprated} />
      <Row title="Action Movies " fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies " fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries " fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}

export default Homescreen;
