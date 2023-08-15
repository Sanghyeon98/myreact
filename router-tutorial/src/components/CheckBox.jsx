import React from "react";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import style from "./CheckBox.module.css";

const CheckBox = ({ children, checked, ...rest }) => {
  return (
    <div className={style.checkbox}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={style.icon}>
          {checked ? (
            <BsCheckCircleFill className={style.checked} />
          ) : (
            <BsCheckCircle className={style.checked} />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
};

export default CheckBox;
