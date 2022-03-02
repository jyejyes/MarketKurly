import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Pagination({ total, limit, page, setPage }) {
  //props: total(총 게시물 수), limit(페이지당 게시물 수), page(현재 페이지 번호)
  const numPages = Math.ceil(total / limit);
  return (
    <Nav>
      <Button
        style={{ padding: "7px 10px" }}
        onClick={() => setPage(1)}
        disabled={page === 1}
      >
        &lt;&lt;
      </Button>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
      <Button
        style={{ padding: "7px 10px" }}
        onClick={() => setPage(numPages)}
        disabled={page === numPages}
      >
        &gt;&gt;
      </Button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const Button = styled.button`
  border: 1px solid rgb(200, 200, 200);
  border-right: none;
  padding: 7px 13px;
  margin: 0;
  background: white;
  font-size: 12px;

  &:last-child {
    border-right: 1px solid rgb(200, 200, 200);
  }

  &:hover {
    background: rgb(240, 240, 240);
    cursor: pointer;
  }

  &[aria-current] {
    background: rgb(240, 240, 240);
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
