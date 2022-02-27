import React, { useRef, useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import BottomBuy from "./BottomBuy";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";

export default function ItemDetailMain() {
  const cate = useRef(null);
  const [btnChange, setBtnChange] = useState(1);
  const [scrollY, setScrollY] = useState(window.scrollY); //스크롤값 저장 state

  const handleScroll = () => {
    setScrollY(window.scrollY);
    console.log(scrollY);
    if (scrollY > 1400) {
      cate.current.style.position = "fixed";
    } else {
      cate.current.style.position = "";
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

  const tabRef = useRef([]);

  const description = () => {
    tabRef.current[0].scrollIntoView({ behavior: "smooth" });
    setBtnChange(1);
  };
  const detail = () => {
    tabRef.current[1].scrollIntoView({ behavior: "smooth" });
    setBtnChange(2);
  };
  const review = () => {
    tabRef.current[2].scrollIntoView({ behavior: "smooth" });
    setBtnChange(3);
  };
  const qna = () => {
    tabRef.current[3].scrollIntoView({ behavior: "smooth" });
    setBtnChange(4);
  };

  const btnStyle = {
    color: "purple",
    backgroundColor: "white",
    borderBottom: "none",
  };

  const nonBtnStyle = {
    color: "rgb(100, 100, 100)",
  };

  return (
    <>
      {/* 두번째 메뉴 */}
      <WrapCate>
        <Container ref={cate}>
          <List
            style={btnChange == 1 ? btnStyle : nonBtnStyle}
            onClick={description}
          >
            상품설명
          </List>
          <List
            style={btnChange == 2 ? btnStyle : nonBtnStyle}
            onClick={detail}
          >
            상세정보
          </List>
          <List
            style={btnChange == 3 ? btnStyle : nonBtnStyle}
            onClick={review}
          >
            후기
          </List>
          <List style={btnChange == 4 ? btnStyle : nonBtnStyle} onClick={qna}>
            문의
          </List>
        </Container>
      </WrapCate>

      <Wrap>
        <Content1 tab={tabRef} />
        <Content2 tab={tabRef} />
        <Content3 tab={tabRef} />
        <Content4 tab={tabRef} />
      </Wrap>
    </>
  );
}

const WrapCate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
`;
const Container = styled.ul`
  width: 1050px;
  display: flex;
  background-color: rgb(248, 248, 248);
  z-index: 1;
  justify-content: space-between;
  top: 65px;
  padding: 0;
  overflow: hidden;
  //padding-right: 50px;
`;

const List = styled.li`
  text-align: center;
  flex: 1;
  font-weight: bold;
  color: rgb(100, 100, 100);
  padding: 17px 0px;
  cursor: pointer;
  border: 0.5px solid rgb(230, 230, 230);
`;

const Wrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
