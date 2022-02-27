import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
export default function BottomBuy(props) {
  return (
    <>
      <Wrap>
        <Container>
          <Cart price={props.price} />
        </Container>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 100%;
  position: fixed;
  height: 280px;
  bottom: 0;
  background-color: white;
  border-top: 2px solid var(--main-purple);
  display: flex;
  justify-content: center;
  z-index: 20;
`;

const Container = styled.div`
  width: 950px;
`;
