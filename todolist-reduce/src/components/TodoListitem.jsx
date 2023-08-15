import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoTemplate.css";

const TodoListitem = ({ todo, dispatch }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListitem">
      <div className={checked ? "checkBox_checked" : "checkBox"}>
        <div onClick={() => dispatch({ type: "Toggle", id })}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => dispatch({ type: "Remove", id })}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListitem;
