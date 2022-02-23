import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import QuickNavBar from "../QuickNavBar";
import Input from "./Input";
import More from "./More";
import FindAddress from "../FindAddress";
import Check from "./Check";
function Signup() {
  //아이디~이름
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");

  const [idColor, setIdColor] = useState("");
  const [pwColor1, setPwColor1] = useState("");
  const [pwColor2, setPwColor2] = useState("");
  const [pwColor3, setPwColor3] = useState("");
  const [pwcColor, setPwcColor] = useState("");

  //메세지 상태저장
  const [idMessage, setIdMessage] = useState(
    "• 6자 이상의 영문 혹은 영문과 숫자를 조합"
  );
  const [passwordMessage1, setPasswordMessage1] = useState("• 10자 이상 입력");
  const [passwordMessage2, setPasswordMessage2] = useState(
    "• 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합"
  );
  const [passwordMessage3, setPasswordMessage3] = useState(
    "• 동일한 숫자 3개 이상 연속 사용 불가"
  );
  const [passwordCheckMessage, setPasswordCheckMessage] = useState(
    "• 동일한 비밀번호를 입력해주세요."
  );

  //아이디 유효성 검사 함수
  const onChangeId = useCallback((e) => {
    const idRegex = /^[a-zA-Z0-9]{6,}$/;
    const idCurrent = e.target.value;
    setId(idCurrent);

    if (!idRegex.test(idCurrent)) {
      setIdMessage("✕ 6자 이상의 영문 혹은 영문과 숫자를 조합");
      setIdColor("rgb(228, 56, 56)");
    } else {
      setIdMessage("✓ 6자 이상의 영문 혹은 영문과 숫자를 조합");
      setIdColor("rgb(51, 141, 39)");
    }
  }, []);

  //비밀번호 유효성 검사 함수
  const onChangePassword = useCallback(
    (e) => {
      const pwRegex = /^[a-zA-Z0-9!@#$%^&*()?_~]{10,20}$/;
      const pwCurrent = e.target.value;
      setPassword(pwCurrent);
      //첫번쨰 조건
      if (!pwRegex.test(pwCurrent)) {
        setPasswordMessage1("✕ 10자 이상 입력");
        setPwColor1("rgb(228, 56, 56)");
      } else {
        setPasswordMessage1("✓ 10자 이상 입력");
        setPwColor1("rgb(51, 141, 39)");
      }
      //두번째 조건
      let chk = 0;
      if (pwCurrent.search(/[0-9]/g) != -1) chk++;
      if (pwCurrent.search(/[a-z]/gi) != -1) chk++;
      if (pwCurrent.search(/[!@#$%^&*()?_~]/g) != -1) chk++;

      if (chk < 2) {
        setPasswordMessage2(
          "✕ 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합"
        );
        setPwColor2("rgb(228, 56, 56)");
      } else {
        setPasswordMessage2(
          "✓ 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합"
        );
        setPwColor2("rgb(51, 141, 39)");
      }
      //세번쨰 조건
      if (/(\w)\1\1/.test(pwCurrent)) {
        setPasswordMessage3("✕ 동일한 숫자 3개 이상 연속 사용 불가");
        setPwColor3("rgb(228, 56, 56)");
      } else {
        setPasswordMessage3("✓ 동일한 숫자 3개 이상 연속 사용 불가");
        setPwColor3("rgb(51, 141, 39)");
      }

      //비번확인
      if (pwCurrent != passwordCheck) {
        setPasswordCheckMessage("✕ 동일한 비밀번호를 입력해주세요.");
        setPwcColor("rgb(228, 56, 56)");
      } else {
        setPasswordCheckMessage("✓ 동일한 비밀번호를 입력해주세요.");
        setPwcColor("rgb(51, 141, 39)");
      }
    },
    [password]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      const pwcCurrent = e.target.value;
      setPasswordCheck(pwcCurrent);
      if (password != pwcCurrent) {
        setPasswordCheckMessage("✕ 동일한 비밀번호를 입력해주세요.");
        setPwcColor("rgb(228, 56, 56)");
      } else {
        setPasswordCheckMessage("✓ 동일한 비밀번호를 입력해주세요.");
        setPwcColor("rgb(51, 141, 39)");
      }
    },
    [password]
  );

  //focus 시 나타나는 함수
  const [idFocus, setIdFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordCheckFocus, setPassworcCheckFocus] = useState(false);
  const [eventClick, setEventClick] = useState(false);

  function onIdMouseFocus() {
    setIdFocus(true);
  }
  function onPasswordMouseFocus() {
    setPasswordFocus(true);
  }
  function onPasswordCheckMouseFocus() {
    setPassworcCheckFocus(true);
  }
  function onEventClick() {
    setEventClick(true);
  }
  return (
    <main className="main_signup">
      {/* <QuickNavBar /> */}

      <div className="signup">
        <div className="signup_title">
          <h1>회원가입</h1>
          <div className="essential_input">
            <span className="star">*</span>필수입력사항
          </div>
        </div>
        <div className="signup_form">
          <form action="#" method="POST">
            <table>
              <tbody>
                <tr>
                  <th>
                    아이디<span className="star">*</span>
                  </th>
                  <td>
                    <Input
                      onFocus={onIdMouseFocus}
                      onChange={onChangeId}
                      type="text"
                      placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                    />
                    <a>중복확인</a>
                    {idFocus && <More color={idColor} text={idMessage}></More>}
                  </td>
                </tr>

                <tr>
                  <th>
                    비밀번호<span className="star">*</span>
                  </th>
                  <td>
                    <Input
                      onFocus={onPasswordMouseFocus}
                      onChange={onChangePassword}
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                    />
                    {passwordFocus && (
                      <>
                        <More color={pwColor1} text={passwordMessage1}></More>
                        <More color={pwColor2} text={passwordMessage2}></More>
                        <More color={pwColor3} text={passwordMessage3}></More>
                      </>
                    )}
                  </td>
                </tr>

                <tr>
                  <th>
                    비밀번호확인<span className="star">*</span>
                  </th>
                  <td>
                    <Input
                      onChange={onChangePasswordCheck}
                      onFocus={onPasswordCheckMouseFocus}
                      type="password"
                      placeholder="비밀번호를 한번 더 입력해주세요"
                    />
                    {passwordCheckFocus && (
                      <More color={pwcColor} text={passwordCheckMessage}></More>
                    )}
                  </td>
                </tr>

                <tr>
                  <th>
                    이름<span className="star">*</span>
                  </th>
                  <td>
                    <Input placeholder="이름을 입력해주세요" />
                  </td>
                </tr>
                <tr>
                  <th>
                    이메일<span className="star">*</span>
                  </th>
                  <td>
                    <Input placeholder="예: dsfdsf@gmail.com" />
                    <a>중복확인</a>
                  </td>
                </tr>
                <tr>
                  <th>
                    휴대폰<span className="star">*</span>
                  </th>
                  <td>
                    <Input placeholder="숫자만 입력해주세요" />
                  </td>
                </tr>
                <tr>
                  <th>
                    주소<span className="star">*</span>
                  </th>
                  <td>
                    <div className="address_box">
                      <input
                        type="text"
                        className="address"
                        id="address_1"
                        placeholder="주소"
                        readOnly
                      />
                      <a href="#" className="address" id="researchBtn">
                        재검색
                      </a>
                      <input
                        type="text"
                        className="address"
                        id="address_2"
                        placeholder="상세주소를 입력해주세요"
                      />
                    </div>

                    <FindAddress
                      color="var(--main-purple)"
                      background="white"
                      font="var(--small-font)"
                      pad="10px 150px"
                    />
                    <p className="more_add">
                      배송지에 따라 물품이 다를 수 있습니다.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>성별</th>
                  <td>
                    <div className="gender">
                      <div>
                        <input type="radio" id="woman" name="gender" />
                        <label htmlFor="woman">여성</label>
                      </div>

                      <div>
                        <input type="radio" id="man" name="gender" />
                        <label htmlFor="man">남성</label>
                      </div>
                      <div>
                        <input type="radio" id="nocheck" name="gender" />
                        <label htmlFor="nocheck">선택 안함</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>생년월일</th>
                  <td>
                    <div className="birthday">
                      <input type="text" placeholder="YYYY" />/
                      <input type="text" placeholder="MM" />/
                      <input type="text" placeholder="DD" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>추가입력 사항</th>
                  <td>
                    <div className="add_input">
                      <div>
                        <input
                          onClick={onEventClick}
                          type="radio"
                          id="recommend_id"
                          name="add_input"
                        />
                        <label htmlFor="recommend_id">추천인 아이디</label>
                      </div>

                      <div>
                        <input
                          onClick={onEventClick}
                          type="radio"
                          id="event"
                          name="add_input"
                        />
                        <label htmlFor="event">참여 이벤트명</label>
                      </div>
                    </div>
                    {eventClick && (
                      <div className="add_event_box">
                        <input
                          className="event_input"
                          type="text"
                          placeholder="추천인 아이디를 입력해주세요."
                        />
                        <p className="more_add">
                          추천인 아이디와 참여 이벤트명 중 하나만 선택
                          가능합니다.
                          <br />
                          가입 이후, 수정이 불가합니다.
                          <br />
                          대소문자 및 띄어쓰기에 유의해주세요.
                          <br />
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>

        <Check></Check>
      </div>

      <button className="signup_btn">가입하기</button>
    </main>
  );
}

// const More = styled.p`
//   font-size: var(--xsmall-font);
//   margin: 7px 0px;
//   color: rgb(82, 82, 82);
// `;

export default Signup;
