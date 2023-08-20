import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { name: "박상현", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "이한재";
    },
    increase(state, action) {
      state.age += action.payload;
    },
  },
});

const cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 0,
      name: "White and Black",
      imgUrl: "img/shoes1.jpg",
      count: 2,
    },
    {
      id: 1,
      title: "Red Knit",
      imgUrl: "img/shoes2.jpg",
      count: 1,
    },
    {
      id: 2,
      title: "Grey Yordan",
      imgUrl: "img/shoes3.jpg",
      count: 1,
    },
  ],
  reducers: {
    addCount(state, action) {
      const num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[num].count++;
    },
    decreaseCount(state, action) {
      const num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      if (state[num].count > 0) {
        state[num].count--;
      } else if (state[num].count === 0) {
        alert("최소 수량은은 0입니다.");
      }
    },
    deleteItem(state, action) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state.splice(num, 1);
    },
    addItem(state, action) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      if (num !== -1) {
        state[num].count++;
      } else {
        state.push(action.payload);
      }
    },
    sortName(state, action) {
      state.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
  },
});

export let { addCount, decreaseCount, addItem, deleteItem, sortName } =
  cart.actions;
export let { changeName, increase } = user.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
