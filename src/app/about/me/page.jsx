import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <div className='about'>
        <Link className="link" href="/"> 📺 </Link>
        <h1>About Me</h1>
        <div className='aboutme'>
            <Image 
              width={250} height={250} alt={"Pixel art of website author."} 
              className="avatar" src="/avatar.png"
            />
            <div className='aboutmeTxt'>
                <h2>A little about me...</h2>
                <p>
                  Hi! I am the 2D pixel sprite to the side, and I made this website!
                  <span className='emphasis'> I loveeeee movies, TV, music, cooking, baking; </span>
                   and I love even more to keep track of what I consume!

                  I am a recent computer science graduate deeply interested in web design and dev,
                  and so I made this website!
                </p>
                <p>
                  I have been keeping a note my favorite shows 
                  and their best episodes <span className='emphasis'> ~in my humble opinion~ </span>
                  on my Notes app for a few years now. And I recently started cooking/baking and experimenting
                  in the kitchen much more also <span className='comment'>(if you recall: unemployed), </span> 
                  also stored safely and shyly on my Notes app.
                  But realizing how much joy Letterboxd's method of cleanly storing one's fav movies made me, 
                  <span className='emphasis'> I decided to make a website for all of my fav media! </span>
                    In doing so, I've been able to excercise 
                  some of my design skills too, even picking up <span className='emphasis'>pixel art </span> for the first time!
                </p>
                <p>
                  <span className='emphasis'>So welcome inside my messy brain! </span> 
                  I am debating adding a comments section on here but in the meantime,
                  you can <span className='emphasis'>contact me</span> by email <a href="mailto:">(coming soon)</a> 
                   <span className='comment'> to discuss anything web or media related! </span>
                  And below I will list <span className='comment'>my ~ever-changing~ </span>favorites in movies, 
                  shows and songs. <span className='emphasis'>Thanks for checking out Unboxd!</span>
                </p>

                <hr></hr>

                <h2>My favorites <span className='comment'>(subject to change!!)</span></h2>
                <h3>My favorite movies</h3>
                <ul id="movies" className='rankingList'>
                  <li className='ranking'>Bottoms</li>
                  <li className='ranking'>I Saw the TV Glow</li>
                  <li className='ranking'>Ratatouille</li>
                  <li className='ranking'>Superbad</li>
                </ul>

                <h3>My favorite shows</h3>
                <ul id="shows" className='rankingList'>
                  <li className='ranking'>The Bear</li>
                  <li className='ranking'>Arcane</li>
                  <li className='ranking'>The Walking Dead</li>
                </ul>

                <h3>My favorite songs</h3>
                <ul id="music" className='rankingList'>
                  <li className='ranking'>Strangers by Ethel Cain</li>
                  <li className='ranking'>Boys of Faith by Zach Bryan ft Bon Iver</li>
                  <li className='ranking'>Juno by Sabrina Carpenter</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
