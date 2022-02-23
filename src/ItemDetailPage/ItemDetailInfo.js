import React from "react";
import styled from "styled-components";

export default function ItemDetailInfo(props) {
  return (
    <>
      <Container>
        <EachSection>
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
        </EachSection>
      </Container>
    </>
  );
}

const Container = styled.p`
  display: flex;
  flex-direction: column;
  font-size: var(--small-font);

  border-bottom: 1px solid rgb(241, 241, 241);
  & > div:nth-child(1) {
    padding-top: 15px;
  }
`;
const EachSection = styled.div`
  padding-bottom: 15px;
  position: relative;
`;
const Title = styled.span`
  color: rgb(100, 100, 100);
`;

const Text = styled.span`
  color: black;
  width: 200px;
  position: absolute;
  left: 140px;
`;
