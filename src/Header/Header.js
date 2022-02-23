import "../App.css";
import React, { useState } from "react";
import InfoBox from "./InfoBox";
import Categories from "./Categories";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Information from "./Infomation";

function Header() {
  let navigate = useNavigate();
  return (
    <>
      <Container>
        <Information />
        <Logo>
          <LogoImage
            onClick={() => navigate("/")}
            src="./image/mainlogo.jpeg"
          />
        </Logo>
      </Container>
      <Categories />
    </>
  );
}

export default Header;

const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 107px;
  margin-top: -20px;
  cursor: pointer;
`;

const Container = styled.header`
  width: 100%;
  box-shadow: 0px 1px 10px rgb(245, 245, 245);
`;
