import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

export default function FooterBottom() {
  return (
    <FooterBottomSection>
      <FooterCert>
        <FooterLi>
          [인증범위]마켓컬리 쇼핑몰 서비스 개발 운영
          <br />
          [유효기간] 2019.04.01 ~ 2022.03.31
        </FooterLi>
        <FooterLi>
          개인정보보호 우수 웹사이트 선정
          <br />
          개인정보처리시스템 인증(ePRIVACY PLUS)
        </FooterLi>
        <FooterLi>
          개인정보보호 우수 웹사이트 선정
          <br />
          개인정보처리시스템 인증(ePRIVACY PLUS)
        </FooterLi>
        <FooterLi>
          고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한
          <br />
          토스 페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.
        </FooterLi>
      </FooterCert>
    </FooterBottomSection>
  );
}

const FooterBottomSection = styled.div`
  border-top: 0.5px solid rgb(220, 220, 220);
  width: 1050px;
`;

const FooterCert = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const FooterLi = styled.li`
  font-size: 10px;
  margin: 10px;
  color: var(--gray-color);
`;
