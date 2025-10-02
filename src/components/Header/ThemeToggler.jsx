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
    <div onClick={changeTheme} className="cursor-pointer max-md:mb-5">
      {isDarkTheme ? (
        <div className="flex flex-row items-center gap-2">
          <span className="icon--text pl-3 max-md:text-2xl max-md:font-black">
            Light Mode{" "}
          </span>{" "}
          <SunnyIcon sx={{ color: "#fff" }} />
        </div>
      ) : (
        <div className="flex flex-row items-center gap-2">
          <span className="icon--text pl-3 max-md:text-2xl max-md:font-black">
            Dark Mode{" "}
          </span>{" "}
          <DarkModeIcon sx={{ color: "#000" }} />
        </div>
      )}
    </div>
  );
};

export default ThemeToggler;
