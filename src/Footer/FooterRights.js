import React from "react";
import styled from "styled-components";

export default function FooterRights() {
  return (
    <Rights>
      마켓컬리에서 판매되는 상품 중에는 마켓멀리에 입점한 개별 판매자가 판매하는
      마켓플레이스(오픈마켓)상품들이 포함되어있습니다.
      <br />
      마켓플레이스 상품의 경우는 컬리는 통신판매중개자로서 통신판매의 당사자가
      아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을
      부담하지 않습니다.
      <br />
      <br />© KURLY CORP. ALL RIGHTS RESERVED
    </Rights>
  );
}

const Rights = styled.div`
  padding: 20px 0px 30px 0px;
  width: 100%;
  background-color: rgb(241, 241, 241);
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 10px;
  color: var(--gray-color);
`;
