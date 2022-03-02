import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Cart from "./Cart";
export default function BottomBuy(props) {
  const texts = {
    bottom: "상품 선택 ⌃",
    top: "상품 선택 ⌄",
  };
  const boxRef = useRef();
  const [pop, setPop] = useState(false);
  const [text, setText] = useState(texts.bottom);
  const upBox = () => {
    setPop(!pop);
    if (!pop) {
      boxRef.current.style.bottom = "0px";
      setText(texts.top);
    }
    if (pop) {
      boxRef.current.style.bottom = "-260px";
      setText(texts.bottom);
    }
  };

  //스크롤
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (window.scrollY > 1400) {
      boxRef.current.style.display = "";
    } else {
      boxRef.current.style.display = "none";
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
  return (
    <>
      <Wrap ref={boxRef}>
        <BottomBuyGrip onClick={upBox}>{text}</BottomBuyGrip>
        <Container>
          <Cart price={props.price} position="bottom" title={props.title} />
        </Container>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 100%;
  position: fixed;
  height: 280px;
  bottom: -260px;
  background-color: white;
  border-top: 2px solid var(--main-purple);
  display: flex;
  justify-content: center;
  z-index: 20;
  min-width: 1050px;
`;

const BottomBuyGrip = styled.p`
  position: absolute;
  background-color: var(--main-purple);
  color: white;
  padding: 15px 45px;
  top: -18%;
  right: 17%;
  font-size: var(--small-font);
`;

const Container = styled.div`
  width: 950px;
`;
