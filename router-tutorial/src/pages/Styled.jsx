import React from "react";
import styled from "styled-components";

const SimButton = styled.button`
  color: white;
  background-color: lightgray;
  box-shadow: 0 0 20px 0 white, 5px 5px 10px 10px purple, -5px -5px 10px 0 cyan,
    inset 0 0 14px 0 white, inset -10px -10px 60px 0 purple,
    inset -10px -10px 70px 0 blue, inset -10px -10px 100px 0 cyan,
    inset -10px -10px 70px 0 powderblue;
`;

const LargeButton = styled(SimButton)`
  font-size: 50px;
`;

const ReactButton = (props) => {
  return <button className={props.className}>{props.children}</button>;
};
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;
const PrimaryButton = styled.button`
  color: ${function (props) {
    return props.$primary ? "blue" : "red";
  }};
`;
const Styled = () => {
  return (
    <div>
      <SimButton>Simple</SimButton>
      <LargeButton>LargeButton</LargeButton>
      <ReactButton>React Button</ReactButton>
      <ReactLargeButton>React Large Button</ReactLargeButton>
      <PrimaryButton $primary>primary</PrimaryButton>
    </div>
  );
};

export default Styled;
