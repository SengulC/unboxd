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
  //   setKitchenCoords([
  //   {
  //   "id": "homeButton",
  //   "title": "/",
  //   "shape": "rect",
  //   "fillColor": "rgba(0,0,0,0)",
  //   "strokeColor": "rgba(0,0,0,0)",
  //   "lineWidth": 2.5,
  //   "coords": [530,738,586,791]
  //   },
  //   {
  //   "id": "aboutButton",
  //   "title": "/about/me/",
  //   "shape": "rect",
  //   "fillColor": "rgba(0,0,0,0)",
  //   "strokeColor": "rgba(0,0,0,0)",
  //   "lineWidth": 2.5,
  //   "coords": [433,737,485,790]
  //   },
  //   {
  //   "id": "creditsButton",
  //   "title": "/about/credits/",
  //   "shape": "rect",
  //   "fillColor": "rgba(0,0,0,0)",
  //   "strokeColor": "rgba(0,0,0,0)",
  //   "lineWidth": 2.5,
  //   "coords": [633,736,686,793]
  //   },
  //   {
  //   "id": "book",
  //   "title": "/rooms/kitchen/recipebook/",
  //   "shape": "rect",
  //   "fillColor": "rgba(0,0,0,0)",
  //   "strokeColor": "rgba(0,0,0,0)",
  //   "lineWidth": 2.5,
  //   "coords": [700,557,831,676]
  //   },
  //   {
  //   "id": "cake",
  //   "title": "/rooms/kitchen/recipebook?pageTo=2",
  //   "shape": "circle",
  //   "fillColor": "rgba(0,0,0,0)",
  //   "strokeColor": "rgba(0,0,0,0)",
  //   "lineWidth": 2.5,
  //   "coords": [421,268,20]
  //   }
  // ]);
  // }, [kitchenCoords])

  useEffect(() => {
    setKitchenCoords(coords.kitchenCoords);
  }, [])
  
  
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
                // alert(e.title)
                setShowBook(false);
                // router.push(e.title)
              }}
            />
    </div>
    {showBook && 
      <RecipeBook/>
    }
  </body>
  );
}
