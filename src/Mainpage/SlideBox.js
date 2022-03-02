import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideBox() {
  const TOTAL_SLIDES = 8;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const [img, setImg] = useState([]);

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

  useEffect(() => {
    const data = setTimeout(() => {
      setImg([
        "./image/slide1",
        "./image/slide2",
        "./image/slide3",
        "./image/slide4",
        "./image/slide5",
        "./image/slide6",
        "./image/slide7",
        "./image/slide8",
        "./image/slide9",
        "./image/slide10",
      ]);
    }, 2000);
    return () => {
      clearTimeout(data);
    };
  });

  return (
    <SlideContainer>
      <SlideList ref={slideRef}>
        {img.length > 0 ? (
          img.map((item, index) => (
            <SlideItem key={index} src={item}></SlideItem>
          ))
        ) : (
          <Wait></Wait>
        )}
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

const Wait = styled.p`
  width: 100%;
  margin-bottom: 30px;
  height: 370px;
  z-index: 5;
  background-color: gray;
  color: white;
  font-size: var(--xlarge-font);
`;
