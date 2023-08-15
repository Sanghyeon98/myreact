import React, { useState } from "react";
import { useReducer } from "react";
import UseReducerEx1 from "./components/UseReducerEx1";
import UserReducerEx2 from "./components/UserReducerEx2";

function App() {
  //const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [count, countDispatch] = useReducer(countReducer, 0);

  function countReducer(oldCount, action) {
    switch (action.type) {
      case "UP":
        return oldCount + action.number;
      case "DOWN":
        return oldCount - action.number;
      case "RESET":
        return 0;
      default:
        return false;
    }

    // if (action.type === "UP") {
    //   return oldCount + action.number;
    // } else if (action.type === "DOWN") {
    //   return oldCount - action.number;
    // } else {
    //   return 0;
    // }
  }

  function down() {
    countDispatch({ type: "DOWN", number: number });
  }
  function up() {
    countDispatch({ type: "UP", number: number });
  }
  function reset() {
    countDispatch({ type: "RESET", number: number });
  }
  function changNumber(e) {
    setNumber(Number(e.target.value));
  }

  return (
    <div>
      {/* <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset} />
      <input type="button" value="+" onClick={up} />
      <input type="text" value={number} onChange={changNumber} />
      <span>{count}</span> */}
      {/* <UseReducerEx1 /> */}
      <UserReducerEx2 />
    </div>
  );
}

export default App;
