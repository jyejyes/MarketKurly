import React from "react";
import styled from "styled-components";

export default function IntroduceDetail() {
  return (
    <Detail>
      <DetailText>
        법인명(상호) : 주식회사 컬리 | 사업자등록번호 : 261-81-23456
        <MoreText> 사업자정보 확인</MoreText>
      </DetailText>
      <DetailText>
        통신판매업: 제 2018-서울강남-01456호 | 개인정보보호책임자 : 박지혜
      </DetailText>
      <DetailText>
        주소: 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 대표이사 : 박지혜
      </DetailText>
      <DetailText>
        입점문의: <MoreText>입점문의하기</MoreText> | 마케팅제휴 :
        <MoreText>dsdfd@gmail.com</MoreText>
      </DetailText>
      <DetailText>
        채용문의: <MoreText>recruit@dfsdfds.com</MoreText>
      </DetailText>
      <DetailText>
        팩스: 080-3423-2342 | 이메일 : <MoreText>dsfsdf@fdsdf</MoreText>
      </DetailText>
      <DetailText>대량주문 문의: dfjksldf@nave.com</DetailText>

      <a href="https://www.instagram.com/marketkurly/" target="_blank">
        <Img src="./image/ico_instagram.png"></Img>
      </a>
      <a href="https://www.facebook.com/marketkurly" target="_blank">
        <Img src="./image/ico_fb.png"></Img>
      </a>
      <a href="https://blog.naver.com/marketkurly" target="_blank">
        <Img src="./image/ico_blog.png"></Img>
      </a>
      <a href="https://m.post.naver.com/marketkurly" target="_blank">
        <Img src="./image/ico_naverpost.png"></Img>
      </a>
      <a
        href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg"
        target="_blank"
      >
        <Img src="./image/ico_youtube.png"></Img>
      </a>
    </Detail>
  );
}

const Detail = styled.div``;
const DetailText = styled.p`
  margin-top: 5px;
  color: var(--gray-color);
  font-size: var(--xsmall-font);
`;

const MoreText = styled.a`
  color: var(--main-purple);
`;

const Img = styled.img`
  margin-top: 30px;
  margin-right: 10px;
  width: 30px;
`;
