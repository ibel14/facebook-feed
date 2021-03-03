import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./carousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function CarouselStories() {
  return (
    <div className="Carousel">
      <Carousel breakPoints={breakPoints}>
        <Item>Создать историю</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
      </Carousel>
    </div>
  );
}

export default CarouselStories;