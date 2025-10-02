export const ExperienceCard = ({ data }) => {
  return (
    <div className="card flex flex-row gap-10 shadow-lg inset-shadow-gray-100 p-15 rounded-2xl">
      <div className="company-name w-[25%]">
        <h3 className="text-2xl font-bold uppercase">{data.companyName}</h3>
        {/* <Heading heading={data.companyName} /> */}
      </div>
      <div className="key-points w-[60%]">
        <h3 className="text-1xl pb-3 font-bold">{data.Post}</h3>
        <ul className="px-5">
          {data.keyPoints.map((point, index) => {
            return (
              <li className="pb-1.5" key={index}>
                {point}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="duration w-[15%]">{data.duration}</div>
    </div>
  );
};
