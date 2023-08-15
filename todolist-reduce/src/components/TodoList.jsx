import React from "react";
import TodoListitem from "./TodoListitem";
import "./TodoTemplate.css";

const TodoList = ({ todos, dispatch }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListitem todo={todo} key={todo.id} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TodoList;
