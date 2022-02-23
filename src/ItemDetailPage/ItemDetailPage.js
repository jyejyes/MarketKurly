import React from "react";
import QuickNavBar from "../QuickNavBar";
import ItemDetailCate from "./ItemDetailCate";
import dummy from "../DB/itemData.json";
import ItemDetailInfo from "./ItemDetailInfo";
import NButton from "./NButton";

function ItemDetailPage() {
  const itemList = dummy.sectionItem.filter((item) => item.id === 1);
  console.log(itemList[0].itemTitle);
  console.log(itemList[0].img);
  console.log(itemList[0].discount);

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

      <section className="item_datail_page">
        <div className="item_detail_title">
          <img src={itemList[0].img}></img>
          <div className="detail_title_text">
            <h2>{itemList[0].itemTitle}</h2>
            <p>{itemList[0].itemText}</p>
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
            <ItemDetailInfo title="판매단위" text="1병"></ItemDetailInfo>
            <ItemDetailInfo title="중량/용량" text="350ml"></ItemDetailInfo>
            <ItemDetailInfo title="구매수량" text=""></ItemDetailInfo>
            <NButton></NButton>
            {/* 

            <div className="detail_title_info">
              <p>
                <div>
                  <span className="detail_title_info_sub">판매단위</span>
                  <span className="detail_title_info_con">dd</span>
                </div>
                <div>
                  <span className="detail_title_info_sub">판매단위</span>
                  <span className="detail_title_info_con">dd</span>
                </div>
              </p>
              <p>
                <div>
                  <span className="detail_title_info_sub">판매단위</span>
                  <span className="detail_title_info_con">dd</span>
                </div>
              </p>
              <p>
                <div>
                  <div>
                    <span className="detail_title_info_sub">판매단위</span>
                    <span className="detail_title_info_con">dd</span>
                  </div>
                </div>
              </p>
              <p>
                <div>
                  <span className="detail_title_info_sub">판매단위</span>
                  <span className="detail_title_info_con">dd</span>
                </div>
              </p>
            </div>

            <div className="detail_title_purchase">
              <p>
                총 상품금액: <span>13000(계산식 넣어야함 props로)</span>
              </p>
              <p>
                <span>적립</span>로그인 후, 회원할인가와 적립혜택 제공
              </p>
            </div>
            <div className="itemcart">
              <button className="itemcartBtn">장바구니 담기</button>
            </div> */}
          </div>
        </div>
        {/* 캐러셀 슬라이드 */}
        {/* 본문 */}
      </section>
      <ItemDetailCate />
    </>
  );
}

export default ItemDetailPage;
