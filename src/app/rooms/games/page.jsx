"use client"
import React from 'react'
import Image from 'next/image';

export default function Games() {
  return (
    <div className="gamesRoom">
      <Image
        priority
        src={'/background/gamepage.png'}
        className='gamesRoomImg'
        width={900}
        height={821}
        alt={"Image of a TV with the nostalgic Windows XP background."}
      />
      <div className="gamesContainer">
        <button onClick={(e) => alert("Hi")}>btn</button>
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugiat dolorem illum ducimus, voluptate error corporis unde velit reiciendis quidem, dolore nisi deleniti quo, rerum soluta rem omnis est. Cupiditate!</p>
      </div>
    </div>
  );
}