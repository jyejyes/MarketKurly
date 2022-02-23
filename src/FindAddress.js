import React from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

export default function FindAddress(props) {
  return (
    <Address
      color={props.color}
      background={props.background}
      font={props.font}
      pad={props.pad}
    >
      주소검색
    </Address>
  );
}

const Address = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  font-size: ${(props) => props.font};
  border: 1px solid var(--main-purple);
  border-radius: 4px;
  padding: ${(props) => props.pad};
  margin-top: 8px;
`;
