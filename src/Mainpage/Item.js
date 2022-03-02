import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

function Item(props) {
  let navigate = useNavigate();

  const [real, setReal] = useState(0);

  //할인가 계산 함수
  function calPrice(original, discount_per) {
    return (parseInt(original) * (100 - parseInt(discount_per))) / 100;
  }
  //3자리 마다 콤마 찍는 정규식
  function comma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    setReal(calPrice(props.originalPrice, props.discount));
  }, []);

  return (
    <>
      <RemcommendBox onClick={() => navigate("/itemDetailPage")}>
        <Img src={props.img} />
      </RemcommendBox>
      <ItemTitle onClick={() => navigate("/itemDetailPage")}>
        {props.itemTitle}
      </ItemTitle>
      <Price>
        <Discount>{props.discount}%</Discount>
        <RealPrice>
          {comma(calPrice(props.originalPrice, props.discount))}원
        </RealPrice>
      </Price>
      <OriginalPrice>{comma(props.originalPrice)}원</OriginalPrice>
    </>
  );
}

// 스타일 컴포넌트

const RemcommendBox = styled.div`
  width: 255px;
  height: 328px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 100%;
  cursor: pointer;
  &:nth-child(1):hover {
    transform: scale(1.02);
    transition: transform 0.5s ease;
  }
`;

const ItemTitle = styled.div`
  margin: 5px 0px;
  width: 250px;
  cursor: pointer;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
`;

const Discount = styled.div`
  color: rgb(240, 87, 87);
  margin-right: 5px;
  font-weight: bold;
`;

const RealPrice = styled.div`
  font-weight: bold;
`;

const OriginalPrice = styled.p`
  font-size: var(--small-font);
  color: var(--gray-color);
  text-decoration: line-through;
`;

export default Item;
