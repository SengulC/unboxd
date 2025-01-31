"use client"
import { React, useEffect, useState } from "react";
import ImageMapper from "react-img-mapper";
import { useRouter } from 'next/navigation'
import coords from "/public/JSON/coords.js";
import RecipeBook from "./RecipeBook";
import { motion, AnimatePresence } from "framer-motion"

export default function Kitchen() {
  const router = useRouter();
  const [showBook, setShowBook] = useState(false);
  const [kitchenCoords, setKitchenCoords] = useState(coords.kitchenCoords);

  useEffect(() => {
    setKitchenCoords(coords.kitchenCoords);
  }, []); 
    
  if (!kitchenCoords) {
    return (<div className="kitchen"><h1 id='loading'>Loading...</h1></div>)
  }
  
  return (
    <div className="kitchen">
      <div className="tvbgContainer">
        <ImageMapper className="tvbg"
          name={"kitchen-map"}
          areas={ kitchenCoords}
          src={'/background/kitchenpage.png'}
          active={true}
          responsive={true}
          parentWidth={900}
          length={900}
          width={900}
          onClick={(e) => {
            // if it's one of the buttons, redirect there
            (e.title == "/about/me/" || e.title == "/about/credits/" || e.title == "") ? router.push(e.title) 
            : // else show book
            setShowBook(!showBook);
          }}
          />
      </div>
      <AnimatePresence>
      {showBook && 
        <motion.div exit={{ opacity: 0 }}>
        <RecipeBook setShowBook={setShowBook}/>
        </motion.div>
      }
      </AnimatePresence>
    </div>
  );
}
