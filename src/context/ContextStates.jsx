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

  // loader

  const [isLoading, setIsLoading] = useState(true);

  return (
    <ProtfolioContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        isLoading,
        setIsLoading,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ProtfolioContext.Provider>
  );
}

export default ContextStates;
