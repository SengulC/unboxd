"use client"
import ImageMapper from "react-img-mapper";
import coords from "/public/JSON/coords.js";
import { useRouter } from 'next/navigation'

export default function Home () {
  const router = useRouter();
  return (
    <div className="home">
        <ImageMapper
          name={"home-map"}
          areas={ coords.homeCoords}
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

