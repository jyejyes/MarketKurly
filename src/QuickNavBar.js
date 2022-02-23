import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "./App.css";

export default function QuickNavBar() {
  const [position, setPosition] = useState(0);
  const quick = useRef();

  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    if (position > 480) {
      quick.current.style.transform = `translateY(${position - 400}px)`;
      quick.current.style.transition = `transform 0.4s ease-out`;
    } else {
      quick.current.style.transform = "translateY(0px)";
      quick.current.style.transition = `transform 0.4s ease-out`;
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [position]);

  return (
    <QuickNav ref={quick} position={window.scrollY}>
      <QuickPic src="./image/quick_nav.png"></QuickPic>
      <QuickText>
        <QuickTextList>등급별 혜택</QuickTextList>
        <QuickTextList>레시티</QuickTextList>
        <QuickTextList>베스트 후기</QuickTextList>
      </QuickText>
    </QuickNav>
  );
}

const QuickNav = styled.div`
  width: 80px;
  position: absolute;
  top: 510px;
  right: 30px;a
  transform: ${(props) =>
    props > 480 ? `translateY(${props - 480}px)` : "translateY(0px)"}
`;

const QuickPic = styled.img`
  width: 100%;
`;

const QuickText = styled.ul`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: var(--xsmall-font);
  border: 0.5px solid rgb(180, 180, 180);
`;

const QuickTextList = styled.li`
  display: flex;
  justify-content: center;
  padding: 5px 0px;
  width: 100%;
  border-bottom: 0.5px solid rgb(180, 180, 180);
  &:last-child {
    boeder: none;
  }
`;
