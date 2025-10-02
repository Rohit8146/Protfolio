import { useContext } from "react";
import { ProtfolioContext } from "../../context/ProtfolioContext";
import ImageTag from "./../../ui/ImageTag";
import LaunchIcon from "@mui/icons-material/Launch";
export const ProjectCard = ({ project, index }) => {
  const { isDarkTheme } = useContext(ProtfolioContext);
  return (
    <div className="project-card">
      <div
        className={`${
          index % 2 === 0
            ? "flex-row max-md:flex-col"
            : "flex-row-reverse max-md:flex-col"
        } inner_block p-15 rounded-2xl flex gap-10 mb-15 shadow-lg inset-shadow-gray-100 max-md:py-8 max-md:px-3 max-md-gap-6`}
      >
        <div className="image__wrapper px-5 py-10 rounded-2xl w-[48%] max-md:w-full max-md:px-0 max-md:py-0 max-md:rounded-2xl">
          <ImageTag src={project.images} alt="project" />
        </div>
        <div className="content__wrapper content__wrapper flex flex-col gap-5 w-[48%] max-md:w-full max-md:items-center max-md:text-center max-md:gap-2">
          <h3 className="project__title text-2xl font-bold max-md:text-xl">
            {project.title}
          </h3>
          <p className="project__description max-md:text-left max-md:text-[14px]">
            {project.description}
          </p>
          <div className="tag__wrapper flex flex-wrap gap-3 max-md:py-3">
            {project.tag.map((tag, index) => (
              <span key={index} className="tag py-2 px-6 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project__link text-left w-full flex gap-3"
          >
            View Project
            {isDarkTheme ? (
              <LaunchIcon sx={{ color: "#fff" }} />
            ) : (
              <LaunchIcon sx={{ color: "#000" }} />
            )}
          </a>
        </div>
      </div>
    </div>
  );
};
