"use client"
import { React, useState } from "react";
import ImageMapper from "react-img-mapper";
import { useRouter } from 'next/navigation'
import coords from "/public/JSON/coords.js";
import RecipeBook from "./RecipeBook";

export default function Kitchen() {
  const router = useRouter();
  const [showBook, setShowBook] = useState(true);

  return (
  <body className="kitchen">
    <div className="tvbgContainer">
      <ImageMapper className="tvbg"
              map={{
                  name:"my-map", 
                  areas: coords.kitchenCoords
                  }}
              src={'/background/kitchenpage.png'}
              active={true}
              responsive={true}
              parentWidth={900}
              width={900}
              onClick={(e) => {
                // alert(e.title)
                setShowBook(true);
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
