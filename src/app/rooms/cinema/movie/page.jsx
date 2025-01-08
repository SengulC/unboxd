'use client'

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import moviesData from "/public/JSON/movies.json";

export default function Movie() {
  const searchParams = useSearchParams();
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    setMovieName(searchParams.get('title'));
    setMovieData(moviesData[movieName]);
    console.log(movieName);
  }, [searchParams]);

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
