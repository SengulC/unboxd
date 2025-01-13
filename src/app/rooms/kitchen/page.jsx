"use client"
import HTMLFlipBook from "react-pageflip";
import React from "react";
import Link from "next/link";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="soft">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
return (
  <div className={`page + ${props.side}`} data-density="hard" ref={ref}>
    <div className="page-content">
      <h2 className="page-header">Page header - {props.number}</h2>
      <div className="page-image"></div>
      <div className="page-text">{props.children}</div>
      <div className="page-footer">{props.number + 1}</div>
    </div>
  </div>
);
});

export default function Kitchen() {
  return (
  <body className="kitchen">
    <Link className="link" href="/"> &lt; Home </Link>
    <div className="bookContainer">
      <HTMLFlipBook
        width={500} height={650}
        maxWidth={500} maxHeight={650}
        className="book"
        size="stretch"
        maxShadowOpacity={0}
        // showCover
      >
        {/* <PageCover>BOOK TITLE</PageCover> */}
        <Page side={"L"} number={1}>Lorem ipsum...</Page>
        <Page side={"R"} number={2}>Lorem ipsum...</Page>
        <Page side={"L"} number={3}>Lorem ipsum...</Page>
        <Page side={"R"} number={4}>Lorem ipsum...</Page>
        {/* <PageCover>THE END</PageCover> */}
      </HTMLFlipBook>
    </div>
  </body>
  );
}
