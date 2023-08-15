import { useCallback, useRef, useState } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import { useReducer } from "react";

function App() {
  const idNext = useRef(4);

  const initState = [
    { id: 1, text: "다이어트하기", checked: true },
    { id: 2, text: "운동하기", checked: true },
    { id: 3, text: "산책하기", checked: false },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "Insert":
        const todo = {
          id: idNext.current,
          text: action.text,
          checked: false,
        };
        idNext.current += 1;
        const newtodos = [...state, todo];
        return newtodos;
        //state.contcat(todo)
      case "Remove":
        return state.filter((todo) => todo.id !== action.id);
      case "Toggle":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
        );
      default:
        return state;
    }
  };
  const [todosRedu, dispatch] = useReducer(reducer, initState);

  const [todos, setTodos] = useState([
    { id: 1, text: "다이어트하기", checked: true },
    { id: 2, text: "운동하기", checked: true },
    { id: 3, text: "산책하기", checked: false },
  ]);

  // const nextId = useRef("4");

  // const onInsert = useCallback(
  //   (text) => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //       checked: false,
  //     };
  //     setTodos([...todos, todo]);
  //     nextId.current += 1;
  //   },
  //   [todos]
  // );

  // const onRemove = useCallback(
  //   (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   },
  //   [todos]
  // );

  // const onToggle = useCallback(
  //   (id) => {
  //     setTodos(
  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo
  //       )
  //     );
  //   },
  //   [todos]
  // );
  return (
    <div>
      <TodoTemplate>
        <TodoInsert dispatch={dispatch} />
        <TodoList todos={todosRedu} dispatch={dispatch} />
      </TodoTemplate>
    </div>
  );
}

export default App;
