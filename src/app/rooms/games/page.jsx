"use client"
import Image from 'next/image';
import WindowsBtn from './WindowsBtn';
import React, { useEffect, useState } from 'react';
import gamesData from "/public/JSON/games.json";
import { useRouter } from 'next/navigation';

export default function Games() {
  const [gameIcons, setGameIcons] = useState([]);
  const [show, setShow] = useState(false);
  const [currGame, setCurrGame] = useState("");
  const router = useRouter();

  useEffect(() => {
    const arr = Object.values(gamesData).map(data => (
      <Image 
        key={data.title} src={data.image} 
        alt={`Icon of game: ${data.title}`} width={256} height={256}
        onClick={_=>{setShow(true); setCurrGame(data.title); router.push(`/rooms/games?game=${data.id}`)}}
      />
    ));
    setGameIcons(arr); 
  }, [])

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
        {show && 
          <div className='gamePopUp'>
          <button onClick={_=>{setShow(false)}}>X</button>
          <p>{`HELLO i am the game: ${currGame}`}</p>
          </div>
        }
        <div className='gamesGrid'>
          {gameIcons}
        </div>
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