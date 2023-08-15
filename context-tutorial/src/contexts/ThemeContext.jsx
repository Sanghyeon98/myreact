import { createContext, useState } from "react";

const ThemeContext = createContext({
  isDark: false,
  setIsDark: () => {},
});

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const value = { isDark, setIsDark };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
const { Consumer: ThemeConsumer } = ThemeContext;
export { ThemeProvider, ThemeConsumer };
export default ThemeContext;
