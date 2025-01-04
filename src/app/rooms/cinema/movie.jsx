import React from 'react'

/*
        {moviesData[0].title} <br/>
        {moviesData[0].director} <br/>
        <img src={moviesData[0].image}></img> <br/>
        {moviesData[0].stars} <br/>
        {moviesData[0].synopsis} <br/>
        {moviesData[0].review} <br/>
        {moviesData[0].tags} <br/>
*/

export function Movie({movieData}) {
  return (
    <>
        {/* <h2> {movieData.title} </h2> 
        {movieData.director} <br/> */}
        <img className='moviePoster' src={movieData.image}></img> <br/>
        {/* {movieData.stars} <br/>
        {movieData.synopsis} <br/>
        {movieData.review} <br/>
        {movieData.tags} <br/> */}
    </>
  )
}
