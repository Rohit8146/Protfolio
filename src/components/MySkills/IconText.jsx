import ImageTag from "./../../ui/ImageTag";
export const IconText = ({ data }) => {
  console.log(data.text);
  return (
    <div className="icon-text-wrapper flex flex-col items-center justify-center px-10 w-[160px]">
      <div className="image--wrapper w-[80%]">
        <ImageTag src={data.image} alt={data.text} />
      </div>
      <h3 className="font-bold text-0xl pt-5 text-center">{data.text}</h3>
    </div>
  );
};
