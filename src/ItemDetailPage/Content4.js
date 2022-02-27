import React from "react";
import styled from "styled-components";

export default function Content4(props) {
  return (
    <QnA ref={(el) => (props.tab.current[3] = el)}>
      <Container>
        <Text>
          <QTitle>PRODUCT Q&A</QTitle>
          <QText>
            ・상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른
            글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
          </QText>
          <QText>
            ・배송관련, 주문(취소/교환/환불) 관련 문의 및 요청사항은 마이컬리 내
            1:1 문의에 남겨주세요.
          </QText>
        </Text>
      </Container>

      <Table>
        <tbody>
          <tr>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
            <td>답변상태</td>
          </tr>
          <tr>
            <td>좋은 개발자가 되고싶은데 어떻게 해야하나요</td>
            <td>냐냐</td>
            <td>브리</td>
            <td>2022-01-22</td>
          </tr>
          <tr>
            <td>ㅇㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇ</td>
            <td>뇨뇨</td>
            <td>키위</td>
            <td>2022-01-21</td>
          </tr>
          <tr>
            <td>ㄴㅇ리말;ㅐㅓㅇ밈ㄹ</td>
            <td>뉴뉴</td>
            <td>세영</td>
            <td>2022-01-10</td>
          </tr>
        </tbody>
      </Table>
    </QnA>
  );
}

const QnA = styled.section`
  padding-top: 100px;
  width: 1050px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: 2px solid black;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

const QTitle = styled.p`
  font-size: var(--small-font);
  margin: 3px 0px;
`;

const QText = styled.p`
  font-size: var(--small-font);
  color: rgb(150, 150, 150);
`;

const Table = styled.table`
  border-bottom: 1px solid black;

  & tr:hover {
    background-color: rgb(250, 250, 250);
  }
  & td {
    font-size: var(--small-font);
    text-align: center;
    padding: 15px 0px;
  }
  & td:nth-child(1) {
    width: 70%;
  }
  & td:nth-child(2) {
    width: 10%;
  }
  & td:nth-child(3) {
    width: 10%;
  }
  & td:nth-child(4) {
    width: 10%;
    color: gray;
  }
`;
