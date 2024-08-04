import Timeline from "./Timeline";

const sampleData = [
  {
    date: "Feb 2022",
    title: "Title 1",
    company: "Company 1",
    description: "Lorem ipsum asdagdafdasdasdda",
  },
  {
    date: "Feb 2022",
    title: "Title 1",
    company: "Company 1",
    description: "Lorem ipsum asdagdafdasdasdda",
  },
  {
    date: "Feb 2022",
    title: "Title 1",
    company: "Company 1",
    description: "Lorem ipsum asdagdafdasdasdda",
  },
];

const MyExperience = () => {
  return (
    <div className="relative mt-5 py-5 px-10 md:px-[30vw] bg-grayish-blue">
      <h1 className="font-bold text-base -top-3.5 md:text-3xl absolute md:-top-5 md:left-[350px]">
        Experience
      </h1>
      <Timeline events={sampleData} />
    </div>
  );
};

export default MyExperience;
