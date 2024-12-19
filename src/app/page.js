'use client'
import ImageMapper from 'react-img-mapper';
import areas from "/public/map.json";

export default function Home() {
  const MAP = {
    name: 'my-map',
    areas: areas,
  };

  return (
    // <div>
    //   <div>This is correct and should work because a div is really good for this task. </div>
    <ImageMapper 
      width={500} 
      height={500} 
      src={"/example.jpg"} 
      map={MAP}
      responsive
      fillColor={"rgba(71, 131, 230, 0.70)"}
      strokeColor={"rgba(71, 131, 230)"}
    />
    // </div>
);
}
