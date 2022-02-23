import React from "react";
import styled from "styled-components";
import dummy from "../DB/categoryData.json";

export default function MenuDetail(props) {
  //prop.idx 줌 0,1,2,3 순서대로 들어옴.

  const cateList = dummy.categoryItem.filter((item) => item.id === props.idx);

  return (
    <ListDetailBox>
      {cateList[0].list.map((item, index) => (
        <ListDetail key={index}>{item}</ListDetail>
      ))}
    </ListDetailBox>
  );
}
const ListDetailBox = styled.ul`
  border: 1px solid rgb(220, 220, 220);
  width: 220px;
  height: 610px;
  background-color: rgb(245, 245, 245);
  position: absolute;
  top: -1px;
  left: 220px;
  z-index: 0;
  transform: scale(0);
`;

const ListDetail = styled.li`
  font-size: var(--small-font);
  padding: 9.3px 20px;
  display: flex;
  cursor: pointer;
  z-index: 4;
  color: rgb(50, 50, 50);
  &:hover {
    font-weight: bold;
    text-decoration: underline;
    color: var(--main-purple);
  }
`;
