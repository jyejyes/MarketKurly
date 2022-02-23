import React from "react";
import "../App.css";
import Timer from "./Timer";
import Item from "./Item";
import styled from "styled-components";
import OnedayItem from "./OnedayItem";

function Oneday() {
  return (
    <section className="oneday_section">
      <OnedayContainer>
        <OnedaySection>
          <OnedayTitle>일일특가</OnedayTitle>
          <OnedaySmallTitle>24시간 한정특가</OnedaySmallTitle>
          <Timer />
          <OnedayXsmallTitle>망설이면 늦어요!</OnedayXsmallTitle>
        </OnedaySection>

        <OnedayItem discount="5" originPrice="30000" realPrice=""></OnedayItem>
      </OnedayContainer>
    </section>
  );
}

export default Oneday;

const OnedayContainer = styled.div`
  width: 1050px;
  display: flex;
  margin: 50px 0px;
`;

const OnedaySection = styled.div`
  width: 34%;
`;

const OnedayTitle = styled.h2`
  font-size: var(--xlarge-font);
`;

const OnedaySmallTitle = styled.h3`
  color: var(--gray-color);
  font-size: var(--medium-font);
`;

const OnedayXsmallTitle = styled.p`
  color: rgb(180, 180, 180);
  font-size: var(--small-font);
`;
