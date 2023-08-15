import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.css";

const TodoInsert = ({ dispatch }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // const onSubmit = useCallback(
  //   (e) => {
  //     onInsert(value);
  //     setValue("");
  //     e.preventDefault();
  //   },
  //   [onInsert, value]
  // );
  const onSubmit1 = (e) => {
    e.preventDefault();
    dispatch({ type: "Insert", text: value });
    setValue("");
  };
  return (
    <form className="TodoInsert" onSubmit={onSubmit1}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
