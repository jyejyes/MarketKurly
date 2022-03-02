import React, { useState } from "react";
import "../App.css";
import Input from "../Signup/Input";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { addUser } from "../reducers/addUserReducer";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../reducers/isLoginReducer";

function Login() {
  const navigate = useNavigate();

  //아디, 비번 받아오기
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const idChange = (e) => {
    setId(e.target.value);
  };
  const pwChange = (e) => {
    setPw(e.target.value);
  };

  //리덕스 사용해서 로그인 구현하기

  //users: 스토어에서 아이디 저장된 부분 가져온거
  const users = useSelector((state) => state.addUserReducer);

  // 테스트
  const dispatch = useDispatch();
  const gologin = (loginState) => dispatch(isLogin(loginState));

  const onLogin = (e) => {
    e.preventDefault();
    let isUser = ""; // 유저가 맞는지 검사하는 변수

    if (id.length <= 0) alert("아이디를 입력해주세요");
    else if (pw.length <= 0) alert("비밀번호를 입력해주세요");
    else {
      for (let i in users) {
        if (users[i].idtext == id && users[i].pwtext == pw) {
          isUser = true;
          gologin(true);
          navigate("/");
          break;
        } else {
          isUser = false;
        }
      }
      isUser
        ? alert(`환영합니다. ${id}님 쇼핑을 시작하세요`)
        : alert("아이디 혹은 비밀번호를 확인해주세요");
    }
  };

  return (
    <LoginMainStyle>
      <LoginSectionStyle>
        <LoginH1Style>로그인</LoginH1Style>

        <LoginFormStyle action="#">
          <Input
            type="text"
            onChange={idChange}
            placeholder="아이디를 입력하세요"
          />
          <Input
            type="password"
            onChange={pwChange}
            placeholder="비밀번호를 입력하세요"
          />
          <LoginFindAddrStyle>
            <LoginSecureCheck className="secure_check">
              <input id="secure_checkbox" type="checkbox" />
              <label htmlFor="secure_checkbox"></label>
              <label htmlFor="secure_checkbox">보안접속</label>
            </LoginSecureCheck>
            <div>
              <FindBtn>아이디 찾기</FindBtn> | <FindBtn>비밀번호 찾기</FindBtn>
            </div>
          </LoginFindAddrStyle>
          <LoginBtnStyle onClick={onLogin}>로그인</LoginBtnStyle>
          <LoginGoSignup onClick={() => navigate("/signup")}>
            회원가입
          </LoginGoSignup>
        </LoginFormStyle>
      </LoginSectionStyle>
    </LoginMainStyle>
  );
}

export default Login;

const LoginMainStyle = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginSectionStyle = styled.section`
  margin: 50px 0px;
`;

const LoginH1Style = styled.h1`
  display: flex;
  justify-content: center;
  font-size: var(--large-font);
  margin: 30px 0px;
`;

const LoginFormStyle = styled.form`
  display: flex;
  flex-direction: column;

  & > input {
    width: 300px;
    font-size: var(--small-font);
    padding: 15px;
    border: 1px solid rgb(196, 196, 196);
    border-radius: 3px;
    margin: 5px 0px;
  }
  & > input:focus {
    outline: none;
    box-shadow: 0 0 0 0.5px black;
  }
`;

const LoginFindAddrStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--xsmall-font);
  margin-top: 5px;
  margin-bottom: 25px;

  & input[type="checkbox"] {
    display: flex;
  }
`;

const LoginSecureCheck = styled.div`
  display: flex;
  align-items: center;

  & label {
    margin-right: 5px;
  }
`;

const LoginBtnStyle = styled.button`
  display: flex;
  justify-content: center;
  width: 300px;
  font-size: var(--medium-font);
  background-color: var(--main-purple);
  color: white;
  padding: 15px;
  margin: 5px 0px;
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
`;

const LoginGoSignup = styled(LoginBtnStyle)`
  background-color: white;
  color: var(--main-purple);
`;

const FindBtn = styled.button`
  padding: 5px;
`;
