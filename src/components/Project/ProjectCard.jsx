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
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } inner_block  p-15 rounded-2xl flex gap-10 mb-15 shadow-lg inset-shadow-gray-100 `}
      >
        <div className="image__wrapper px-5 py-10 rounded-2xl w-[48%]">
          <ImageTag src={project.images} alt="project" />
        </div>
        <div className="content__wrapper content__wrapper flex flex-col gap-5 w-[48%]">
          <h3 className="project__title text-2xl font-bold">{project.title}</h3>
          <p className="project__description">{project.description}</p>
          <div className="tag__wrapper flex flex-wrap gap-3">
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
            className="project__link"
          >
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
