"use client"

import React, { Suspense } from 'react'
import { useRouter } from 'next/navigation'

export function MoviePoster({movieTitle, src}) {
    const router = useRouter(); 
    return (
    <div className='MoviePoster'>
        <Suspense>
        <img 
            onClick={(e)=>router.push(
            `/rooms/cinema/movie?title=${movieTitle}`
            )} 
            className='moviePoster' 
            src={src}>
        </img>
        </Suspense>
        <br/>
    </div>
    )
}
