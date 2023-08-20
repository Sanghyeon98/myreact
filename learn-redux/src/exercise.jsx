import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

//액션 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

//액션 함수 정의
function increase() {
  return {
    type: INCREASE,
  };
}
const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

//리듀서 만들기
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

//createStore가 reducer함수를 사용
const store = createStore(reducer);
console.log("-------------------------------------------------");
console.log(store.getState());
console.log("-------------------------------------------------");

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const subscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));
