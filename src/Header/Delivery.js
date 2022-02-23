import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import FindAddress from "../FindAddress";

export default function Delivery(props) {
  let navigate = useNavigate();
  return (
    <>
      <Container state={props.state}>
        <Text>
          <Highlight>배송지를 등록</Highlight>
          하고<br></br> 구매가능한 상품을 확인하세요!
        </Text>
        <Login onClick={() => navigate("/login")}>로그인</Login>
        <FindAddress
          color="white"
          background="var(--main-purple)"
          font="var(--xsmall-font)"
          pad="7px 50px"
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  border: 1px solid rgb(220, 220, 220);
  width: 260px;
  height: 100px;
  padding: 18px 20px;
  background-color: white;
  position: absolute;
  top: 63px;
  right: -45px;
  z-index: 2;
  display: ${(props) => (props.state ? "block" : "none")};
  &:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 10px 13px 10px;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    z-index: 2;
    top: -13px;
    right: 57px;
  }
  &:before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 10px 13px 10px;
    border-color: rgb(210, 210, 210) transparent;
    display: block;
    width: 0;
    z-index: 2;
    top: -14px;
    right: 57px;
  }
`;

const Text = styled.p`
  color: black;
  margin-bottom: 10px;
`;

const Highlight = styled.span`
  color: var(--main-purple);
`;

const Login = styled.button`
  font-size: var(--xsmall-font);
  border: 1px solid var(--main-purple);
  color: var(--main-purple);
  border-radius: 4px;
  padding: 7px 35px;
  margin: 8px 8px 8px 0px;
`;
