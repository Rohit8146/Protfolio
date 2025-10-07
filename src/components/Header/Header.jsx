import { headerLinks } from "../../data/data";
import imageSrc from "../../../public/logo-black.svg";
import imageWhiteSrc from "../../../public/logo-white.svg";
import HeaderLink from "./HeaderLink";
import ImageTag from "../../ui/ImageTag";
import ThemeToggler from "./ThemeToggler";
import { useContext, useEffect } from "react";
import { ProtfolioContext } from "../../context/ProtfolioContext";
import { Button } from "../../ui/Button";
import { headerAnimation } from "../../utils/animations";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

function Header() {
  const { isDarkTheme, isMobile, isLoading, setIsMobile } =
    useContext(ProtfolioContext);

  const handleMenu = () => {
    setIsMobile((prev) => !prev);
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        headerAnimation();
      }, 5000);
      return;
    } else {
      headerAnimation();
    }
  }, []);
  return (
    <header
      className={`${
        isMobile ? "mobile-active" : "desktop"
      } py-5 w-[96%] mx-auto my-5 rounded-lg sticky top-5 z-50`}
    >
      <div className="container">
        <div className="inner_container flex flex-row justify-between items-center max-md:relative">
          <div className="logo_wrapper w-[80px] h-[100%]">
            {isDarkTheme ? (
              <ImageTag src={imageWhiteSrc} alt="logo" link="/" />
            ) : (
              <ImageTag src={imageSrc} alt="logo" link="/" />
            )}
          </div>
          <div className="navigation flex flex-row items-center gap-10 max-md:flex-col max-md:fixed max-md:top-0 max-md:left-0 max-md:w-[100%] max-md:h-[100vh] max-md:p-5 max-md:justify-center max-md:items-center">
            <div
              className="cross hidden max-md:block absolute top-5 right-5"
              onClick={handleMenu}
            >
              <ClearIcon className="cursor-pointer" sx={{ fontSize: 40 }} />
            </div>
            <nav className="flex justify-between items-center gap-10 max-md:flex-col max-md:gap-10">
              {headerLinks.map((data, index) => (
                <HeaderLink data={data} key={index} handleClick={handleMenu} />
              ))}
            </nav>
            <div
              onClick={handleMenu}
              className="toggler-button flex flex-row items-center gap-5 px-7 max-md:flex-col max-md:gap-5"
            >
              <ThemeToggler />
              <Button
                title="Download CV"
                link="./public/Rohit_Tandon_Resume.pdf"
                targetBlank={true}
              />
            </div>
          </div>

          <div
            className="humburger-menu hidden max-md:block"
            onClick={handleMenu}
          >
            <MenuIcon className="cursor-pointer" sx={{ fontSize: 40 }} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
