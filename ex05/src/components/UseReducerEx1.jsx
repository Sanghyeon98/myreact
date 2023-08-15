import React from "react";
import { useReducer } from "react";
import { useState } from "react";

const UseReducerEx1 = () => {
  const [number, setNumber] = useState(0);

  const [money, Dispatch] = useReducer(Reducer, 10000);

  function Reducer(oldmoney, action) {
    // const AcTION_TYPE = {
    //   deposit: "deposit",
    //   withraw: "withraw",
    // };
    // const reducer = (state, action) => {
    //   console.log("reducer가 일을 함.", state, action);
    // };z

    switch (action.type) {
      case "출금":
        return oldmoney - action.number;
      case "예금":
        return oldmoney + action.number;
      default:
        return false;
    }
  }

  function deposit() {
    Dispatch({ type: "예금", number: number });
  }
  function withdraw() {
    Dispatch({ type: "출금", number: number });
  }

  return (
    <div>
      <h2>은행에 오신걸 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          if (e.target.value === null) {
            setNumber(0);
          }
          setNumber(parseInt(e.target.value));
        }}
      />
      <button onClick={deposit}>예금</button>
      <button onClick={withdraw}>출금 </button>
    </div>
  );
};

export default UseReducerEx1;
