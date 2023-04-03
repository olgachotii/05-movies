import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export default function loyaut() {
  return (
    <>
      <footer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </footer>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}
