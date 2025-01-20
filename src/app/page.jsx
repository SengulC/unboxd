"use client"
import ImageMapper from "react-img-mapper";
import coords from "/public/JSON/coords.js";
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion';
import useMousePosition from './useMousePosition';
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 800 : 40;

  return (
    <body className="home">
      <motion.div 
        className={"mask"}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      />
      {/* <div className="tvbgContainer"> */}
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
              width={900}
              onClick={(e) => {
                router.push(e.title);
              }}
              onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}
            />
        {/* </div> */}
    </body>
  );
}