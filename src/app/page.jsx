"use client"
import ImageMapper from "react-img-mapper";
import areasFile from "/public/JSON/imageMapCoords.json"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const areas = areasFile;

  return (
    <body className="home">
      <ImageMapper className="imageMap"
            map={{
                name:"my-map", 
                areas: areas
                }}
            src={'background/homepage.png'}
            active={true}
            responsive={true}
            parentWidth={900}
            width={900}
            onClick={(e) => {
              router.push(e.title);
            }}
          />
      {/* <div className="fuzzy-overlay"></div> */}
    </body>
  );
}