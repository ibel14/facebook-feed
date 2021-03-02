import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./carousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CarouselStories = () => {
  return (
    <>
      <div className="Carousel">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CarouselStories />, rootElement);