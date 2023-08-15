import React from "react";

const Keduit = (props) => {
  const { no, name, age } = props.ked;
  return (
    <tr>
      <td>{no}</td>
      <td>{name}</td>
      <td>{age}</td>
    </tr>
  );
};

export default Keduit;
