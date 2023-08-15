import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Message from "./components/Message";
import Title from "./components/Title";
import LangContext from "./contexts/LangContext";
import ColorContext from "./contexts/ColorContext";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/ColorContext";
import SelectColors from "./components/SelectColors";
import Page from "./components/Page";
import ThemeContext, { ThemeProvider } from "./contexts/ThemeContext";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [lang, setLeng] = useState("en");
  const OnToggleLang = () => {
    const changeLang = lang === "en" ? "kr" : "en";
    setLeng(changeLang);
  };
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div>
        {/* <LangContext.Provider value={lang}>
          <Button OnToggleLang={OnToggleLang} />
          <Title />
          <Message />
        </LangContext.Provider>
        <ColorContext.Provider value={{ state: { color: "red" } }}>
          <ColorBox />
        </ColorContext.Provider> */}

        <ColorProvider>
          <SelectColors />
          <ColorBox />
        </ColorProvider>

        <hr />
        <UserContext.Provider value={"박상현"}>
          <ThemeProvider>
            <Page />
          </ThemeProvider>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
