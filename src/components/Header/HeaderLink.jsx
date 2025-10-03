import { Link } from "react-scroll";

const HeaderLink = ({ data }) => {
  // console.log(data);
  return (
    <Link className="underline-hover-effect max-md:text-2xl max-md:font-black" to={data.link} smooth={true} duration={500}>
      {data.label}
    </Link>
  );
};

export default HeaderLink;
