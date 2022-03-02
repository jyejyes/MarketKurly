import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import dummy from "../DB/itemData.json";
import { addAction, minusAction } from "../reducers/cartReducer";
import cartReducer from "../reducers/cartReducer";

export default function Cart(props) {
  const dispatch = useDispatch();
  //props 로 상품 금액 받아온 다음에 곱하는 게산식 넣어야함
  const number = useSelector((state) => state.cartReducer);
  const minus = () => {
    dispatch(minusAction());
  };
  const plus = () => {
    dispatch(addAction());
  };
  function comma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <Wrap position={props.position}>
        <CartBottomText>{props.title}</CartBottomText>
        <EachSection>
          <Title position={props.position}>구매수량</Title>
        </EachSection>
        <CartBottomPrice position={props.position}>
          {comma(props.price)}원
        </CartBottomPrice>

        <Container position={props.position}>
          <MinusBtn onClick={minus}> − </MinusBtn>
          <ShowNum>{number}</ShowNum>
          <PlusBtn onClick={plus}> + </PlusBtn>
        </Container>
      </Wrap>

      <PriceSection>
        <p>
          총 상품금액 : <span>{comma(props.price * number)} </span>원
        </p>
        <p>
          <span>적립</span>로그인 후, 회원할인가와 적립혜택 제공
        </p>
      </PriceSection>
      <ItemCart>
        <CartImg src="./image/btn-itemdetail-like.svg" />
        <CartImg src="./image/btn-itemdetail-restock-dim.svg" />
        <CartBtn position={props.position}>장바구니 담기</CartBtn>
      </ItemCart>
    </>
  );
}
const Wrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: ${(props) => (props.position == "top" ? "10px 0px" : "15px ")};
  margin-top: ${(props) => (props.position == "top" ? "0px" : "20px")};
  background-color: ${(props) =>
    props.position == "top" ? "white" : "rgb(247, 247, 247) "};
  border-bottom: ${(props) =>
    props.position == "top" ? "1px solid rgb(241, 241, 241);" : "none"};
`;

const CartBottomPrice = styled.span`
  display: ${(props) => (props.position == "top" ? "none" : "flex")};
  position: absolute;
  right: 50px;
  font-size: var(--small-font);
  font-weight: bold;
`;

const CartBottomText = styled.span`
  font-size: var(--small-font);
`;

const EachSection = styled.div`
  position: relative;
  margin: 5px 0px;
`;
const Title = styled.div`
  color: rgb(100, 100, 100);
  font-size: var(--small-font);
  display: ${(props) => (props.position == "top" ? "flex" : "none")};
`;

const Container = styled.div`
  width: fit-content;
  height: 27px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 3px;
  display: flex;
  align-items: center;
  position: absolute;
  left: ${(props) => (props.position == "top" ? "140px" : "550px")};
  background-color: white;
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
    font-size: var(--xsmall-font);
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
  margin: 30px 0px;
  display: flex;
  justify-content: flex-end;
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
  padding: ${(props) =>
    props.position == "top" ? "15px 145px" : "15px 100px"};
  cursor: pointer;
  font-weight: bold;
`;
