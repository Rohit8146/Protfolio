import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { socialIconAnimation } from "../../utils/animations";
import { useEffect } from "react";

export const SocialLinks = ({ instagram, github, linkedin, whatsapp }) => {
  useEffect(() => {
    socialIconAnimation();
  }, []);
  return (
    <div className="social-icons-wrapper flex gap-5 items-center justify-center">
      <a className="social-icons" target="_blank" href={instagram}>
        <Instagram />
      </a>
      <a className="social-icons" target="_blank" href={github}>
        <GitHub />
      </a>
      <a className="social-icons" target="_blank" href={linkedin}>
        <LinkedIn />
      </a>
      <a className="social-icons" target="_blank" href={whatsapp}>
        <WhatsAppIcon />
      </a>
    </div>
  );
};
