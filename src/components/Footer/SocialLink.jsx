import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { socialIconAnimation } from "../../utils/animations";
import { use, useEffect } from "react";

export const SocialLinks = ({ instagram, github, linkedin }) => {
  useEffect(() => {
    socialIconAnimation();
  }, []);
  return (
    <div className="social-icons-wrapper flex gap-5 items-center justify-center">
      <a className="social-icons" href={instagram}>
        <Instagram />
      </a>
      <a className="social-icons" href={github}>
        <GitHub />
      </a>
      <a className="social-icons" href={linkedin}>
        <LinkedIn />
      </a>
    </div>
  );
};
