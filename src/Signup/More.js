import React from "react";
import styled from "styled-components";

export default function More(props) {
  return <Morebox color={props.color}>{props.text}</Morebox>;
}
const Morebox = styled.p`
  font-size: var(--xsmall-font);
  margin: 7px 0px;
  color: ${(props) => props.color};
`;
