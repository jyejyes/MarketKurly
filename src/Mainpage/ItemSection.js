import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Item from "./Item";
import dummy from "../DB/itemData.json";
import styled from "styled-components";
import { useNavigate } from "react-router";

export default function MainPageItems(props) {
  const itemList = dummy.sectionItem.filter((item) => item.id === props.id);

  const [count, setCount] = useState(0);
  const [prevBtn, setPrevBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);
  const slideRef = useRef();
  const nextSlide = () => {
    setCount(count + 1);
    if (count >= 0) setPrevBtn(true); //이미 true 는 됨
    if (count == itemList.length / 4 - 2) setNextBtn(false); //2가 되면 이미 false 됐는데 다음거 눌러야 렌더링돼서 사라짐
  };

  const prevSlide = () => {
    setCount(count - 1);
    if (count == 1) setPrevBtn(false); //이미 1에서 false 됨 왼쪽버튼 눌러서 렌더링되면 사라짐
    if (count < itemList.length / 4) setNextBtn(true); //2(제일 끝)에서 이미 true인데 왼쪽버튼 렌더링 되면 생김
  };

  useEffect(() => {
    slideRef.current.style.transition = "transform 0.5s ease";
    slideRef.current.style.transform = `translateX(-${count * 1060}px)`;

    if (count == itemList.length / 4 - 1) setNextBtn(false);
    //랜더링 시작할때 상품이 4개보다 적으면 버튼 숨김
  }, [count]);

  // 2번째 캐러셀 슬라이드

  return (
    <>
      <RecommendSection>
        <RecommendText>{props.itemSectionTitle}</RecommendText>
        <RecommendItems ref={slideRef}>
          {itemList.map((item) => (
            <RecommendItem key={item.itemTitle}>
              <Item
                img={item.img}
                itemTitle={item.itemTitle}
                discount={item.discount}
                realPrice={item.realPrice}
                originalPrice={item.originalPrice}
              />
            </RecommendItem>
          ))}
        </RecommendItems>

        <PrevBtn state={prevBtn} onClick={prevSlide}>
          <img src="./image/carousel2_left.svg" />
        </PrevBtn>
        <NextBtn state={nextBtn} onClick={nextSlide}>
          <img src="./image/carousel2_right.svg" />
        </NextBtn>
      </RecommendSection>
    </>
  );
}

const RecommendSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1050px;
  overflow: hidden;
  margin-bottom: 50px;
`;

const RecommendText = styled.h2`
  font-size: var(--xlarge-font);
  margin-top: 35px;
  margin-bottom: 35px;
  display: flex;
  justify-content: center;
`;

const RecommendItems = styled.ul`
  display: flex;
`;

const RecommendItem = styled.li`
  margin-right: 10px;
`;

const PrevBtn = styled.button`
  position: absolute;
  top: 260px;
  cursor: pointer;
  display: ${({ state }) => (state ? "block" : "none")};
`;

const NextBtn = styled.button`
  position: absolute;
  top: 260px;
  cursor: pointer;
  right: 0;
  display: ${({ state }) => (state ? "block" : "none")};
`;
