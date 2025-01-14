"use client"
import { React, useEffect, useState } from "react";
import ImageMapper from "react-img-mapper";
import { useRouter } from 'next/navigation'
import coords from "/public/JSON/coords.js";
import RecipeBook from "./RecipeBook";

export default function Kitchen() {
  const router = useRouter();
  const [showBook, setShowBook] = useState(true);
  const [kitchenCoords, setKitchenCoords] = useState(coords.kitchenCoords);

  // useEffect(() => {
  //   setKitchenCoords(coords.kitchenCoords);
  // }, [])
  
  return (
  <body className="kitchen">
    <div className="tvbgContainer">
      <ImageMapper className="tvbg"
              map={{
                  name:"my-map", 
                  areas: kitchenCoords
                  }}
              src={'/background/kitchenpage.png'}
              active={true}
              responsive={true}
              parentWidth={900}
              length={900}
              width={900}
              onClick={(e) => {
                // setShowBook(false);

                // if it's one of the buttons, redirect there
                (e.title == "/about/me/" || e.title == "/about/credits/" || e.title == "/") ? router.push(e.title) 
                : // else alert
                alert(e.title);
              }}
            />
    </div>
    {showBook && 
      <RecipeBook setShowBook={setShowBook}/>
    }
  </body>
  );
}
