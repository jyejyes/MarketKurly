import React from "react";
import styled from "styled-components";
import dummy from "../DB/itemData.json";

export default function AboutItem(props) {
  //3자리 마다 콤마 찍는 정규식
  function comma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <Container>
      <img src={props.img}></img>
      <Text>{props.sub}</Text>
      <Price>{comma(props.price)}원</Price>
    </Container>
  );
}

const Container = styled.div`
  width: 178px;
  height: 320px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  border: 1px solid #ddd;
  background-color: white;
  & img {
    width: 180px;
  }
`;

const Text = styled.p`
  font-size: var(--small-font);
  margin: 7px;
`;

const Price = styled.p`
  font-size: var(--small-font);
  color: rgb(80, 80, 80);
  margin: 0px 7px;
`;
