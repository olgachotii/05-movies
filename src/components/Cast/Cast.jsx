import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../services/api-service";

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then((data) => {
        setActors(data.cast);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div>
      {actors ? (
        <ul>
          {actors.map(({ id, original_name, profile_path }) => (
            <li key={id}>
              <p>{original_name}</p>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={original_name}
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        "there is no information yet :("
      )}
    </div>
  );
}
