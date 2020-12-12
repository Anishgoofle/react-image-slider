import React from "react";
import "./index.css";
import Carousel from "./components/Carousel/Carousel";
import { SliderData } from "./components/SliderData";

export default function App() {

  return (
    <>
      <Carousel slides={SliderData} />
    </>
  )
}
