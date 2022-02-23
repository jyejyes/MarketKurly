import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Timer() {
  const [hour, setHour] = useState();
  const [min, setMin] = useState();
  const [sec, setSec] = useState();

  setInterval(() => {
    const date = new Date();
    let showHour = 23 - date.getHours();
    let showMin = 59 - date.getMinutes();
    let showSec = 59 - date.getSeconds();

    if (showHour < 10 ? setHour(`0${showHour}`) : setHour(showHour));
    if (showMin < 10 ? setMin(`0${showMin}`) : setMin(showMin));
    if (showSec < 10 ? setSec(`0${showSec}`) : setSec(showSec));
  }, 1000);

  return (
    <Container>
      <Image src="./image/clock.png" />
      <div className="hour">
        <b>{hour}</b>
      </div>
      :
      <div className="min">
        <b>{min}</b>
      </div>
      :
      <div className="sec">
        <b>{sec}</b>
      </div>
    </Container>
  );
}

const Container = styled.div`
display: flex;
align-items: center;
font-size: var(--xxlarge-font);
font-family: "Nanum Gothic", sans-serif;
margin: 30px 0px;s
`;

const Image = styled.img`
  width: 10%;
  margin-right: 10px;
`;
