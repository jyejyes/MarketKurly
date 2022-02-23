import React, { useState, useRef, useEffect } from "react";

const Practice = () => {
  const [count, setCount] = useState(1);
  const countRendering = useRef(1);

  useEffect(() => {
    countRendering.current += 1;
    console.log(`렌더링 수 : ${countRendering.current}`);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
};

export default Practice;
