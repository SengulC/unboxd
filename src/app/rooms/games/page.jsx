"use client"
import Image from 'next/image';
import WindowsBtn from './WindowsBtn';
import React, { useEffect, useState } from 'react';
import gamesData from "/public/JSON/games.json";
import { useRouter } from 'next/navigation';

export default function Games() {
  const [gameIcons, setGameIcons] = useState([]);
  const [show, setShow] = useState(false);
  const [currGame, setCurrGame] = useState("Red Dead Redemption 2");
  const router = useRouter();

  useEffect(() => {
    const arr = Object.values(gamesData).map(data => (
      <div
        key={data.title}
        onClick={_=>{setShow(true); setCurrGame(data.title); router.push(`/rooms/games?game=${data.id}`)}}
      >
      <Image 
        key={data.title} src={data.image} 
        alt={`Icon of game: ${data.title}`} width={256} height={256}
      />
      <p>{data.title}</p>
      </div>
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
          <div className='gamePopUpWindow'>
              <div className='popupButtons'>
                <div id="closeBtn" onClick={_=>{setShow(false); router.push("/rooms/games")}}>_</div>
                <div id="closeBtn" onClick={_=>{setShow(false); router.push("/rooms/games")}}>X</div>
              </div>
              <div id="windowIcon">
                <img src={gamesData[currGame].image}/>
                <h2>{currGame}</h2>
              </div>
            <div className='gamePopUp'>
              <Image className='gamePoster' src={"/games/rdr2poster.jpg"} alt={`RDR2`} width={600} height={900}/>
              <p> {gamesData[currGame].synopsis}{gamesData[currGame].synopsis}{gamesData[currGame].synopsis}{gamesData[currGame].synopsis}</p>
              <Image className='gamePoster' src={"/games/rdr2poster2.png"} alt={`RDR2`} width={600} height={900}/>
            </div>
          </div>
        }
        <div className='gamesGrid'>
          {gameIcons}
        </div>
        <div className='windowsMenu'>
          <WindowsBtn redirect={"/"} img={"/games/home.png"} title={"Homepage"}/>
          <WindowsBtn redirect={"/about/howto"} img={"/games/info.png"} title={"System Utilities"}/>
          <WindowsBtn redirect={"/about/me"} img={"/games/text.png"} title={"AboutMe.txt"}/>
          <div className='windowsBtn'>
            <Image className={"XPicon"} src={"/games/controller.png"} alt={`Retro Windows XP icon for a controller`} width={500} height={500}></Image>
            <button onClick={()=>{setShow(true);}}>{`${gamesData[currGame].id}.exe`}</button>
          </div>
        </div>
      </div>
    </div>
  );
}