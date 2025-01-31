"use client"
import ImageMapper from "react-img-mapper";
import coords from "/public/JSON/coords.js";
import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react";

export default function Home () {
  const router = useRouter();
    const [homeCoords, setHomeCoords] = useState(coords.homeCoords);

    useEffect(() => {
      setHomeCoords(coords.homeCoords);
    }, []); 
      
    if (!homeCoords) {
      return (<div className="home"><h1 id='loading'>Loading...</h1></div>)
    }

  return (
    <div className="home">
        <ImageMapper
          name={"home-map"}
          areas={homeCoords}
          src={'background/homepage.png'}
          active={true}
          responsive={true}
          parentWidth={900}
          onClick={(e) => {
            router.push(e.title);
          }}
            />
    </div>
  );
}

