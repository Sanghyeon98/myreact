import React, { useCallback, useEffect, useRef, useState } from "react";

const UseCallbackExample = () => {
  const [number, setNmber] = useState(0);
  const [toggle, setToggle] = useState(true);
  const countRender = useRef(0);

  const someFunction = useCallback(() => {
    console.log("함수가 생성되었습니다.", { number });
    return;
  }, [number]);

  useEffect(() => {
    countRender.current += 1;
    console.log("함수가 새롭게 생성되었습니다.", countRender.current);
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNmber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <button onClick={someFunction}>Call someFunction</button>
    </div>
  );
};

export default UseCallbackExample;
