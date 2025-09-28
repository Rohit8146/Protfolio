import { NavLink } from "react-router-dom";

const HeaderLink = ({ data }) => {
  // console.log(data);
  return (
    <NavLink className="underline-hover-effect" to={data.link}>
      {data.label}
    </NavLink>
  );
};

export default HeaderLink;
