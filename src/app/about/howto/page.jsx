import React from 'react'
import Link from 'next/link'

export default function AboutMe() {
  return (
    <body className='about'>
        <h1>How To Navigate</h1>
        <Link className="link" href="/"> &lt; Home </Link>
        <h2>What is this website?</h2>
        <p>
        UNBOXD is a platform for me to practice my web design and development skills while getting to document and keep track of my favorite media, recipes and more!
        </p>
        <h2>How to navigate this website?</h2>
        <p>
        UNBOXD's home page is built using an image mapper (credits and link to React 
        library <Link target="_blank" href="/about/credits">here</Link>).
        Certain objects in the image map to a link! Try to figure out which objects these may be 
        based on the fact that I <span className='comment'> (aim to by the end of development) </span> 
        have 3 main rooms: a kitchen, cinema, and music room. You should be able to tell which 
        objects link to a room as <span className='emphasis'>something special</span> happens when you 
        hover over them on the TV screen!
        </p>
        <p>
        So just try to <span className='emphasis'>find the ~special~ objects and click</span> on them to see where they lead you!
        </p>
    </body>
  )
}
