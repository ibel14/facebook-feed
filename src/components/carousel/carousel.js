import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./carousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 4, itemsToScroll: 1 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 5 }
];

function CarouselStories() {
  return (
    <div className="Carousel">
      <Carousel breakPoints={breakPoints}>
        <Item>Создать историю</Item>
        <Item>Stories</Item>
        <Item>Stories</Item>
        <Item>Stories</Item>
        <Item>Stories</Item>
      </Carousel>
    </div>
  );
}

export default CarouselStories;