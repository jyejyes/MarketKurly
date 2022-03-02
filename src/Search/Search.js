import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dummy from "../DB/itemData.json";
import Item from "../Mainpage/Item";
import Pagination from "./Pagination";
import { useParams } from "react-router";

export default function Search() {
  let { itemName } = useParams();
  const [type, setType] = useState(0); //버튼 색상 타입
  const [search, setSearch] = useState(itemName); // 내가 입력할 검색어
  const [datas, setDatas] = useState(
    dummy.sectionItem.filter((item) => item.itemTitle.indexOf(search) !== -1)
  ); // 조건에 맞는거만 넣어줄 state

  useEffect(() => {
    setSearch(itemName);
    setDatas(
      dummy.sectionItem.filter(
        (item) => item.itemTitle.indexOf(itemName) !== -1
      )
    );
  }, [itemName]);

  //페이지네이션 관련 state들
  const [limit, setLimit] = useState(12); //한 페이지에 보여줄 아이템 갯수
  const [page, setPage] = useState(1); // 현재 페이지
  const offset = (page - 1) * limit; // 아이템의 시작 인덱스 계산

  const inputChange = (e) => {
    setSearch(e.target.value);
  };

  const putArray = () => {
    setDatas(
      dummy.sectionItem.filter((item) => item.itemTitle.indexOf(search) !== -1)
    );
  };

  return (
    <>
      <SearchBoxStyle>
        <SearchTitleStyle>상품검색</SearchTitleStyle>
        <SearchForm>
          <SearchLabelStyle htmlFor="sword">검색조건</SearchLabelStyle>
          <SearchInputStyle
            type="text"
            name="sword"
            value={search}
            onChange={inputChange}
          ></SearchInputStyle>
          <SearchBtnStyle
            type="button"
            value="검색하기"
            name="sword"
            onClick={putArray}
          ></SearchBtnStyle>
        </SearchForm>
        {/* 상품 리스트 */}
        <SearchGoodsListStyle>
          <SearchSortStyle>
            <SearchSortText>총 {datas.length}개</SearchSortText>
            <SearchSortType>
              <li>추천순</li>
              <li>신상품순</li>
              <li>판매량순</li>
              <li>혜택순</li>
              <li>낮은 가격순</li>
              <li>높은 가격순</li>
            </SearchSortType>
          </SearchSortStyle>
        </SearchGoodsListStyle>
        <SearchUlStyle>
          {datas.slice(offset, offset + limit).map((item, index) => (
            <SearchLiStyle key={index}>
              <Item
                img={item.img}
                itemTitle={item.itemTitle}
                discount={item.discount}
                realPrice={item.realPrice}
                originalPrice={item.originalPrice}
              />
            </SearchLiStyle>
          ))}
        </SearchUlStyle>
        <Pagination
          total={datas.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </SearchBoxStyle>
    </>
  );
}

const SearchUlStyle = styled.ul`
  display: flex;
  width: 1050px;
  margin: 100px 0px;
  flex-wrap: wrap;
`;

const SearchLiStyle = styled.li`
  transform: scale(1.3);
  margin-right: 105px;
  margin-bottom: 150px;
  &:nth-child(3n + 1) {
    margin-left: 37px;
  }
  &: nth-child(3n) {
    margin-right: 0px;
  }
`;

const SearchBoxStyle = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
`;

const SearchTitleStyle = styled.h1`
  font-size: var(--xlarge-font);
  letter-spacing: -1px;
`;

const SearchForm = styled.form`
  width: 1050px;
  display: flex;
  align-items: center;
  margin: 45px 0px;
  border-top: 2px solid purple;
  border-bottom: 1px solid purple;
`;

const SearchLabelStyle = styled.label`
  color: #333;
  line-height: 18px;
  letter-spacing: -1px;
  font-size: 14px;
  float: left;
  margin: 40px 110px 40px 26px;
`;

const SearchInputStyle = styled.input`
  float: left;
  width: 607px;
  height: 45px;
  margin-right: 16px;
  padding-left: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
  color: #333;
  letter-spacing: -1px;
`;

const SearchBtnStyle = styled.input`
  float: left;
  width: 175px;
  height: 45px;
  border-radius: 3px;
  background-color: #5f0080;
  color: #fff;
  line-height: 45px;
  border: 1px solid #5f0080;
  font-size: 14px;
`;

const SearchGoodsListStyle = styled.div`
  width: 1050px;
`;

const SearchSortStyle = styled.div``;

const SearchSortText = styled.span`
  font-size: 12px;
  color: #333;
  line-height: 18px;
`;

const SearchSortType = styled.ul`
  float: right;
  display: flex;
  font-size: 12px;
  color: #a0a0a0;
  & > li {
    position: relative;
    z-index: 2;
    float: left;
    padding: 0 10px 0 8px;
  }

  & > li:after {
    content: "";
    position: absolute;
    right: 0;
    top: 6px;
    width: 1px;
    height: 10px;
    background-color: #e5e5e5;
  }
`;
