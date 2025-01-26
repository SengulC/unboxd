import React from 'react'
import Link from 'next/link'

export default function AboutMe() {
  return (
    <div className='about'>
        <Link className="link" href="/"> &lt; Home </Link>
        <h1>?</h1>
        <h2>What is this website?</h2>
        <p>
        Unboxd is a platform for me to practice my web design and development skills 
        while getting to document and keep track of my favorite media, recipes and more!
        It is heavily inspired (albeit not visually) by Letterboxd! Gotta give respect where its due ✌️
        </p>
        <h2>How to navigate this website?</h2>
        <p>
        Unboxd's home page is built using an image mapper (credits and link to React 
        library <Link target="_blank" href="/about/credits">here</Link>).
        Certain objects in the image map to a link! Try to figure out which objects these may be 
        based on the fact that I <span className='comment'> (aim to by the end of development) </span> 
        have the following: a kitchen, cinema, games and music room. You should be able to tell which 
        objects link to a room as <span className='emphasis'>something special</span> happens when you 
        hover over them on the TV screen!
        </p>
        <h2>How was Unboxd designed & developed?</h2>
        <p>
        Unboxd is essentially a React-Next app developed solely by me. 
        Here are the relevant docs for <a href="https://react.dev/">React</a> and <a href="https://nextjs.org/">Next</a>.
        The aforementioned responsive image mapping library allowed me to realize my vision of 
        a pixel-design ineractive room, wherein the rooms correspond to relevant 
        media discussions and reviews.

        I <span className='comment'>actively re-</span>design the look and navigation of Unboxd on 
        <a href="https://www.figma.com"> Figma.</a> I use <span className='comment'>mostly </span>
        game assets (all credited <Link target="_blank" href="/about/credits">here</Link>). 
        I, then, upload these sprites onto Figma and arrange them to create a room!
        </p>

        <p>
        Through this experience, I've been motivated more and more to create my own assets. 
        As amazing as asset creators are sometimes I cannot find the exact sprite I'm looking for,
        and sometimes when I do, they're not free. And so I've started dabbling in pixel art as well
        as generic sprite creation! I have a minor background in game development through a uni
        course, but that was a group project and I was in the development team rather than the design.
        But now I play for both sides, and it's been so fun!! As of now, the sprites I've created 
        myself are: the tv frame and recipe book.
        </p>

        <hr></hr>
        <p>
        So just try to <span className='emphasis'>find the ~special~ objects and click</span> on them to see where they lead you!
        </p>
    </div>
  )
}
