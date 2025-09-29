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
function Header() {
  const { isDarkTheme } = useContext(ProtfolioContext);

  useEffect(() => {
    headerAnimation();
  }, []);
  return (
    <header className="py-5 w-[96%] mx-auto my-5 rounded-lg sticky top-5 z-50">
      <div className="container">
        <div className="inner_container flex flex-row justify-between items-center">
          <div className="logo_wrapper w-[80px] h-[100%]">
            {isDarkTheme ? (
              <ImageTag src={imageWhiteSrc} alt="logo" link="/" />
            ) : (
              <ImageTag src={imageSrc} alt="logo" link="/" />
            )}
          </div>
          <div className="flex flex-row items-center gap-10 ">
            <nav className="flex justify-between items-center gap-10">
              {headerLinks.map((data, index) => (
                <HeaderLink data={data} key={index} />
              ))}
            </nav>
            <div className="toggler-button flex flex-row items-center gap-5 px-7">
              <ThemeToggler />
              <Button title="Download CV" link="#" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
