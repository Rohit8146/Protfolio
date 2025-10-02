import { ProtfolioContext } from "../context/ProtfolioContext";
import { fadeInAnimation } from "../utils/animations";
import { useContext, useEffect } from "react";

export const Paragraph = ({ description }) => {
  const { isLoading } = useContext(ProtfolioContext);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        fadeInAnimation();
      }, 5000);
      return;
    } else {
      fadeInAnimation();
    }
  }, []);
  return <p className="paragraph-text">{description}</p>;
};
