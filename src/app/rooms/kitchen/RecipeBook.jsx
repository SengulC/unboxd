"use client"
import HTMLFlipBook from "react-pageflip";
import React from "react";
import ImageMapper from "react-img-mapper";
import coords from "/public/JSON/coords.js";
import { useSearchParams } from 'next/navigation';
import { useRef } from "react";
import { useLayoutEffect } from "react";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className={`page page-cover ${props.side}`} ref={ref} data-density="soft">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
return (
  <div className={`page ${props.side}`} data-density="hard" ref={ref}>
    <div className="page-content">
      <h2 className="page-header">Page header - {props.number}</h2>
      <div className="page-image"></div>
      <div className="page-text">{props.children}</div>
      <div className="page-footer">{props.number + 1}</div>
    </div>
  </div>
);
});

export default function RecipeBook() {
  const searchParams = useSearchParams();
  const book = useRef();

  useLayoutEffect(() => {
      const turnTo = searchParams.get('pageTo');
      if (turnTo) {
        console.log(book);
        // WAIT UNTIL BOOK RENDERS THEN TRIGGER THIS?
        // book.current.pageFlip().flip(turnTo);
      }
    }, [searchParams]);
  

  return (
    <div className="bookContainer">
      <HTMLFlipBook
      className="book"
      ref={book}
      width={350} height={450}
      maxWidth={350} maxHeight={450}
      size="stretch"
      maxShadowOpacity={0}
      >
        <PageCover side={"L"}> Recipes </PageCover>
        <Page side={"R"} number={1}>Lorem ipsum...</Page>
        <Page side={"L"} number={2}>Lorem ipsum...</Page>
        <Page side={"R"} number={3}>PAGE 2 ipsum...</Page>
        <Page side={"L"} number={4}>Lorem ipsum...</Page>
        <PageCover side={"R"}> Fin. </PageCover>
      </HTMLFlipBook>
    </div>
  );
}
