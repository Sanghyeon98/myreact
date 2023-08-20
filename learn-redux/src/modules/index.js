import counter from "./counter";
import todos from "./todos";
import { combineReducers } from "redux";

//두개의 reducer를 합치기위해 사용
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
