"use client"
import React from 'react'
import Image from 'next/image';
import WindowsBtn from './WindowsBtn';

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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
        <div className='windowsMenu'>
          <WindowsBtn redirect={"/"} img={"/games/home.png"} title={"Homepage"}/>
          <WindowsBtn redirect={"/about/howto"} img={"/games/info.png"} title={"System Utilities"}/>
          <WindowsBtn redirect={"/about/me"} img={"/games/text.png"} title={"AboutMe.txt"}/>
          <WindowsBtn redirect={"/"} img={"/games/controller.png"} title={"RDR2.exe"}/>
        </div>
      </div>
    </div>
  );
}