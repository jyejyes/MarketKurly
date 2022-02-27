import React from "react";
import styled from "styled-components";

export default function Content2(props) {
  return (
    <Detail ref={(el) => (props.tab.current[1] = el)}>
      <img src="./image/gv20000194054_1.jpg"></img>
    </Detail>
  );
}

const Detail = styled.section`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 1050px;
    margin: 50px 0px;
  }
`;
