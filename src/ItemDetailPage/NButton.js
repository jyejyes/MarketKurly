import React, { useState } from "react";
import styled from "styled-components";

export default function NButton() {
  const [count, setCount] = useState(1);
  function minus() {
    setCount(count--);
  }
  function plus() {
    setCount(count++);
  }
  return (
    <>
      <Container>
        <MinusBtn onClick={minus}> − </MinusBtn>
        <ShowNum>{count}</ShowNum>
        <PlusBtn onClick={plus}> + </PlusBtn>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: fit-content;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: absolute;
`;

const MinusBtn = styled.button`
  padding: 0px 10px;
  margin-bottom: 4px;
`;
const ShowNum = styled.div`
  padding: 0px 10px;
  font-size: var(--small-font);
`;

const PlusBtn = styled.button`
  padding: 0px 10px;
`;
