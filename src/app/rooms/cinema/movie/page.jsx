'use client'

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import moviesData from "/public/JSON/movies.json";

export default function Movie() {
  const searchParams = useSearchParams();
  const [movieName, setMovieName] = useState("Unknown");
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const title = searchParams.get('title');
    if (title) {
      setMovieName(title);
    }
  }, [searchParams]);

  useEffect(() => {
    if (movieName && moviesData[movieName]) {
      setMovieData(moviesData[movieName]);
    } else {
      setMovieData({}); // Reset if movieName is invalid
    }
  }, [movieName]);

  return (
    <body className='cinema'>
        <div className='moviePage'>
            <div className='moviePageImg'>
                <img className="moviePoster" src={movieData.image}></img>
            </div>
            <div className='moviePageData'>
                <h1>{movieName}</h1>
                <h2>{movieData.director}</h2>
                <p>
                    {movieData.stars} <br/>
                    {movieData.synopsis} <br/>
                    {movieData.review} <br/>
                    {movieData.tags}
                </p>
            </div>
        </div>
      <div className="fuzzy-overlay"></div>
    </body>
  );
}
