import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { legacy_createStore as createStore } from "redux";
function reducer(currentState, action) {
  if (currentState === undefined) {
    return { number: 1 };
  }

  const newState = { ...currentState };

  if (action.type === "PLUS") {
    newState.number++;
  }
  return newState;
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 onplus={props.onplus} />
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 onplus={props.onplus} />
    </div>
  );
}
function Right3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3 </h1>
      <button onClick={() => dispatch({ type: "PLUS" })}>+</button>
    </div>
  );
}
function Left1() {
  return (
    <div>
      <h1>Left1 :</h1>
      <Left2 />
    </div>
  );
}
function Left2() {
  console.log("left2");
  return (
    <div>
      <h1>Left2 </h1>
      <Left3 />
    </div>
  );
}
function Left3(props) {
  // function f(state){
  //   return state.number;
  // }
  // const number = useSelector(f);

  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3 :{number}</h1>
    </div>
  );
}
const store = createStore(reducer);

function App() {
  // const [number, setNumber] = useState(1);
  return (
    <div className="root">
      <h1>Root</h1>
      <div className="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

export default App;
