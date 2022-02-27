import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "../App.css";
import Delivery from "./Delivery";
import AllMenu from "./AllMenu";
import MenuDetail from "./MenuDetail";

export default function Categories() {
  //fixed 로 바꿔주려고 만드는 함수
  const [scrollY, setScrollY] = useState(window.scrollY);
  const cateRef = useRef();
  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (scrollY > 70) {
      cateRef.current.style.position = "fixed";
    } else {
      cateRef.current.style.position = "relative";
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

  const [heartImg, setHeartImg] = useState(false);
  const [cartImg, setCartImg] = useState(false);
  const [locationImg, setLocationImg] = useState(false);
  const [locaPop, setLocaPop] = useState(false);
  const [allPop, setAllPop] = useState(false);

  const onAllMouse = () => setAllPop(true);
  const outAllMouse = () => setAllPop(false);
  const onHeartMouse = () => setHeartImg(true);
  const outHeartMouse = () => setHeartImg(false);
  const onCartMouse = () => setCartImg(true);
  const outCartMouse = () => setCartImg(false);
  const onLocationMouse = () => {
    setLocationImg(true);
    setLocaPop(true);
  };

  const outLocationMouse = () => {
    setLocationImg(false);
    setLocaPop(false);
  };

  return (
    <Wrap>
      <CateSection ref={cateRef}>
        <AllList onMouseOver={onAllMouse} onMouseOut={outAllMouse}>
          <AllImg className="icon_all" src="./image/icon_all_cate.png" />
          <List>전체 카테고리</List>
          <AllMenu state={allPop}></AllMenu>
        </AllList>
        <List>신상품</List>
        <List>베스트</List>
        <List>알뜰쇼핑</List>
        <List>특가/혜택</List>

        <List>
          <div className="search">
            <SearchSection type="text" placeholder="검색어를 입력해주세요" />
            <SearchIcon src="./image/ico_search.png" />
          </div>
        </List>

        <CateRight>
          <List onMouseOver={onLocationMouse} onMouseOut={outLocationMouse}>
            <RightImage
              src={
                locationImg
                  ? "./image/btn-location-on.svg"
                  : "./image/btn-location-off.svg"
              }
            />
            <Delivery state={locaPop}></Delivery>
          </List>
          <List>
            <RightImage
              onMouseOver={onHeartMouse}
              onMouseLeave={outHeartMouse}
              src={
                heartImg
                  ? "./image/btn-heart-on.svg"
                  : "./image/btn-heart-off.svg"
              }
            />
          </List>
          <List>
            <RightImage
              onMouseOver={onCartMouse}
              onMouseLeave={outCartMouse}
              src={
                cartImg ? "./image/btn-cart-on.svg" : "./image/btn-cart-off.svg"
              }
            />
          </List>
        </CateRight>
      </CateSection>
    </Wrap>
  );
}

// 카테고리를 최상위에서 이 태그로 감싸줌
const Wrap = styled.div`
  width: 100%;
  height: 66px;
  background-color: white;
`;

const CateSection = styled.ul`
  display: flex;
  width: 100%;
  min-width: 1050px;
  justify-content: center;
  align-items: center;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 5;
  box-shadow: 0px 3px 3px -2px rgb(220, 220, 220);
  & > li:nth-child(-n + 5) {
    padding: 15px 34px;
  }
  & > li:nth-child(1) {
    padding-left: 0px;
  }
`;

const AllList = styled.div`
  display: flex;
  align-item: center;
  white-space: nowrap;
  font-size: var(--medium-font);
  position: relative;
  padding: 15px 34px 15px 0px;
  &:hover > div {
    transform: scale(1);
  }
`;

const AllImg = styled.img`
  width: 16px;
  height: 15px;
  padding: 10px 10px 10px 0px;
`;

const List = styled.li`
  padding: 5px 0px;
  position: relative;
  white-space: nowrap;
  font-size: var(--medium-font);
  &:nth-child(-n + 5):hover {
    color: var(--main-purple);
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const CateRight = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 150px;
  cursor: pointer;
`;

const RightImage = styled.img`
  padding: 5px;
`;

const SearchSection = styled.input`
  background-color: rgb(248, 248, 248);
  border: 0.3px solid rgb(245, 245, 245);
  border-radius: 15px;
  width: 150px;
  height: 35px;
  padding-left: 10px;
  padding-right: 80px;
  margin-bottom: 5px;
  font-size: var(--xsmall-font);
  &:focus {
    background-color: rgb(253, 253, 253);
    outline: none;
  }
`;

const SearchIcon = styled.img`
  position: relative;
  top: 10px;
  right: 40px;
  width: 30px;
`;
