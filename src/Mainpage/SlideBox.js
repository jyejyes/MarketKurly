import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideBox() {
  const TOTAL_SLIDES = 8;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  console.log(`currentSlide: ${currentSlide}`);

  // const auto = setInterval(() => {
  //   setCurrentSlide(currentSlide + 1);
  // }, 5000);

  const NextSlide = () => {
    if (currentSlide > TOTAL_SLIDES - 1) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  const PrevSlide = () => {
    if (currentSlide <= 0) setCurrentSlide(TOTAL_SLIDES);
    else setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = `transform 0.2s ease`;
    slideRef.current.style.transform = `translateX(${-currentSlide * 1900}px)`;
  }, [currentSlide]);

  return (
    <SlideContainer>
      <SlideList ref={slideRef}>
        <SlideItem src="./image/slide1"></SlideItem>
        <SlideItem src="./image/slide2"></SlideItem>
        <SlideItem src="./image/slide3"></SlideItem>
        <SlideItem src="./image/slide4"></SlideItem>
        <SlideItem src="./image/slide5"></SlideItem>
        <SlideItem src="./image/slide6"></SlideItem>
        <SlideItem src="./image/slide7"></SlideItem>
        <SlideItem src="./image/slide8"></SlideItem>
        <SlideItem src="./image/slide9"></SlideItem>
      </SlideList>
      <PrevBtn onClick={PrevSlide}>
        <img src="./image/prevBtn.svg" />
      </PrevBtn>
      <NextBtn onClick={NextSlide}>
        <img src="./image/nextBtn.svg" />
      </NextBtn>
    </SlideContainer>
  );
}

const SlideContainer = styled.section`
  overflow: hidden;
  width: 100%;
  margin-bottom: 30px;
`;

const SlideList = styled.div`
  display: flex;
  margin-left: -230px;
`;

const SlideItem = styled.img``;

const PrevBtn = styled.button`
  position: absolute;
  top: 160px;
  left: 100px;
  cursor: pointer;
`;

const NextBtn = styled.button`
  position: absolute;
  top: 160px;
  right: 100px;
  cursor: pointer;
`;
