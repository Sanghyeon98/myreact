import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { Color } from "../contexts/Color";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const { background, color } = useContext(Color);

  return (
    <div
      className="footer"
      style={{
        background: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <button
        style={{ background: background, color: color }}
        className="button"
        onClick={() => setIsDark(!isDark)}
      >
        Dark Mode
      </button>
    </div>
  );
};

export default Footer;
