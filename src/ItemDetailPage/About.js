import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import dummy from "../DB/itemData.json";
import AboutItem from "./AboutItem";

export default function About() {
  const itemList = dummy.sectionItem.filter((item) => item.id === 1);
  //캐러셀 1010px씩임.. 1020씩 구현해야히나
  const [count, setCount] = useState(0);
  const itemRef = useRef();

  const nextBtn = () => {
    setCount(count + 1);
  };

  const prevBtn = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    itemRef.current.style.transform = `translateX(-${count * 950}px)`;
    itemRef.current.style.transition = "transform 0.3s ease";
  }, [count]);

  return (
    <Wrap>
      <Container>
        <Bar>.</Bar>
        <Title>RELATED PRODUCT</Title>
      </Container>

      <CarouselBox>
        <PrevBtn onClick={prevBtn} />
        <ItemBox ref={itemRef}>
          {itemList.map((item, index) => (
            <AboutItem
              key={index}
              img={item.img}
              sub={item.itemTitle}
              price={item.originalPrice}
            />
          ))}
        </ItemBox>
        <NextBtn onClick={nextBtn} />
      </CarouselBox>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Container = styled.div`
  width: 1000px;
`;

const Bar = styled.div`
  background-color: black;
  width: 20px;
  height: 6px;
  margin-bottom: 2px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: var(--xsmall-font);
`;

const CarouselBox = styled.div`
  margin: 10px 0px;
  width: 1010px;
  position: relative;
  overflow: hidden;
`;

const ItemBox = styled.div`
  display: flex;
  width: 940px;
  margin: 0px 35px;
`;

const PrevBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0px;
  background-image: url(https://res.kurly.com/pc/etc/old/images/common/slide-sub-left-button-black.png);
  background-repeat: no-repeat;
  background-position: left;
  height: 100%;
  z-index: 3;
  width: 30px;
  cursor: pointer;
`;

const NextBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(https://res.kurly.com/pc/etc/old/images/common/slide-sub-right-button-black.png);
  background-repeat: no-repeat;
  background-position: right;
  height: 100%;
  z-index: 3;
  width: 30px;
  cursor: pointer;
`;
