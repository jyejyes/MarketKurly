import React from "react";
import styled from "styled-components";
export default function CsButton(props) {
  return (
    <CSSection>
      <Button>{props.title}</Button>
      <DetailText>
        {props.text1}
        <br />
        <Span>{props.text2}</Span>
      </DetailText>
    </CSSection>
  );
}

const Button = styled.button`
  width: 130px;
  height: 40px;
  border: 1px solid rgb(228, 228, 228);
  text-align: center;
  font-size: var(--small-font);
  margin-right: 15px;
`;

const DetailText = styled.div`
  font-size: var(--small-font);
`;

const Span = styled.span`
  color: var(--gray-color);
`;

const CSSection = styled.div`
  display: flex;
  margin-top: 15px;
`;
