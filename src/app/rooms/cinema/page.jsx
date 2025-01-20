'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import moviesData from "/public/JSON/movies.json";
import allTags from "/public/JSON/tags.json"
import { MoviePoster } from "./Movie.jsx";

export default function Cinema() {
  const [movies, setMovies] = useState(null);
  const [options, setOptions] = useState(null);
  const [chosenTag, setChosenTag] = useState("all");

  useEffect(() => {
    const movieElements = Object.values(moviesData).map(data => (
      <MoviePoster key={data.title} movieTitle={data.title} src={data.image}/>
    ));
    setMovies(movieElements);

    const tagOptions = allTags.map((tag) => <option key={tag} value={tag}>{tag}</option>);
    setOptions(tagOptions);
  }, []);

  useEffect(() => {
    const movieElements = Object.values(moviesData).map(data => data.tags.includes(chosenTag) && (
      <MoviePoster key={data.title} movieTitle={data.title} src={data.image}/>
    ));
    setMovies(movieElements);
  }, [chosenTag])
  
  return (
    <body className='cinema'>
      <Link className="link" href="/"> &lt; Home </Link>
      <h1>Cinema</h1>

      <div className='filter'>
        <label htmlFor="tags">Filter via: </label>
        <select onChange={(e)=>setChosenTag(e.target.value)} value={chosenTag} name="tags" id="tags">
          {options}
        </select>
      </div>
      
      <div className='cinemaGrid'>
        {movies}
      </div>
      <div className="fuzzy-overlay"></div>
    </body>
  );
}
