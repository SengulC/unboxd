import Link from 'next/link'
import React from 'react'
import moviesData from "/public/JSON/movies.json"
import { Movie } from "./movie.jsx"

export default function Cinema() {
  return (
    
    <body className='cinema'>
        <Link href="/"> &lt; Home </Link>
        <h1>Cinema</h1>
        <div className='cinemaGrid'>
          <Movie movieData={moviesData[0]}></Movie>
          <Movie movieData={moviesData[0]}></Movie>
          <Movie movieData={moviesData[0]}></Movie>
          <Movie movieData={moviesData[0]}></Movie>
          <Movie movieData={moviesData[0]}></Movie>
          <Movie movieData={moviesData[0]}></Movie>
          <Movie movieData={moviesData[0]}></Movie>
          <Movie movieData={moviesData[0]}></Movie>
        </div>
        <div className="fuzzy-overlay"></div>
    </body>
  )
}
