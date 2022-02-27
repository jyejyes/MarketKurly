import React from "react";
import styled from "styled-components";

export default function Content3(props) {
  return (
    <Review ref={(el) => (props.tab.current[2] = el)}>
      <Container>
        <Text>
          <ReviewtTitle>PRODUCT REVIEW</ReviewtTitle>
          <ReviewText>
            ・상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른
            글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
          </ReviewText>
          <ReviewText>
            ・배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내
            1:1 문의에 남겨주세요.
          </ReviewText>
        </Text>
        <SortBox>
          <option value="최근등록순">최근등록순</option>
          <option value="좋아요많은순">좋아요많은순</option>
          <option value="조회많은순">조회많은순</option>
        </SortBox>
      </Container>
      <Table>
        <tbody>
          <tr>
            <td>글번호</td>
            <td>글제목</td>
            <td>글작성자</td>
            <td>글작성일</td>
            <td>도움</td>
            <td>조회수</td>
          </tr>
          <tr>
            <td>3</td>
            <td>냐냐</td>
            <td>브리</td>
            <td>2022-01-22</td>
            <td>2</td>
            <td>19</td>
          </tr>
          <tr>
            <td>2</td>
            <td>뇨뇨</td>
            <td>키위</td>
            <td>2022-01-21</td>
            <td>2</td>
            <td>10</td>
          </tr>
          <tr>
            <td>1</td>
            <td>뉴뉴</td>
            <td>세영</td>
            <td>2022-01-10</td>
            <td>2</td>
            <td>14</td>
          </tr>
        </tbody>
      </Table>
    </Review>
  );
}

const Review = styled.section`
  padding-top: 110px;
  width: 1050px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
`;

const ReviewtTitle = styled.p`
  font-size: var(--small-font);
  margin: 3px 0px;
`;

const ReviewText = styled.p`
  font-size: var(--xsmall-font);
  color: rgb(80, 80, 80);
`;

const SortBox = styled.select`
  font-size: var(--medium-font);
  margin: 10px;
`;

const Table = styled.table`
  border-bottom: 1px solid black;
  padding: 0;
  margin: 0;
  & tr:hover {
    background-color: rgb(250, 250, 250);
  }
  & td {
    font-size: var(--xsmall-font);
    text-align: center;
    padding: 15px 0px;
  }
  & td:nth-child(1) {
    width: 10%;
  }
  & td:nth-child(2) {
    width: 50%;
  }
  & td:nth-child(3) {
    width: 10%;
  }
  & td:nth-child(4) {
    width: 10%;
    color: gray;
  }
  & td:nth-child(5) {
    width: 10%;
  }
  & td:nth-child(6) {
    width: 10%;
  }
`;
