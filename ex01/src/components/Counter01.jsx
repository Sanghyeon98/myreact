import React, { useState } from "react";

const Counter01 = (props) => {
  const [number, setNumber] = useState(0);

  const onPlus = () => {
    setNumber(number + 1);
  };

  const onMinus = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -1
      </button>
      <button onClick={onPlus}>+1</button>
      <button onClick={onMinus}>-1</button>
    </div>
  );
};

export default Counter01;
