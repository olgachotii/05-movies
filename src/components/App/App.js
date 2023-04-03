import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import "./App.css";

// import Home from "../views/Home";
// import Movies from "../views/Movies";
// import MovieDetails from "../views/MovieDetails";
// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";
import Loyaut from "../loyaut/loyaut";

const Movies = lazy(() => import("../views/Movies"));
const MovieDetails = lazy(() => import("../views/MovieDetails"));
const Home = lazy(() => import("../views/Home"));
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

function App() {
  return (
    <Routes>
      <Route peth="/" element={<Loyaut />}>
        <Route index element={<Home />} />
        {/*index означає що цей маршрут повинин реддерится на той самий path що і Loyaut */}
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="rewiews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
