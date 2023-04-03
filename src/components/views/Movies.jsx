import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearch } from "../../services/api-service";
import MoviesList from "../MoviesList/MoviesList";

export default function Movies() {
  const [value, setValue] = useState("");
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    if (search) {
      getSearch(search).then((data) => {
        setFilms(data.results);
      });
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    !value ? setSearchParams({}) : setSearchParams(() => ({ search: value }));
  };

  const hendleTextChange = (e) => {
    setValue(e.target.value.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          onChange={hendleTextChange}
          value={value}
        />
        <button type="submit">search</button>
        {films.length > 0 && <MoviesList films={films} />}
      </form>
    </div>
  );
}
