import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRewiew } from "../../services/api-service";

export default function Reviews() {
  const [text, setText] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    getRewiew(movieId)
      .then((data) => {
        setText(data.results[0].content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  return <> {text ? <div>{text}</div> : "there is no information yet :("}</>;
}
