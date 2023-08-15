import React from "react";
import { useRef } from "react";
import { useState } from "react";

const RefLocal2 = () => {
  const [render, SetRender] = useState(0);
  const countRef = useRef(0);

  let countVar = 0;
  const onRendering = () => {
    SetRender(render + 1);
  };
  const onIncreaseRef = () => {
    countRef.current += 1;
    console.log("ref : ", countRef.current);
  };
  console.log("ref : ", countRef.current);
  const onIncreaseVar = () => {
    countVar += 1;
  };
  const onPrintResult = () => {
    console.log(`ref ${countRef.current}, var: ${countVar}`);
  };
  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={onRendering}>렌더링</button>
      <button onClick={onIncreaseRef}>Ref 증가</button>
      <button onClick={onIncreaseVar}>Var증가</button>
      <button onClick={onPrintResult}>Ref Var</button>
    </div>
  );
};

export default RefLocal2;
