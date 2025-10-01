import { projcetData } from "../../data/data";
import { Paragraph } from "../../ui/Paragraph";
import { Heading } from "./../../ui/Heading";
import { ProjectCard } from "./ProjectCard";

function Project() {
  return (
    <section className="project py-20">
      <div className="container">
        <div className="heading-wrapper flex flex-col items-center mb-15 text-center">
          <Heading heading={projcetData.heading} />
          <Paragraph description={projcetData.para} />
        </div>
        <div className="project-wrapper">
          {projcetData.projects.map((item, index) => (
            <ProjectCard key={index} project={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
