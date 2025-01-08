import React from 'react'
import Link from 'next/link'

export default function Credits() {
  return (
    <body className='cinema'>
        <Link className="link" href="/"> &lt; Home </Link>
        <Link className="link" href="/about/me"> &gt; About Me </Link>
        <h1>Credits</h1>
        <h3>2D Pixel Sprites</h3>
        <ul>
            <li>Furniture by <a href="https://games-container.itch.io/livingroom-assets"> Games Container</a></li>
            <li>Food by <a href="https://ghostpixxells.itch.io/pixelfood"> ghostpixxells</a></li>
            <li>Drinks by <a href="https://helm3t.itch.io/cocktail-pixel-icon-pack"> Helm3t</a></li>
            <li>Digital devices and vinyl record by <a href="https://opengameart.org/content/retro-items">knekko</a></li>
            <li>Personal avatar via <a href="https://www.avatarsinpixels.com/">Avatars in Pixels</a></li>
        </ul>
        <h3>Fonts</h3>
        <ul>
            <li>Rubik Glitch</li>
            <li>Jacquard</li>
            <li>Sour Gummy</li>
            <li> on <a href="https://fonts.google.com/">Google Fonts</a></li>
        </ul>
        <h3>Movie Descriptions and Posters</h3>
        <ul>
            <li><a href="https://www.imdb.com/">IMDb</a></li>
            <li><a href="https://www.letterboxd.com/">Letterboxd</a></li>
        </ul>
        <div className="fuzzy-overlay"></div>
    </body>
  )
}
