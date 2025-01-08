'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import moviesData from "/public/JSON/movies.json";
import { MoviePoster } from "./movie.jsx";

export default function Cinema() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieElements = Object.values(moviesData).map(data => (
      <MoviePoster key={data.title} movieTitle={data.title} src={data.image}/>
    ));
    setMovies(movieElements);
  }, []);

  return (
    <body className='cinema'>
      <Link href="/"> &lt; Home </Link>
      <h1>Cinema</h1>
      <div className='cinemaGrid'>
        {movies}
      </div>
      <div className="fuzzy-overlay"></div>
    </body>
  );
}
