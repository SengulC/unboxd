import React from 'react'
import Link from 'next/link'

export default function Credits() {
  return (
    <div className='about'>
        <Link className="link" href="/"> 📺 </Link>
        <h1>Credits</h1>
        <h2>React libraries & HTML/CSS tutorials</h2>
        <ul>
            <li>Responsive image map React library by <a href="https://github.com/img-mapper/react-img-mapper">NishargShah</a></li>
            <li>Page turning effect React library by <a href="https://github.com/Nodlik/react-pageflip">Nodlik</a></li>
            <li>Simple React & Framer Motion animations by <a href="https://blog.olivierlarose.com/tutorials/pixel-transition">Olivier Larose</a></li>
            <li>TV Static animation by <a href="https://github.com/TomIsLoading/tv-static">TomIsLoading</a></li>
            <li>CSS box shadows from <a href="https://getcssscan.com/css-box-shadow-examples">CSS Scan</a></li>
        </ul>
        <h2>2D pixel sprites & other media</h2>
        <ul>
            <li><a href="https://games-container.itch.io/livingroom-assets">Homepage</a> and <a href="https://games-container.itch.io/house-assets?download">kitchen</a> furniture by Games Container</li>
            <li>Food by <a href="https://ghostpixxells.itch.io/pixelfood"> ghostpixxells</a></li>
            <li>Drinks by <a href="https://helm3t.itch.io/cocktail-pixel-icon-pack"> Helm3t</a></li>
            <li>Digital devices and vinyl record by <a href="https://opengameart.org/content/retro-items">knekko</a></li>
            <li>Personal avatar by me via <a href="https://www.avatarsinpixels.com/">Avatars in Pixels</a></li>
            <li>TV frame by me</li>
            <li>4K static gif for background via <a href="https://cliply.co/clip/static-noise/">Cliply.co</a> </li>
            <li>Custom pixel cursors by <a href="http://www.rw-designer.com/cursor-set/pixel">ten via rw-designer</a></li>
            <li>Windows XP icon pack by <a href="https://www.deviantart.com/marchmountain/art/Windows-XP-High-Resolution-Icon-Pack-916042853">marchmountain</a></li>
            <li>Game icons from <a href="https://www.steamgriddb.com/">SteamGridDB</a></li>
        </ul>
        <h2>Fonts</h2>
        <ul>
            <li>Rubik Glitch</li>
            <li>Jacquard</li>
            <li>Sour Gummy</li>
            <li>Jersey</li>
            <li> on <a href="https://fonts.google.com/">Google Fonts</a></li>
        </ul>
        <h2>Movie descriptions and posters</h2>
        <ul>
            <li><a href="https://www.imdb.com/">IMDb</a></li>
            <li><a href="https://www.letterboxd.com/">Letterboxd</a></li>
        </ul>
    </div>
  )
}
