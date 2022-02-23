import React from "react";
import styled from "styled-components";

export default function InfoBox(props) {
  const listArr = [
    "공지사항",
    "자주하는 질문",
    "1:1 상담",
    "대량주문 문의",
    "상품제안",
    "에코포장 이벤트",
  ];
  return (
    <Container state={props.state}>
      <ListBox>
        {listArr.map((item, index) => (
          <List key={index}>{item}</List>
        ))}
      </ListBox>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid rgb(220, 220, 220);
  padding: 8px;
  position: absolute;
  top: 30px;
  right: 0;
  background-color: white;
  z-index: 2;
  height: 140px;
  display: ${(props) => (props.state ? "flex" : "none")};
`;

const ListBox = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const List = styled.li`
  color: rgb(73, 73, 73);
`;
