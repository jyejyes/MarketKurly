import React, { useState } from "react";
import styled from "styled-components";
import dummy from "../DB/itemData.json";

export default function Cart(props) {
  //props 로 상품 금액 받아온 다음에 곱하는 게산식 넣어야함
  const [count, setCount] = useState(1);
  function minus() {
    setCount(count - 1);
    if (count <= 0) setCount(0);
  }
  function plus() {
    setCount(count + 1);
  }
  function comma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <Wrap>
        <EachSection>
          <Title>구매수량</Title>
        </EachSection>

        <Container>
          <MinusBtn onClick={minus}> − </MinusBtn>
          <ShowNum>{count}</ShowNum>
          <PlusBtn onClick={plus}> + </PlusBtn>
        </Container>
      </Wrap>

      <PriceSection>
        <p>
          총 상품금액: <span>{comma(props.price * count)} </span>원
        </p>
        <p>
          <span>적립</span>로그인 후, 회원할인가와 적립혜택 제공
        </p>
      </PriceSection>
      <ItemCart>
        <CartImg src="./image/btn-itemdetail-like.svg" />
        <CartImg src="./image/btn-itemdetail-restock-dim.svg" />
        <CartBtn>장바구니 담기</CartBtn>
      </ItemCart>
    </>
  );
}
const Wrap = styled.div`
  display: flex;
  position: relative;
  padding: 10px 0px;
  border-bottom: 1px solid rgb(241, 241, 241);
`;

const EachSection = styled.div`
  position: relative;
  margin: 5px 0px;
`;
const Title = styled.div`
  color: rgb(100, 100, 100);
  font-size: var(--small-font);
`;

const Container = styled.div`
  width: fit-content;
  height: 27px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 3px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 140px;
`;

const MinusBtn = styled.button`
  padding: 0px 10px;
  margin-bottom: 4px;
`;
const ShowNum = styled.div`
  padding: 0px 10px;
  width: 13px;
  text-align: center;
  font-size: var(--small-font);
`;

const PlusBtn = styled.button`
  padding: 0px 10px;
`;

const PriceSection = styled.div`
  text-align: end;
  margin: 20px 0px;
  padding: 0px 0px;
  & > p:nth-child(1) {
    font-size: var(--small-font);
    font-weight: bold;
  }
  &>p: nth-child(2) {
    font-size: var(--small-font);
    font-weight: lighter;
    margin: 10px 0px;
  }
  & > p:nth-child(1) span {
    font-size: 32px;
  }
  &>p: nth-child(2) span {
    background-color: rgb(252, 197, 47);
    border: 1px solid rgb(252, 197, 47);
    border-radius: 15px;
    font-size: var(--xsmall-font);
    padding: 1px 7px;
    color: white;
    margin-right: 5px;
  }
`;

const ItemCart = styled.div`
  margin: 50px 0px;
  display: flex;
`;

const CartImg = styled.img`
  width: 30px;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 4px;
  margin-right: 10px;
  padding: 0px 12px;
  cursor: pointer;
`;
const CartBtn = styled.button`
  background-color: var(--main-purple);
  color: white;
  text-align: center;
  padding: 15px 145px;
  cursor: pointer;
  font-weight: bold;
`;
