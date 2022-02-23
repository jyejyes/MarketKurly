import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InfoBox from "./InfoBox";

export default function Information() {
  const [mouse, setMouse] = useState(false);
  let navigate = useNavigate();
  return (
    <Info>
      <Delivery src="./image/delivery_210801.png" />
      <InfoRight>
        <List>
          <ListTextPurple onClick={() => navigate("/signup")}>
            회원가입
          </ListTextPurple>
        </List>
        <List>
          <ListText onClick={() => navigate("/login")}>로그인</ListText>
        </List>
        <List>
          <ListText
            onMouseEnter={() => setMouse(true)}
            onMouseLeave={() => setMouse(false)}
          >
            고객센터 ▾
          </ListText>
          <InfoBox state={mouse} />
        </List>
      </InfoRight>
    </Info>
  );
}

const Info = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoRight = styled.ul`
  display: flex;
  margin: 0px;
  font-size: var(--xsmall-font);
  white-space: nowrap;
`;

const List = styled.li`
  position: relative;
  padding: 8px 0px 12px 12px;
`;

const Delivery = styled.img`
  width: 120px;
  height: 22px;
  padding: 8px 0px 0px 0px;
  margin-right: 760px;
  cursor: pointer;
`;

const ListText = styled.div`
  cursor: pointer;
`;

const ListTextPurple = styled(ListText)`
  color: purple;
  font-weight: bold;
`;
