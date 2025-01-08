import React from 'react'
import Link from 'next/link'

export default function AboutMe() {
  return (
    <body className='cinema'>
        <h1>About Me</h1>
        <div className="fuzzy-overlay"></div>
        <Link className="link" href="/"> &lt; Home </Link>
        <Link className="link" href="/about/credits"> &gt; Credits </Link>
        <div className='aboutme'>
            <img src="/avatar.png"></img>
            <div className='aboutmeTxt'>
                <h2>A little about me...</h2>
                <p>
                    Hi! I am a bad bitch and I made this website!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat velit, est, nobis porro dignissimos deserunt eum cum, excepturi corrupti molestiae optio earum. Delectus blanditiis consequatur libero magnam odit exercitationem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel harum quis deleniti cumque hic modi consectetur magnam molestias nulla, saepe minima esse eveniet voluptas consequuntur officia quidem doloribus accusamus quasi?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam placeat exercitationem quas ipsa enim nihil magni illum voluptates sequi! Tenetur sint nihil delectus corrupti veniam necessitatibus nobis, ab magni assumenda.
                </p>
                <h2>How to interact with this website</h2>
            </div>
        </div>
    </body>
  )
}
