'use client'

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import moviesData from "/public/JSON/movies.json";
import Link from 'next/link';
import Stars from './Stars';
import Image from 'next/image';

export default function Movie() {
  const searchParams = useSearchParams();
  const [movieName, setMovieName] = useState("Unknown");
  const [movieData, setMovieData] = useState(null);
  const [movieTags, setMovieTags] = useState([]);
  const [favs, setFavs] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const title = searchParams.get('title');
    if (title) {
      setMovieName(title);
    }
  }, [searchParams]);

  useEffect(() => {
    if (movieName && moviesData[movieName]) {
      setNotFound(false);
      setMovieData(moviesData[movieName]);
      setMovieTags(moviesData[movieName].tags);
      setFavs(moviesData[movieName].favs);
    } else {
      setNotFound(true);
      setMovieData(null); // Reset if movieName is invalid
      setMovieTags([]);
    }
  }, [movieName]);

  if (!movieData) {
    return (
      <div className='cinema loading'>
        <Link className="link" href="/"> 📺 </Link>
        <Link className="link" href="/rooms/cinema/"> &lt; Cinema </Link>
        {!notFound&&<h1>Loading...</h1>}
        {notFound&&<h3 id="no">No such movie or show found in database.</h3>} 
        {/* WHY THE LAGGG */}
      </div>
    )
  } else {
    return (
      <div className='cinema'>
          <Link className="link" href="/"> 📺 </Link>
          <Link className="link" href="/rooms/cinema/"> &lt; Cinema </Link>
          <div className='moviePage'>
              <div className='moviePageImg'>
                  <Image 
                    className="focus" 
                    src={movieData.image}
                    width={2765}
                    height={4096}
                    alt={`Poster of the movie/show ${movieName}`}
                  />
              </div>
              <div className='moviePageData'>
                    <h1>{movieName}</h1>
                    <h2 className='dir'> from the mind(s) of {movieData.director}</h2>
                    <div> <Stars rating={movieData.stars}/> </div> <br/>

                    {
                      movieData.quote && 
                      <div className="quoteBox"><span className="quote">"{movieData.quote}"</span></div>
                    }

                    <div id='synopsis'> {movieData.synopsis} </div> <br/>
                    <div id='review'> {movieData.review} </div> <br/>
                    { 
                      movieData.watchCount && 
                      <div> <span className='comment'> 
                      (re)watch count: {movieData.watchCount} </span></div> 
                    }
                    <br/>
                    
                    { 
                      movieData.favs && 
                      <div className='commentSecondary'>
                        favorites: {favs.map((epi, i)=> 
                        <span key={epi}> {i!==favs.length-1 ? `${epi},` : `${epi}.`} </span> 
                        )}
                      </div>
                    }
                  <ul id='tags'>
                      {movieTags.sort().map((tag)=> <li className='tag' key={tag}>{tag}</li>)}
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}
