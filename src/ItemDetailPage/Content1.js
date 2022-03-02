import React, { useState } from "react";
import styled from "styled-components";

export default function Content1(props) {
  return (
    <Description ref={(el) => (props.tab.current[0] = el)}>
      <img src="./image/gv00000194052_1.jpg"></img>
      <Title>명가의 노하우가 깃든 3년산 발효 식초</Title>
      <BigTitle>
        [한애가]<br></br>담금초 매실
      </BigTitle>
      <Text>
        ‘좋은 식초'를 찾는 분들께 한애가는 해답과도 같은 이름입니다. 3년 이상의
        숙성을 거친 한애가의 담금초 매실을 소개할게요. 매실은 새콤달콤한 맛뿐만
        아니라 베타카로틴, 비타민E 등 영양이 풍부한 열매인데요. 한애가는 국산
        매실과 은행, 쌀을 숙성시켜 매실 본연의 맛과 향을 오롯이 녹여냈습니다.
        전통 방식으로 빚어낸 누룩으로 발효했기에 산뜻한 풍미와 깊은 감칠맛이
        남다르지요. 하루 한 잔씩 따라 가볍게 마셔 보세요. 탄산수나 과일 주스에
        섞어 즐겨도 좋고, 요리의 맛을 낼 때에도 제격일 거예요.
      </Text>
      <img src="./image/gv10000194053_1.jpg"></img>
      <img src="./image/gv00000194055_1.jpg"></img>
    </Description>
  );
}

const Description = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  background-color: white;
  & img {
    width: 1050px;
    margin: 50px 0px;
  }
`;

const Title = styled.p`
  font-size: 24px;
  color: rgb(80, 80, 80);
  font-weight: bold;
  width: 1050px;
  display: flex;
  justify-content: center;
`;

const BigTitle = styled(Title)`
  width: 100%;
  font-size: 35px;
  text-align: center;
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(190, 190, 190);
`;

const Text = styled.p`
  margin: 20px;
  font-size: 18px;
  font-weight: lighter;
  color: gray;
  width: 1050px;
  display: flex;
  justify-content: center;
`;
