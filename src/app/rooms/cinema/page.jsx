import Link from 'next/link';
import React from 'react';
import moviesData from "/public/JSON/movies.json";
import { MoviePoster } from "./movie.jsx";

export default function Cinema() {
  return (
    <body className='cinema'>
      <Link href="/"> &lt; Home </Link>
      <h1>Cinema</h1>
      <div className='cinemaGrid'>
        {moviesData.map((movie, index) => (
          <MoviePoster key={index} movieData={movie}></MoviePoster>
        ))}
      </div>
      <div className="fuzzy-overlay"></div>
    </body>
  );
}
