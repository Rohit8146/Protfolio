import SunnyIcon from "@mui/icons-material/Sunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { ProtfolioContext } from "./../../context/ProtfolioContext";

const ThemeToggler = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ProtfolioContext);

  const changeTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <div onClick={changeTheme} className="cursor-pointer">
      {isDarkTheme ? (
        <SunnyIcon sx={{ color: "#fff" }} />
      ) : (
        <DarkModeIcon sx={{ color: "#000" }} />
      )}
    </div>
  );
};

export default ThemeToggler;
