import React from "react";
import Keduit from "./Keduit";

const Comp03 = () => {
  const keduit = [
    { no: 1, name: "김궁서", age: 33 },
    { no: 2, name: "구상모", age: 26 },
    { no: 3, name: "임대훈", age: 27 },
    { no: 4, name: "노태종", age: 33 },
    { no: 5, name: "김진", age: 23 },
    { no: 6, name: "김영란", age: 38 },
    { no: 7, name: "김재훈", age: 28 },
    { no: 8, name: "박기웅", age: 29 },
    { no: 9, name: "이희태", age: 32 },
    { no: 10, name: "김유진", age: 25 },
    { no: 11, name: "안광현", age: 24 },
    { no: 12, name: "박상현", age: 25 },
    { no: 13, name: "이한재", age: 24 },
  ];
  return (
    <div>
      <h1>한국정보교육원</h1>
      <table className="table table-hover table-striped">
        <thead className="table-danger">
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>나이</th>
          </tr>
        </thead>
        <tbody className="table-primary ">
          {keduit.map((ked) => (
            <Keduit key={ked.no} ked={ked} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comp03;
