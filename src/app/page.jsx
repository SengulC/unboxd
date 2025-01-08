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
            src={'background/home.jpg'}
            active={true}
            onClick={(e) => {
              router.push('/rooms/cinema');
            }}
          />
      <div className="fuzzy-overlay"></div>
    </body>
  );
}

    // <div>
    // <map name="foodmap">
    //   <area alt="drink" title="drink" href="https://stormboard.vercel.app/" target="_blank" coords="462,292,486,335" shape="rect"/>
    //   <area alt="cookies" title="cookies" href="https://stormboard.vercel.app/" target="_blank" coords="572,323,19" shape="circle"/>
    //   <area alt="curry" title="curry" href="https://stormboard.vercel.app/" target="_blank" coords="882,267,22" shape="circle"/>
    // </map>
    //   <img useMap="#foodmap" className="home" src="home.jpg"></img>
    // </div>