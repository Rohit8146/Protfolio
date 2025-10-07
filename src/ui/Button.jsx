export const Button = ({ title, link, targetBlank }) => {
  return targetBlank ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn text-center py-2 w-[150px]">
      {title}
    </a>
  ) : (
    <a href={link} className="btn text-center py-2 w-[150px]">
      {title}
    </a>
  );
};
