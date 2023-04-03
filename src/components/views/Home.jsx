import React from "react";
import { useState, useEffect } from "react";

import MoviesList from "../MoviesList/MoviesList";
import { getTrending } from "../../services/api-service";

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrending().then((films) => {
      setFilms(films.results);
    });
  }, []);

  return <MoviesList films={films} />;
}
