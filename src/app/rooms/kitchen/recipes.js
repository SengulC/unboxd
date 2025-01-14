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
      {props.src!=="" && <img className="pageImg" src={props.src}></img>}
      <div className="page-text">{props.children}</div>
      <div className="page-footer">{props.number + 1}</div>
    </div>
  </div>
);
});

const pages =
    <>
    <Page src={"/kitchen/cake.jpg"} side={"R"} number={1} header={"Fl-Earl Gray Cake"}>
    Earl gray and marzipan-chunks sponge cake (1:1:1 b:s:f ratio, 3 eggs) soaked with çiçek suyu and rose syrup. <br />
    Rose cream cheese frosting. <br />
    Rose marmalade to decorate. <br />
    Heavily inspired by <a target="_blank" href="https://theclovecoterie.substack.com/p/nosferatu-cake">Nosferatu cake.</a>
    </Page>
    
    <Page src={"/kitchen/wcocookie.jpg"} side={"L"} number={2} header={"White C(h)oconut Cookies"}>
    Butter + Coconut oil-based cookies.
    Recipe <a target="_blank" href="https://www.crunchycreamysweet.com/white-chocolate-coconut-cookies-recipe/">here.</a>
    </Page>
    
    <Page src={""} side={"R"} number={3} header={"Triple Velvet Cupcakes"}>
    Red velvet cupcakes with cherries, chocolate chunks and beetroot. <br />
    Follow classic red velvet with beetroot (gives both color and gooeyness) recipe. <br />
    Add milk chocolate chunks and frozen cherries as desired to batter. Bake. <br />
    Decorate with cream cheese frosting spiked with bitter almond syrup
    (gives that Dr Pepper-esque fake cherry taste!) and frozen cherries.
    Always make sure cream cheese and butter is room temperature before making the frosting.
    </Page>
    
    <PageCover side={"L"}> Savory Sauces & Sides </PageCover>
    
    <Page src={""} side={"R"} number={4} header={"Steak Butter & Cheesy Chili Corn"}>
    <h3 className="recipeBookSubheading">Steak butter</h3>
    Combine: warm butter, salt, garlic, fresh rosemary, and chili flakes. <br />
    <h3 className="recipeBookSubheading">Cheesy chili corn</h3>
    Combine: butter, chili powder, canned corn, grated cheese,
    cream cheese/labne, garlic-onion-taco powder seasonings - all on a hot skillet.
    </Page>
    
    <Page src={""} side={"L"} number={5} header={"Burger Sauce"}>
    1:1:1:0.5 ketchup, mayo, pickle juice, sriracha. <br />
    Add diced pickles and dried dill.
    </Page></>


export default pages;