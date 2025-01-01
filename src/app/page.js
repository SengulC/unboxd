"use client"
import ImageMapper from "react-img-mapper";
import areasFile from "./maps.json"

export default function Home() {
  const areas = areasFile;
  // const areas = [
  //   { id: "1", shape: "circle", coords: [150, 150, 50] },
  //   { id: "2", shape: "rect", coords: [300, 200, 400, 300] }
  // ];
  return (
    <div>
      <ImageMapper
            map={{
                name:"my-map", 
                areas: areas
                }}
            src={'home.jpg'}
            active={true}
            onClick={(e) => {
              console.log(`i am ${e.id} and ill lead u to ${e.title}`);
            }}
            // responsive
          />
    </div>
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