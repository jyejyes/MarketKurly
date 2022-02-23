import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddText from "./AddText";

export default function Input(props) {
  return (
    <>
      <InputBox
        onFocus={props.onFocus}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  );
}

const InputBox = styled.input`
  width: 68%;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 4px;
  padding: 14px;
  font-size: var(--small-font);
  margin-right: 1%;
  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;
