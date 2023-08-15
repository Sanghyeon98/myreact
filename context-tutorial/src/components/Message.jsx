import React from "react";
import LangContext from "../contexts/LangContext";
import { useContext } from "react";

const Message = () => {
  const lang = useContext(LangContext);
  
  console.log("message: ", lang);

  const message =
    lang === "en" ? (
      <p>{lang}: Context provides a way to</p>
    ) : (
      <p>{lang} : 컨텍스트는 .... 제공합니다.</p>
    );
  return <div>{message}</div>;
};

export default Message;
