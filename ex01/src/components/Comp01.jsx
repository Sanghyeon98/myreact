import React from "react";
import Employee from "./Employee";

const Comp01 = function () {
  const employee = { no: "202301", name: "홍길동", dept: "마켓팅" };
  const employee1 = { no: "202302", name: "강길동", dept: "인사팀" };
  return (
    <div>
      <h1>props 란</h1>
      <Employee emp={employee} />
      <hr />
      <Employee emp={employee1} />
    </div>
  );
};

export default Comp01;
