// recipebook relevant React components
"use client"
import HTMLFlipBook from "react-pageflip";
import React from "react";
import recipes from "/public/JSON/recipes.JSON";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PageCover = React.forwardRef((props, ref) => {
  const handleClick = (e) => {
    props.setShowBook(false);
  }

  return (
    <div className={`page page-cover ${props.side}`} ref={ref} data-density="hard">
      {props.side == "R" && <button onClick={handleClick} className="closeBookBtn">X</button>}
      <div className="page-content">
          <h1>{props.children}</h1>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  const handleClick = (e) => {
    props.setShowBook(false);
  }

  return (
    <div className={`page ${props.side}`} data-density="hard" ref={ref}>
      {props.side == "R" && <button onClick={handleClick} className="closeBookBtn">X</button>}
      <div className="page-content">
        <h2 className="page-header">{props.header}</h2>
        <div className="page-image"></div>
        {
          props.src!=="" && 
          <Image 
            className="pageImg" src={props.src}
            width={1000} height={1000} alt={`Photo of: ${props.header}.`}
          />
        }
        <div className="page-text">{props.children}</div>
        {/* <div className="page-footer">{props.number + 1}</div> */}
      </div>
    </div>
  );
});

export default function RecipeBook({setShowBook}) {
  const book = useRef();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const recipeElems = Object.entries(recipes).map((element, i) => (
      // checks if page should be cover 
      element[1].cover ? 
      <PageCover setShowBook={setShowBook} key={i} side={i%2==0 ? "L" : "R"}> {element[1].header} </PageCover>
      :
      // and/or if the page has a link to reference
      element[1].link !== "" ? 
      <Page setShowBook={setShowBook} key={i} src={element[1].src} side={i%2==0 ? "L" : "R"} header={element[1].header}> 
      {element[1].content} Inspired by this <a href={element[1].link}>recipe.</a> 
      </Page> 
      :
      <Page setShowBook={setShowBook} key={i} src={element[1].src} side={i%2==0 ? "L" : "R"} header={element[1].header}> 
      {element[1].content.split('\n').map((elem, indx)=><p className="bookPara" key={indx}>{elem}</p>)}
      </Page> 
    ));
    setPages(recipeElems);
  }, [])  

  return (
    <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.5 }}
    >
    <div className="bookContainer">
      <HTMLFlipBook
      className="book"
      ref={book}
      width={350} height={450}
      maxWidth={350} maxHeight={450}
      size="fixed"
      maxShadowOpacity={0}
      >
        {pages}
      </HTMLFlipBook>
    </div>
    </motion.div>
  );
}
