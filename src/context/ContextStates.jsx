import { useState, useEffect } from "react";
import { ProtfolioContext } from "./ProtfolioContext";

function ContextStates({ children }) {
  // Initialize from localStorage, default to true (dark mode)
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("isDarkTheme");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  // Update body attribute and save to localStorage whenever theme changes
  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <ProtfolioContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ProtfolioContext.Provider>
  );
}

export default ContextStates;
