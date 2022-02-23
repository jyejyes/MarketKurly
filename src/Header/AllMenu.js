import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import dummy from "../DB/categoryData.json";
import MenuDetail from "./MenuDetail";

export default function AllMenu(props) {
  const categoryTitle = dummy.categoryTitle;
  const [mouse, setMouse] = useState(false);
  const onListMouse = () => setMouse(true);
  const outListMouse = () => setMouse(false);

  return (
    <>
      <ListBox state={props.state}>
        <ul>
          {categoryTitle.map((title, index) => (
            <List key={index}>
              <div>
                <ListImg src={title.image} />
                {title.categoryTitleName}
              </div>
              <MenuDetail idx={index} />
            </List>
          ))}
        </ul>
      </ListBox>
    </>
  );
}
const ListBox = styled.div`
  border: 1px solid rgb(220, 220, 220);
  height: 610px;
  background-color: white;
  position: absolute;
  top: 65px;
  left: 0px;
  z-index: 5;
  transform: scale(0);
  //display: ${(props) => (props.state ? "flex" : "none")};
  & > ul {
    width: 220px;
    height: 610px;
    overflow-x: hidden;
    overflw-y: scroll;
  }
`;

const List = styled.li`
  padding: 7px 17px 10px;
  font-size: var(--small-font);
  display: flex;
  cursor: pointer;
  z-index: 5;
  color: rgb(50, 50, 50);
  &: hover {
    color: var(--main-purple);
    background-color: rgb(245, 245, 245);
    z-index: 5;
  }

  &: hover > ul {
    transform: scale(1);
  }

  & > div {
    display: flex;
    justify-content: center;
    align-item: center;
  }
`;

const ListImg = styled.img`
  width: 22px;
  padding-right: 5px;
`;
