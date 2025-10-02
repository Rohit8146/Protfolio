import { BannerData, footerData } from "../../data/data";
import { Heading } from "./../../ui/Heading";
import { Paragraph } from "./../../ui/Paragraph";
import ImageTag from "../../ui/ImageTag";
import { SocialLinks } from "../Footer/SocialLink";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import { useContext, useEffect } from "react";
import { ProtfolioContext } from "../../context/ProtfolioContext";
import { listPointAnimation } from "../../utils/animations";

export const Banner = () => {
  useEffect(() => {
    listPointAnimation();
  }, []);
  const { isDarkTheme } = useContext(ProtfolioContext);
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex justify-between items-center max-md:flex-col-reverse max-md:gap-10">
          <div className="content w-[60%] max-md:w-full max-md:text-left">
            <Heading heading={BannerData.heading} />
            <Paragraph description={BannerData.description} />
            <div className="location-availbility pt-7 flex flex-col gap-2">
              <div className="flex gap-4">
                <LocationPinIcon
                  sx={isDarkTheme ? { color: "#fff" } : { color: "#000" }}
                />
                <Paragraph description={BannerData.location} />
              </div>
              <span
                className="availability flex flex-row gap-2 px-2"
                role="status"
                aria-live="polite"
              >
                <span className="dot" aria-hidden="true"></span>
                <Paragraph description={BannerData.availability} />
              </span>
            </div>
            <div className="social-icons_wrapper py-10 flex justify-start">
              <SocialLinks
                instagram={footerData.instagram}
                github={footerData.github}
                linkedin={footerData.linkedin}
              />
            </div>
          </div>
          <div className="image_card w-[35%] max-md:w-full max-md:text-center">
            <ImageTag src={BannerData.image} alt="Banner Image" />
          </div>
        </div>
      </div>
    </section>
  );
};
