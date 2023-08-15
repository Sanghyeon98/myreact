import React from "react";
import Employee from "./Employee";

const Comp02 = function () {
  const employees = [
    { no: "202302", name: "김길동", dept: "마켓팅" },
    { no: "202303", name: "박길동", dept: "인사팅" },
    { no: "202304", name: "이길동", dept: "설계팅" },
    { no: "202305", name: "노길동", dept: "회계팅" },
    { no: "202307", name: "오길동", dept: "생산팅" },
  ];
  return (
    <div>
      <h1>배열의 출력</h1>
      {employees.map((emp) => (
        <Employee key={emp.no} emp={emp} />
      ))}
    </div>
  );
};

export default Comp02;
