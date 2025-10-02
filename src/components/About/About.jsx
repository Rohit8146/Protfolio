import { aboutData } from "../../data/data";
import { Heading } from "../../ui/Heading";
import ImageTag from "../../ui/ImageTag";
import { Paragraph } from "../../ui/Paragraph";

function About() {
  return (
    <section id="about" className="about-me py-10">
      <div className="container">
        <div className="inner_container">
          <div className="section-heading-wrapper py-10 text-center">
            <Heading heading={aboutData.sectionTitle} />
          </div>
          <div className="image-content flex justify-between items-center max-md:flex-col max-md:gap-10">
            <div className="image_card w-[40%] max-md:w-full max-md:text-center">
              <ImageTag src={aboutData.image} alt="me" />
            </div>
            <div className="content-side w-[55%] max-md:w-full max-md:text-left">
              <Heading heading={aboutData.heading} />
              <Paragraph description={aboutData.description} />
              <h3 className="pt-5 font-bold">Quick Facts About Me:</h3>
              <ul className="list-points pb-5 px-5">
                {aboutData.quickFacts.map((point, index) => {
                  return (
                    <li className="pt-2" key={index}>
                      {point}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
