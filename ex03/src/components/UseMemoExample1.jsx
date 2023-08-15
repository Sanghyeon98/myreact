import React, { useMemo } from "react";
import { useState } from "react";

const hardCalulator = (number) => {
  let now = Date.now();
  let start = now;

  while (now < start + 2000) {
    now = Date.now();
  }
  console.log("어려운 계산기..");
  return number + 1000;
};
const easyCalulator = (number) => {
  console.log("쉬운 계산기...");
  return number + 1;
};
const UseMemoExample1 = () => {
  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);

  // const easySum = easyCalulator(easyNumber);
  // const hardSum = hardCalulator(hardNumber);
  const easySum = useMemo(() => easyCalulator(easyNumber), [easyNumber]);
  const hardSum = useMemo(() => hardCalulator(hardNumber), [hardNumber]);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 1000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <hr />
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />

      <span> + 1 ={easySum}</span>
    </div>
  );
};

export default UseMemoExample1;
