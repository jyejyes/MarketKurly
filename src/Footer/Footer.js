import "../App.css";
import React from "react";
import FooterBottom from "./FooterBottom";
import FooterRights from "./FooterRights";
import IntroduceDetail from "./IntroduceDetail";
import styled from "styled-components";
import IntroduceItems from "./IntroduceItems";
import CsButton from "./CsButton";

function Footer() {
  return (
    <FooterSection>
      <FooterTop>
        <CS>
          <h3>고객행복센터</h3>
          <CsCall>
            <CsNum>1644-1107</CsNum>
            <DetailText>
              365고객센터
              <br />
              <Span>오전 7시 - 오후 7시</Span>
            </DetailText>
          </CsCall>

          <CsButton
            title="카카오톡 문의"
            text1="365고객센터"
            text2="오전 7시 - 오후 7시"
          ></CsButton>
          <CsButton
            title="1:1문의"
            text1="365고객센터"
            text2="오전 7시 - 오후 7시"
          ></CsButton>
          <CsButton
            title="대량주문 문의"
            text1=""
            text2="비회원의 경우 메일로 문의바랍니다."
          ></CsButton>
        </CS>
        <Introduce>
          <IntroduceItems></IntroduceItems>

          <IntroduceDetail></IntroduceDetail>
        </Introduce>
      </FooterTop>
      <FooterBottom></FooterBottom>
      <FooterRights></FooterRights>
    </FooterSection>
  );
}

export default Footer;

const Introduce = styled.div`
  width: 525px;
`;

const CS = styled.div`
  width: 525px;
  margin: 20px 0px;
`;

const DetailText = styled.div`
  font-size: var(--small-font);
`;

const Span = styled.span`
  color: var(--gray-color);
`;

const CsCall = styled.div`
  display: flex;
  margin-top: 15px;
`;

const CsNum = styled.div`
  font-size: var(--xlarge-font);
  margin-right: 15px;
  font-weight: bold;
`;

const FooterTop = styled.div`
  display: flex;
  border-top: 0.5px solid rgb(220, 220, 220);
`;

const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
