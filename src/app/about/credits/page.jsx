import React from 'react'
import Link from 'next/link'

export default function Credits() {
  return (
    <body className='about'>
        <Link className="link" href="/"> &lt; Home </Link>
        <h1>Credits</h1>
        <h3>React Libraries & html/css Tutorials</h3>
        <ul>
            <li>Responsive image map React library by <a href="https://github.com/img-mapper/react-img-mapper">NishargShah</a></li>
            <li>Page turning effect React library by <a href="https://github.com/Nodlik/react-pageflip">Nodlik</a></li>
            <li>Simple React & Framer Motion animations by <a href="https://blog.olivierlarose.com/tutorials/pixel-transition">Olivier Larose</a></li>
            <li>TV Static animation by <a href="https://github.com/TomIsLoading/tv-static">TomIsLoading</a></li>
            <li>CSS box shadows from <a href="https://getcssscan.com/css-box-shadow-examples">CSS Scan</a></li>
        </ul>
        <h3>2D Pixel Sprites & Other Media</h3>
        <ul>
            <li><a href="https://games-container.itch.io/livingroom-assets">Homepage</a> and <a href="https://games-container.itch.io/house-assets?download">kitchen</a> furniture by Games Container</li>
            <li>Food by <a href="https://ghostpixxells.itch.io/pixelfood"> ghostpixxells</a></li>
            <li>Drinks by <a href="https://helm3t.itch.io/cocktail-pixel-icon-pack"> Helm3t</a></li>
            <li>Digital devices and vinyl record by <a href="https://opengameart.org/content/retro-items">knekko</a></li>
            <li>Personal avatar by me via <a href="https://www.avatarsinpixels.com/">Avatars in Pixels</a></li>
            <li>TV frame by me</li>
            <li>4K static gif for background via <a href="https://cliply.co/clip/static-noise/">Cliply.co</a> </li>
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
    </body>
  )
}
