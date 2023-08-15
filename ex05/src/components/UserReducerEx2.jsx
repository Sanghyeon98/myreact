import React from "react";
import Student from "./Student";
import { useReducer } from "react";
import { useState } from "react";

const reducer = (state, action) => {
  console.log("reducer 실행..", state, action);
  switch (action.type) {
    case "add":
      const name = action.payload.name;
      const newStudent = { id: Date.now(), name: name, isHere: false };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "DELETE":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case "check":
      const newStudents = state.students.map((s) => {
        if (s.id === action.payload.id) return { ...s, isHere: !s.isHere };
        else {
          return s;
        }
      });
      return {
        count: state.count,
        students: newStudents,
      };

    default:
      return state;
  }
};

const initState = {
  count: 1,
  students: [{ id: Date.now(), name: "상현이", isHere: false }],
};

const UserReducerEx2 = () => {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력하세요."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => dispatch({ type: "add", payload: { name } })}>
        추가
      </button>
      <hr />
      {studentsInfo.students.map((s) => (
        <Student key={s.id} student={s} dispatch={dispatch}></Student>
      ))}
    </div>
  );
};

export default UserReducerEx2;
