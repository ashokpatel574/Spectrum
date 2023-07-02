import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const localStorageTheme = JSON.parse(localStorage.getItem("theme"));
  const [themeMode, setThemeMode] = useState(localStorageTheme || "light");

  const themeChangeHandler = () => {
    themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");

    localStorage.setItem(
      "theme",
      JSON.stringify(themeMode === "light" ? "dark" : "light")
    );
  };

  useEffect(() => {
    themeMode === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [themeMode]);

  return (
    <ThemeContext.Provider
      value={{ themeMode, setThemeMode, themeChangeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
export const useThemeContext = () => useContext(ThemeContext);
