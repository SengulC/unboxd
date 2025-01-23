'use client'

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import moviesData from "/public/JSON/movies.json";
import Link from 'next/link';
import Stars from './Stars';


export default function Movie() {
  const searchParams = useSearchParams();
  const [movieName, setMovieName] = useState("Unknown");
  const [movieData, setMovieData] = useState({});
  const [movieTags, setMovieTags] = useState([]);

  useEffect(() => {
    const title = searchParams.get('title');
    if (title) {
      setMovieName(title);
    }
  }, [searchParams]);

  useEffect(() => {
    if (movieName && moviesData[movieName]) {
      setMovieData(moviesData[movieName]);
      setMovieTags(moviesData[movieName].tags);
    } else {
      setMovieData({}); // Reset if movieName is invalid
      setMovieTags([]);
    }
  }, [movieName]);

  return (
    <body className='cinema'>
        <Link className="link" href="/"> &lt; Home </Link>
        <Link className="link" href="/rooms/cinema/"> &lt; Cinema </Link>
        <div className='moviePage'>
            <div className='moviePageImg'>
                <img className="moviePoster" src={movieData.image}></img>
            </div>
            <div className='moviePageData'>
                  <h1>{movieName}</h1>
                  <h2>{movieData.director}</h2>
                  <div> <Stars rating={movieData.stars}/> </div> <br/>
                  <div id='synopsis'> {movieData.synopsis} </div> <br/>
                  <div id='review'> {movieData.review} </div> <br/>
                <ul id='tags'>
                    {/* {movieData.tags} */}
                    {movieTags.map((tag)=> <li className='tag' key={tag}>{tag}</li>)}
                </ul>
            </div>
        </div>
      <div className="fuzzy-overlay"></div>
    </body>
  );
}
