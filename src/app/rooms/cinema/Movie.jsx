"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

export function MoviePoster({movieTitle, src}) {
    const router = useRouter(); 
    return (
    <div className='MoviePoster'>
        <Image 
            onClick={(e)=>router.push(
            `/rooms/cinema/movie?title=${movieTitle}`
            )} 
            className='moviePoster' 
            src={src}
            width={2765}
            height={4096}
            alt={`Poster of the movie/show ${movieTitle}`}
        />
        <br/>
    </div>
    )
}
