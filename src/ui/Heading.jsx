import { useContext, useEffect } from "react";
import { SplitTextAnimation } from "../utils/animations";
import { ProtfolioContext } from "./../context/ProtfolioContext";

export const Heading = ({ heading }) => {
  const { isLoading } = useContext(ProtfolioContext);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        SplitTextAnimation();
      }, 5000);
      return;
    } else {
      SplitTextAnimation();
    }
  }, []);
  return (
    <h2 className="heading text-3xl font-bold uppercase pb-3 max-md:text-2xl max-sm:text-xl">
      {heading}
    </h2>
  );
};
