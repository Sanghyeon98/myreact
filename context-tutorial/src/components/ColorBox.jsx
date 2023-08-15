import React from "react";
// import ColorContext from "../contexts/ColorContext";
import { ColorConsumer } from "../contexts/ColorContext";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {(value) => (
        <div>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: value.state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: value.state.subColor,
            }}
          />
        </div>
      )}
    </ColorConsumer>
    // <ColorContext.Consumer>
    //   {(value) => (
    //     <div
    //       style={{ width: "64px", height: "64px", background: value.color }}
    //     />
    //   )}
    // </ColorContext.Consumer>
  );
};

export default ColorBox;
