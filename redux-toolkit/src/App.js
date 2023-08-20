import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import { up } from "./counterSlice.js";

// function reducer(state = initialState, action) {
//   if (action.type === "up") {
//     return {
//       ...state,
//       value: state.value + action.step,
//     };
//   }
//   return state;
// }
// const initialState = { value: 0 };
// const store = createStore(reducer);

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.value;
  });
  return (
    <div>
      <button
        onClick={
          () =>
            // dispatch({ type: "counterSlice/up", step: 2 })
            dispatch(up(2)) //payload로 써야함
        }
      >
        +
      </button>
      {count}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
