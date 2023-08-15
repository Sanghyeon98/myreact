import React from "react";
import "./Button.scss";
import classNames from "classnames";

const Button = ({ children, size, color, ...rest }) => {
  return (
    // <button className={["Button", size].join(" ")}>{children}</button>
    <button
      className={classNames("Button", size, color)}
      // onClick={onClick}
      // onMouseMove={onMouseMove}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
  color: "blue",
};
export default Button;
