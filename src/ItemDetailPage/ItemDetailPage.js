import React from "react";
import QuickNavBar from "../QuickNavBar";
import dummy from "../DB/itemData.json";
import ItemDetailInfo from "./ItemDetailInfo";
import Cart from "./Cart";
import styled from "styled-components";
import ItemDetailMain from "./ItemDetailMain";
import About from "./About";
import TopButton from "../TopButton";
import BottomBuy from "./BottomBuy";

function ItemDetailPage() {
  const itemList = dummy.sectionItem.filter((item) => item.id === 1);

  //할인가 계산 함수
  function calPrice(original, discount_per) {
    return (parseInt(original) * (100 - parseInt(discount_per))) / 100;
  }
  //3자리 마다 콤마 찍는 정규식
  function comma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <QuickNavBar />
      <TopButton />

      <Container>
        <TitleSection>
          <ItemImg src={itemList[0].img} />

          <ItemDesciption>
            <h2>{itemList[0].itemTitle}</h2>
            <MoreDesciption>{itemList[0].itemText}</MoreDesciption>
            <div className="detail_title_price">
              <p>회원할인가</p>
              <span>
                {comma(
                  calPrice(itemList[0].originalPrice, itemList[0].discount)
                )}
                <span> 원</span>
              </span>
              <span>{itemList[0].discount}%</span>
              <p>
                {comma(itemList[0].originalPrice)}
                <img src={"./image/question.svg"}></img>
              </p>
              <p>로그인 후 , 회원할인가와 적립혜택이 제공됩니다.</p>
            </div>

            {/* 상세페이지 관련 제품 캐러셀 */}

            <ItemDetailInfo title="판매단위" text="1병"></ItemDetailInfo>
            <ItemDetailInfo title="중량/용량" text="350ml"></ItemDetailInfo>
            <ItemDetailInfo
              title="배송구분"
              text="샛별배송/택배배송"
            ></ItemDetailInfo>
            <ItemDetailInfo
              title="포장타입"
              text="상온/종이포장"
            ></ItemDetailInfo>
            <ItemDetailInfo
              title="알레르기정보"
              text="-밀 함유"
            ></ItemDetailInfo>
            <ItemDetailInfo
              title="포장타입"
              text="상온/종이포장"
            ></ItemDetailInfo>

            <Cart
              price={calPrice(itemList[0].originalPrice, itemList[0].discount)}
              position="top"
            ></Cart>
          </ItemDesciption>
        </TitleSection>
      </Container>
      <About />
      <ItemDetailMain />
      <BottomBuy
        price={calPrice(itemList[0].originalPrice, itemList[0].discount)}
        title={itemList[0].itemTitle}
      />
    </>
  );
}

export default ItemDetailPage;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

const TitleSection = styled.div`
  width: 1050px;
  display: flex;
  background-color: white;
`;

const ItemImg = styled.img`
  width: 45%;
  height: 550px;
`;

const ItemDesciption = styled.div`
  width: 55%;
  margin: 10px 50px;
`;

const MoreDesciption = styled.p`
  color: var(--gray-color);
  font-size: var(--small-font);
`;
