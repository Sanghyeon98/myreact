import React from "react";
import LangContext from "../contexts/LangContext";
import { useContext } from "react";

const Button = ({ OnToggleLang }) => {
  const lang = useContext(LangContext);
  const oterlang = lang === "en" ? "kr" : "en";
  return <button onClick={OnToggleLang}>{oterlang}</button>;
};

export default Button;
