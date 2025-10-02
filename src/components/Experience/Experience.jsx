import { Heading } from "../../ui/Heading";
import { MyExperience } from "../../data/data";
import { Paragraph } from "../../ui/Paragraph";
import { ExperienceCard } from "./ExperienceCard";
import { experienceCardAnimation } from "../../utils/animations";
import { useEffect } from "react";
function Experience() {
  useEffect(() => {
    experienceCardAnimation();
  }, []);
  return (
    <section id="experience" className="experience py-20">
      <div className="container">
        <div className="heading-wrapper flex flex-col gap-1 pb-15 justify-center items-center">
          <Heading heading={MyExperience.heading} />
          <Paragraph description={MyExperience.para} />
        </div>
        <div className="card-wrapper flex flex-col gap-8">
          {MyExperience.experienceData.map((data, index) => {
            return <ExperienceCard data={data} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
