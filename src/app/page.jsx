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
            src={'background/home2.png'}
            active={true}
            onClick={(e) => {
              router.push('/rooms/cinema');
            }}
          />
      <div className="fuzzy-overlay"></div>
    </body>
  );
}