import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Check() {
  const title = [
    "이용약관 동의(필수)",
    "개인정보 수집・이용 동의 (필수)",
    "개인정보 수집・이용 동의 (선택)",
    "무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)",
    "본인은 만 14세 이상입니다. (필수)",
  ];

  //   const

  //eachCheck4 는 특별함 all로 쓰이니까 주의할 것
  const [allCheck, setAllCheck] = useState(false);
  const [eachCheck, setEachCheck] = useState(false);
  const [eachCheck2, setEachCheck2] = useState(false);
  const [eachCheck3, setEachCheck3] = useState(false);
  const [eachCheck4, setEachCheck4] = useState(false);
  const [eachCheck5, setEachCheck5] = useState(false);
  const [each4Child1, setEach4Child1] = useState(false);
  const [each4Child2, setEach4Child2] = useState(false);

  const allCheckChange = () => {
    if (!allCheck) {
      setAllCheck(true);
      setEachCheck(true);
      setEachCheck2(true);
      setEachCheck3(true);
      setEachCheck4(true);
      setEachCheck5(true);
      setEach4Child1(true);
      setEach4Child2(true);
    } else {
      setAllCheck(false);
      setEachCheck(false);
      setEachCheck2(false);
      setEachCheck3(false);
      setEachCheck4(false);
      setEachCheck5(false);
      setEach4Child1(false);
      setEach4Child2(false);
    }
  };

  const checkChange = () => {
    setEachCheck(!eachCheck);
  };
  const checkChange2 = () => {
    setEachCheck2(!eachCheck2);
  };
  const checkChange3 = () => {
    setEachCheck3(!eachCheck3);
  };
  const checkChange4 = () => {
    if (!eachCheck4) {
      setEachCheck4(true);
      setEach4Child1(true);
      setEach4Child2(true);
    } else {
      setEachCheck4(false);
      setEach4Child1(false);
      setEach4Child2(false);
    }
  };
  const checkChild1 = () => {
    setEach4Child1(!each4Child1);
  };
  const checkChild2 = () => {
    setEach4Child2(!each4Child2);
  };
  const checkChange5 = () => {
    setEachCheck5(!eachCheck5);
  };

  useEffect(() => {
    if (eachCheck && eachCheck2 && eachCheck3 && eachCheck4 && eachCheck5) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
    if (each4Child1 && each4Child2) setEachCheck4(true);
    else setEachCheck4(false);
  }, [
    eachCheck,
    eachCheck2,
    eachCheck3,
    eachCheck4,
    eachCheck5,
    each4Child1,
    each4Child2,
  ]);

  return (
    <Form>
      <Th>이용약관동의</Th>
      <Td>
        <div>
          <CheckBox
            onClick={allCheckChange}
            type="checkbox"
            id="all_check"
            checked={allCheck}
          ></CheckBox>
          <AllText htmlFor="all_check">전체 동의합니다.</AllText>
          <SmallText>
            선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할
            수 있습니다.
          </SmallText>
        </div>
        <div>
          <CheckBox
            onClick={checkChange}
            type="checkbox"
            id="each_check"
            checked={eachCheck}
          ></CheckBox>
          <EachText htmlFor="each_check">{title[0]}</EachText>
        </div>
        <div>
          <CheckBox
            onClick={checkChange2}
            type="checkbox"
            id="each_check2"
            checked={eachCheck2}
          ></CheckBox>
          <EachText htmlFor="each_check2">{title[1]}</EachText>
        </div>
        <div>
          <CheckBox
            onClick={checkChange3}
            type="checkbox"
            id="each_check3"
            checked={eachCheck3}
          ></CheckBox>
          <EachText htmlFor="each_check3">{title[2]}</EachText>
        </div>
        <div>
          <CheckBox
            onClick={checkChange4}
            type="checkbox"
            id="each_check4"
            checked={eachCheck4}
          ></CheckBox>
          <EachText htmlFor="each_check4">{title[3]}</EachText>
        </div>
        <div>
          <CheckBox
            onClick={checkChild1}
            type="checkbox"
            id="check4_child1"
            checked={each4Child1}
          ></CheckBox>
          <EachText htmlFor="check4_child1">SMS</EachText>
          <CheckBox
            onClick={checkChild2}
            type="checkbox"
            id="check4_child2"
            checked={each4Child2}
          ></CheckBox>
          <EachText htmlFor="check4_child2">이메일</EachText>
          <EventText>
            <span>ㄴ </span>
            동의 시 한달간 [5% 적립]+[무제한 무료배송]
            <span>(첫 주문 후 적용)</span>
          </EventText>
        </div>
        <div>
          <CheckBox
            onClick={checkChange5}
            type="checkbox"
            id="each_check5"
            checked={eachCheck5}
          ></CheckBox>
          <EachText htmlFor="each_check5">{title[4]}</EachText>
        </div>
      </Td>
    </Form>
  );
}

const Form = styled.form`
  width: 650px;
  border-bottom: 1px solid black;
  display: flex;
  padding: 10px;
  & div:nth-child(6) {
    padding-left: 20px;
  }
`;

const Th = styled.th`
  text-align: start;
  font-size: var(--small-font);
  width: 22%;
  padding: 15px;
`;

const Td = styled.td`
width: 77%;
padding: 10px;s
`;

const SmallText = styled.p`
  font-size: var(--xsmall-font);
  margin-left: 30px;
  color: rgb(100, 100, 100);
  margin-bottom: 10px;
`;

const CheckBox = styled.input`
  & {
    display: none;
  }
  & + label {
    display: inline-block;
    cursor: pointer;
    line-height: 25px;
    padding-left: 30px;
    background: url("./image/ico_checkbox.svg") left/22px no-repeat;
  }
  &:checked + label {
    display: inline-block;
    cursor: pointer;
    line-height: 25px;
    padding-left: 30px;
    background: url("./image/ico_checkbox_checked.svg") left/22px no-repeat;
  }
`;

const AllText = styled.label`
  font-size: 18px;
  color: rgb(70, 70, 70);
`;

const EachText = styled.label`
  font-size: var(--small-font);
  color: rgb(70, 70, 70);
  padding: 8px;
  margin-right: 70px;
`;

const EventText = styled.p`
  font-size: var(--xsmall-font);
  margin-left: 40px;
  color: var(--main-purple);
  & > span:nth-child(1) {
    color: rgb(220, 220, 220);
  }
  & > span:nth-child(2) {
    color: rgb(70, 70, 70);
  }
`;
