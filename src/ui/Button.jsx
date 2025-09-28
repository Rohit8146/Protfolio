export const Button = ({ title, link }) => {
  return (
    <a href={link} className="btn text-center py-2 w-[150px]">
      {title}
    </a>
  );
};
