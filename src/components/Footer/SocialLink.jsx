import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

export const SocialLinks = ({ instagram, github, linkedin }) => {
  return (
    <div className="flex gap-5 items-center justify-center">
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
