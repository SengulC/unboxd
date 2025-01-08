"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

export function MoviePoster({movieTitle, src}) {
    const router = useRouter(); 
    return (
    <>
        <img 
            onClick={(e)=>router.push(
            `/rooms/cinema/movie?title=${movieTitle}`
            )} 
            className='moviePoster' 
            src={src}>
        </img><br/>
    </>
    )
}
