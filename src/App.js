import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainPage from "./Mainpage/MainPage";
import QuickNavBar from "./QuickNavBar";
import Login from "./Login";
import ItemDetailPage from "./ItemDetailPage/ItemDetailPage";
import Signup from "./Signup/Signup";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/itemDetailPage" element={<ItemDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

{
  /* <Header /> */
}
{
  /* <MainPage /> */
}
{
  /* <Login /> */
}
{
  /* <Signup /> */
}
{
  /* <ItemDetailPage /> */
}
{
  /* <Footer /> */
}

export default App;

const GlobalStyle = createGlobalStyle`
:root {
  /* 색상 */
  --main-purple: rgb(90, 21, 124);
  --white-color: rgb(248, 248, 248);
  --gray-color: rgb(140, 140, 140);

  /* 폰트 사이즈 */
  font-family: "Roboto", sans-serif;
  --xxlarge-font: 32px;
  --xlarge-font: 28px;
  --large-font: 20px;
  --medium-font: 16px;
  --small-font: 14px;
  --xsmall-font: 12px;
}

* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  min-width: 1050px;
  font-family: "Noto Sans KR", sans-serif;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}

button {
  all: unset;
}
`;
