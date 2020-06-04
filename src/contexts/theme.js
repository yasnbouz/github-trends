import { createContext } from "react";
const themeContext = createContext("light");
export default themeContext;
export const ThemeConsumer = themeContext.Consumer;
export const ThemeProvider = themeContext.Provider;
