import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, Suspense } from "react";
import { getMovieDetails } from "../../services/api-service";

export default function MovieDetails() {
  const [film, setfFilm] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const { current } = useRef(location.state);

  useEffect(() => {
    getMovieDetails(movieId)
      .then((data) => {
        setfFilm(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  const path = current ? `${current.from.pathname}${current.from.search}` : "/";

  return (
    <div>
      <Link to={path}>go back</Link>
      <h2>{film.title}</h2>
      {film.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          alt={film.title}
        />
      )}
      <div>
        <p>popularity:{film.popularity}</p>
        <h2>Overview</h2>
        <p>{film.overview}</p>

        {film.genres && film.genres.length > 0 && (
          <div>
            <h2>Generes</h2>
            <ul>
              {film.genres.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={"rewiews"}>Rewiews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading 2...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
