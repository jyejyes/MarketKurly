import "../App.css";
import React from "react";
import QuickNavBar from "../QuickNavBar";
import ItemSection from "./ItemSection";
import Oneday from "./Oneday";
import MainPageBanner from "./MainPageBanner";
import MainPageItems from "./ItemSection";
import Item from "./Item";
import dummy from "../DB/itemData.json";
import SlideBox from "./SlideBox";
import styled from "styled-components";
import TopButton from "../TopButton";

function MainPage() {
  return (
    <Main>
      <TopButton />
      <QuickNavBar />
      <SlideBox></SlideBox>
      <ItemSection
        id={dummy.sectionTitle[0].id}
        itemSectionTitle={dummy.sectionTitle[0].sectionTitleName}
      />
      <MainPageBanner bannerImg="./image/MainBanner1" />
      <Oneday />
      <ItemSection
        id={dummy.sectionTitle[1].id}
        itemSectionTitle={dummy.sectionTitle[1].sectionTitleName}
      />
      <ItemSection
        id={dummy.sectionTitle[2].id}
        itemSectionTitle={dummy.sectionTitle[2].sectionTitleName}
      />
      <MainPageBanner bannerImg="./image/MainBanner2" />
      <ItemSection
        id={dummy.sectionTitle[3].id}
        itemSectionTitle={dummy.sectionTitle[3].sectionTitleName}
      />
    </Main>
  );
}

export default MainPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
`;
