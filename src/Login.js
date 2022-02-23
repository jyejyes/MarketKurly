import react from "react";
import "./App.css";
import Input from "./Signup/Input";
import styled from "styled-components";

function Login() {
  return (
    <main className="main_login">
      <div className="login">
        <h1>로그인</h1>
        <div>
          <form className="loginform" action="#">
            <Input type="text" placeholder="아이디를 입력하세요" />
            <Input type="password" placeholder="비밀번호를 입력하세요" />

            <div className="find_account">
              <div className="secure_check">
                <input id="secure_checkbox" type="checkbox" checked />
                <label for="secure_checkbox"></label>
                <label for="secure_checkbox">보안접속</label>
              </div>
              <div>
                <findBtn>아이디 찾기</findBtn>
                <findBtn>비밀번호 찾기</findBtn>
              </div>
            </div>
            <button type="submit">로그인</button>
            <a className="goSignup" href="signup.html">
              회원가입
            </a>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;

const findBtn = styled.button``;
