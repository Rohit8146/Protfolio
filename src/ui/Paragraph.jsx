import { fadeInAnimation } from "../utils/animations";
import { useEffect } from "react";

export const Paragraph = ({ description }) => {
  useEffect(() => {
    fadeInAnimation();
  }, []);
  return <p className="paragraph-text">{description}</p>;
};
