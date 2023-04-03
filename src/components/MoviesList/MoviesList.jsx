import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function MoviesList({ films }) {
  const location = useLocation();
  // console.log(location);

  return (
    <ul>
      {films.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
            )}
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
