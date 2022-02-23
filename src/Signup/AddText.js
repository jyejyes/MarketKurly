import React from "react";
import styled from "styled-components";

export default function AddText(props) {
  return <Add id="more_pw1">{props.text}</Add>;
  //   <p id="more_pw1">{props.text}</p>;
}

const Add = styled.p`
  font-size: var(--xsmall-font);
  margin: 7px 0px;
  color: rgb(82, 82, 82);
`;
