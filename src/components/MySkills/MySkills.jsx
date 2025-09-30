import { Heading } from "./../../ui/Heading";
import { skillsData } from "../../data/data";
import { Paragraph } from "./../../ui/Paragraph";
import { IconText } from "./IconText";
import Marquee from "react-fast-marquee";

function MySkills() {
  return (
    <section className="my-skills overflow-x-hidden py-15">
      <div className="slider-container">
        <div className="inner-container">
          <div className="heading-wrapper text-center">
            <Heading heading={skillsData.heading} />
            <Paragraph description={skillsData.subHeading} />
          </div>
          <Marquee
            direction="left"
            speed={100}
            loop={0}
            pauseOnHover={true}
            className="uppericons-slider py-10 flex flex-row justify-between items-center"
          >
            {skillsData.upperIcons.map((data, index) => {
              return <IconText data={data} key={index} />;
            })}
          </Marquee>
          <Marquee
            direction="right"
            speed={100}
            loop={0}
            pauseOnHover={true}
            className="lowericons-slider py-10 flex flex-row justify-between items-center w-full"
          >
            {skillsData.lowerIcons.map((data, index) => {
              return <IconText data={data} key={index} />;
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default MySkills;
