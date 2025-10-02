import { Link } from "react-router-dom";

export const TextLink = ({ link, title }) => {
  return (
    <Link
      className="underline-hover-effect w-fit text-center mx-auto text-2xl text-600 max-md:text-xl max-sm:text-[18px]"
      to={link}
    >
      {title}
    </Link>
  );
};
