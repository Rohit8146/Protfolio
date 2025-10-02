import { footerData } from "../../data/data";
import { TextLink } from "../../ui/TextLink";
import { Heading } from "./../../ui/Heading";
import { Paragraph } from "./../../ui/Paragraph";
import { SocialLinks } from "./SocialLink";
function Footer() {
  return (
    <footer id="contact" className="pt-10">
      <div className="footer-container">
        <div className="inner_container text-center">
          <Heading heading={footerData.heading} />
          <Paragraph description={footerData.description} />
          <div className="contact-info flex flex-col gap-3 py-10">
            <TextLink
              link={`mailto:${footerData.email}`}
              title={footerData.email}
            />
            <TextLink
              link={`telto:${footerData.number}`}
              title={footerData.number}
            />
          </div>
          <div className="social flex flex-col gap-2">
            <Paragraph description={footerData.subHeading} />
            <SocialLinks
              instagram={footerData.instagram}
              github={footerData.github}
              linkedin={footerData.linkedin}
            />
          </div>
        </div>
      </div>
      <div className="copyright-content py-5 text-center mt-7">
        <Paragraph description={footerData.copyright} />
      </div>
    </footer>
  );
}

export default Footer;
