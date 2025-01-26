"use client"
import ImageMapper from "react-img-mapper";
import coords from "/public/JSON/coords.js";
import { useRouter } from 'next/navigation'

function Home () {
  const router = useRouter();
  // const [isHovered, setIsHovered] = useState(false);
  // const { x, y } = useMousePosition();
  // const size = isHovered ? 800 : 40;

  return (
    <div className="home">
      {/* <motion.div 
        className={"mask"}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      /> */}
        <ImageMapper
          map={{
              name:"my-map", 
              areas: coords.homeCoords,
              className: "mapster"
              }}
          src={'background/homepage.png'}
          active={true}
          responsive={true}
          parentWidth={900}
          onClick={(e) => {
            router.push(e.title);
          }}
          // onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}
            />
    </div>
  );
}

export default (Home);