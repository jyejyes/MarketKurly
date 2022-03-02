import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainPage from "./Mainpage/MainPage";
import Login from "./Login/Login";
import ItemDetailPage from "./ItemDetailPage/ItemDetailPage";
import Signup from "./Signup/Signup";
import Search from "./Search/Search";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import rootReducer from "./reducers";

function App() {
  const store = createStore(rootReducer);

  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search/:itemName" element={<Search />} />
          <Route path="/itemDetailPage" element={<ItemDetailPage />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
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
