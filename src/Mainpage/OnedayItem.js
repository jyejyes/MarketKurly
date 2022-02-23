import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function OnedayItem(props) {
  const [real, setReal] = useState(0);
  //할인가 계산 함수
  function calPrice(original, discount_per) {
    return (parseInt(original) * (100 - parseInt(discount_per))) / 100;
  }
  function comma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    setReal(calPrice(props.originPrice, props.discount));
  }, []);

  return (
    <Items>
      <li>
        <Image src="./image/oneday_item.jpg" />
        <Text>학교 앞 분식집에서 먹던 그 맛</Text>
        <Title>[금미옥] 쌀 떡볶이와 깻잎 김말이</Title>
        <Price>
          <Discount>{props.discount}%</Discount>

          <RealPrice>
            {comma(calPrice(props.originPrice, props.discount))}원
          </RealPrice>
          <OriginalPrice>{comma(props.originPrice)}원</OriginalPrice>
        </Price>
      </li>
    </Items>
  );
}

const Items = styled.div`
  width: 66%;
`;

const Image = styled.img`
  width: 100%;
`;

const Text = styled.p`
  color: var(--gray-color);
  font-size: var(--small-font);
  margin: 5px 0px;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
`;

const Discount = styled.div`
  color: rgb(240, 87, 87);
  margin-right: 5px;
  font-weight: bold;
  font-size: var(--large-font);
`;

const RealPrice = styled.div`
  font-weight: bold;
  font-size: var(--large-font);
  margin-right: 10px;
`;

const OriginalPrice = styled.p`
  color: var(--gray-color);
  text-decoration: line-through;
`;

const Title = styled.div``;
