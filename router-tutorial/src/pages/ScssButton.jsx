import React from "react";
import Button from "../components/Button";
import "../components/Button.scss";

const ScssButton = () => {
  return (
    <div className="buttonWrapper">
      <div>
        <Button size="large" onClick={() => console.log("파란버튼 클릭!")}>
          BUTTON1
        </Button>
        <Button onMouseMove={() => console.log("나는 잘해~")}>BUTTON</Button>
        <Button size="small">BUTTON1</Button>
      </div>
      <div>
        <Button size="large" color="pink">
          BUTTON1
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON1
        </Button>
      </div>
      <div>
        <Button size="large" color="orange">
          BUTTON1
        </Button>
        <Button color="orange">BUTTON</Button>
        <Button size="small" color="orange">
          BUTTON1
        </Button>
      </div>
    </div>
  );
};

export default ScssButton;
