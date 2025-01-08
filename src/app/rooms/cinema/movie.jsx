"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

export function MoviePoster({movieData}) {
    const router = useRouter(); 
    const title = movieData.title;
    const JSONdata = JSON.stringify(movieData);
    return (
    <>
        {/* <h2> {movieData.title} </h2> 
        {movieData.director} <br/> */}
        <img onClick={(e)=>router.push(
            `/rooms/cinema/movie?title=${title}`
            )} 
            className='moviePoster' 
            src={movieData.image}>
        </img><br/>
        {/* {movieData.stars} <br/>
        {movieData.synopsis} <br/>
        {movieData.review} <br/>
        {movieData.tags} <br/> */}
    </>
    )
}
