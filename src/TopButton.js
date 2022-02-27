import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export default function TopButton() {
  const [scrollY, setScrollY] = useState(0);
  const [image, setImg] = useState(false);

  const btnRef = useRef();
  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (window.scrollY > 1000) {
      btnRef.current.style.transform = "translateY(0px)";
      btnRef.current.style.transition = "transform 0.3s ease";
    } else {
      btnRef.current.style.transform = "translateY(100px)";
      btnRef.current.style.transition = "transform 0.3s ease";
    }
  };
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleScroll);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setScrollY(0);
  };

  const onMouseBtn = () => {
    setImg(true);
    console.log("마우스 올라옴");
  };
  const outMouseBtn = () => {
    setImg(false);
    console.log("마우스 내려감");
  };

  return (
    <TopBtn
      onClick={goTop}
      onMouseOver={onMouseBtn}
      onMouseOut={outMouseBtn}
      ref={btnRef}
    >
      <img
        src={
          image
            ? "./image/btn_pagetop_hover_x2.png"
            : "./image/btn_pagetop_x2_v2.png"
        }
      ></img>
    </TopBtn>
  );
}

const TopBtn = styled.button`
  position: fixed;
  bottom: 25px;
  right: 30px;
  z-index: 10;
  transform: translateY(100px);
  & > img {
    width: 60px;
  }
`;
