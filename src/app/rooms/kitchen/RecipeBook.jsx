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
      <h2 className="page-header">{props.header}</h2>
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
        <PageCover side={"L"}> Desserts </PageCover>
        <Page side={"R"} number={1} header={"Fl-Earl Gray Cake"}>
          Earl gray and marzipan-chunks sponge cake (1:1:1 b:s:f ratio, 3 eggs) soaked with çiçek suyu and rose syrup. <br/>
          Rose cream cheese frosting. <br/>
          Rose marmalade to decorate. <br/>
          Heavily inspired by <a href="https://theclovecoterie.substack.com/p/nosferatu-cake">Nosferatu cake.</a>
        </Page>
        <Page side={"L"} number={2} header={"White C(h)oconut Cookies"}>
          Butter + Coconut oil-based cookies.
          Recipe <a href="https://www.crunchycreamysweet.com/white-chocolate-coconut-cookies-recipe/">here.</a>
        </Page>
        <Page side={"R"} number={3} header={"Triple Velvet Cupcakes"}>
          Red velvet cupcakes with cherries, chocolate chunks and beetroot. <br/>
          Follow classic red velvet with beetroot (gives both color and gooeyness) recipe. <br/>
          Add milk chocolate chunks and frozen cherries as desired to batter. Bake. <br/>
          Decorate with cream cheese frosting spiked with bitter almond syrup 
          (gives that Dr Pepper-esque fake cherry taste!) and frozen cherries.
          Always make sure cream cheese and butter is room temperature before making the frosting.
        </Page>
        <PageCover side={"L"}> Savory Sauces </PageCover>
        <Page side={"R"} number={4} header={"Steak Garlic Butter"}>
          Lorem ipsum...
        </Page>
        <Page side={"L"} number={5} header={"Burger Sauce"}>
          Lorem ipsum...
        </Page>
        <PageCover side={"R"}> Fin. </PageCover>
      </HTMLFlipBook>
    </div>
  );
}
