export const ExperienceCard = ({ data }) => {
  return (
    <div className="card flex flex-row gap-10 shadow-lg inset-shadow-gray-100 p-15 rounded-2xl max-md:flex-col max-md:gap-6 max-md:p-6 max-md:items-center max-md:justify-center">
      <div className="company-name w-[25%] max-md:w-[100%]">
        <h3 className="text-2xl font-bold uppercase max-md:text-center">
          {data.companyName}
        </h3>
        {/* <Heading heading={data.companyName} /> */}
      </div>
      <div className="key-points w-[60%] max-md:w-[100%] max-md:text-center">
        <h3 className="text-1xl pb-3 font-bold">{data.Post}</h3>
        <ul className="px-5 max-md:text-left">
          {data.keyPoints.map((point, index) => {
            return (
              <li className="pb-1.5" key={index}>
                {point}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="duration w-[15%] max-md:w-[100%] max-md:text-center">
        {data.duration}
      </div>
    </div>
  );
};
