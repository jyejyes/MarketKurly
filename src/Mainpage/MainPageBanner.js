import React from "react";
import styled from "styled-components";
import "../App.css";

function MainPageBanner(props) {
  return (
    <>
      <div>
        <Banner src={props.bannerImg}></Banner>
      </div>
    </>
  );
}

const Banner = styled.img`
  width: 1050px;
  margin: 50px 0px;
`;

export default MainPageBanner;
