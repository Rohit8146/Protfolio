import { useEffect } from "react";
import { SplitTextAnimation } from "../utils/animations";

export const Heading = ({ heading }) => {
  useEffect(() => {
    SplitTextAnimation();
  }, []);
  return <h2 className="heading text-3xl font-bold uppercase pb-3">{heading}</h2>;
};
